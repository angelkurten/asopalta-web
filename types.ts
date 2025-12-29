
export enum SectionId {
  Home = 'inicio',
  About = 'nosotros',
  Services = 'servicios',
  Gallery = 'galeria',
  Contact = 'contacto'
}

export interface Activity {
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  id: SectionId;
}
