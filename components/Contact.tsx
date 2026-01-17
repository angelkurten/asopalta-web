
import React from 'react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.Contact} className="py-24 bg-asopalta-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-asopalta-primary font-bold text-sm tracking-widest uppercase">Contáctanos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-asopalta-dark mt-4">Hablemos de Progreso</h2>
          <p className="text-asopalta-dark/60 mt-6 max-w-2xl mx-auto text-lg">
            ¿Interesado en asociarte o conocer más sobre nuestros proyectos? Estamos aquí para escucharte y trabajar juntos por el agro del Cesar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Ubicación */}
          <a 
            href="https://maps.google.com/?q=Calle+4+No.+7-51+Barrio+Nueva+Granada+Tamalameque+Cesar+Colombia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
          >
            <div className="w-16 h-16 bg-asopalta-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-asopalta-primary group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-asopalta-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-xl text-asopalta-dark mb-3">Ubicación</h4>
            <p className="text-asopalta-dark/60">Calle 4 No. 7-51</p>
            <p className="text-asopalta-dark/60">Barrio Nueva Granada</p>
            <p className="text-asopalta-dark/80 font-medium mt-2">Tamalameque, Cesar</p>
          </a>

          {/* Teléfono */}
          <a 
            href="tel:+573233902738"
            className="bg-asopalta-primary p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center text-white"
          >
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-white group-hover:text-asopalta-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-bold text-xl mb-3">Teléfono</h4>
            <p className="text-white/80 text-2xl font-bold">323 390 2738</p>
            <p className="text-white/60 text-sm mt-2">Llámanos o escríbenos por WhatsApp</p>
          </a>

          {/* Correo */}
          <a 
            href="mailto:asopalta1@hotmail.com"
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
          >
            <div className="w-16 h-16 bg-asopalta-yellow/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-asopalta-yellow group-hover:scale-110 transition-all duration-300">
              <svg className="w-8 h-8 text-asopalta-yellow group-hover:text-asopalta-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-bold text-xl text-asopalta-dark mb-3">Correo Electrónico</h4>
            <p className="text-asopalta-primary font-medium text-lg">asopalta1@hotmail.com</p>
            <p className="text-asopalta-dark/60 text-sm mt-2">Escríbenos para más información</p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
