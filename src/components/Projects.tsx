import { ExternalLink } from 'lucide-react';
import officeImage from '../assets/images/renovated_office_complex_1781415712750.jpg';
import facadeImage from '../assets/images/historic_facade_renovation_1781415880755.jpg';
import officeInteriorImage from '../assets/images/renovated_office_interior_1781415981465.jpg';
import shoppingMallImage from '../assets/images/shopping_mall_expansion_1781416127033.jpg';
import bridgeImage from '../assets/images/bridge_reinforcement_1781416252833.jpg';

const projects = [
  {
    title: 'Complejo de Oficinas',
    category: 'Oficinas',
    image: officeImage
  },
  {
    title: 'Rehabilitación Fachada Histórica',
    category: 'Rehabilitación',
    image: facadeImage
  },
  {
    title: 'Complejo de Oficinas Central',
    category: 'Reforma Integral',
    image: officeInteriorImage
  },
  {
    title: 'Ampliación Centro Comercial',
    category: 'Obra Civil',
    image: shoppingMallImage
  },
  {
    title: 'Viviendas Unifamiliares',
    category: 'Obra Nueva',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop'
  },
  {
    title: 'Refuerzo Estructural Puente',
    category: 'Mantenimiento',
    image: bridgeImage
  }
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-brand-500"></div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
                Nuestro Portafolio
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Obras que Hablan por Sí Solas
            </h2>
            <p className="text-slate-400 text-lg">
              Explora una selección de nuestros proyectos recientes. Cada obra refleja nuestra dedicación por el detalle, la seguridad y el diseño arquitectónico.
            </p>
          </div>
          <div>
            <a href="/contacto" className="inline-flex items-center bg-transparent border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-6 py-3 rounded-sm font-semibold transition-colors">
              Ver Todos Los Proyectos
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm cursor-pointer aspect-auto h-80">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-brand-500 font-semibold tracking-wider uppercase text-xs mb-2 block">
                    {project.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-sm">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
