import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import NosPacks from './pages/NosPacks'
import APropos from './pages/APropos'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"          element={<Accueil />} />
          <Route path="/nos-packs" element={<NosPacks />} />
          <Route path="/a-propos"  element={<APropos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}