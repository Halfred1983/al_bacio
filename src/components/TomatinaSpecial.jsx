import React from 'react';
import { ChevronDown, Tv, MapPin } from 'lucide-react';

export default function TomatinaSpecial({ t }) {
  return (
    <section
      id="tomatina"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-cream-100/50 border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        <div className="bg-cacao-900 rounded-[2.5rem] overflow-hidden text-white shadow-2xl border border-cacao-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-full card-zoom">
              <img
                src="/images/gelato/tomatina.jpg"
                alt="Gelat La Tomatina de Bunyol"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-cacao-900/90 via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-6 left-6 bg-tomatina-500 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow flex items-center gap-1.5">
                <Tv className="w-3.5 h-3.5" />
                <span>{t.tomatina.tag}</span>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-left">
              
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-400 block mb-2">
                {t.tomatina.badge}
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cream-50 tracking-tight leading-tight mb-3">
                {t.tomatina.title}
              </h2>

              <p className="font-serif italic text-lg text-caramel-300 font-light mb-4">
                "{t.tomatina.subtitle}"
              </p>

              {/* Separator */}
              <div className="w-16 h-0.5 bg-tomatina-500 mb-6 rounded-full" />

              <p className="text-sm sm:text-base text-cream-200/90 font-light leading-relaxed mb-8">
                {t.tomatina.description}
              </p>

              <div>
                <a
                  href="#on-som"
                  className="inline-flex items-center space-x-2 bg-tomatina-500 hover:bg-tomatina-600 text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] shadow transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t.tomatina.button}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Down arrow to next section */}
      <a
        href="#instagram"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label="Següent secció"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
