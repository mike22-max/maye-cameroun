import { Link } from 'react-router-dom'

const WHATSAPP = '+237 6 00 00 00 00'

function Footer() {
    return(
        <footer style={{
            background: 'var(--creme)',
            borderTop: '1px solid var(--border)',
            padding: '3rem 1.5rem 2rem',
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2rem', marginBottom: '2rem',
                }}>
                    <div>
                        <p style={{fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.3rem', marginBottom: '0.5rem'}}>Maye</p>
                        <p style={{ color: 'var(--brun-mid)', fontSize: '0.9rem'}}>
                           Soins	naturels	&	artisanaux,fabriqués	à	Douala	avec	amour.
                        </p>
                    </div>

                    <div>
                        <p style={{ fontSize: '0.7rem', letterSpacing: '0.12rem', textTransform: 'uppercase', color:
                           'var(--brun-mid)', marginBottom: '1rem'}}>NAVIGATION</p>
                             {[
                                    {nom: 'Accueil', chemin: '/'},
                                    {nom: 'Nos packs', chemin: '/nos-packs'},
                                    {nom: 'A propos', chemin: '/a-propos'},
                             ].map(l => {
                                <div key={l.chemin} style={{ marginBottom: '0.5rem'}}>
                                    <Link to={l.chemin} style={{ color: 'var(--brun)', fontSize: '0.95rem' }}>
                                    {l.nom}
                                    </Link>

                                </div>
                             })}
                    </div>
                    <div>
									<p	style={{	fontSize:	'0.7rem',	letterSpacing:	'0.12em',	textTransform:	'uppercase',	color:	'var(--brun-mid)',	marginBottom:	'1rem'	}}>CONTACT</p>
									<p	style={{	color:	'var(--wa)',	fontWeight:	'500',	marginBottom:	'0.5rem'	}}>WhatsApp	:	{WHATSAPP}</p>
									<p	style={{	color:	'var(--brun-mid)'	}}>Douala,	Cameroun</p>
					</div>

                    <div style={{borderTop: '1px solid var(--border)', paddingTop: '1.5rem', textAlign: 'center', color: 'var(--brun-mid)', fontSize: '0.82rem'}}>
                        		©	{new	Date().getFullYear()}	Mayé	Cameroun.	Tous	droits	réservés.
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer