
import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-24 bg-asopalta-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-asopalta-yellow/10 rounded-full blur-3xl" />
            {/* Historical image from the user */}
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800" // Placeholder for Historical Image
                alt="Sede Histórica ASOPALTA Tamalameque" 
                className="w-full h-auto grayscale-[20%] sepia-[10%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-asopalta-primary/10 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 z-20 bg-asopalta-primary p-8 rounded-xl shadow-xl hidden md:block max-w-xs text-white">
              <p className="font-bold text-3xl mb-1">2010</p>
              <p className="text-white/70 text-sm font-medium uppercase tracking-wider">Fundación en Tamalameque</p>
            </div>
          </div>

          <div>
            <span className="text-asopalta-primary font-bold text-sm tracking-widest uppercase">Raíces y Compromiso</span>
            <h2 className="text-3xl md:text-5xl font-bold text-asopalta-dark mt-4 mb-8">
              Una historia escrita con esfuerzo y unión gremial.
            </h2>
            <div className="space-y-6 text-asopalta-dark/70 leading-relaxed text-lg">
              <p>
                La <strong>ASOCIACIÓN AGROINDUSTRIAL DE PALMICULTORES DE TAMALAMEQUE – “ASOPALTA”</strong>; nació como un sueño compartido por los agricultores locales para transformar la economía de nuestra región.
              </p>
              <p>
                Desde nuestra constitución legal en septiembre de 2010, hemos trabajado incansablemente para convertirnos en el pilar del desarrollo palmicultor en el Cesar, manteniendo siempre el espíritu de cooperación que nos vio nacer en nuestra primera sede.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl border-t-4 border-asopalta-primary shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-asopalta-dark font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 bg-asopalta-primary rounded-full mr-2"></span>
                  Misión
                </h3>
                <p className="text-asopalta-dark/60 text-sm italic">
                  Promover el desarrollo sostenible del sector agroindustrial, fortaleciendo la organización de los productores y mejorando la calidad de vida de las familias rurales.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl border-t-4 border-asopalta-yellow shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-asopalta-dark font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 bg-asopalta-yellow rounded-full mr-2"></span>
                  Visión
                </h3>
                <p className="text-asopalta-dark/60 text-sm italic">
                  Ser reconocida para el 2030 como una organización líder en el Cesar, destacada por su compromiso con la sostenibilidad y el bienestar de sus asociados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
