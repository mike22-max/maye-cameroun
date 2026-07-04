export default function CartePack({ pack, selectionne, onToggle }) {
  return (
    <div style={{
      background: 'var(--blanc)',
      borderRadius: '16px',
      overflow: 'hidden',
      border: selectionne ? '2px solid var(--brun)' : '1.5px solid var(--border)',
      boxShadow: selectionne ? 'var(--shadow)' : 'none',
      transition: 'all 0.2s',
    }}>
      {/* Image */}
      <div style={{ height: '140px', background: 'var(--creme2)' }}>
        <img src={pack.image} alt={pack.nom}
             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
             onError={e => { e.target.style.display = 'none' }} />
      </div>

      {/* Contenu */}
      <div style={{ padding: '1rem 1.1rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{pack.nom}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--brun-mid)', marginBottom: '1rem', lineHeight: 1.6 }}>
          {pack.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: '600', fontSize: '1rem' }}>
            {pack.prix.toLocaleString('fr-FR')} FCFA
          </span>
          <button
            onClick={() => onToggle(pack)}
            style={{
              background: selectionne ? 'var(--brun)' : 'transparent',
              color: selectionne ? 'var(--creme)' : 'var(--brun)',
              border: '1.5px solid var(--brun)',
              borderRadius: '100px',
              padding: '0.45rem 1.1rem',
              fontSize: '0.85rem', fontWeight: '500',
              transition: 'all 0.2s',
            }}
          >
            {selectionne ? '✓ Ajouté' : '+ Ajouter'}
          </button>
        </div>
      </div>
    </div>
  )
}