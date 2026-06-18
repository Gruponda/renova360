export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-55 px-6">
      <div className="max-w-4xl mx-auto text-slate-800">

        <h1 className="text-4xl font-bold mb-6">
          Política de Privacidad
        </h1>

        <p className="mb-6 text-sm text-slate-500">
          Última actualización: 18 de junio de 2026
        </p>

        <p className="mb-6">
          En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018,
          Grupo NDA informa a los usuarios de esta web sobre el tratamiento de sus datos personales.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Responsable del tratamiento
        </h2>
        <p className="mb-4">
          Grupo NDA, empresa de reformas y construcción con sede en Madrid, es responsable del tratamiento de los datos personales recogidos a través de esta web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Finalidad del tratamiento
        </h2>
        <p className="mb-4">
          Los datos personales se utilizan para gestionar consultas realizadas a través del formulario de contacto,
          así como para la prestación de servicios solicitados.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Legitimación
        </h2>
        <p className="mb-4">
          La base legal para el tratamiento de los datos es el consentimiento del usuario al enviar sus datos a través de los formularios de la web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Conservación de los datos
        </h2>
        <p className="mb-4">
          Los datos se conservarán únicamente durante el tiempo necesario para atender la solicitud del usuario o mientras exista una relación comercial.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Comunicación de datos
        </h2>
        <p className="mb-4">
          No se cederán datos a terceros, salvo obligación legal.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          6. Derechos del usuario
        </h2>
        <p className="mb-4">
          El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición y limitación enviando una solicitud a Grupo NDA.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Seguridad
        </h2>
        <p className="mb-4">
          Grupo NDA adopta medidas técnicas y organizativas para garantizar la seguridad de los datos personales.
        </p>

        <p className="mt-10 mb-16 text-sm text-slate-500">
          © {new Date().getFullYear()} Grupo NDA. Todos los derechos reservados.
        </p>

      </div>
    </div>
  );
}