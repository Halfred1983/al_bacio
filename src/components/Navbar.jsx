import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, MapPin, Sparkles } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#historia', label: t.nav.story },
    { href: '#filosofia', label: t.nav.craft },
    { href: '#sabors', label: t.nav.flavors },
    { href: '#quiz', label: t.nav.match },
    { href: '#tomatina', label: t.nav.tomatina },
    { href: '#on-som', label: t.nav.visit },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm border-b border-cream-200/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-cacao-900 group-hover:text-terracotta-500 transition-colors">
            Al Bacio
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-cacao-600 -mt-1">
            Gelateria Artigianale · Buñol
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-cacao-700 hover:text-terracotta-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Language Toggle & CTA) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-cream-100 rounded-full p-1 border border-cream-200 text-xs font-semibold">
            <button
              onClick={() => setLang('ca')}
              className={`px-2.5 py-1 rounded-full transition-all ${
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
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === 'es'
                  ? 'bg-cacao-900 text-white shadow-xs'
                  : 'text-cacao-700 hover:text-cacao-900'
              }`}
              title="Castellano"
            >
              ESP
            </button>
          </div>

          <a
            href="#on-som"
            className="inline-flex items-center space-x-1.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-medium uppercase tracking-wider px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.nav.cta}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-2 md:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-cream-100 rounded-full p-0.5 border border-cream-200 text-[11px] font-semibold">
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
            className="p-2 text-cacao-800 hover:text-terracotta-500 focus:outline-none"
            aria-label="Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-lg border-b border-cream-200 px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold uppercase tracking-wider text-cacao-800 hover:text-terracotta-500 py-1.5 border-b border-cream-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#on-som"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-terracotta-500 text-white text-xs font-semibold uppercase tracking-wider py-3 rounded-full shadow"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
