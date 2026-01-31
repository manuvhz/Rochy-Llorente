
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 pastel-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-8">Detrás de la <span className="serif italic text-[#D4A373]">Estrategia</span></h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Soy Rochy Llorente, y mi misión es ayudar a personas brillantes a dejar de ser invisibles. 
                A través de mi experiencia en branding estratégico, he comprendido que una marca no es solo un logo, es un ecosistema de confianza.
              </p>
              <p>
                Mi enfoque mezcla la psicología del consumidor con el diseño emocional y estrategias de marketing de alto impacto. 
                Creo en los negocios con propósito y en la autenticidad como el activo más rentable del siglo XXI.
              </p>
              <p>
                Cada proyecto es una oportunidad para destilar la esencia única de mis clientes y proyectarla al mundo con elegancia y profesionalismo.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1000" 
                alt="Atmósfera de trabajo" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F3E8FF] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#FDF2F2] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
