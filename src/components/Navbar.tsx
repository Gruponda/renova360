import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-slate-900 text-slate-300 py-2 text-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-brand-500" />
              <a href="tel:+34664716108" className="hover:text-brand-500 transition-colors">+34 664 716 108</a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-brand-500" />
              <a href="mailto:info.gruponda@gmail.com" className="hover:text-brand-500 transition-colors">info.gruponda@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-brand-500" />
            <span>Lunes - Viernes: 8:00 - 18:00</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 md:top-0' : 'bg-white/95 py-4 md:top-[36px]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-1">
               <img
  src="/logo.png"
  alt="Grupo NDA Logo"
  className="w-[80px] h-[80px] object-contain"
/>
                <div className="flex flex-col">
                  <div className="text-[39px] font-normal font-genos text-slate-900 leading-none">
                    <span className="tracking-tight">GRUPO</span>
                    <span className="text-brand-500 ml-1">NDA</span>
                  </div>
                  <span className="text-[14px] pl-[2px] font-bold font-saira text-slate-700 -mt-[7px] tracking-wide">Renova360</span>
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#inicio" className="text-slate-900 hover:text-brand-500 font-medium transition-colors">Inicio</a>
              <Link to="/nosotros" className="text-slate-900 hover:text-brand-500 font-medium transition-colors">Nosotros</Link>
              <Link to="/servicios" className="text-slate-900 hover:text-brand-500 font-medium transition-colors">Servicios</Link>
              <Link to="/proyectos" className="text-slate-900 hover:text-brand-500 font-medium transition-colors">Proyectos</Link>
              <Link to="/contacto" className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-2 rounded-sm font-medium transition-colors">
                Contacto
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-900 hover:text-brand-500 focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/#inicio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:text-brand-500 hover:bg-slate-50">Inicio</a>
              <Link to="/nosotros" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:text-brand-500 hover:bg-slate-50">Nosotros</Link>
              <Link to="/servicios" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:text-brand-500 hover:bg-slate-50">Servicios</Link>
              <Link to="/proyectos" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-900 hover:text-brand-500 hover:bg-slate-50">Proyectos</Link>
              <Link to="/contacto" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-brand-500 hover:bg-slate-50">Contacto</Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
