import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function About({ t }) {
  return (
    <section
      id="historia"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-white border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photos Column (Frigidarium 2-column portrait gallery style) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg card-zoom border-2 border-cream-100">
                <img
                  src="/images/gelato/about_1.jpg"
                  alt="Gelat artesanal Al Bacio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-cream-50 rounded-2xl border border-cream-200 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cacao-800">
                  {t.about.conesBadge}
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8 sm:pt-12">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg card-zoom border-2 border-cream-100">
                <img
                  src="/images/gelato/about_2.jpg"
                  alt="Obrador artesà Al Bacio a Bunyol"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-cream-50 rounded-2xl border border-cream-200 text-center">
                <span className="text-[11px] font-bold uppercase tracking-wider text-cacao-800">
                  {t.about.workshopBadge}
                </span>
              </div>
            </div>
          </div>

          {/* Text & Content Column (Frigidarium centered typography style) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Mini Logo Emblem */}
            <img
              src="/images/logo.png"
              alt="Al Bacio"
              className="h-12 w-auto mb-4 object-contain"
            />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 block mb-2">
              {t.about.badge}
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight leading-tight mb-4">
              {t.about.title}
            </h2>

            {/* Separator */}
            <div className="w-20 h-0.5 bg-caramel-500 mb-6 rounded-full" />

            {/* Concise text */}
            <p className="text-sm sm:text-base text-cacao-700 font-light leading-relaxed mb-6 max-w-lg">
              {t.about.description}
            </p>

            {/* Quote with the requested slogan */}
            <div className="p-4 sm:p-5 rounded-2xl bg-cream-100/70 border-l-4 border-terracotta-500 mb-8 max-w-lg">
              <p className="font-serif italic text-base sm:text-lg text-cacao-900 mb-1">
                "{t.about.quote}"
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-cacao-600">
                {t.about.author}
              </span>
            </div>

            {/* Button */}
            <a
              href="#gelats"
              className="inline-flex items-center space-x-2 bg-cacao-900 hover:bg-cacao-800 text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow transition-all"
            >
              <span>{t.about.button}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

          </div>

        </div>

      </div>

      {/* Down arrow to next section */}
      <a
        href="#filosofia"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label="Següent secció"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
