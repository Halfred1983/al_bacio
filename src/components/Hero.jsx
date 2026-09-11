import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, ChevronRight, Clock } from 'lucide-react';

export default function Hero({ t }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % t.hero.manifesto.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [t.hero.manifesto.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100/70 via-cream-50/50 to-cream-50 pointer-events-none" />
      
      {/* Subtle Warm Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-caramel-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-terracotta-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
        
        {/* Editorial Sub-badge */}
        <div className="inline-flex items-center space-x-2 bg-cream-100 border border-cream-200/90 rounded-full px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-cacao-700 font-medium shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-cacao-900 leading-[1.1] mb-6 max-w-4xl">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-cacao-700/90 max-w-2xl font-light leading-relaxed mb-10">
          {t.hero.subtitle}
        </p>

        {/* Rotating Editorial Manifesto (DeLaCrem style) */}
        <div className="w-full max-w-2xl bg-cream-100/90 backdrop-blur-xs border border-cream-200 rounded-2xl p-6 sm:p-7 mb-10 shadow-sm relative transition-all">
          <div className="text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-2">
            Manifesto Artigianale
          </div>
          <div className="min-h-[50px] flex items-center justify-center">
            <p className="font-serif italic text-lg sm:text-2xl text-cacao-800 transition-opacity duration-500">
              "{t.hero.manifesto[activeSlide]}"
            </p>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {t.hero.manifesto.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeSlide === idx ? 'w-8 bg-terracotta-500' : 'w-2 bg-cream-300'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#sabors"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-cacao-900 hover:bg-cacao-800 text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md"
          >
            <span>{t.hero.exploreBtn}</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <a
            href="#historia"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-cream-100 border border-cacao-800/30 text-cacao-800 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
          >
            <span>{t.hero.storyBtn}</span>
          </a>
        </div>

      </div>

      {/* Down indicator */}
      <a
        href="#historia"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-500 hover:text-terracotta-500 transition-colors p-2"
        aria-label="Següent secció"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
