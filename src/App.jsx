import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import PaginationDots from './components/PaginationDots';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import TomatinaSpecial from './components/TomatinaSpecial';
import InstagramSection from './components/InstagramSection';
import LocationHours from './components/LocationHours';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('albacio_lang');
    return saved === 'es' ? 'es' : 'ca';
  });

  useEffect(() => {
    localStorage.setItem('albacio_lang', lang);
    document.documentElement.lang = lang === 'ca' ? 'ca' : 'es';
  }, [lang]);

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-cacao-900 font-sans selection:bg-terracotta-500 selection:text-white relative">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <PaginationDots t={t} />
      
      <main className="flex-grow">
        <Hero lang={lang} t={t} />
        <About lang={lang} t={t} />
        <Philosophy lang={lang} t={t} />
        <Menu lang={lang} t={t} />
        <TomatinaSpecial lang={lang} t={t} />
        <InstagramSection lang={lang} t={t} />
        <LocationHours lang={lang} t={t} />
      </main>

      <Footer t={t} lang={lang} />
    </div>
  );
}
