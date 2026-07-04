import { useState } from "react";

const SLIDES =[
    { avant: '/images/avant-1.jpg', apres: '/images/apres-1.jpg'},
    { avant: '/images/avant-2.jpg', apres: '/images/apres-2.jpg'},
    { avant: '/images/avant-3.jpg', apres: '/images/apres-3.jpg'},
]

export default function CarousselAvantApres() {
    const [idx, setIdx] = useState(0)

    const slide = SLIDES[idx]

    return (
        <section style={{padding: '4rem 1.5rem', background: 'var(--creme)'}}>
          <div className="container">
            <p style={{ color: 'var(--rose)', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform:'uppercase', marginBottom: '0.4rem'}}>
                AVANT . APRES
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.5rem'}}>
                Des resultats visibles
            </h2>
            <p style={{ color: 'var(--brun-mid)', marginBottom: '2rem'}}>
                Quelques semaines suffisent.Faites defiler nos resultsts reels.
            </p>
             
             {/*photo avant apres*/}
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: 'clamp(260px, 45vw, 420px)', borderRadius: '16px', overflow: 'hidden'}}>
                <div style={{ position: 'relative', background: 'var(--creme2)'}}>
                    <img src={slide.avant} alt="Avant" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0}}  onError={e => {e.target.style.opacity = '0'}}/>
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700',letterSpacing: '0.08em'}}>
                        AVANT 
                    </span>
                </div>
                <div style={{ position: 'relative', background: 'var(--creme2)'}}>
                    <img src={slide.apres} alt="Apres" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0}}  onError={e => {e.target.style.opacity = '0'}}/>
                    <span style={{ position: 'absolute', top: '14px', left: '14px', background: 'var(--rose)', color: '#fff', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: '700'}}>
                       APRES 
                    </span>
                </div>    
             </div>

             	<div style={{	display:'flex',	justifyContent:	'center',gap:'8px',	marginTop:'1.5rem'}}>
						{SLIDES.map((_,	i)	=>	(
							<button	key={i}	onClick={()	=>	setIdx(i)}	aria-label={`Slide	${i+1}`}
								style={{
									width:	i	===	idx	?'28px'	:'8px',	height:	'8px',
									borderRadius:'100px',
									background:	i===idx	?'var(--brun)':'#C4B0A0',
									border:	'none',	padding: 0,	transition:	'all 0.3s'}}	/>
							))}
				</div>
		</div>
	</section>
	)
}
