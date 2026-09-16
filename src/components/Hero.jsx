import React, { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export default function Hero({ lang, t }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be deferred until user interaction on power-saving modes
      });
    }
  }, []);

  return (
    <section
      id="inici"
      className="relative w-full h-screen min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden bg-cacao-900"
    >
      {/* Full-Screen Looping Muted Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/gelato/hero_poster.jpg"
          className="w-full h-full object-cover scale-105"
        >
          <source src="/videos/trim.mp4" type="video/mp4" />
          {lang === 'ca'
            ? 'El vostre navegador no admet la reproducció de vídeos.'
            : 'Tu navegador no soporta la reproducción de vídeos.'}
        </video>

        {/* Lighter, Luminous Overlay to Showcase the Video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/50" />
      </div>

      {/* Foreground Content: Centered Heading & Call-to-Action */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center pt-12 pb-8">
        
        {/* Official Logo Emblem */}
        <div className="mb-5 transform hover:scale-105 transition-transform duration-500">
          <img
            src="/images/logo.png"
            alt="Gelateria Artigianale Al Bacio"
            className="w-56 sm:w-72 md:w-80 h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
          />
        </div>

        {/* Location Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-5 text-[11px] uppercase tracking-[0.25em] text-caramel-300 font-semibold shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-caramel-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Separator Line */}
        <div className="w-20 h-0.5 bg-caramel-400/90 mb-5 rounded-full shadow" />

        {/* Centered Heading (Official Slogan) */}
        <h1 className="font-serif italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-cream-50 leading-snug max-w-3xl mb-4 tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          "{t.hero.slogan}"
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-cream-100/95 max-w-xl font-light leading-relaxed mb-8 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          {t.hero.subtitle}
        </p>

        {/* Centered Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#gelats"
            className="inline-flex items-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 sm:px-9 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-[0_8px_25px_rgba(194,89,56,0.45)] hover:shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t.hero.exploreBtn}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#historia"
            className="inline-flex items-center space-x-2 bg-black/25 hover:bg-black/40 backdrop-blur-md border border-white/50 text-white px-8 py-3.5 sm:py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            <span>{t.nav.story}</span>
          </a>
        </div>

      </div>

      {/* Frigidarium Down-Arrow Pagination Button */}
      <a
        href="#historia"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-caramel-400 flex flex-col items-center group transition-colors z-10"
        aria-label={lang === 'ca' ? 'Següent secció' : 'Siguiente sección'}
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
