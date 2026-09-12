import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inici', label: t.nav.home },
    { href: '#historia', label: t.nav.story },
    { href: '#filosofia', label: t.nav.craft },
    { href: '#gelats', label: t.nav.flavors },
    { href: '#tomatina', label: t.nav.tomatina },
    { href: '#instagram', label: t.nav.instagram },
    { href: '#on-som', label: t.nav.visit },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-2.5'
          : 'bg-gradient-to-b from-cacao-900/70 via-cacao-900/30 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#inici" className="flex items-center space-x-3 group">
          <img
            src="/images/logo.png"
            alt="Gelateria Artigianale Al Bacio Buñol"
            className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation (Frigidarium Style) */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                isScrolled
                  ? 'text-cacao-800 hover:text-terracotta-600'
                  : 'text-white/90 hover:text-caramel-400 drop-shadow-xs'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Toggle & CTA) */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/80 backdrop-blur-xs rounded-full p-1 border border-cream-300 shadow-2xs text-[11px] font-bold">
            <button
              onClick={() => setLang('ca')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'ca'
                  ? 'bg-cacao-900 text-white shadow-xs'
                  : 'text-cacao-700 hover:text-cacao-900'
              }`}
              title="Valencià"
            >
              VAL
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full transition-all ${
                lang === 'es'
                  ? 'bg-cacao-900 text-white shadow-xs'
                  : 'text-cacao-700 hover:text-cacao-900'
              }`}
              title="Español"
            >
              ESP
            </button>
          </div>

          <a
            href="#on-som"
            className="inline-flex items-center space-x-1.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.nav.contactBtn}</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-white/90 rounded-full p-0.5 border border-cream-300 text-[10px] font-bold">
            <button
              onClick={() => setLang('ca')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'ca' ? 'bg-cacao-900 text-white' : 'text-cacao-700'
              }`}
            >
              VAL
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-2 py-0.5 rounded-full ${
                lang === 'es' ? 'bg-cacao-900 text-white' : 'text-cacao-700'
              }`}
            >
              ESP
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-cacao-900' : 'text-white'
            }`}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-50/98 backdrop-blur-lg border-b border-cream-200 px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold uppercase tracking-wider text-cacao-800 hover:text-terracotta-500 py-1.5 border-b border-cream-200/50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#on-som"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-terracotta-500 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.nav.contactBtn}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
