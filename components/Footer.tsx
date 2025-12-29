
import React from 'react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-asopalta-dark py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 bg-asopalta-cream rounded-full p-2">
                <img 
                  src="https://asopalta.com.co/wp-content/uploads/2023/11/logo-asopalta-1.png" 
                  alt="ASOPALTA Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter uppercase block">ASOPALTA</span>
                <span className="text-asopalta-light text-xs font-bold tracking-[0.2em] uppercase">Cultivando Progreso</span>
              </div>
            </div>
            <p className="text-white/50 max-w-md leading-relaxed text-lg">
              Desde 2010, liderando la transformación agroindustrial de Tamalameque a través de la cooperación y el desarrollo sostenible del sector palmero.
            </p>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-asopalta-yellow">Explorar</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><button onClick={() => scrollTo(SectionId.Home)} className="hover:text-asopalta-yellow transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollTo(SectionId.About)} className="hover:text-asopalta-yellow transition-colors">Nuestra Historia</button></li>
              <li><button onClick={() => scrollTo(SectionId.Services)} className="hover:text-asopalta-yellow transition-colors">Servicios Gremiales</button></li>
              <li><button onClick={() => scrollTo(SectionId.Contact)} className="hover:text-asopalta-yellow transition-colors">Contacto</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.3em] mb-8 text-asopalta-yellow">Información</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>NIT: 900.392.659-9</li>
              <li>Tamalameque, Cesar</li>
              <li>Sostenibilidad Ambiental</li>
              <li>Atención al Asociado</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] font-bold tracking-widest uppercase">
          <p>© {currentYear} ASOCIACIÓN AGROINDUSTRIAL DE PALMICULTORES DE TAMALAMEQUE</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-white cursor-pointer transition-colors">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
