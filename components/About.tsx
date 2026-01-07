
import React from 'react';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="bg-asopalta-cream">
      {/* Historia */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-asopalta-yellow/10 rounded-full blur-3xl" />
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
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
                  La <strong>ASOCIACIÓN AGROINDUSTRIAL DE PALMICULTORES DE TAMALAMEQUE – "ASOPALTA"</strong>; nació como un sueño compartido por los agricultores locales para transformar la economía de nuestra región.
                </p>
                <p>
                  Desde nuestra constitución legal en septiembre de 2010, hemos trabajado incansablemente para convertirnos en el pilar del desarrollo agroindustrial en el Cesar, manteniendo siempre el espíritu de cooperación que nos vio nacer en nuestra primera sede.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-asopalta-primary font-bold text-sm tracking-widest uppercase">Nuestro Norte</span>
            <h2 className="text-3xl md:text-4xl font-bold text-asopalta-dark mt-4">Misión y Visión</h2>
            <div className="w-24 h-1 bg-asopalta-yellow mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-gradient-to-br from-asopalta-primary to-asopalta-dark p-10 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-asopalta-yellow rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-asopalta-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold">Misión</h3>
                </div>
                <p className="text-white/90 leading-relaxed text-lg">
                  Promover el desarrollo sostenible del sector agroindustrial en la región, fortaleciendo la organización de los productores de <strong className="text-asopalta-yellow">palma de aceite, cacao, mango y otros productos agropecuarios</strong>.
                </p>
                <p className="text-white/80 leading-relaxed mt-4">
                  Buscando mejorar la productividad, la tecnología y la calidad de vida de las familias rurales, fomentando la asociatividad, la capacitación y la responsabilidad ambiental.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-asopalta-cream border-2 border-asopalta-primary/10 p-10 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-asopalta-yellow/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-asopalta-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-asopalta-yellow rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-asopalta-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-asopalta-dark">Visión 2030</h3>
                </div>
                <p className="text-asopalta-dark/80 leading-relaxed text-lg">
                  ASOPALTA será reconocida como una <strong className="text-asopalta-primary">organización líder</strong> en el desarrollo agroindustrial del Cesar, destacada por su compromiso con la sostenibilidad, la innovación y el bienestar de sus asociados.
                </p>
                <p className="text-asopalta-dark/70 leading-relaxed mt-4">
                  Aspiramos a consolidarnos como un referente regional en la transformación productiva y en la generación de oportunidades económicas para el campo.
                </p>
              </div>
            </div>
          </div>

          {/* Valores destacados */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { icon: '🌱', label: 'Sostenibilidad' },
              { icon: '🤝', label: 'Asociatividad' },
              { icon: '💡', label: 'Innovación' },
              { icon: '🌾', label: 'Compromiso Rural' },
            ].map((valor, index) => (
              <div key={index} className="text-center p-6 bg-asopalta-cream rounded-2xl hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-3 block">{valor.icon}</span>
                <span className="text-asopalta-dark font-bold text-sm uppercase tracking-wider">{valor.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
