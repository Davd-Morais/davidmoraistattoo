import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MessageCircle, Calendar, PenTool, CheckCircle, HelpCircle, Star } from 'lucide-react';
import { Review, FaqItem } from '../types';

// --- Sub-components for Home Page ---

const StyleCarousel = ({ title, images, description }: { title: string, images: string[], description: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const current = scrollRef.current;
      const scrollAmount = current.offsetWidth * 0.8;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 border-b border-gold-200/10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 px-4">
        <h3 className="font-serif text-3xl md:text-4xl text-gold-200">{title}</h3>
        <p className="font-sans text-neutral-400 text-sm md:text-base mt-2 md:mt-0 max-w-md text-center md:text-right">
          {description}
        </p>
      </div>
      
      <div className="relative group px-4">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-gold-200 hover:bg-gold-200 hover:text-black transition-colors backdrop-blur-sm">
          <ChevronLeft size={24} />
        </button>
        
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x">
          {images.map((img, idx) => (
            <div key={idx} className="flex-none w-[280px] h-[350px] snap-center">
              <img 
                src={img} 
                alt={`${title} tattoo example ${idx + 1}`} 
                className="w-full h-full object-cover rounded-sm border border-gold-200/20 grayscale hover:grayscale-0 transition-all duration-500" 
              />
            </div>
          ))}
        </div>

        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full text-gold-200 hover:bg-gold-200 hover:text-black transition-colors backdrop-blur-sm">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

const ProcessStep = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-neutral-900/50 rounded-lg border border-neutral-800 hover:border-gold-200/50 transition-colors">
    <Icon className="w-10 h-10 text-gold-200 mb-4" />
    <h4 className="font-serif text-xl text-white mb-2">{title}</h4>
    <p className="font-sans text-neutral-400 text-sm">{desc}</p>
  </div>
);

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/30">
          <button 
            className="w-full flex justify-between items-center p-4 text-left hover:bg-neutral-800 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span className="font-serif text-lg text-gold-100">{item.question}</span>
            <ChevronRight className={`transform transition-transform duration-300 text-gold-200 ${openIndex === idx ? 'rotate-90' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 p-4 pt-0' : 'max-h-0'}`}>
            <p className="font-sans text-neutral-400 text-sm leading-relaxed border-t border-neutral-800 pt-4">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const reviews: Review[] = [
  { id: 1, name: "Maria Fernanda", role: "Enfermeira", text: "Eu fui muito bem recepcionada por David, o ambiente é extremamente acolhedor e o café é maravilhoso! Não consigo parar de admirar minha nova tattoo.", rating: 5 },
  { id: 2, name: "Theo Brayner", role: "Professor", text: "Tattoo perfeita, ótimo atendimento e studio muito confortável. Confio no cara de olhos fechados. Recomendo muito.", rating: 5 },
];

const faqs: FaqItem[] = [
  { question: "Quanto tempo leva para cicatrizar?", answer: "O processo de cicatrização pode levar de 2 a 4 semanas, dependendo do tamanho e da complexidade da tatuagem, assim como dos cuidados pós-procedimento." },
  { question: "É minha primeira tattoo, dói?", answer: "A dor é relativa, mas para a primeira vez recomendamos áreas menos sensíveis (como braço ou panturrilha) e desenhos menores para você conhecer sua tolerância." },
  { question: "Quais os cuidados pós-tattoo?", answer: "Manter a área limpa com sabonete neutro, hidratar com a pomada recomendada e evitar sol, mar e piscina durante a cicatrização." },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image/Overlay (Simulating video) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590246814883-051f694029b6?q=80&w=2070&auto=format&fit=crop" 
            alt="Tattoo Artist Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gold-200 mb-4 animate-fade-in">
            Tatuagem é arte.
          </h1>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 font-light">
            E seu corpo, a tela.
          </h2>
          <p className="font-sans text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Transforme sua pele em uma obra-prima com <strong className="text-gold-200">David Morais</strong>. 
            Explore nosso portfólio e agende sua sessão hoje mesmo.
          </p>
          <Link 
            to="/tattoos" 
            className="inline-block px-8 py-4 border border-gold-200 text-gold-200 font-serif tracking-[0.2em] text-sm md:text-base hover:bg-gold-200 hover:text-black transition-all duration-300 uppercase"
          >
            Ver Tattoos Exclusivas
          </Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24 px-6 bg-dark-900">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
           <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-gold-200 rounded-full blur-[100px] opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop" 
                alt="David Morais" 
                className="relative z-10 w-full max-w-md mx-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-black"
              />
           </div>
           <div className="w-full md:w-1/2 text-left">
              <h2 className="font-serif text-4xl text-white mb-6">Quem sou eu?</h2>
              <p className="font-sans text-neutral-400 leading-loose text-lg mb-6">
                Desde 2020, venho transformando ideias em arte na pele. Meu trabalho é focado em tatuagens que carregam significado, estilo e personalidade. 
                Seja no traço fino, no Blackwork ou em tattoos inspiradas em animes. Aqui, cada cliente é único.
              </p>
              <Link to="/sobre" className="text-gold-200 border-b border-gold-200 hover:text-white hover:border-white transition-colors pb-1 font-serif tracking-wide">
                Ler biografia completa
              </Link>
           </div>
        </div>
      </section>

      {/* Styles Carousels */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-white mb-16">Estilos que Tatuo</h2>
          
          <StyleCarousel 
            title="Blackwork" 
            description="Estilo caracterizado pelo uso de tinta preta sólida, criando uma tattoo impactante."
            images={[
              "https://images.unsplash.com/photo-1550537687-c913538421d0?q=80&w=2070&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1574163972621-c1240c34e8d3?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1621183353597-285b7367375a?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=1974&auto=format&fit=crop"
            ]}
          />
           <StyleCarousel 
            title="Geek / Anime" 
            description="Estilo caracterizado por elementos da cultura pop e geek."
            images={[
              "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2080&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1606411586567-62e9c277df5b?q=80&w=2012&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop"
            ]}
          />
           <StyleCarousel 
            title="Fineline" 
            description="Estilo caracterizado por linhas finas e detalhes delicados."
            images={[
              "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1621183353526-9e65e5243888?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1598556847285-d72b2518df92?q=80&w=1974&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2070&auto=format&fit=crop"
            ]}
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 px-6 bg-dark-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-white mb-2">Como Funciona?</h2>
            <p className="font-sans text-gold-200">Do contato à cicatrização</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProcessStep icon={MessageCircle} title="1. Contato" desc="Me chama no WhatsApp ou Instagram com a sua ideia." />
            <ProcessStep icon={PenTool} title="2. Criação" desc="Eu desenvolvo sua tattoo com base na ideia e ajustamos até ficar perfeita." />
            <ProcessStep icon={Calendar} title="3. Agendamento" desc="Você envia o sinal e marcamos o dia da sua sessão." />
            <ProcessStep icon={CheckCircle} title="4. Tattoo" desc="Você vem ao estúdio e fazemos a sua arte na pele." />
            <ProcessStep icon={HelpCircle} title="5. Cuidados" desc="Explico tudo pra sua tattoo cicatrizar perfeita." />
            <ProcessStep icon={Star} title="6. Resultado" desc="Você sai com uma obra de arte única no corpo." />
          </div>
        </div>
      </section>

      {/* FAQ & Reviews */}
      <section className="py-24 px-6 bg-dark-800">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* FAQ */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-8 flex items-center gap-3">
                <HelpCircle className="text-gold-200" /> Dúvidas Frequentes
              </h2>
              <FaqAccordion items={faqs} />
            </div>

            {/* Reviews */}
            <div>
              <h2 className="font-serif text-3xl text-white mb-8 flex items-center gap-3">
                <Star className="text-gold-200" /> O que dizem
              </h2>
              <div className="space-y-6">
                {reviews.map(review => (
                  <div key={review.id} className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
                    <div className="flex gap-1 mb-3 text-gold-200">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="font-sans text-neutral-300 italic mb-4">"{review.text}"</p>
                    <div>
                      <span className="font-serif text-white block">{review.name}</span>
                      <span className="font-sans text-neutral-500 text-xs uppercase tracking-wider">{review.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default Home;