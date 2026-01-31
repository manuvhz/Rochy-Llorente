
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#D4A373]/20 selection:text-[#D4A373]">
      <Navbar />
      <main>
        <Hero />
        
        <Services />
        
        {/* Quote Section */}
        <section className="py-32 px-6 text-center bg-[#FDF2F2]">
          <div className="max-w-4xl mx-auto">
            <span className="text-6xl text-[#D4A373]/20 serif block mb-8">“</span>
            <h2 className="text-3xl md:text-5xl font-light italic leading-tight text-gray-700 serif">
              No se trata solo de ser conocido, se trata de ser <span className="font-bold not-italic">inolvidable</span> por las razones correctas.
            </h2>
            <p className="mt-8 font-bold tracking-widest text-[#D4A373]">— ROCHY LLORENTE</p>
          </div>
        </section>

        <About />
        
        {/* Final CTA */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#1A1A1A] rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4A373] opacity-20 filter blur-3xl"></div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">¿Lista para desbloquear el siguiente nivel de tu marca?</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Las plazas para mentorías 1:1 son limitadas. Reserva tu sesión de diagnóstico hoy mismo.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-[#D4A373] text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Agendar Llamada Estratégica
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
