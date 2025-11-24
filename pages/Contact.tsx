import React from 'react';
import { MapPin, Mail, Smartphone, Instagram, MessageCircle } from 'lucide-react';

const ContactItem = ({ icon: Icon, title, content, link }: { icon: any, title: string, content: string, link?: string }) => (
  <a 
    href={link} 
    target={link ? "_blank" : undefined}
    rel={link ? "noopener noreferrer" : undefined}
    className={`flex flex-col items-center p-8 bg-white rounded-xl shadow-lg border border-gold-100 hover:border-gold-300 hover:-translate-y-1 transition-all duration-300 w-full ${link ? 'cursor-pointer' : 'cursor-default'}`}
  >
    <div className="w-14 h-14 bg-gold-100/50 rounded-full flex items-center justify-center mb-4 text-dark-900">
      <Icon size={28} />
    </div>
    <h3 className="font-serif text-xl mb-2 text-dark-900">{title}</h3>
    <p className="font-sans text-neutral-600 text-center">{content}</p>
  </a>
);

const Contact = () => {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center animate-fade-in-up">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl md:text-6xl text-dark-900 mb-4">CONTATO</h1>
        <div className="h-1 w-20 bg-gold-300 mx-auto"></div>
        <p className="mt-4 font-sans text-neutral-500 max-w-lg mx-auto">
          Fale comigo para tirar suas dúvidas, agendar sua tattoo ou conversar sobre sua ideia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full mb-16">
        <ContactItem 
          icon={MapPin} 
          title="Endereço" 
          content="R. Marquês de Tamandaré, 120, Caruaru" 
          link="https://maps.app.goo.gl/fNfYrHGmqEHwAtHu8"
        />
        <ContactItem 
          icon={Mail} 
          title="Email" 
          content="davidtattoodoismil@gmail.com" 
          link="mailto:davidtattoodoismil@gmail.com"
        />
        <ContactItem 
          icon={Smartphone} 
          title="WhatsApp" 
          content="(81) 9 9249-9184" 
          link="https://wa.me/message/FUA2THUSJVWFH1"
        />
      </div>

      <div className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto border border-gold-100">
        <h2 className="font-serif text-2xl text-dark-900 mb-4">Redes Sociais</h2>
        <div className="flex justify-center gap-6">
           <a 
             href="https://www.instagram.com/davidtattoo_art/" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-dark-900 text-gold-200 rounded-full hover:bg-gold-200 hover:text-dark-900 transition-colors"
           >
             <Instagram size={20} />
             <span className="font-sans font-bold">Instagram</span>
           </a>
           <a 
             href="https://wa.me/message/FUA2THUSJVWFH1" 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
           >
             <MessageCircle size={20} />
             <span className="font-sans font-bold">WhatsApp</span>
           </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;