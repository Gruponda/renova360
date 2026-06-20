import { Menu, X, Phone, Mail, Clock } from 'lucide-react';
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
      {/* TOP BAR */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-sm py-2 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          {/* MOBILE: una sola línea */}
          <div className="flex md:hidden justify-between items-center gap-2">
            <a href="tel:+34664716108" className="flex items-center gap-1 hover:text-brand-500 whitespace-nowrap">
              <Phone className="h-3 w-3 text-brand-500" />
              <span>+34 664 716 108</span>
            </a>

            <a href="mailto:info.gruponda@gmail.com" className="flex items-center gap-1 hover:text-brand-500 whitespace-nowrap">
              <Mail className="h-3 w-3 text-brand-500" />
              <span>info@gruponda.com</span>
            </a>

            <div className="flex items-center gap-1 whitespace-nowrap">
              <Clock className="h-3 w-3 text-brand-500" />
              <span>L-V 8-18h</span>
            </div>
          </div>

          {/* DESKTOP / TABLET: layout original */}
          <div className="hidden md:flex justify-between items-center">
            
            {/* izquierda */}
            <div className="flex space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-500" />
                <a href="tel:+34664716108" className="hover:text-brand-500 transition-colors">
                  +34 664 716 108
                </a>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-brand-500" />
                <a href="mailto:info.gruponda@gmail.com" className="hover:text-brand-500 transition-colors">
                  info.gruponda@gmail.com
                </a>
              </div>
            </div>

            {/* derecha */}
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-brand-500" />
              <span>Lunes - Viernes: 8:00 - 18:00</span>
            </div>

          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2 md:top-0' : 'bg-white/95 py-4 md:top-[36px]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-1">
              <img
                src="/logo.png"
                alt="Grupo NDA Logo"
                className="w-[70px] h-[70px] object-contain"
              />
              <div className="flex flex-col">
                <div className="text-[34px] font-genos text-slate-900 leading-none">
                  GRUPO <span className="text-brand-500">NDA</span>
                </div>
                <span className="text-[12px] font-saira text-slate-700 -mt-[6px]">
                  Renova360
                </span>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#inicio" className="hover:text-brand-500">Inicio</a>
              <Link to="/nosotros">Nosotros</Link>
              <Link to="/servicios">Servicios</Link>
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/contacto" className="bg-brand-500 text-white px-6 py-2 rounded-sm">
                Contacto
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <Link to="/nosotros" className="block px-4 py-2">Nosotros</Link>
            <Link to="/servicios" className="block px-4 py-2">Servicios</Link>
            <Link to="/proyectos" className="block px-4 py-2">Proyectos</Link>
            <Link to="/contacto" className="block px-4 py-2 text-brand-500">Contacto</Link>
          </div>
        )}
      </nav>
    </>
  );
}