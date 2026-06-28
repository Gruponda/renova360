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
      <header className="relative z-50">

        {/* TOP BAR */}
        <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-sm py-2 relative z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

            <div className="flex md:hidden justify-between items-center gap-2">
              <a href="tel:+34664716108" className="flex items-center gap-1 whitespace-nowrap">
                <Phone className="h-3 w-3 text-brand-500" />
                <span>+34 664 716 108</span>
              </a>

              <a href="mailto:info.gruponda@gmail.com" className="flex items-center gap-1 whitespace-nowrap">
                <Mail className="h-3 w-3 text-brand-500" />
                <span>info@gruponda.com</span>
              </a>

              <div className="flex items-center gap-1 whitespace-nowrap">
                <Clock className="h-3 w-3 text-brand-500" />
                <span>L-V 8-19h</span>
              </div>
            </div>

            <div className="hidden md:flex justify-between items-center">
              <div className="flex space-x-6">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-brand-500" />
                  <a href="tel:+34664716108">+34 664 716 108</a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-brand-500" />
                  <a href="mailto:info@gruponda.com">info@gruponda.com</a>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-brand-500" />
                <span>Lunes - Viernes: 8:00 - 18:00</span>
              </div>
            </div>

          </div>
        </div>

        {/* NAVBAR */}
        <nav
          className={`fixed w-full z-40 transition-all duration-300 left-0 ${
            isScrolled
              ? 'bg-white shadow-md py-2 top-0'
              : 'bg-white/95 py-4 top-[28px] sm:top-[32px]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex justify-between items-center">

              <Link to="/" className="flex items-center gap-1">
                <img src="/logo.png" className="w-[70px] h-[70px]" />
                <div className="flex flex-col">
                  <div className="text-[34px] font-genos text-slate-900 leading-none">
                    GRUPO <span className="text-brand-500">NDA</span>
                  </div>
                  <span className="text-[12px] -mt-[6px]">
                    Renova360
                  </span>
                </div>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <a href="/#inicio">Inicio</a>
                <Link to="/nosotros">Nosotros</Link>
                <Link to="/servicios">Servicios</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto" className="bg-brand-500 text-white px-6 py-2">
                  Contacto
                </Link>
              </div>

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

              <Link
                to="/nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2"
              >
                Nosotros
              </Link>

              <Link
                to="/servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2"
              >
                Servicios
              </Link>

              <Link
                to="/proyectos"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2"
              >
                Proyectos
              </Link>

              <Link
                to="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 text-brand-500"
              >
                Contacto
              </Link>

            </div>
          )}
        </nav>

      </header>
    </>
  );
}