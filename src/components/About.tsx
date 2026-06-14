import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 w-full h-[500px] md:h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
                alt="Ingenieros en obra" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Pattern/Accent box */}
            <div className="absolute top-10 -left-6 md:-left-10 w-full h-full border-8 border-brand-500 z-0 rounded-sm"></div>
          </div>

          {/* Text Side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-brand-500"></div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
                Sobre Grupo NDA
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Construyendo Confianza, Edificando el Mañana.
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              En Grupo NDA creemos que cada proyecto es una oportunidad para demostrar nuestro compromiso con la excelencia. Fundada hace más de dos décadas, hemos crecido consolidándonos como un referente en soluciones integrales constructivas y de rehabilitación.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Nuestro equipo, compuesto por ingenieros, arquitectos y operarios altamente cualificados, trabaja día a día bajo estrictos estándares de seguridad y sostenibilidad. Nos enorgullece transformar espacios y mejorar la calidad de vida de las personas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Calidad Garantizada</h4>
                  <p className="text-slate-500 text-sm mt-1">Materiales de primer nivel para acabados perfectos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Cumplimiento de Plazos</h4>
                  <p className="text-slate-500 text-sm mt-1">Planificación milimétrica y ejecución puntual.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Plena Seguridad</h4>
                  <p className="text-slate-500 text-sm mt-1">Estándares rigurosos para la protección de todos.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Soluciones Sostenibles</h4>
                  <p className="text-slate-500 text-sm mt-1">Compromiso real con la eficiencia energética.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-slate-50 border-l-4 border-brand-500">
              <img 
                src="https://drive.google.com/thumbnail?id=1GQL1HVlJ5Yn0qwBftfHFZ_JFLv7yu2_W&sz=w400" 
                alt="Director de Obra" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="italic text-slate-600 mb-2">"Nuestra misión no es levantar muros, sino construir los cimientos de los sueños de nuestros clientes."</p>
                <p className="font-bold text-slate-900 leading-none">Nicolae Nedeloiu</p>
                <p className="text-brand-500 text-sm mt-1">Director General, Grupo NDA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
