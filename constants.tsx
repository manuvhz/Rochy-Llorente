
import React from 'react';
import { 
  BookOpen, 
  Users, 
  Video, 
  MapPin, 
  Star, 
  Target, 
  Heart 
} from 'lucide-react';
import { Service, NavigationItem } from './types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Sobre Mí', href: '#sobre-mi' },
  { name: 'Contacto', href: '#contacto' },
];

export const SERVICES: Service[] = [
  {
    id: 'masterclass',
    title: 'MásterClass',
    description: 'Sesiones intensivas de aprendizaje diseñadas para transformar tu visión y habilidades en tiempo récord.',
    icon: 'Video',
    bgColor: 'bg-[#FDF2F2]',
    tag: 'Formación VIP'
  },
  {
    id: 'ebooks',
    title: 'Ebook y Guías',
    description: 'Recursos digitales accionables para que puedas implementar estrategias ganadoras a tu propio ritmo.',
    icon: 'BookOpen',
    bgColor: 'bg-[#F0F4FF]',
    tag: 'Autoaprendizaje'
  },
  {
    id: 'mentoria',
    title: 'Mentorias 1:1',
    description: 'Acompañamiento personalizado y estratégico para escalar tu marca personal con un plan a medida.',
    icon: 'Star',
    bgColor: 'bg-[#F3E8FF]',
    tag: 'Exclusivo'
  },
  {
    id: 'talleres-vivo',
    title: 'Talleres en Vivo',
    description: 'Experiencias dinámicas online donde la interacción y la práctica real son el núcleo del éxito.',
    icon: 'Users',
    bgColor: 'bg-[#EBF5EE]',
    tag: 'Comunidad'
  },
  {
    id: 'talleres-presenciales',
    title: 'Talleres Presenciales',
    description: 'Encuentros físicos llenos de energía, networking y aprendizaje profundo en entornos inspiradores.',
    icon: 'MapPin',
    bgColor: 'bg-[#FFF7ED]',
    tag: 'Experiencia'
  },
  {
    id: 'acompañamiento',
    title: 'Servicios de Acompañamiento',
    description: 'Gestión integral y estratégica para marcas personales que buscan brillar en el entorno digital.',
    icon: 'Heart',
    bgColor: 'bg-[#FEF2F2]',
    tag: 'Integral'
  },
  {
    id: 'retos',
    title: 'Retos',
    description: 'Programas de corta duración enfocados en resultados específicos para desbloquear tu potencial.',
    icon: 'Target',
    bgColor: 'bg-[#F1F5F9]',
    tag: 'Transformación'
  }
];

export const getIcon = (name: string) => {
  switch (name) {
    case 'Video': return <Video className="w-6 h-6" />;
    case 'BookOpen': return <BookOpen className="w-6 h-6" />;
    case 'Star': return <Star className="w-6 h-6" />;
    case 'Users': return <Users className="w-6 h-6" />;
    case 'MapPin': return <MapPin className="w-6 h-6" />;
    case 'Heart': return <Heart className="w-6 h-6" />;
    case 'Target': return <Target className="w-6 h-6" />;
    default: return <Star className="w-6 h-6" />;
  }
};
