import React from 'react';
import { 
  ChevronDown, 
  Tv, 
  MapPin, 
  Sparkles, 
  Play, 
  ExternalLink, 
  Newspaper, 
  Award, 
  Quote 
} from 'lucide-react';
import { tomatinaVideos, pressArticles, getMediaLogos } from '../data/tomatinaPress';

export default function TomatinaSpecial({ lang, t }) {
  const logos = getMediaLogos(lang);

  return (
    <section
      id="tomatina"
      className="relative py-24 sm:py-32 bg-cacao-900 text-white overflow-hidden border-b border-cacao-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tomatina-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[30rem] h-[30rem] bg-caramel-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-tomatina-500/20 border border-tomatina-500/40 text-tomatina-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.tomatina.badge}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-cream-50 leading-tight mb-4">
            {t.tomatina.title}
          </h2>

          <div className="w-20 h-0.5 bg-tomatina-500 mx-auto mb-5 rounded-full" />

          <p className="text-base sm:text-lg text-cream-200/90 font-light leading-relaxed max-w-2xl mx-auto">
            {t.tomatina.subtitle}
          </p>
        </div>

        {/* Media Recognition Bar */}
        <div className="mb-16 p-4 sm:p-6 rounded-3xl bg-cacao-800/60 border border-cacao-700/70 backdrop-blur-sm shadow-xl">
          <div className="text-center mb-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-bold text-caramel-400">
              {t.tomatina.pressBadge}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {logos.map((outlet) => (
              <span
                key={outlet}
                className="px-3 py-1 rounded-full text-xs font-semibold bg-cacao-900/80 text-cream-100/90 border border-cacao-700 hover:border-tomatina-500/70 transition-colors"
              >
                {outlet}
              </span>
            ))}
          </div>
        </div>

        {/* Master Story Card: Diego Salvati & The Craft */}
        <div className="bg-cacao-800/70 rounded-[2.5rem] border border-cacao-700/80 shadow-2xl overflow-hidden mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Diego Salvati Photo */}
            <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full card-zoom">
              <img
                src="/images/tomatina/diego_salvati.jpg"
                alt={lang === 'ca' ? "Diego Salvati amb el gelat La Tomatina a Bunyol" : "Diego Salvati con el helado La Tomatina en Buñol"}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cacao-900/95 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-cacao-900/90 opacity-90" />
              
              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6">
                <span className="inline-block bg-tomatina-500 text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow mb-2">
                  {lang === 'ca' ? 'Al Bacio · Bunyol' : 'Al Bacio · Buñol'}
                </span>
                <p className="text-xs sm:text-sm text-cream-100 font-medium">
                  {t.tomatina.photoDiegoCaption}
                </p>
              </div>
            </div>

            {/* Right: The 3-Act Story & Stats */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-caramel-400 block mb-2">
                  {t.tomatina.storyTitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50 mb-6">
                  "{t.tomatina.tagline}"
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-cream-200/90 font-light leading-relaxed mb-8">
                  <p>{t.tomatina.storyP1}</p>
                  <p>{t.tomatina.storyP2}</p>
                  <p>{t.tomatina.storyP3}</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="pt-6 border-t border-cacao-700/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {t.tomatina.craftStats.map((stat, i) => (
                    <div key={i} className="p-3 bg-cacao-900/60 rounded-2xl border border-cacao-700/50 text-center">
                      <div className="font-serif text-xl sm:text-2xl font-bold text-tomatina-400 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-cream-300/80 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Video Reports Section */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-400 block mb-1">
              {t.tomatina.videoTitle}
            </span>
            <p className="text-sm text-cream-300 font-light">
              {t.tomatina.videoSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {tomatinaVideos.map((video) => (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-cacao-800/80 rounded-3xl overflow-hidden border border-cacao-700 hover:border-tomatina-500/80 shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
              >
                {/* Video Thumbnail */}
                <div className="aspect-video relative overflow-hidden bg-black">
                  <img
                    src={video.image}
                    alt={video.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-tomatina-500 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-cacao-900/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cacao-700">
                    <div className="flex items-center gap-1.5">
                      <Tv className="w-3 h-3 text-tomatina-400" />
                      <span>{typeof video.badge === 'object' ? video.badge[lang] : video.badge}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-caramel-400 uppercase tracking-wider block mb-1">
                      {typeof video.channel === 'object' ? video.channel[lang] : video.channel}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-cream-50 group-hover:text-tomatina-400 transition-colors">
                      {video.title[lang]}
                    </h4>
                  </div>

                  <div className="mt-4 pt-3 border-t border-cacao-700/60 flex items-center justify-between text-xs font-semibold text-cream-300 group-hover:text-white">
                    <span>{t.tomatina.watchVideo}</span>
                    <ExternalLink className="w-4 h-4 text-tomatina-400" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Press Articles & Quotes Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-400 block mb-1">
              {t.tomatina.pressTitle}
            </span>
            <p className="text-sm text-cream-300 font-light">
              {t.tomatina.pressSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-cacao-800/60 hover:bg-cacao-800 p-6 rounded-3xl border border-cacao-700/70 hover:border-tomatina-500/70 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-tomatina-400">
                      {typeof article.outlet === 'object' ? article.outlet[lang] : article.outlet}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cacao-700/80 text-cream-300">
                      {typeof article.tag === 'object' ? article.tag[lang] : article.tag}
                    </span>
                  </div>

                  <p className="font-serif italic text-sm sm:text-base text-cream-100 font-light leading-relaxed mb-4 group-hover:text-cream-50">
                    {article.quote[lang]}
                  </p>

                  <h4 className="text-xs text-cream-300 font-light leading-snug line-clamp-2">
                    {article.headline[lang]}
                  </h4>
                </div>

                <div className="mt-5 pt-3 border-t border-cacao-700/60 flex items-center justify-between text-xs font-semibold text-caramel-400 group-hover:text-tomatina-400 transition-colors">
                  <span>{t.tomatina.readArticle}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center pt-8">
          <a
            href="#on-som"
            className="inline-flex items-center space-x-2 bg-tomatina-500 hover:bg-tomatina-600 text-white px-9 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <MapPin className="w-4 h-4" />
            <span>{t.tomatina.visitButton}</span>
          </a>
        </div>

      </div>

      {/* Down arrow to location & contact */}
      <a
        href="#on-som"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cream-400 hover:text-tomatina-400 p-2 transition-colors"
        aria-label={lang === 'ca' ? 'Següent secció' : 'Siguiente sección'}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
