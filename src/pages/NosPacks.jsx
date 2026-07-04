import BarrePanier from '../components/BarrePanier'
import { useState, useMemo } from 'react'
import PaletteTeinte from '../components/PaletteTeinte'
import CartePack    from '../components/CartePack'
import { packs }  from '../data/packs'

// ⚠️ Remplace par le vrai numéro WhatsApp avant livraison
const NUMERO_WA = '237600000000'  // Format international sans +

export default function NosPacks() {
  const [teinte,  setTeinte]  = useState(null)
  const [boutons, setBoutons] = useState(null)
  const [panier,  setPanier]  = useState([])

  /**
   * packsFiltres : recalculé seulement quand teinte ou boutons change.
   * Si une des deux réponses est null → on n'affiche rien.
   */
  const packsFiltres = useMemo(() => {
    if (teinte === null || boutons === null) return []
    return packs.filter(p =>
      p.teintes.includes(teinte) && p.boutons === boutons
    )
  }, [teinte, boutons])

  const togglePack = (pack) => {
    setPanier(prev =>
      prev.find(p => p.id === pack.id)
        ? prev.filter(p => p.id !== pack.id)   // retirer
        : [...prev, pack]                          // ajouter
    )
  }

  const commander = () => {
    const liste = panier
      .map(p => `• ${p.nom} — ${p.prix.toLocaleString('fr-FR')} FCFA`)
      .join('\n')
    const total = panier.reduce((s, p) => s + p.prix, 0)
    const msg = encodeURIComponent(
      `Bonjour Mayé 🌿\n\nJe souhaite commander :\n${liste}\n\n*Total : ${total.toLocaleString('fr-FR')} FCFA*\n\nMerci !`
    )
    window.open(`https://wa.me/${NUMERO_WA}?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════ */}
      <section style={{ padding: '3rem 1.5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>DIAGNOSTIC PERSONNALISÉ</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '0.75rem' }}>Trouvez votre routine Mayé</h1>
          <p style={{ color: 'var(--brun-mid)', maxWidth: '460px', margin: '0 auto' }}>
            Répondez à 2 questions simples. Nous vous proposons les packs les plus adaptés à votre peau.
          </p>
        </div>
      </section>

      {/* ══ DIAGNOSTIC ══════════════════════════════════ */}
      <section style={{ padding: '2rem 1.5rem' }}>
        <div className="container">

          <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--rose)', fontFamily: 'Inter' }}>01</span>
              Quelle est votre carnation ?
            </h2>
            <PaletteTeinte selection={teinte} onSelect={setTeinte} />
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ color: 'var(--rose)', fontFamily: 'Inter' }}>02</span>
              Votre peau a-t-elle tendance à avoir des boutons ?
            </h2>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[{ label: 'Oui', val: true }, { label: 'Non', val: false }].map(opt => (
                <button key={opt.label} onClick={() => setBoutons(opt.val)}
                        style={{
                          padding: '0.75rem 2.25rem', borderRadius: '100px',
                          border: boutons === opt.val ? '2px solid var(--brun)' : '1.5px solid var(--border)',
                          background: boutons === opt.val ? 'var(--brun)' : 'var(--blanc)',
                          color: boutons === opt.val ? 'var(--creme)' : 'var(--brun)',
                          fontSize: '1rem', fontWeight: '500', transition: 'all 0.2s',
                        }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* ══ RÉSULTATS ════════════════════════════════════ */}
          <div>
            <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>VOS RECOMMANDATIONS</p>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Packs sur mesure</h2>

            {/* Placeholder si diagnostic incomplet */}
            {(teinte === null || boutons === null) && (
              <div style={{ background: 'var(--blanc)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: 'var(--brun-mid)' }}>
                Répondez aux deux questions pour découvrir vos packs recommandés.
              </div>
            )}

            {/* Aucun résultat */}
            {teinte !== null && boutons !== null && packsFiltres.length === 0 && (
              <div style={{ background: 'var(--blanc)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '3rem', textAlign: 'center', color: 'var(--brun-mid)' }}>
                Aucun pack spécifique pour cette combinaison.
                Contactez-nous sur WhatsApp pour un conseil personnalisé. 💬
              </div>
            )}

            {/* Grille des packs filtrés */}
            {packsFiltres.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '1rem',
                paddingBottom: '7rem', /* espace pour la barre flottante */
              }}>
                {packsFiltres.map(pack => (
                  <CartePack
                    key={pack.id}
                    pack={pack}
                    selectionne={!!panier.find(p => p.id === pack.id)}
                    onToggle={togglePack}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      </section>

      <BarrePanier panier={panier} onCommander={commander} />
    </>
  )
}