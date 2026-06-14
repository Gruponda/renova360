import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-1 bg-brand-500"></div>
              <span className="text-brand-500 font-semibold tracking-wider uppercase text-sm">
                Contacto
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              ¿Tienes un proyecto en mente? Hablemos.
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Estamos listos para hacer realidad tu próxima obra. Ponte en contacto con nosotros para recibir asesoramiento personalizado y un presupuesto sin compromiso.
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

          <ContactForm />

        </div>
      </div>
    </section>
  );
}
