import React from 'react';
import { Heart, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function About({ t }) {
  return (
    <section id="historia" className="py-24 bg-white/70 relative border-t border-b border-cream-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column / Image Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image */}
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-cream-100 card-zoom">
                <img
                  src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1000&q=80"
                  alt="Helado artesanal en proceso de mantecado"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-cream-50/95 backdrop-blur-md border border-cream-200 rounded-2xl p-5 shadow-lg max-w-[240px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-xl bg-terracotta-500/10 text-terracotta-600">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-bold text-cacao-900">
                    Mestria Gelatera
                  </span>
                </div>
                <p className="text-[11px] text-cacao-700 leading-snug font-medium">
                  Tradicíó italiana pura fusionada amb l'estima per Bunyol.
                </p>
              </div>

              {/* Background Accent Element */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-caramel-400/15 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-terracotta-600 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.about.tag}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight leading-tight mb-6">
              {t.about.title}
            </h2>

            <div className="space-y-4 text-cacao-700 font-light text-base sm:text-lg leading-relaxed mb-8">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Editorial Quote */}
            <div className="border-l-2 border-terracotta-500 pl-6 py-2 mb-8 bg-cream-100/50 rounded-r-2xl">
              <p className="font-serif italic text-lg sm:text-xl text-cacao-800 mb-2">
                {t.about.quote}
              </p>
              <span className="text-xs font-semibold uppercase tracking-wider text-terracotta-600">
                {t.about.author}
              </span>
            </div>

            {/* Badges / Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-cream-200">
              {t.about.badges.map((b, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-cacao-900 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pistachio-600" />
                    {b.label}
                  </span>
                  <span className="text-xs text-cacao-600">
                    {b.desc}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
