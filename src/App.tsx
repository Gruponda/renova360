import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import NosotrosPage from './pages/NosotrosPage';
import ServiciosPage from './pages/ServiciosPage';
import ProyectosPage from './pages/ProyectosPage';
import ContactoPage from './pages/ContactoPage';
import TerminosPage from './pages/TerminosPage';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/terminos" element={<TerminosPage />} />
          <Route path="/privacidad" element={<PoliticaPrivacidadPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}