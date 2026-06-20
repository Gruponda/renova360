export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-55 px-6">
      <div className="max-w-4xl mx-auto text-slate-800">

        <h1 className="text-4xl font-bold mb-6">
          Política de Cookies
        </h1>

        <p className="mb-6 text-sm text-slate-500">
          Última actualización: 20 de junio de 2026
        </p>

        <p className="mb-6">
          Esta Política de Cookies explica qué son las cookies y cómo las utiliza
          <strong> Grupo NDA</strong> en su sitio web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. ¿Qué son las cookies?
        </h2>

        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
          cuando visitas una página web. Permiten recordar información sobre tu visita
          para mejorar la experiencia de navegación.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Tipos de cookies utilizadas
        </h2>

        <p className="mb-4">
          Este sitio web puede utilizar cookies técnicas necesarias para el correcto
          funcionamiento de la página, así como cookies analíticas destinadas a mejorar
          nuestros servicios mediante el análisis del uso de la web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Gestión de cookies
        </h2>

        <p className="mb-4">
          Puedes configurar tu navegador para aceptar, bloquear o eliminar las cookies
          instaladas en tu dispositivo en cualquier momento.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Cookies de terceros
        </h2>

        <p className="mb-4">
          Algunas funcionalidades del sitio web pueden utilizar servicios de terceros
          que instalan sus propias cookies para ofrecer estadísticas o mejorar la
          experiencia del usuario.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Actualización de la política
        </h2>

        <p className="mb-4">
          Grupo NDA se reserva el derecho de modificar esta Política de Cookies para
          adaptarla a cambios legislativos o técnicos.
        </p>

        <p className="mt-10 mb-16 text-sm text-slate-500">
          © {new Date().getFullYear()} Grupo NDA. Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
}