import React from 'react';
import { ArrowUp, Instagram, MapPin } from 'lucide-react';

export default function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cacao-900 text-cream-100 relative pt-16 pb-12 border-t border-cacao-800 text-center">
      
      {/* Return to Top Button (Frigidarium style) */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white flex items-center justify-center shadow-lg transition-transform hover:-translate-y-1"
        aria-label="Tornar a dalt"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Official Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/images/logo.png"
            alt="Gelateria Al Bacio"
            className="h-16 w-auto object-contain brightness-110"
          />
        </div>

        {/* Official Slogan */}
        <p className="font-serif italic text-lg sm:text-xl text-caramel-300 font-medium mb-6">
          "{t.footer.slogan}"
        </p>

        {/* Separator */}
        <div className="w-16 h-0.5 bg-caramel-500/60 mx-auto mb-8 rounded-full" />

        {/* Navigation Links (100% in current language) */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-bold uppercase tracking-[0.2em] text-cream-300">
          <a href="#inici" className="hover:text-white transition-colors">{t.nav.home}</a>
          <a href="#historia" className="hover:text-white transition-colors">{t.nav.story}</a>
          <a href="#filosofia" className="hover:text-white transition-colors">{t.nav.craft}</a>
          <a href="#gelats" className="hover:text-white transition-colors">{t.nav.flavors}</a>
          <a href="#tomatina" className="hover:text-white transition-colors">{t.nav.tomatina}</a>
          <a href="#instagram" className="hover:text-white transition-colors">{t.nav.instagram}</a>
          <a href="#on-som" className="hover:text-white transition-colors">{t.nav.visit}</a>
        </nav>

        {/* Contact & Social */}
        <div className="space-y-2 text-xs text-cream-300 font-light mb-8">
          <p className="flex items-center justify-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
            <span>{t.footer.location}</span>
          </p>
          <p>
            <a
              href="https://www.instagram.com/gelateria.al.bacio.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-caramel-400 hover:text-caramel-300 font-bold tracking-wider"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@gelateria.al.bacio.es</span>
            </a>
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-cacao-800 text-[11px] text-cream-400/80 font-light">
          <p>© {new Date().getFullYear()} Gelateria Artigianale Al Bacio · {t.footer.rights}</p>
        </div>

      </div>
    </footer>
  );
}
