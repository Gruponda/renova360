import { Hammer, Building2, HardHat, PaintRoller, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Obra Nueva',
    description: 'Gestión integral de proyectos de construcción desde los cimientos hasta la entrega de llaves. Diseño, permisos y ejecución de la mayor calidad.',
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2940&auto=format&fit=crop'
  },
  {
    icon: Hammer,
    title: 'Rehabilitación Integral',
    description: 'Recuperamos el valor estructural y estético de edificios antiguos. Especialistas en fachadas, refuerzos estructurales y accesibilidad.',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=3031&auto=format&fit=crop'
  },
  {
    icon: PaintRoller,
    title: 'Reformas a Medida',
    description: 'Actualización de espacios residenciales y comerciales. Nos ajustamos a las necesidades de cada cliente, optimizando cada rincón.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop'
  },
  {
    icon: HardHat,
    title: 'Mantenimiento y Gestión',
    description: 'Servicios de conservación preventiva y correctiva para comunidades e infraestructuras, asegurando su rendimiento a largo plazo.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2938&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-1 bg-brand-500"></div>
            <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
              Áreas de Especialización
            </span>
            <div className="w-10 h-1 bg-brand-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Nuestros Servicios Principales
          </h2>
          <p className="text-slate-600 text-lg">
            Aportamos soluciones técnicas avanzadas para todo tipo de proyectos. Nuestro compromiso es la durabilidad y la satisfacción total del cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-brand-500 flex items-center justify-center z-20 shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <a href="/contacto" className="inline-flex items-center text-brand-500 font-bold hover:text-brand-600">
                    
                    
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
