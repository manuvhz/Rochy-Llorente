
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-[#FDF2F2] rounded-full filter blur-3xl opacity-60 z-0 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#F0F4FF] rounded-full filter blur-3xl opacity-60 z-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-8 animate-fadeInLeft">
          <div className="inline-block px-4 py-1 rounded-full bg-[#EBF5EE] text-[#2D6A4F] text-xs font-semibold uppercase tracking-wider">
            Estratega de Marca Personal
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Eleva tu esencia, <br />
            <span className="serif italic text-[#D4A373]">crea impacto</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
            Ayudo a profesionales y emprendedores a construir una marca personal auténtica, 
            profesional y altamente rentable a través de metodologías probadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('servicios')}
              className="bg-[#D4A373] text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#BC8A5F] transition-all shadow-lg cursor-pointer transform hover:scale-105 active:scale-95"
            >
              Empezar ahora <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative animate-fadeInRight">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://i.imgur.com/AURy7sh.png" 
              alt="Rochy Llorente" 
              className="w-full h-[600px] object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
          
          {/* Floating Aesthetic Elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-[#FDF2F2]">
            <p className="text-[#D4A373] font-bold text-2xl italic serif">Excelencia</p>
            <p className="text-xs text-gray-400 uppercase tracking-tighter">Tu marca, mi prioridad</p>
          </div>
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-[#F0F4FF]">
            <div className="flex gap-1 text-yellow-400 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-xs text-gray-500 font-medium italic">"Una mentoría que transformó mi visión."</p>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-[#D4A373]/20 rounded-2xl rotate-3 -z-0"></div>
        </div>
      </div>
    </section>
  );
};

const Star: React.FC<{ size: number; fill?: string }> = ({ size, fill }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill || "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Hero;
