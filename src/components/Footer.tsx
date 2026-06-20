import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvx_upgoch3s8Te-W4Yg9eRLc2sc4vW9Mjq_LAz5xBibiO3GfLY-2WJgoau1Nqz_M/exec";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus("Introduce un email válido");
      return;
    }

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      setEmail("");
      setStatus("¡Suscripción realizada correctamente!");
    } catch (error) {
      setStatus("Error al suscribirse. Inténtalo de nuevo.");
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://drive.google.com/thumbnail?id=1qiWs3d9itDihZY39vvxXmaaWbgDxaaUc&sz=w400"
                alt="Grupo NDA Logo"
                className="h-28 w-auto object-contain"
              />

              <div className="flex flex-col">
                <div className="text-3xl font-normal font-genos text-white leading-none">
                  <span>GRUPO</span>
                  <span className="text-brand-500 ml-1">NDA</span>
                </div>
                <span className="text-[15px] font-bold font-saira text-slate-400 mt-0.5 tracking-wide">
                  Renova360
                </span>
              </div>
            </div>

            <p className="text-slate-400 mb-6">
              Especialistas en construcción, obra civil y rehabilitación de edificios en España.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-900 hover:bg-brand-500 rounded-sm">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-900 hover:bg-brand-500 rounded-sm">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-900 hover:bg-brand-500 rounded-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center bg-slate-900 hover:bg-brand-500 rounded-sm">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Enlaces</h4>
            <ul className="space-y-4">

              <li>
                <Link to="/nosotros" className="flex items-center text-slate-400 hover:text-brand-500">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Nosotros
                </Link>
              </li>

              <li>
                <Link to="/servicios" className="flex items-center text-slate-400 hover:text-brand-500">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Servicios
                </Link>
              </li>

              <li>
                <Link to="/proyectos" className="flex items-center text-slate-400 hover:text-brand-500">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Proyectos
                </Link>
              </li>

              <li>
                <Link to="/contacto" className="flex items-center text-slate-400 hover:text-brand-500">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contacto
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Servicios</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Construcción</li>
              <li>Reformas Integrales</li>
              <li>Rehabilitación</li>
              <li>Obra Civil</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-2">
              Suscríbete
            </h4>

            <p className="text-slate-400 text-sm mb-4">
              Recibe novedades, proyectos recientes, consejos de construcción y actualizaciones de Grupo NDA directamente en tu correo.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-brand-500 w-full"
              />

              <button
                type="submit"
                className="bg-brand-500 hover:bg-brand-600 text-white font-bold py-3 px-4 rounded-sm"
              >
                Suscribirse
              </button>

              {status && (
                <p className="text-sm text-slate-400 mt-1">{status}</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Grupo NDA. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacidad" className="hover:text-brand-500">Privacidad</Link>
            <Link to="/cookies" className="hover:text-brand-500">Cookies</Link>
            <Link to="/terminos" className="hover:text-brand-500">Términos</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}