import { MapPin, Phone, Mail } from 'lucide-react';

import ContactForm from '../components/ContactForm';

export default function ContactoPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">Contáctanos</h1>
            <div className="w-20 h-1 bg-brand-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-300">
              Estamos listos para hacer realidad tu próxima obra. Ponte en contacto con nosotros para recibir asesoramiento personalizado.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-1 bg-brand-500"></div>
                <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
                  Información de Contacto
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight font-display">
                ¿Tienes un proyecto en mente? Hablemos.
              </h2>
              <p className="text-slate-600 text-lg mb-10">
                Llámanos, escríbenos o visítanos en nuestras oficinas. Nuestro equipo de atención te responderá a la brevedad.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Visítanos</h4>
                    <p className="text-slate-600">Calle de Godella 10, 28021<br/>Madrid, España</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Llámanos</h4>
                    <p className="text-slate-600">
                      <a href="tel:+34664716108" className="hover:text-brand-500 transition-colors">+34 664 716 108</a>
                      <br/>
                      <a href="tel:+34630085054" className="hover:text-brand-500 transition-colors">+34 630 085 054</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-slate-100 flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Escríbenos</h4>
                    <p className="text-slate-600">
                      <a href="mailto:info.gruponda@gmail.com" className="hover:text-brand-500 transition-colors">info.gruponda@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}
