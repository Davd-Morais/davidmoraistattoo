import React from 'react';
import { Instagram, Smartphone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  isHome: boolean;
}

const Footer: React.FC<FooterProps> = ({ isHome }) => {
  const baseClasses = isHome ? 'bg-black text-gold-200 border-t border-gold-200/20' : 'bg-gold-200 text-dark-900';
  const iconClasses = isHome ? 'text-gold-200 hover:text-white' : 'text-dark-900 hover:text-white';

  return (
    <footer className={`${baseClasses} py-12 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h3 className="font-serif text-2xl mb-4">DAVID MORAIS</h3>
          <p className="font-sans text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
            Transformando ideias em arte na pele desde 2020. 
            Especialista em Blackwork, Fineline e Tattoos Geek.
          </p>
        </div>

        {/* Contact Mini */}
        <div>
          <h4 className="font-serif text-lg mb-4 uppercase tracking-wider">Contato</h4>
          <ul className="space-y-3 font-sans text-sm opacity-90 flex flex-col items-center md:items-start">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> R. Marquês de Tamandaré, 120, Caruaru
            </li>
            <li className="flex items-center gap-2">
              <Smartphone size={16} /> (81) 9 9249-9184
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> davidtattoodoismil@gmail.com
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center md:items-end">
           <h4 className="font-serif text-lg mb-4 uppercase tracking-wider">Redes Sociais</h4>
           <div className="flex gap-4">
             <a href="https://www.instagram.com/davidtattoo_art/" target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-110 ${iconClasses}`}>
               <Instagram size={28} />
             </a>
             <a href="https://wa.me/message/FUA2THUSJVWFH1" target="_blank" rel="noopener noreferrer" className={`transition-transform hover:scale-110 ${iconClasses}`}>
               <Smartphone size={28} />
             </a>
           </div>
           <p className="mt-6 text-xs opacity-60 font-sans">
             © 2023 David Morais Tattoo.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;