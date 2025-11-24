import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Studio from './pages/Studio';
import Exclusive from './pages/Exclusive';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${isHome ? 'bg-dark-900 text-gold-200' : 'bg-paper text-dark-900'}`}>
      <Navbar isHome={isHome} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer isHome={isHome} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/estudio" element={<Studio />} />
          <Route path="/tattoos" element={<Exclusive />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;