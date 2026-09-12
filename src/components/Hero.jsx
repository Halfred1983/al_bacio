import React from 'react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ t }) {
  return (
    <section
      id="inici"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden bg-cacao-900"
    >
      {/* Immersive Background Image with Dark Vignette (Frigidarium style) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=2000&q=85"
          alt="Helado artesanal italiano Al Bacio"
          className="w-full h-full object-cover opacity-35 scale-105 transform animate-fadeIn duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cacao-900 via-cacao-900/60 to-cacao-900/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-16 pb-12">
        
        {/* Official Logo Emblem */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <img
            src="/images/logo.png"
            alt="Gelateria Artigianale Al Bacio"
            className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5 text-[11px] uppercase tracking-[0.25em] text-caramel-300 font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-caramel-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Separator Line (Frigidarium signature) */}
        <div className="w-24 h-0.5 bg-caramel-400/80 mb-6 rounded-full" />

        {/* Official Slogan Requested by User */}
        <h1 className="font-serif italic text-2xl sm:text-4xl md:text-5xl font-medium text-cream-50 leading-snug max-w-3xl mb-4 tracking-tight drop-shadow-md">
          "{t.hero.slogan}"
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-cream-200/90 max-w-xl font-light leading-relaxed mb-8">
          {t.hero.subtitle}
        </p>

        {/* Action Button (Frigidarium button style) */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#gelats"
            className="inline-flex items-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow-lg hover:shadow-xl transition-all"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#historia"
            className="inline-flex items-center space-x-2 bg-transparent hover:bg-white/10 border border-white/40 text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-all"
          >
            <span>{t.nav.story}</span>
          </a>
        </div>

      </div>

      {/* Frigidarium Down-Arrow Pagination Button */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-caramel-400 flex flex-col items-center group transition-colors"
        aria-label="Següent secció"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] mb-1 font-semibold opacity-75 group-hover:opacity-100">
          {t.hero.scrollDown}
        </span>
        <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:border-caramel-400 transition-colors animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </a>
    </section>
  );
}
