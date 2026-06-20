import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-[90%] p-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Configuración de Cookies
        </h2>

        <p className="text-slate-700 mb-6">
          Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico
          de nuestro sitio web y optimizar nuestros servicios. Puedes aceptar todas las cookies
          o rechazarlas.
        </p>

        <p className="text-sm text-slate-600 mb-6">
          Consulta nuestra{' '}
          <Link
            to="/cookies"
            className="text-brand-500 hover:underline"
          >
            Política de Cookies
          </Link>{' '}
          para obtener más información.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={rejectCookies}
            className="px-5 py-3 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
          >
            Rechazar
          </button>

          <button
            onClick={acceptCookies}
            className="px-5 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition"
          >
            Aceptar Cookies
          </button>
        </div>
      </div>
    </div>
  );
}