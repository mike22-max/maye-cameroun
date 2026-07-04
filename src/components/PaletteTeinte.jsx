const LOTS = [
  {
    id: 'foncee',
    nom: 'Peau foncée',
    description: 'Carnations profondes, riches en mélanine.',
    couleurs: ['#2A1810', '#3D2317', '#4F2E1A'],
  },
  {
    id: 'intermediaire',
    nom: 'Peau intermédiaire',
    description: 'Carnations caramel à brun moyen.',
    couleurs: ['#6B4226', '#7D5230', '#93613A'],
  },
  {
    id: 'claire',
    nom: 'Peau claire',
    description: 'Carnations dorées à miel clair.',
    couleurs: ['#A9714A', '#BC8451', '#C9935E'],
  },
]

export default function PaletteTeinte({ selection, onSelect }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      {LOTS.map(lot => (
        <button
          key={lot.id}
          onClick={() => onSelect(lot.id)}
          aria-pressed={selection === lot.id}
          style={{
            background: 'var(--blanc)',
            border: selection === lot.id ? '2px solid var(--brun)' : '1.5px solid var(--border)',
            borderRadius: '16px',
            padding: '1.25rem',
            cursor: 'pointer',
            textAlign: 'left',
            boxShadow: selection === lot.id ? 'var(--shadow)' : 'none',
            transition: 'all 0.2s',
          }}
        >
          {/* Nuances empilées */}
          <div style={{ display: 'flex', marginBottom: '0.85rem' }}>
            {lot.couleurs.map((hex, i) => (
              <span key={i} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: hex,
                border: '2.5px solid var(--creme)',
                marginLeft: i > 0 ? '-10px' : '0',
                display: 'block',
              }} />
            ))}
          </div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', marginBottom: '0.25rem', fontSize: '0.98rem' }}>
            {lot.nom}
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--brun-mid)' }}>
            {lot.description}
          </p>
        </button>
      ))}
    </div>
  )
}