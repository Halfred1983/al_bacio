import React from 'react';
import { ChevronDown, Sparkles, Flame, Coffee, MapPin } from 'lucide-react';

export default function WinterSpecial({ lang, t }) {
  return (
    <section
      id="hivern"
      className="min-h-screen flex flex-col justify-center relative py-20 sm:py-24 bg-gradient-to-b from-cream-100/90 via-cream-50 to-white border-b border-cream-200/80 overflow-hidden"
    >
      {/* Subtle warm ambient glow */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-terracotta-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-1/4 w-96 h-96 bg-caramel-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center space-x-2 bg-terracotta-500/15 border border-terracotta-500/30 text-terracotta-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.22em] mb-4 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-terracotta-600" />
            <span>{t.winter.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cacao-900 tracking-tight leading-tight mb-4">
            {t.winter.title}
          </h2>

          <div className="w-20 h-0.5 bg-caramel-500 mx-auto mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-cacao-700 font-light leading-relaxed max-w-2xl mx-auto">
            {t.winter.subtitle}
          </p>
        </div>

        {/* 3 Winter Special Cards (Portrait 3:4 aspect ratio to showcase full photos) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 mb-12">
          {t.winter.items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Full Portrait Image (3:4) */}
              <div className="aspect-[3/4] overflow-hidden bg-cream-100 card-zoom relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Top-Left Badge */}
                <div className="absolute top-3.5 left-3.5 bg-cacao-900/85 backdrop-blur-xs text-cream-50 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm border border-white/15">
                  {item.badge}
                </div>

                {/* Top-Right Seasonal Pill */}
                <div className="absolute top-3.5 right-3.5 bg-terracotta-500/95 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{lang === 'ca' ? 'Hivern' : 'Invierno'}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-terracotta-600 block mb-1.5">
                    {item.highlight}
                  </span>

                  <h3 className="font-serif text-2xl font-bold text-cacao-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-sm sm:text-base text-cacao-700 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-cream-200/80 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-cream-100 text-cacao-800 border border-cream-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-serif italic text-terracotta-600 font-medium shrink-0 ml-2">
                    Al Bacio
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Warm Pairing Banner */}
        <div className="bg-cacao-900 text-cream-50 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-cacao-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-terracotta-500/20 border border-terracotta-500/40 flex items-center justify-center shrink-0 text-caramel-400">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.22em] text-caramel-400 block mb-1">
                {t.winter.pairingBadge}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1.5">
                {t.winter.pairingTitle}
              </h3>
              <p className="text-sm sm:text-base text-cream-200/90 font-light leading-relaxed">
                {t.winter.pairingText}
              </p>
            </div>
          </div>

          <a
            href="#on-som"
            className="inline-flex items-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow-lg hover:scale-105 active:scale-95 transition-all shrink-0"
          >
            <MapPin className="w-4 h-4" />
            <span>{t.winter.ctaButton}</span>
          </a>
        </div>

      </div>

      {/* Down arrow to next section */}
      <a
        href="#gelats"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label={lang === 'ca' ? 'Següent secció' : 'Siguiente sección'}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
