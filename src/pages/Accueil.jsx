import { Link } from 'react-router-dom'
import CarteProduit from '../components/CarteProduit'
import { produits } from '../data/produits'
import CarousselAvantApres from '../components/CarousselAvantApres'
// Les autres imports seront ajoutés en J5

export default function Accueil() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(160deg, var(--creme) 0%, var(--creme2) 100%)',
        padding: 'clamp(3rem, 8vw, 6rem) 1.5rem',
        textAlign: 'center',
      }}>
        <div className="container">
          <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            SOINS NATURELS · CAMEROUN
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', lineHeight: 1.15, maxWidth: '680px', margin: '0 auto 1.5rem' }}>
            La beauté naturelle,{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>portée par une vision.</span>
          </h1>
          <p style={{ color: 'var(--brun-mid)', maxWidth: '480px', margin: '0 auto 2rem', fontSize: '1rem' }}>
            Mayé, c'est l'histoire d'une recette familiale transmise de mère en fille
            à Douala, transformée aujourd'hui en une marque qui célèbre la beauté
            de toutes les peaux africaines.
          </p>
          <Link to="/nos-packs" style={{
            display: 'inline-block',
            background: 'var(--brun)', color: 'var(--creme)',
            padding: '0.9rem 2.25rem', borderRadius: '100px',
            fontWeight: '500', fontSize: '0.95rem',
          }}>
            Trouver mon pack →
          </Link>
        </div>
      </section>

      {/* ══ CATALOGUE ═════════════════════════════════════ */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container">
          <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
            NOS PRODUITS PHARES
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}>Le catalogue Mayé</h2>
            <p style={{ color: 'var(--brun-mid)', maxWidth: '300px', fontSize: '0.9rem' }}>
              Une sélection courte et essentielle, choisie pour la qualité de chaque ingrédient.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1rem',
          }}>
            {produits.map(p => <CarteProduit key={p.id} produit={p} />)}
          </div>
        </div>
      </section>

      {/* ══ BANNIÈRE CTA FONCÉE ════════════════════════════ */}
      <CarousselAvantApres />
<section style={{ padding: '2rem 1.5rem 4rem' }}>
  <div className="container">
    <div style={{
      background: 'var(--brun)',
      borderRadius: '20px',
      padding: 'clamp(2rem, 5vw, 3rem)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1.5rem',
    }}>
      <div>
        <p style={{ color: 'var(--dore)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          ROUTINE SUR MESURE
        </p>
        <h2 style={{ color: 'var(--creme)', fontSize: 'clamp(1.4rem, 4vw, 2rem)', marginBottom: '0.75rem' }}>
          Trouvez le pack{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--dore)' }}>fait pour votre peau</span>
        </h2>
        <p style={{ color: '#A09080', maxWidth: '380px', fontSize: '0.9rem' }}>
          Répondez à 2 questions et obtenez des packs recommandés,
          à commander directement sur WhatsApp.
        </p>
      </div>
      <Link to="/nos-packs" style={{
        background: 'var(--rose)', color: '#fff',
        padding: '0.9rem 2rem', borderRadius: '100px',
        fontWeight: '600', whiteSpace: 'nowrap',
      }}>
        Faire le diagnostic →
      </Link>
    </div>
  </div>
  </section>
    </>
  )
}