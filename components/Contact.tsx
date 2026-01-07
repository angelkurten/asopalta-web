
import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.Contact} className="py-24 bg-asopalta-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-asopalta-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Contact Info */}
          <div className="lg:w-1/2 p-12 lg:p-16 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Hablemos de Progreso</h2>
            <p className="text-white/70 mb-12 text-lg">
              ¿Interesado en asociarte o conocer más sobre nuestros proyectos? Estamos aquí para escucharte y trabajar juntos por el agro del Cesar.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-asopalta-primary rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-white/60">Calle 4 No. 7-51 Barrio Nueva Granada</p>
                  <p className="text-white/60">Tamalameque, Cesar - Colombia</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-asopalta-primary rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Correo Electrónico</h4>
                  <p className="text-white/60">asopalta1@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-asopalta-primary rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Teléfono / Celular</h4>
                  <p className="text-white/60">323 390 2738</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 bg-white p-12 lg:p-16">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-asopalta-dark text-sm font-bold mb-2">Nombre</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-lg bg-asopalta-cream border border-asopalta-primary/10 focus:outline-none focus:ring-2 focus:ring-asopalta-primary/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-asopalta-dark text-sm font-bold mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-lg bg-asopalta-cream border border-asopalta-primary/10 focus:outline-none focus:ring-2 focus:ring-asopalta-primary/20 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-asopalta-dark text-sm font-bold mb-2">Asunto</label>
                <input 
                  type="text" 
                  placeholder="¿Cómo podemos ayudarte?"
                  className="w-full px-4 py-3 rounded-lg bg-asopalta-cream border border-asopalta-primary/10 focus:outline-none focus:ring-2 focus:ring-asopalta-primary/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-asopalta-dark text-sm font-bold mb-2">Mensaje</label>
                <textarea 
                  rows={4}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 rounded-lg bg-asopalta-cream border border-asopalta-primary/10 focus:outline-none focus:ring-2 focus:ring-asopalta-primary/20 transition-all"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-asopalta-primary text-white font-bold rounded-lg hover:bg-asopalta-dark transition-all duration-300 shadow-lg shadow-asopalta-primary/10"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
