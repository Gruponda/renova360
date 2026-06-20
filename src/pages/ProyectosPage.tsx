import { ArrowRight } from 'lucide-react';
import residentialImage from '../assets/images/residential_renovation_1781416513331.jpg';
import facadeImage from '../assets/images/historic_facade_renovation_1781415880755.jpg';
import officeInteriorImage from '../assets/images/renovated_office_interior_1781415981465.jpg';
import shoppingMallImage from '../assets/images/shopping_mall_expansion_1781416127033.jpg';
import bridgeImage from '../assets/images/bridge_reinforcement_1781416252833.jpg';
import kitchenImage from '../assets/images/renovated_kitchen_1781417658524.jpg';
import hotelImage from '../assets/images/boutique_hotel_renovation_1781417770501.jpg';

const projects = [
  {
    title: 'Edificio Residencial Las Palmas',
    category: 'Obra Nueva',
    image: residentialImage
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
  },
  {
    title: 'Hospital San Miguel',
    category: 'Obra Nueva',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2906&auto=format&fit=crop'
  },
  {
    title: 'Reforma de Cocina',
    category: 'Reforma Interior',
    image: kitchenImage
  },
  {
    title: 'Hotel Boutique',
    category: 'Reforma Integral',
    image: hotelImage
  }
];

export default function ProyectosPage() {
  return (
    <div className="pt-32 pb-20">

      {/* Header */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Proyectos
          </h1>
          <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-300">
            Explora una selección de nuestras obras más destacadas. Excelencia y garantía en cada detalle.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-sm cursor-pointer h-80 shadow-md"
              >
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

                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            ¿Pensando en tu próximo proyecto?
          </h2>

          <p className="text-xl mb-8 text-slate-600 max-w-2xl mx-auto">
            Hagamos realidad tu idea. Nuestro equipo de profesionales está listo para asesorarte en todo el proceso.
          </p>

          <a
            href="/contacto"
            className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg"
          >
            Hablemos de tu Proyecto
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

        </div>
      </section>

    </div>
  );
}