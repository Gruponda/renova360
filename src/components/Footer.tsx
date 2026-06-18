import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="https://drive.google.com/thumbnail?id=1qiWs3d9itDihZY39vvxXmaaWbgDxaaUc&sz=w400" alt="Grupo NDA Logo" className="h-28 w-auto object-contain" />
              <div className="flex flex-col">
                <div className="text-3xl font-normal font-genos text-white leading-none">
                  <span className="tracking-tight">GRUPO</span>
                  <span className="text-brand-500 ml-1">NDA</span>
                </div>
                <span className="text-[15px] font-bold font-saira text-slate-400 mt-0.5 tracking-wide">Renova360</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 line-clamp-4">
              Especialistas en construcción, obra civil y rehabilitación de edificios. Más de 20 años ofreciendo garantía, calidad y compromiso en cada proyecto que emprendemos en España.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all text-slate-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all text-slate-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all text-slate-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-sm bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all text-slate-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li>
                <a href="/#inicio" className="text-slate-400 hover:text-brand-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Inicio
                </a>
              </li>
              <li>
                <Link to="/nosotros" className="text-slate-400 hover:text-brand-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-slate-400 hover:text-brand-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-slate-400 hover:text-brand-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Portafolio
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-slate-400 hover:text-brand-500 transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li>
                <span className="text-slate-400 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Construcción de Obra Nueva
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Rehabilitación de Fachadas
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Reformas Integrales
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Infraestructura Civil
                </span>
              </li>
              <li>
                <span className="text-slate-400 flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 text-brand-500" />
                  Mantenimiento de Edificios
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Boletín Informativo</h4>
            <p className="text-slate-400 mb-4">
              Suscríbete a nuestro boletín para recibir las últimas noticias y actualizaciones sobre nuestros proyectos.
            </p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-500 w-full"
              />
              <button 
                type="button"
                className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-sm transition-colors w-full"
              >
                Suscribirse
              </button>
            </form>
          </div>

        </div>

        {/* Copyright border */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center px-2">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Grupo NDA Construcción y Rehabilitación. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500">
            <a href="/privacidad" className="hover:text-brand-500 transition-colors">Política de Privacidad</a>
            <a href="/terminos" className="hover:text-brand-500 transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
