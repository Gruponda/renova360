import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-brand-500"></div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
                Expertos en Integridad Estructural
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Construimos y Rehabilitamos  
              <span className="text-brand-500 block">Tu Futuro</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              En Grupo NDA somos especialistas en edificación, obra civil y rehabilitación integral. Más de 20 años de experiencia garantizan resultados de máxima calidad, seguridad y eficiencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#servicios" 
                className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-sm font-semibold flex items-center justify-center transition-colors text-lg"
              >
                Nuestros Servicios
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
  href="https://gruponda.netlify.app/contacto"
  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-sm font-semibold flex items-center justify-center transition-all text-lg"
>
  Solicitar Presupuesto
</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute hidden lg:flex bottom-0 right-0 transform translate-y-1/2 -ml-4 z-20 pr-8">
        <div className="bg-brand-500 p-8 shadow-xl max-w-xs text-white">
          <h3 className="text-4xl font-bold mb-2">20+</h3>
          <p className="font-medium text-brand-900 leading-tight">Años liderando el sector de la construcción en España.</p>
        </div>
        <div className="bg-slate-900 p-8 shadow-xl max-w-xs text-white">
          <h3 className="text-4xl font-bold mb-2">450+</h3>
          <p className="text-slate-400 font-medium leading-tight">Proyectos finalizados con éxito e integridad estructural.</p>
        </div>
      </div>
    </section>
  );
}
