import { CheckCircle2, Target, Eye, Shield, Users, Award } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="pt-32 pb-20">

      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
              Sobre Grupo NDA
            </h1>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300">
              Transformando el paisaje urbano en España con más de 20 años de experiencia en construcción, rehabilitación y obra civil.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* TEXT */}
            <div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Nuestra Historia
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                Construyendo el futuro desde principios sólidos
              </h2>

              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Grupo NDA nació hace más de dos décadas con un objetivo claro: ofrecer servicios de construcción y rehabilitación de la máxima calidad.
                </p>
                <p>
                  Desde nuestros comienzos hemos crecido hasta convertirnos en un referente nacional.
                </p>
                <p>
                  Hoy contamos con un equipo multidisciplinar altamente cualificado.
                </p>
              </div>
            </div>

            {/* EXPERIENCE CARD ONLY (NO IMAGE) */}
            <div className="flex items-center justify-center">
              <div className="bg-brand-500 p-10 text-white rounded-sm shadow-xl text-center w-full max-w-sm">
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-brand-900 font-semibold text-lg">
                  Años de experiencia
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mision, Vision, Valores */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Target className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Misión</h3>
              <p className="text-slate-600">
                Ejecutar proyectos con calidad, seguridad y sostenibilidad.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Eye className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Visión</h3>
              <p className="text-slate-600">
                Ser referente nacional en construcción e innovación.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Shield className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>

              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Calidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Responsabilidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Innovación</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Seguridad</li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              ¿Por qué elegirnos?
            </h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">
              <Users className="w-10 h-10 mx-auto text-brand-500 mb-4" />
              <h4 className="font-bold mb-2">Equipo</h4>
              <p className="text-slate-400">Profesionales cualificados</p>
            </div>

            <div className="text-center">
              <Award className="w-10 h-10 mx-auto text-brand-500 mb-4" />
              <h4 className="font-bold mb-2">Calidad</h4>
              <p className="text-slate-400">Materiales certificados</p>
            </div>

            <div className="text-center">
              <Target className="w-10 h-10 mx-auto text-brand-500 mb-4" />
              <h4 className="font-bold mb-2">Plazos</h4>
              <p className="text-slate-400">Cumplimiento garantizado</p>
            </div>

            <div className="text-center">
              <Shield className="w-10 h-10 mx-auto text-brand-500 mb-4" />
              <h4 className="font-bold mb-2">Seguridad</h4>
              <p className="text-slate-400">Protocolos estrictos</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}