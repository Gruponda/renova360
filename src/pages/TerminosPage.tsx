export default function TerminosPage() {
  return (
    // Hemos añadido mt-40 para empujar el texto hacia abajo y sacarlo de detrás del Header
    <div className="mt-40 mb-20 max-w-4xl mx-auto px-6 text-slate-950">
      
      {/* Título Principal */}
      <div className="border-b border-slate-200 pb-6 mb-10">
        <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">
          Términos y Condiciones
        </h1>
        <p className="text-lg text-slate-600">
          Última actualización: 2026. Información legal sobre el uso de la plataforma de Grupo NDA.
        </p>
      </div>

      {/* Bloque Legal Principal */}
      <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">1. Aceptación de los Términos</h2>
          <p>
            El acceso y la utilización del sitio web de Grupo NDA atribuye la condición de usuario e implica la aceptación plena de todas las cláusulas expuestas en este documento legal. Si no está de acuerdo, por favor absténgase de utilizar el sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">2. Propiedad Intelectual</h2>
          <p>
            Todos los contenidos de esta página web, incluyendo textos, fotografías, logotipos, combinaciones de colores, estructura y diseño, están protegidos por las leyes de Propiedad Intelectual e Industrial. Queda prohibida su reproducción o distribución sin el consentimiento expreso de Grupo NDA.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">3. Exclusión de Responsabilidad</h2>
          <p>
            Grupo NDA trabaja para que la información del sitio sea precisa, sin embargo, los detalles de los proyectos y servicios mostrados son orientativos y meramente informativos. Los presupuestos y compromisos finales solo tendrán validez legal bajo un contrato debidamente firmado por ambas partes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-3 font-display">4. Jurisdicción</h2>
          <p>
            Para la resolución de cualquier controversia o cuestión relacionada con este sitio web, será de aplicación la legislación española, sometiéndose explícitamente a los Juzgados y Tribunales competentes.
          </p>
        </section>
      </div>

    </div>
  );
}
