
import React from 'react';
import { SERVICES, getIcon } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Mis Productos y <span className="serif italic text-[#D4A373]">Servicios</span></h2>
          <div className="w-24 h-1 bg-[#D4A373]/30 mx-auto rounded-full"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Descubre cómo podemos trabajar juntos para llevar tu marca personal al siguiente nivel. 
            Desde recursos digitales hasta mentorías intensivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id}
              className={`group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gray-100 hover:shadow-xl ${service.bgColor}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-white p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {getIcon(service.icon)}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-white/50 rounded-full border border-white/20">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#BC8A5F] transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-[#D4A373] group-hover:gap-3 transition-all">
                Ver más información <span className="text-xl">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
