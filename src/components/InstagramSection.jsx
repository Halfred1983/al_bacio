import React, { useState } from 'react';
import { 
  ChevronDown, 
  Instagram, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Grid, 
  Film, 
  CheckCircle2, 
  X,
  Share2
} from 'lucide-react';
import { instagramPosts } from '../data/products';

export default function InstagramSection({ lang, t }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const facebookUrl = "https://www.facebook.com/people/Gelateria-Artigianale-Al-Bacio/61590366077242/";
  const instagramUrl = "https://www.instagram.com/gelateria.al.bacio.es/";

  return (
    <section
      id="instagram"
      className="relative py-24 sm:py-32 bg-cream-50/70 border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 block mb-2">
            {t.instagramSection.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cacao-900 tracking-tight mb-3">
            {t.instagramSection.title}
          </h2>
          <div className="w-16 h-0.5 bg-caramel-500 mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-base text-cacao-600 font-light leading-relaxed">
            {t.instagramSection.subtitle}
          </p>
        </div>

        {/* Instagram Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200 shadow-sm max-w-4xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Avatar with Animated Instagram Gradient Story Ring */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-md">
                <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                  <img
                    src="/og-image.jpg"
                    alt="Gelateria Artigianale Al Bacio"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white p-1.5 rounded-full shadow border-2 border-white">
                <Instagram className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-cacao-900">
                    {t.instagramSection.handle}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500/20" />
                </div>

                {/* Follow Buttons */}
                <div className="flex items-center justify-center sm:justify-end gap-2.5">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 hover:opacity-95 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-xs hover:shadow transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>{t.instagramSection.followBtn}</span>
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 bg-cream-100 hover:bg-cream-200 text-cacao-800 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3 h-3 text-cacao-500" />
                  </a>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex justify-center sm:justify-start gap-6 text-xs text-cacao-700 mb-3 border-y sm:border-y-0 border-cream-100 py-2 sm:py-0">
                <div>
                  <strong className="font-bold text-cacao-900">8</strong> {lang === 'ca' ? 'publicacions' : 'publicaciones'}
                </div>
                <div>
                  <strong className="font-bold text-cacao-900">1.8k</strong> {lang === 'ca' ? 'seguidors' : 'seguidores'}
                </div>
                <div>
                  <strong className="font-bold text-cacao-900">240</strong> {lang === 'ca' ? 'seguint' : 'seguidos'}
                </div>
              </div>

              {/* Bio */}
              <div>
                <p className="font-serif font-bold text-sm text-cacao-900">
                  {t.instagramSection.profileName}
                </p>
                <p className="text-xs text-caramel-600 font-medium mb-1">
                  {t.instagramSection.category}
                </p>
                <p className="text-xs text-cacao-600 font-light leading-relaxed">
                  {t.instagramSection.bio}
                </p>
              </div>
            </div>

          </div>

          {/* Stories Highlights Bar */}
          <div className="pt-6 mt-6 border-t border-cream-100 flex items-center justify-center sm:justify-start gap-5 sm:gap-7 overflow-x-auto no-scrollbar">
            {t.instagramSection.stories.map((story, idx) => (
              <a
                key={idx}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 shrink-0 group cursor-pointer"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                    <img
                      src={story.img}
                      alt={story.label}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <span className="text-[11px] font-medium text-cacao-700 group-hover:text-terracotta-600 transition-colors">
                  {story.label}
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* Feed Tab Header */}
        <div className="max-w-6xl mx-auto flex items-center justify-center border-t border-cream-200/80 pt-4 mb-6">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.18em] text-cacao-900 border-t-2 border-cacao-900 -mt-[17px] pt-4 px-4">
            <Grid className="w-3.5 h-3.5 text-cacao-900" />
            <span>{t.instagramSection.tabs.posts}</span>
          </div>
        </div>

        {/* Instagram 8-Post Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 max-w-6xl mx-auto mb-12">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group aspect-square relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-100 border border-cream-200 cursor-pointer shadow-2xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.caption[lang]}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              {/* Tag Badge */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-cacao-900/80 backdrop-blur-xs text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full border border-white/10 z-10 pointer-events-none">
                {typeof post.tag === 'object' ? post.tag[lang] : post.tag}
              </div>

              {/* Hover Overlay with Likes and Comments */}
              <div className="absolute inset-0 bg-cacao-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 sm:gap-6 text-white text-xs sm:text-sm font-bold z-20">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Official Slogan Banner */}
        <div className="p-4 bg-white/80 backdrop-blur-xs rounded-2xl border border-cream-200 text-center max-w-2xl mx-auto shadow-2xs">
          <p className="font-serif italic text-sm sm:text-base text-cacao-800">
            "{t.hero.slogan}"
          </p>
        </div>

      </div>

      {/* Post Preview Modal (Instagram Style) */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-cream-200 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-cream-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                    <img src="/og-image.jpg" alt="Al Bacio" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-cacao-900 flex items-center gap-1.5">
                    <span>{t.instagramSection.handle}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 fill-sky-500/20" />
                  </div>
                  <div className="text-[11px] text-cacao-500">
                    {lang === 'ca' ? 'Bunyol, València' : 'Buñol, Valencia'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="p-1.5 rounded-full text-cacao-500 hover:text-cacao-900 hover:bg-cream-100 transition-colors"
                aria-label="Tancar / Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="aspect-square bg-black overflow-hidden relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Footer / Caption */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3 text-xs">
                <div className="flex items-center gap-4 text-cacao-800 font-bold">
                  <span className="flex items-center gap-1.5 text-rose-600">
                    <Heart className="w-4 h-4 fill-current" />
                    {selectedPost.likes} {lang === 'ca' ? 'm\'agrada' : 'me gusta'}
                  </span>
                  <span className="flex items-center gap-1.5 text-cacao-600">
                    <MessageCircle className="w-4 h-4" />
                    {selectedPost.comments}
                  </span>
                </div>
                <span className="text-xs text-cacao-500">
                  {typeof selectedPost.date === 'object' ? selectedPost.date[lang] : selectedPost.date}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-cacao-800 leading-relaxed font-light mb-4">
                <strong className="font-bold text-cacao-900 mr-2">{t.instagramSection.handle}</strong>
                {selectedPost.caption[lang]}
              </p>

              <div className="pt-3 border-t border-cream-100 flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-full bg-cream-100 text-cacao-700 text-xs font-semibold">
                  {typeof selectedPost.tag === 'object' ? selectedPost.tag[lang] : selectedPost.tag}
                </span>
                <a
                  href={selectedPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow hover:opacity-95 transition-opacity"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{t.instagramSection.viewOnIg}</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Down arrow to location */}
      <a
        href="#on-som"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label={lang === 'ca' ? 'Següent secció' : 'Siguiente sección'}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
