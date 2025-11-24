import React, { useState } from 'react';
import { ExclusiveArt } from '../types';
import { Tag, X, Ruler, Target } from 'lucide-react';

const arts: ExclusiveArt[] = [
  {
    id: "01",
    title: "Dragon Ball Z",
    oldPrice: 1200,
    newPrice: 600,
    placement: "Braço (parte interna)",
    size: "28cm",
    image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop", // Placeholder
    onBodyImage: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop",
    available: true
  },
  {
    id: "02",
    title: "Zoro (One Piece)",
    oldPrice: 1100,
    newPrice: 550,
    placement: "Costela / Tórax",
    size: "Grande — ~25cm",
    image: "https://images.unsplash.com/photo-1625426135165-e9cb93699c26?q=80&w=1780&auto=format&fit=crop",
    onBodyImage: "https://images.unsplash.com/photo-1625426135165-e9cb93699c26?q=80&w=1780&auto=format&fit=crop",
    available: true
  },
  {
    id: "03",
    title: "Raposa Geométrica",
    oldPrice: 800,
    newPrice: 400,
    placement: "Coxa",
    size: "Médio — ~18cm",
    image: "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1991&auto=format&fit=crop",
    onBodyImage: "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=1991&auto=format&fit=crop",
    available: true
  },
  {
    id: "04",
    title: "Samurai Mask",
    oldPrice: 1000,
    newPrice: 500,
    placement: "Antebraço",
    size: "Médio — ~15cm",
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
    onBodyImage: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
    available: true
  }
];

const Exclusive = () => {
  const [selectedArt, setSelectedArt] = useState<ExclusiveArt | null>(null);

  const openModal = (art: ExclusiveArt) => {
    setSelectedArt(art);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArt(null);
    document.body.style.overflow = 'auto';
  };

  const getWhatsAppLink = (art: ExclusiveArt) => {
    const text = encodeURIComponent(`Olá! Tenho interesse na arte "${art.title}" — valor R$${art.newPrice}. Quero reservar.`);
    return `https://wa.me/message/FUA2THUSJVWFH1?text=${text}`;
  };

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-dark-900 mb-4">ARTES EXCLUSIVAS</h1>
        <div className="h-1 w-20 bg-gold-300 mx-auto"></div>
        <p className="mt-4 font-sans text-neutral-500 max-w-2xl mx-auto">
          Artes criadas com exclusividade disponíveis por tempo limitado. 
          Escolha a sua e reserve diretamente comigo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {arts.map((art) => (
          <div key={art.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-paper hover:shadow-2xl hover:border-gold-300 transition-all duration-300 group flex flex-col">
            <div className="relative overflow-hidden h-80">
              <span className="absolute top-4 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 shadow-md z-10 transform translate-x-1">
                50% OFF
              </span>
              <img 
                src={art.image} 
                alt={art.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                 <button 
                   onClick={() => openModal(art)}
                   className="w-full bg-white text-dark-900 py-3 rounded-lg font-bold font-sans hover:bg-gold-200 transition-colors"
                 >
                   Ver Detalhes
                 </button>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-serif text-2xl text-dark-900 mb-2">{art.title}</h3>
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-neutral-400 line-through text-sm">R${art.oldPrice}</span>
                <span className="text-gold-400 font-bold text-2xl">R${art.newPrice}</span>
              </div>
              <div className="mt-auto space-y-2 mb-4">
                 <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Target size={16} /> {art.placement}
                 </div>
                 <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <Ruler size={16} /> {art.size}
                 </div>
              </div>
              <button 
                onClick={() => openModal(art)}
                className="w-full border border-dark-900 text-dark-900 py-2 rounded-lg font-sans font-bold hover:bg-dark-900 hover:text-white transition-colors"
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedArt && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row animate-scale-in max-h-[90vh]">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-white/80 p-2 rounded-full hover:bg-white text-dark-900 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-neutral-100 flex items-center justify-center p-6 md:p-0">
               <img 
                 src={selectedArt.onBodyImage} 
                 alt={selectedArt.title} 
                 className="max-h-[50vh] md:max-h-full object-contain"
               />
               <span className="absolute bottom-4 left-4 bg-white/80 px-2 py-1 text-xs rounded text-dark-900 font-bold">
                 Visualização
               </span>
            </div>

            {/* Info Side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
              <h2 className="font-serif text-3xl md:text-4xl text-dark-900 mb-2">{selectedArt.title}</h2>
              <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-neutral-200">
                <span className="text-neutral-400 line-through">R${selectedArt.oldPrice}</span>
                <span className="text-gold-400 font-bold text-3xl">R${selectedArt.newPrice}</span>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold ml-2">50% OFF</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                   <Target className="text-gold-400 mt-1" />
                   <div>
                     <span className="block font-bold text-dark-900 text-sm uppercase">Local Sugerido</span>
                     <span className="text-neutral-600">{selectedArt.placement}</span>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <Ruler className="text-gold-400 mt-1" />
                   <div>
                     <span className="block font-bold text-dark-900 text-sm uppercase">Tamanho</span>
                     <span className="text-neutral-600">{selectedArt.size}</span>
                   </div>
                </div>
                <div className="flex items-start gap-3">
                   <Tag className="text-gold-400 mt-1" />
                   <div>
                     <span className="block font-bold text-dark-900 text-sm uppercase">Exclusividade</span>
                     <span className="text-neutral-600">Arte única (flash), não será repetida.</span>
                   </div>
                </div>
              </div>

              <div className="mt-auto">
                <p className="text-sm text-neutral-500 mb-4 text-center">
                  Tem dúvidas ou quer ver em outro local do corpo?
                </p>
                <a 
                  href={getWhatsAppLink(selectedArt)}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02]"
                >
                  Reservar pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Exclusive;