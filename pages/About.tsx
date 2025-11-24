import React from 'react';

const About = () => {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-dark-900 mb-4">SOBRE MIM</h1>
        <div className="h-1 w-20 bg-gold-300 mx-auto"></div>
        <p className="mt-4 font-sans text-neutral-500">Home / Sobre Mim</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Image/Video Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
             <img 
               src="https://images.unsplash.com/photo-1605652939403-12d8a5c6f642?q=80&w=1964&auto=format&fit=crop" 
               alt="Tattoo Artist working" 
               className="w-full h-auto object-cover"
             />
             <div className="absolute inset-0 border-[12px] border-white/20 pointer-events-none"></div>
          </div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-sans text-lg text-neutral-700 leading-loose mb-6">
            Sou <strong>David Morais</strong>, tatuador desde 2020, apaixonado por transformar ideias em arte na pele.
            Trabalho com estilos como <span className="text-gold-400 font-bold">Blackwork</span>, tattoos delicadas e projetos autorais.
          </p>
          <p className="font-sans text-lg text-neutral-700 leading-loose mb-8">
            Acredito que cada tatuagem é única, uma forma de expressão que carrega sentimentos e histórias.
            Meu objetivo é sempre proporcionar uma experiência acolhedora e profissional para cada cliente.
          </p>
          
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
             <div className="bg-white p-4 rounded-lg shadow-md border border-paper">
               <span className="block font-serif text-3xl text-dark-900 mb-1">4+</span>
               <span className="text-xs uppercase tracking-widest text-neutral-500">Anos de Experiência</span>
             </div>
             <div className="bg-white p-4 rounded-lg shadow-md border border-paper">
               <span className="block font-serif text-3xl text-dark-900 mb-1">100%</span>
               <span className="text-xs uppercase tracking-widest text-neutral-500">Dedicação</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;