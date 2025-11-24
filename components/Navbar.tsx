import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  isHome: boolean;
}

const navItems: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Estúdio', path: '/estudio' },
  { label: 'Tattoos Exclusivas', path: '/tattoos' },
  { label: 'Contato', path: '/contato' },
];

const Navbar: React.FC<NavbarProps> = ({ isHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const getHeaderClasses = () => {
    if (isOpen) return 'bg-dark-900'; // Mobile menu open
    if (isHome) {
      return scrolled ? 'bg-dark-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent';
    }
    return 'bg-paper border-b border-dark-900/10';
  };

  const getLinkClasses = (isActive: boolean) => {
    if (isHome || isOpen) {
      return isActive ? 'text-white font-bold' : 'text-gold-200 hover:text-white';
    }
    return isActive ? 'text-black font-bold' : 'text-dark-800 hover:text-gold-400';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${getHeaderClasses()}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="z-50 group">
          <div className="flex flex-col items-start leading-none">
            <span className={`font-serif text-2xl tracking-widest ${isHome || isOpen ? 'text-gold-200' : 'text-dark-900'}`}>
              DAVID MORAIS
            </span>
            <span className={`font-sans text-xs tracking-[0.3em] uppercase ${isHome || isOpen ? 'text-white/60' : 'text-dark-900/60'}`}>
              Tattoo Artist
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-sans text-sm uppercase tracking-wider transition-colors duration-300 ${getLinkClasses(location.pathname === item.path)}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-8 h-8 text-gold-200" />
          ) : (
            <Menu className={`w-8 h-8 ${isHome ? 'text-gold-200' : 'text-dark-900'}`} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="font-serif text-3xl text-gold-200 hover:text-white tracking-widest"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;