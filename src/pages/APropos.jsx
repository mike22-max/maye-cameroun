const VALEURS = [
  { icon: '🌿', titre: 'Naturel',    desc: '100% des ingrédients sont d\'origine naturelle et sourcés en Afrique Centrale.' },
  { icon: '✋', titre: 'Artisanal',  desc: 'Chaque produit est fabriqué à la main à Douala, en petite série, avec soin.' },
  { icon: '🌍', titre: 'Inclusif',   desc: 'Formulé spécifiquement pour toutes les nuances de peaux africaines.' },
  { icon: '💛', titre: 'Honnête',    desc: 'Pas de promesses excessives. Des résultats réels, sur du temps réel.' },
]

export default function APropos() {
  return (
    <>
      {/* ══ HERO ════════════════════════════════════════ */}
      <section style={{ padding: '4rem 1.5rem 2rem', textAlign: 'center' }}>
        <div className="container">
          <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>NOTRE HISTOIRE</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
            Une beauté,{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>portée par une vision.</span>
          </h1>
        </div>
      </section>

      {/* ══ HISTOIRE ════════════════════════════════════ */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>

            {/* Photo */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', height: 'clamp(280px, 45vw, 420px)', background: 'var(--creme2)' }}>
              <img src="/images/fondatrice.jpg" alt="Fondatrice Mayé"
                   style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }}
                   onError={e => { e.target.style.opacity = '0.1' }} />
            </div>

            {/* Texte */}
            <div>
              <p style={{ color: 'var(--rose)', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>L'ORIGINE</p>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Une beauté qui se transmet</h2>
              {[
                "Tout commence dans la cuisine de notre grand-mère, où elle fabriquait ses propres savons au beurre de karité et ses crèmes au baobab. Une beauté simple, naturelle, héritée.",
                "En 2022, nous avons décidé de partager cette routine au-delà du cercle familial. Mayé est née : une marque qui assume sa fabrication artisanale et qui parle vraiment aux peaux africaines, dans toute leur diversité.",
                "Chaque pot est encore aujourd'hui rempli à la main, à Douala, avec des ingrédients sourcés localement.",
              ].map((para, i) => (
                <p key={i} style={{ color: 'var(--brun-mid)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VALEURS ══════════════════════════════════════ */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--creme2)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Nos valeurs</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
            {VALEURS.map(v => (
              <div key={v.titre} style={{ background: 'var(--blanc)', borderRadius: '16px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{v.titre}</h3>
                <p style={{ color: 'var(--brun-mid)', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}