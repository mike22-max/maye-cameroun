import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

const LIENS = [
    {nom: 'Accueil', chemin: '/'},
    {nom: 'Nos packs', chemin: '/nos-packs'},
    {nom: 'A propos', chemin: '/a-propos'},
]

export default function Navbar(){
    const [ouvert, setOuvert] = useState(false)
    const { pathname } = useLocation()

    const styles = {
        nav:{
            position: 'sticky', top: 0, zIndex: 100,
            background: 'var(--creme)', borderBottom: '1px solid var(--border)',
            padding: '0 1.5rem', display:'flex',
            justifyContent : 'space-between', alignItems:'center',
            height: '64px',
        },
        logo: {
            fontFamily: 'Playfair Display, serif',
            fontSize: '1.4rem', fontStyle: 'italic',
            color: 'var(--brun)', display: 'flex',
            alignItems: 'baseLine', gap: '6px',
            
        },
        logoSub:{
            fontSize: '0.6rem', letterSpacing: '0.15rem',
            color: 'var(--brun-mid)',textTransform: 'uppercase',
            fontFamily: 'Inter, sans-serif',
        },
        btnCommander: {
            background: 'var(--brun)', color: 'var(--creme)',
            padding: '0.5rem 1.25rem', borderRadius: '100px',
            fontSize: '0.88rem', fontWeight: '500',
        },
        mobileMenu: {
            position: 'absolute', top:'64px', left: 0, right: 0,
            background: 'var(--creme)', borderBottom: '1px solid var(--border)',
            padding: '1.25rem 1.5rem', display: 'flex',
            flexDirection: 'column', gap: '1rem',
        },
    }

    return(
        <nav style={styles.nav}>
            {/* Logo */}
            <Link to="/" style={styles.logo}>
                 <span>Maye</span>
                 <span style={styles.logoSub}>Cameroun</span>
            </Link>

            {/* Desktop nav */}
            <div className="only-desktop"
                 style={{ display: 'flex', alignItems: 'center', gap: '2rem'}}>
                    {LIENS.map(l => (
                        <Link key={l.chemin} to={l.chemin} style={{
                            fontSize: '0.9rem',
                            color: pathname === l.chemin ? '600' : '400',
                    ))}
                    <Link to="/nos-packs" style={styles.btnCommander}>Commander</Link>
            </div>

            {/*mobile*/}
            <button className="only-mobile"
                    onClick={() => setOuvert(!ouvert)}
                    style={{background: 'none', border: 'none', padding: '8px'}}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                    width: '22px', height: '2px',
                    background: 'var(--brun)',
                    marginBottom: i < 2 ? '5px' : '0',
                }}/>
              ))}      
            </button>

             {/*menu mobile deroulant*/}    
             {ouvert && (
                <div style={styles.mobileMenu}>
                    {LIENS.map(l => (
                        <Link key={l.chemin} to={l.chemin}
                              onClick={() => setOuvert(false)}
                              style={{fontSize: '1rem', color: 'var(--brun)'}}>
                                {l.nom}
                        </Link>
                    ))}
                    <Link to="/nos-packs" onClick={() => setOuvert(false)}
                          style= {{ ...styles.btnCommander, textAlign: 'center'}}>
                            Commander
                    </Link>
                </div>
             )}
        </nav>
    )
}