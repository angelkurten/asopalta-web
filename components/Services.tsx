
import React from 'react';
import { SectionId, Activity } from '../types';

const activities: Activity[] = [
  {
    title: 'Palma de Aceite',
    description: 'Establecimiento de cultivo y comercialización de fruto de palma aceitera con técnicas sostenibles y eficientes.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Cacao',
    description: 'Establecimiento de cultivo, producción, transformación y comercialización de cacao de alta calidad.',
    icon: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'
  },
  {
    title: 'Mango y Otros Cultivos',
    description: 'Diversificación agrícola con establecimiento de cultivo, transformación y comercialización de mango y otros productos agropecuarios.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Compostaje',
    description: 'Transformación de residuos agrícolas en compost orgánico de alta calidad para mejorar los suelos.',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    title: 'Asistencia Técnica',
    description: 'Acompañamiento especializado en sanidad vegetal, fertilización y buenas prácticas agrícolas.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Capacitación Gremial',
    description: 'Programas de formación continua para asociados sobre transferencia de tecnología, innovación y manejo ambiental.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.Services} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-asopalta-primary font-bold text-sm tracking-widest uppercase">Qué hacemos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-asopalta-dark mt-4">Nuestros Servicios y Actividades</h2>
          <div className="w-24 h-1 bg-asopalta-yellow mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-asopalta-cream border border-asopalta-primary/5 hover:bg-asopalta-primary transition-all duration-500 hover:shadow-2xl hover:shadow-asopalta-primary/20"
            >
              <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-asopalta-light transition-colors duration-500">
                <svg className="w-8 h-8 text-asopalta-primary group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={activity.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-asopalta-dark mb-4 group-hover:text-white transition-colors duration-500">{activity.title}</h3>
              <p className="text-asopalta-dark/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
