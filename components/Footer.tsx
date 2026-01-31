
import React from 'react';
import { Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#FAF9F6] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-tight">
              <span className="serif italic text-[#D4A373]">Rochy</span>
              <span className="font-light ml-1">Llorente</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transformando visiones en marcas memorables. Elevando el estándar del branding personal en habla hispana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center hover:bg-[#D4A373] hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-800">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#inicio" className="hover:text-[#D4A373] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#D4A373] transition-colors">Servicios</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#D4A373] transition-colors">Sobre Mí</a></li>
              <li><a href="#contacto" className="hover:text-[#D4A373] transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-gray-800">Servicios Destacados</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#servicios" className="hover:text-[#D4A373] transition-colors">Mentoría 1:1</a></li>
              <li><a href="#servicios" className="hover:text-[#D4A373] transition-colors">Talleres VIP</a></li>
              <li><a href="#servicios" className="hover:text-[#D4A373] transition-colors">Ebooks y Guías</a></li>
              <li><a href="#servicios" className="hover:text-[#D4A373] transition-colors">Acompañamiento</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Rochy Llorente. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
