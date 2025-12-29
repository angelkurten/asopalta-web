
import React from 'react';
import { SectionId, Activity } from '../types';

const activities: Activity[] = [
  {
    title: 'Preparación del Terreno',
    description: 'Gestión y adecuación técnica de suelos para el cultivo eficiente de palma de aceite.',
    icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Asistencia Técnica',
    description: 'Acompañamiento especializado en sanidad vegetal, fertilización y buenas prácticas agrícolas.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Capacitación Gremial',
    description: 'Programas de formación continua para asociados sobre tecnología y manejo ambiental.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Gestión Administrativa',
    description: 'Soporte en tesorería, contabilidad y representación legal para la defensa de intereses del sector.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Insumos y Logística',
    description: 'Coordinación para la entrega de fertilizantes y transporte de productos agrícolas regionales.',
    icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
  },
  {
    title: 'Sostenibilidad',
    description: 'Proyectos de conservación ambiental y manejo ejemplar del entorno productivo.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
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
