import { CheckCircle2, Target, Eye, Shield, Users, Award } from 'lucide-react';

export default function NosotrosPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Sobre Grupo NDA</h1>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
                Nuestra Historia
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                Construyendo el futuro desde principios sólidos
              </h2>
              <div className="space-y-4 text-slate-600 text-lg">
                <p>
                  Grupo NDA nació hace más de dos décadas con un objetivo claro: ofrecer servicios de construcción y rehabilitación de la máxima calidad, con absoluta transparencia y respeto por los plazos acordados.
                </p>
                <p>
                  Desde nuestros humildes comienzos como una pequeña empresa local, hemos crecido para convertirnos en un referente a nivel nacional. Hemos ampliado nuestra capacidad operativa y hemos integrado las últimas tecnologías y métodos de construcción sostenible.
                </p>
                <p>
                  Hoy en día, contamos con un equipo multidisciplinar compuesto por ingenieros, arquitectos, operarios especializados y profesionales técnicos, todos unidos por la misma pasión: la excelencia en cada bloque, en cada estructura y en cada acabado.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Equipo de construcción" 
                className="rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-500 p-8 text-white rounded-sm shadow-xl hidden md:block">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-brand-900 font-semibold">Años de experiencia</div>
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Misión</h3>
              <p className="text-slate-600 leading-relaxed">
                Ejecutar proyectos de construcción y rehabilitación con los más altos estándares de calidad, seguridad y respeto al medio ambiente, satisfaciendo plenamente las expectativas y necesidades de nuestros clientes en cada momento.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Eye className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestra Visión</h3>
              <p className="text-slate-600 leading-relaxed">
                Consolidarnos como la empresa constructora líder a nivel nacional, reconocida por nuestra capacidad de innovación, eficiencia operativa, compromiso con la sostenibilidad medioambiental y la alta capacitación de nuestro equipo humano.
              </p>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-md border-t-4 border-brand-500">
              <Shield className="w-12 h-12 text-brand-500 mb-6" />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Nuestros Valores</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Excelencia y calidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Compromiso y responsabilidad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Innovación continua</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-500" /> Seguridad laboral</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              ¿Por qué elegir Grupo NDA?
            </h2>
            <div className="w-20 h-1 bg-brand-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Equipo Humano</h4>
              <p className="text-slate-400">Contamos con los mejores profesionales, constantemente capacitados en nuevas técnicas constructivas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Garantía de Calidad</h4>
              <p className="text-slate-400">Garantizamos resultados duraderos usando únicamente materiales de primer nivel certificados.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Cumplimiento de Plazos</h4>
              <p className="text-slate-400">Nos tomamos muy en serio los plazos establecidos, asegurando entregas puntuales garantizadas.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Seguridad Integral</h4>
              <p className="text-slate-400">Aplicamos rigurosos protocolos de prevención de riesgos para garantizar obras blindadas de accidentes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
