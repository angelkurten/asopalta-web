
import React from 'react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.Home} className="relative h-screen flex items-center justify-center overflow-hidden bg-asopalta-dark">
      {/* Background Image - Representative of the modern activity photo provided */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1920" 
          alt="Trabajo de campo ASOPALTA" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
          style={{ objectPosition: 'center 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asopalta-dark via-transparent to-asopalta-dark/60" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-asopalta-yellow text-asopalta-dark text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-xl">
          <span className="mr-2">★</span> CULTIVANDO PROGRESO <span className="ml-2">★</span>
        </div>
        <h1 className="text-5xl md:text-8xl text-white font-bold leading-none mb-8 text-shadow-sm">
          Fuerza <span className="text-asopalta-yellow italic">Agroindustrial</span>
        </h1>
        <p className="text-xl md:text-2xl text-asopalta-cream/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Impulsando el futuro de la palmicultura en Tamalameque con tecnología, unión y sostenibilidad.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => document.getElementById(SectionId.About)?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-asopalta-light text-white font-black rounded-full hover:bg-white hover:text-asopalta-dark transition-all duration-500 shadow-2xl hover:scale-105 uppercase tracking-widest text-xs"
          >
            Nuestra Historia
          </button>
          <button 
            onClick={() => document.getElementById(SectionId.Contact)?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-black rounded-full hover:bg-white/10 transition-all duration-500 uppercase tracking-widest text-xs backdrop-blur-sm"
          >
            Asóciate Hoy
          </button>
        </div>
      </div>

      {/* Aesthetic flourish */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-asopalta-cream to-transparent"></div>
    </section>
  );
};

export default Hero;
