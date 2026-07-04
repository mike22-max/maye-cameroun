export default function BarrePanier({ panier, onCommander }) {
  const total = panier.reduce((sum, p) => sum + p.prix, 0)
  const nb = panier.length

  if (nb === 0) return null  // invisible si panier vide

  return (
    <div role="region" aria-label="Panier" style={{
      position: 'fixed',
      bottom: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--brun)',
      color: 'var(--creme)',
      borderRadius: '100px',
      padding: '0.9rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '1.25rem',
      boxShadow: 'var(--shadow-lg)',
      zIndex: 200,
      whiteSpace: 'nowrap',
    }}>
      <div>
        <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>
          {total.toLocaleString('fr-FR')} FCFA
        </span>
        <span style={{ fontSize: '0.78rem', color: '#A09080', marginLeft: '0.5rem' }}>
          {nb} pack{nb > 1 ? 's' : ''}
        </span>
      </div>

      <button
        onClick={onCommander}
        style={{
          background: 'var(--wa)',
          color: '#fff',
          border: 'none',
          borderRadius: '100px',
          padding: '0.55rem 1.2rem',
          fontWeight: '600',
          fontSize: '0.88rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
        }}
      >
        📱 Commander sur WhatsApp
      </button>
    </div>
  )
}