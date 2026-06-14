import { CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formbold.com/s/3wOGG", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-slate-900 p-8 md:p-12 rounded-sm shadow-2xl flex flex-col items-center justify-center text-center h-full min-h-[400px]">
        <CheckCircle className="w-16 h-16 text-brand-500 mb-6" />
        <h3 className="text-3xl font-bold text-white mb-4 font-display">¡Mensaje Enviado!</h3>
        <p className="text-slate-300 text-lg mb-8">
          Gracias por contactarnos. Nuestro equipo se comunicará contigo a la brevedad posible.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="bg-transparent border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-3 rounded-sm font-semibold transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 p-8 md:p-12 rounded-sm shadow-2xl">
      <h3 className="text-2xl font-bold text-white mb-6">Solicitar Presupuesto</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} />
        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
            <input 
              type="text" 
              name="Nombre"
              id="name" 
              required
              className="w-full bg-slate-800 border-none text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-500 outline-none transition-shadow"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
            <input 
              type="tel" 
              name="Telefóno"
              id="phone" 
              className="w-full bg-slate-800 border-none text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-500 outline-none transition-shadow"
              placeholder="Tu teléfono"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
          <input 
            type="email" 
            name="Email"
            id="email" 
            required
            className="w-full bg-slate-800 border-none text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-500 outline-none transition-shadow"
            placeholder="tu@email.com"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">Tipo de servicio</label>
          <select 
            name="Servicio"
            id="service" 
            className="w-full bg-slate-800 border-none text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-500 outline-none transition-shadow"
          >
            <option value="Obra Nueva">Obra Nueva</option>
            <option value="Rehabilitación">Rehabilitación</option>
            <option value="Reforma Integral">Reforma Integral</option>
            <option value="Mantenimiento">Mantenimiento</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje / Detalles del proyecto</label>
          <textarea 
            name="Mensaje"
            id="message" 
            required
            rows={4} 
            className="w-full bg-slate-800 border-none text-white px-4 py-3 rounded-sm focus:ring-2 focus:ring-brand-500 outline-none transition-shadow resize-none"
            placeholder="Cuéntanos brevemente sobre tu proyecto..."
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full bg-brand-500 hover:bg-brand-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-sm transition-colors text-lg"
        >
          {status === 'submitting' ? 'Enviando...' : 'Enviar Solicitud'}
        </button>
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center mt-4">
            Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
          </p>
        )}
      </form>
    </div>
  );
}
