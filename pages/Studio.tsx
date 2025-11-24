import React from 'react';

const studioImages = [
  "https://images.unsplash.com/photo-1601650346065-276ee6490656?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598967990422-9226508eb674?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590246814883-051f694029b6?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621112904891-5af487401484?q=80&w=2069&auto=format&fit=crop"
];

const Studio = () => {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-dark-900 mb-4">ESTÚDIO</h1>
        <div className="h-1 w-20 bg-gold-300 mx-auto"></div>
        <p className="mt-4 font-sans text-neutral-500">Home / Estúdio</p>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="font-serif text-3xl text-dark-900 mb-6">Descubra o Seu Espaço</h2>
        <p className="font-sans text-neutral-600 text-lg leading-relaxed mb-6">
          Um ambiente pensado para seu conforto e segurança.
          Equipamentos modernos, higiene impecável e uma vibe acolhedora.
          Aqui, cada detalhe é feito pra você se sentir em casa.
        </p>
        <p className="font-sans text-neutral-600 text-lg leading-relaxed">
          Desde 2020, criamos um ambiente acolhedor e profissional para todos que exergam a tatuagem como arte.
          Aqui, cada traço carrega propósito, e cada cliente é tratado com respeito, cuidado e técnica.
        </p>
      </div>

      {/* Masonry-ish Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {studioImages.map((src, idx) => (
           <div key={idx} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md">
             <img 
               src={src} 
               alt={`Estúdio foto ${idx + 1}`} 
               className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
           </div>
        ))}
      </div>

    </div>
  );
};

export default Studio;