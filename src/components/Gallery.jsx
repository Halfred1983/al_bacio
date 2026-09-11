import React from 'react';
import { Instagram, Eye } from 'lucide-react';

export default function Gallery({ t }) {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Cucurutxos artesans fets a mà", es: "Cucuruchos artesanos hechos a mano" },
      tag: "Artigianale"
    },
    {
      url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Terrassa & Orxata tradicional de xufa", es: "Terraza & Horchata tradicional de chufa" },
      tag: "Terrassa Bunyol"
    },
    {
      url: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Affogato al Caffè amb espresso italià", es: "Affogato al Caffè con espresso italiano" },
      tag: "Cafè de Especialitat"
    },
    {
      url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Frozen Yogurt natural amb fruits del bosc", es: "Frozen Yogurt natural con frutos del bosque" },
      tag: "Frozen Yogurt"
    },
    {
      url: "https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Pistacchio Puro di Sicilia mantecat hui", es: "Pistacchio Puro de Sicilia mantecado hoy" },
      tag: "Obrador Al Bacio"
    },
    {
      url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80",
      caption: { ca: "Cremes d'avellana i xocolata noble", es: "Cremas de avellana y chocolate noble" },
      tag: "Tradició Italiana"
    }
  ];

  return (
    <section className="py-24 bg-cream-50/70 border-b border-cream-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
              {t.gallery.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cacao-900 tracking-tight">
              {t.gallery.title}
            </h2>
            <p className="text-sm sm:text-base text-cacao-700 font-light mt-2 max-w-xl">
              {t.gallery.subtitle}
            </p>
          </div>

          <a
            href="https://www.instagram.com/gelateria.al.bacio.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cacao-900 hover:text-terracotta-600 transition-colors"
          >
            <Instagram className="w-4 h-4 text-terracotta-500" />
            <span>@gelateria.al.bacio.es</span>
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-cream-100 card-zoom"
            >
              <img
                src={item.url}
                alt={item.caption.ca}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cacao-900/85 via-cacao-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-caramel-400 mb-1">
                  {item.tag}
                </span>
                <p className="font-serif text-base sm:text-lg font-medium text-cream-50 leading-snug">
                  {item.caption[t.gallery.tag === "El Ambiente" ? "es" : "ca"]}
                </p>
              </div>

              {/* Subtle Corner Badge */}
              <div className="absolute top-3 right-3 bg-cacao-900/60 backdrop-blur-xs text-white p-1.5 rounded-full opacity-75 group-hover:opacity-0 transition-opacity">
                <Eye className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
