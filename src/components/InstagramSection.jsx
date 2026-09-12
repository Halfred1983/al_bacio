import React from 'react';
import { ChevronDown, Instagram, ExternalLink, Heart } from 'lucide-react';
import { instagramPosts } from '../data/products';

export default function InstagramSection({ lang, t }) {
  return (
    <section
      id="instagram"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-white border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 block mb-2">
              {t.instagramSection.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cacao-900 tracking-tight mb-2">
              {t.instagramSection.title}
            </h2>
            <div className="w-16 h-0.5 bg-caramel-500 mb-3 rounded-full" />
            <p className="text-sm sm:text-base text-cacao-600 font-light">
              {t.instagramSection.subtitle}
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://www.instagram.com/gelateria.al.bacio.es/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow hover:shadow-lg transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>{t.instagramSection.followBtn}</span>
            </a>
          </div>
        </div>

        {/* Instagram Visual Post Grid (Inspired by People of Frigidarium) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 shadow-2xs hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Image Frame */}
              <div className="aspect-square relative overflow-hidden bg-cream-100 card-zoom">
                <img
                  src={post.image}
                  alt={post.caption[lang]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-3 left-3 bg-cacao-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {post.tag}
                </div>

                {/* Hover overlay with Instagram Icon */}
                <div className="absolute inset-0 bg-cacao-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-cacao-900 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Caption excerpt */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs text-cacao-700 font-light leading-relaxed line-clamp-3 mb-3">
                  {post.caption[lang]}
                </p>
                <div className="flex items-center justify-between text-[11px] font-bold text-cacao-500 pt-2 border-t border-cream-200/60">
                  <span>{post.date}</span>
                  <span className="text-terracotta-600 flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" />
                    Al Bacio
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* User's Official Slogan Banner */}
        <div className="p-4 bg-cream-100 rounded-2xl border border-cream-200 text-center max-w-2xl mx-auto">
          <p className="font-serif italic text-base text-cacao-800">
            "{t.hero.slogan}"
          </p>
        </div>

      </div>

      {/* Down arrow to next section */}
      <a
        href="#on-som"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label="Següent secció"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
