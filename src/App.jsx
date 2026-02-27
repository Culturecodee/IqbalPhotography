import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ScrollToTop from './components/sections/ScrollToTop';
import ButtonWa from './components/ButtonWa/ButtonWa'
import Footer from './components/sections/Footer'
// import page lainnya...

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact/>} />
        {/* Tambahkan rute lain di sini */}
      </Routes>
      <ButtonWa/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App