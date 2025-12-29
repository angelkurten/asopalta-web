
import React, { useState } from 'react';
import { SectionId, NavItem } from '../types';

interface NavbarProps {
  activeSection: SectionId;
}

const navItems: NavItem[] = [
  { label: 'Inicio', id: SectionId.Home },
  { label: 'Nosotros', id: SectionId.About },
  { label: 'Servicios', id: SectionId.Services },
  { label: 'Contacto', id: SectionId.Contact },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-asopalta-cream/95 backdrop-blur-md border-b border-asopalta-dark/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollTo(SectionId.Home)}>
            <div className="w-14 h-14 flex items-center justify-center">
              <img 
                src="https://asopalta.com.co/wp-content/uploads/2023/11/logo-asopalta-1.png" 
                alt="ASOPALTA Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-asopalta-dark font-bold text-xl tracking-tight leading-none">
                ASOPALTA
              </span>
              <span className="text-asopalta-light text-[10px] font-bold tracking-[0.2em] uppercase">
                Cultivando Progreso
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm font-bold tracking-widest transition-all duration-200 uppercase relative group ${
                  activeSection === item.id 
                    ? 'text-asopalta-dark' 
                    : 'text-asopalta-dark/60 hover:text-asopalta-dark'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-asopalta-yellow transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-asopalta-dark p-2 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-asopalta-cream border-t border-asopalta-dark/5">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-3 py-4 text-base font-bold transition-colors uppercase tracking-wider ${
                  activeSection === item.id ? 'bg-asopalta-dark text-white' : 'text-asopalta-dark/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
