import React from 'react';
import { ChevronDown, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function Philosophy({ lang, t }) {
  return (
    <section
      id="filosofia"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-cream-50/70 border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text & Content Column */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-caramel-500" />
              <span>{t.craft.badge}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight leading-tight mb-4">
              {t.craft.title}
            </h2>

            {/* Separator */}
            <div className="w-20 h-0.5 bg-caramel-500 mb-6 rounded-full" />

            <p className="text-sm sm:text-base text-cacao-700 font-light leading-relaxed mb-6 max-w-lg">
              {t.craft.description}
            </p>

            {/* Feature List */}
            <div className="space-y-3 mb-8 w-full max-w-md text-left">
              {t.craft.features.map((feat, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-2xl border border-cream-200 shadow-2xs">
                  <div className="w-6 h-6 rounded-full bg-pistachio-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-pistachio-600 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-cacao-800">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <a
              href="#gelats"
              className="inline-flex items-center space-x-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow transition-all"
            >
              <span>{t.craft.button}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

          {/* Photos Column (Frigidarium 2-column portrait gallery style) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg card-zoom border-2 border-white">
                <img
                  src="/images/gelato/craft_1.jpg"
                  alt="Casa Baltar Dulce de Leche"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white rounded-2xl border border-cream-200 text-center shadow-2xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cacao-800">
                  {t.craft.baltarBadge}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg card-zoom border-2 border-white">
                <img
                  src="/images/gelato/craft_2.jpg"
                  alt="Mantecat artesanal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white rounded-2xl border border-cream-200 text-center shadow-2xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cacao-800">
                  {t.craft.dailyBadge}
                </span>
              </div>
            </div>
          </div>

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
