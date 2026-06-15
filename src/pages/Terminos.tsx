import { CheckCircle2, Shield, Scale, FileText, HelpCircle, AlertTriangle } from 'lucide-react';

export default function TerminosPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Términos y Condiciones</h1>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300">
              Información legal importante sobre el uso de nuestro sitio web y la contratación de los servicios de Grupo NDA.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Aviso Legal
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                Condiciones generales de uso del sitio web
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  El presente documento establece las condiciones que regulan el acceso y uso de la página web de Grupo NDA. Al navegar por este sitio, usted acepta plenamente y sin reservas cada una de las cláusulas aquí descritas.
                </p>
                <p>
                  Grupo NDA se reserva el derecho de modificar, actualizar o retirar contenidos de este sitio web, así como los presentes términos, en cualquier momento y sin previo aviso para adaptarlos a novedades legislativas.
                </p>
                <p>
                  El usuario se compromete a hacer un uso adecuado y lícito de la plataforma, absteniéndose de realizar acciones que puedan dañar la infraestructura tecnológica de Grupo NDA o perjudicar a terceros.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://unsplash.com" 
                alt="Documentación legal y contratos" 
                className="rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-500 p-8 text-white rounded-sm shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-2">Vigente</div>
                <div className="text-brand-900 font-semibold">Año Actualización 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tres Pilares Legales */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Scale className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Propiedad Intelectual</h3>
              <p className="text-slate-600 leading-relaxed">
                Todos los textos, imágenes, logotipos, diseños de proyectos y marcas expuestas en esta web son propiedad exclusiva de Grupo NDA o cuentan con licencia de uso. Queda prohibida su reproducción sin autorización escrita.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Shield className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Protección de Datos</h3>
              <p className="text-slate-600 leading-relaxed">
                La información recogida en nuestros formularios de contacto se trata bajo estricta confidencialidad según el RGPD. Sus datos personales se emplean únicamente para gestionar sus solicitudes de presupuesto.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <FileText className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Presupuestos Obligatorios</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Datos meramente informativos</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Presupuestos válidos bajo firma</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Sujeto a visitas técnicas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Transparencia contractual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cláusulas Adicionales */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              Exclusión de Responsabilidades
            </h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Enlaces de Terceros</h4>
              <p className="text-slate-400">No nos hacemos responsables de las políticas de privacidad o contenidos de enlaces externos hacia webs de terceros ajenos a nuestra empresa.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Errores Técnicos</h4>
              <p className="text-slate-400">No se garantiza la ausencia absoluta de interrupciones o fallos de red puntuales en el acceso al contenido online de la plataforma.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <FileText className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Validez del Contenido</h4>
              <p className="text-slate-400">Las imágenes de proyectos anteriores son orientativas y pueden sufrir cambios técnicos según las exigencias del ayuntamiento o la dirección de obra.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Legislación y Fuero</h4>
              <p className="text-slate-400">Para cualquier controversia legal que surja de esta plataforma, las partes se someten estrictamente a los Juzgados y Tribunales de España.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
