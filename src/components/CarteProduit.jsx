export default function CarteProduit({ produit }) {
  return (
    <div style={{
      background: 'var(--blanc)',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: 'var(--shadow)',
    }}>
      {/* Zone image */}
      <div style={{ position: 'relative', height: '200px', background: 'var(--creme2)' }}>
        {produit.categorie && (
          <span style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'var(--blanc)', color: 'var(--rose)',
            fontSize: '0.65rem', fontWeight: '700',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 10px', borderRadius: '100px',
            zIndex: 1,
          }}>
            {produit.categorie}
          </span>
        )}
        <img
          src={produit.image}
          alt={produit.nom}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Infos */}
      <div style={{ padding: '1rem 1.1rem' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
          {produit.nom}
        </h3>
        <p style={{ fontWeight: '600', fontSize: '1rem', color: 'var(--brun)' }}>
          {produit.prix.toLocaleString('fr-FR')} FCFA
        </p>
      </div>
    </div>
  )
}