import { Hammer, Building2, HardHat, PaintRoller, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Building2,
    title: 'Obra Nueva',
    description: 'Gestión integral de proyectos de construcción desde los cimientos hasta la entrega de llaves. Diseño, permisos y ejecución de la mayor calidad. Asesoramos durante todo el proceso para asegurar que el resultado final supera sus expectativas.',
    features: ['Evaluación y viabilidad', 'Gestión de licencias', 'Dirección de obra', 'Ejecución integral', 'Entrega llave en mano'],
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2940&auto=format&fit=crop'
  },
  {
    icon: Hammer,
    title: 'Rehabilitación Integral',
    description: 'Recuperamos el valor estructural y estético de edificios antiguos. Especialistas en fachadas, refuerzos estructurales y accesibilidad. Utilizamos materiales de última generación para mejorar la eficiencia energética e impermeabilización.',
    features: ['Rehabilitación de fachadas', 'Refuerzos estructurales', 'Mejora de accesibilidad', 'Eficiencia energética', 'Patologías de la construcción'],
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=3031&auto=format&fit=crop'
  },
  {
    icon: PaintRoller,
    title: 'Reformas a Medida',
    description: 'Actualización de espacios residenciales y comerciales. Nos ajustamos a las necesidades de cada cliente, optimizando cada rincón para maximizar la funcionalidad y el atractivo visual del espacio.',
    features: ['Reformas comerciales', 'Remodelación de viviendas', 'Diseño de interiores', 'Sistemas de climatización', 'Domótica e iluminación'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop'
  },
  {
    icon: HardHat,
    title: 'Mantenimiento y Gestión',
    description: 'Servicios de conservación preventiva y correctiva para comunidades e infraestructuras, asegurando su rendimiento a largo plazo y previniendo grandes inversiones en reparaciones de emergencia.',
    features: ['Mantenimiento preventivo', 'Reparaciones correctivas', 'Auditorías de estado', 'Conservación de comunidades', 'Servicio de emergencias'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2938&auto=format&fit=crop'
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Nuestros Servicios</h1>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300">
              Soluciones integrales de construcción, rehabilitación y mantenimiento adaptadas a las necesidades más exigentes del sector.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="w-full lg:w-1/2">
                    <div className="relative rounded-sm overflow-hidden shadow-2xl group">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 right-6 w-20 h-20 bg-brand-500 flex items-center justify-center shadow-md">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-display">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="bg-white p-6 rounded-sm shadow-md border-l-4 border-brand-500">
                      <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Características Principales</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-500 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action CTA */}
      <section className="bg-brand-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitas un presupuesto para tu próximo proyecto?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contacta con nuestro equipo técnico y descubre cómo podemos ayudarte a materializar tus objetivos con la máxima garantía.
          </p>
          <a href="/contacto" className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg">
            Solicitar Presupuesto
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

    </div>
  );
}
