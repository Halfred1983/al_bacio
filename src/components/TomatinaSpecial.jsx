import React from 'react';
import { Tv, Sparkles, Award, MapPin } from 'lucide-react';

export default function TomatinaSpecial({ t }) {
  return (
    <section id="tomatina" className="py-24 bg-gradient-to-b from-white via-cream-50/50 to-white relative overflow-hidden">
      
      {/* Background Accent Graphics */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-tomatina-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-caramel-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-cacao-900 rounded-[2.5rem] overflow-hidden text-white shadow-2xl border border-cacao-800">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Text & Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                {/* Media Badge */}
                <div className="inline-flex items-center space-x-2 bg-tomatina-500/90 text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                  <Tv className="w-3.5 h-3.5" />
                  <span>{t.tomatina.mediaBadge}</span>
                </div>

                <span className="text-xs font-bold uppercase tracking-widest text-caramel-400 block mb-2">
                  {t.tomatina.tag}
                </span>

                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-4 text-cream-50 leading-tight">
                  {t.tomatina.title}
                </h2>

                <p className="font-serif italic text-lg sm:text-xl text-caramel-300/90 mb-6 font-light">
                  {t.tomatina.subtitle}
                </p>

                <p className="text-cream-200/90 text-sm sm:text-base font-light leading-relaxed mb-8">
                  {t.tomatina.description}
                </p>

                {/* Highlight Callout */}
                <div className="border-l-2 border-tomatina-500 pl-4 py-1 bg-cacao-800/60 rounded-r-xl mb-8">
                  <p className="text-xs sm:text-sm font-medium text-cream-100">
                    🍅 {t.tomatina.highlight}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-cacao-800">
                <a
                  href="#on-som"
                  className="inline-flex items-center space-x-2 bg-tomatina-500 hover:bg-tomatina-600 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow hover:shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Tastar a Bunyol</span>
                </a>

                <span className="text-xs text-cream-300 font-light italic">
                  Av. de la Música, 12 · Bunyol
                </span>
              </div>
            </div>

            {/* Visual Image Column */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-auto bg-cacao-800 card-zoom">
              <img
                src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=1200&q=85"
                alt="Helado artesanal de Tomate La Tomatina"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-cacao-900 via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-cacao-900/80 backdrop-blur-md border border-cacao-700/80">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-tomatina-500 text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">
                      Festa de La Tomatina
                    </div>
                    <div className="text-[11px] text-cream-300 font-light">
                      Orgull de Bunyol & artesania gelatera italiana
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
