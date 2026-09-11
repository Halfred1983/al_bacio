import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Menu from './components/Menu';
import FlavorQuiz from './components/FlavorQuiz';
import TomatinaSpecial from './components/TomatinaSpecial';
import Gallery from './components/Gallery';
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
    <div className="min-h-screen flex flex-col bg-cream-50 text-cacao-900 font-sans selection:bg-terracotta-500 selection:text-white">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main className="flex-grow">
        <Hero t={t} />
        <About t={t} />
        <Philosophy t={t} />
        <Menu lang={lang} t={t} />
        <FlavorQuiz lang={lang} t={t} />
        <TomatinaSpecial t={t} />
        <Gallery t={t} />
        <LocationHours t={t} />
      </main>
      <Footer t={t} lang={lang} />
    </div>
  );
}
