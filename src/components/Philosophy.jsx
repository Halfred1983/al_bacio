import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export default function Philosophy({ t }) {
  const icons = [Sparkles, Leaf, ShieldCheck, HeartHandshake];

  return (
    <section id="filosofia" className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-3">
            {t.philosophy.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight mb-5">
            {t.philosophy.title}
          </h2>
          <p className="text-base sm:text-lg text-cacao-700 font-light leading-relaxed">
            {t.philosophy.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.philosophy.pillars.map((pillar, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xs border border-cream-200/90 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-caramel-500/70 group-hover:text-terracotta-500 transition-colors">
                      {pillar.num}
                    </span>
                    <div className="p-2.5 rounded-2xl bg-cream-100 text-cacao-800 group-hover:bg-terracotta-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-cacao-900 mb-3 group-hover:text-terracotta-600 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-cacao-700 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-100 flex items-center text-xs font-semibold text-terracotta-600 uppercase tracking-wider">
                  <span>Al Bacio Qualitat</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
