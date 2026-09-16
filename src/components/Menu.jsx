import React, { useState, useMemo } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { products } from '../data/products';

export default function Menu({ lang, t }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const availableCategoryIds = useMemo(() => new Set(products.map((p) => p.category)), []);

  const allCategoryDefs = [
    { id: 'all', label: t.menu.all },
    { id: 'cremes', label: t.menu.categories.cremes },
    { id: 'especials', label: t.menu.categories.especials },
    { id: 'sorbets', label: t.menu.categories.sorbets },
    { id: 'senseSucre', label: t.menu.categories.senseSucre },
    { id: 'yogurt', label: t.menu.categories.yogurt },
    { id: 'cafe', label: t.menu.categories.cafe },
  ];

  const categories = useMemo(() => {
    return allCategoryDefs.filter((cat) => cat.id === 'all' || availableCategoryIds.has(cat.id));
  }, [availableCategoryIds, t]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="gelats"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-white border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 block mb-2">
            {t.menu.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cacao-900 tracking-tight mb-3">
            {t.menu.title}
          </h2>
          <div className="w-16 h-0.5 bg-caramel-500 mx-auto mb-4 rounded-full" />
          <p className="text-base sm:text-lg text-cacao-700 font-light leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Category Tabs (Frigidarium style clean pills) */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-4 gap-2 mb-10 scrollbar-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-cacao-900 text-white shadow-sm'
                  : 'bg-cream-100 text-cacao-700 hover:bg-cream-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo-Centric Product Grid (More photos, less text!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-cream-50/60 rounded-3xl overflow-hidden border border-cream-200/90 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              {/* Large Image */}
              <div className="aspect-[4/3] overflow-hidden bg-cream-100 card-zoom relative">
                <img
                  src={product.image}
                  alt={product.name[lang]}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 bg-cacao-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  {product.badge[lang]}
                </div>
              </div>

              {/* Minimal Text Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-cacao-900 mb-2.5 group-hover:text-terracotta-600 transition-colors">
                    {product.name[lang]}
                  </h3>
                  <p className="text-sm sm:text-base text-cacao-700 font-normal leading-relaxed">
                    {product.desc[lang]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-cream-200/70 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {product.dietary.map((d) => (
                      <span
                        key={d}
                        className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-cream-200 text-cacao-800"
                      >
                        {t.menu.dietary[d]}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] font-serif italic text-terracotta-600 font-medium">
                    Al Bacio
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Serving suggestion */}
        <div className="text-center">
          <span className="text-xs text-cacao-600 italic font-serif">
            {t.menu.servingNote}
          </span>
        </div>

      </div>

      {/* Down arrow to next section */}
      <a
        href="#tomatina"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-cacao-400 hover:text-terracotta-600 p-2 transition-colors"
        aria-label={lang === 'ca' ? 'Següent secció' : 'Siguiente sección'}
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
