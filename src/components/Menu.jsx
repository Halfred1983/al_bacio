import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Leaf, Heart, Award } from 'lucide-react';
import { products } from '../data/products';

export default function Menu({ lang, t }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState('all');

  const categories = [
    { id: 'all', label: t.menu.allCategories },
    { id: 'creams', label: t.menu.categories.creams },
    { id: 'sorbets', label: t.menu.categories.sorbets },
    { id: 'sugarFree', label: t.menu.categories.sugarFree },
    { id: 'specials', label: t.menu.categories.specials },
    { id: 'yogurt', label: t.menu.categories.yogurt },
    { id: 'coffee', label: t.menu.categories.coffee },
  ];

  const dietaryFilters = [
    { id: 'all', label: t.menu.allCategories },
    { id: 'glutenFree', label: t.menu.dietary.glutenFree },
    { id: 'vegan', label: t.menu.dietary.vegan },
    { id: 'sugarFree', label: t.menu.dietary.sugarFree },
    { id: 'local', label: t.menu.dietary.local },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      // Dietary filter
      const matchesDietary = selectedDietary === 'all' || item.dietary.includes(selectedDietary);
      
      // Search query filter
      const nameText = item.name[lang].toLowerCase();
      const descText = item.tagline[lang].toLowerCase();
      const originText = item.origin.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || nameText.includes(query) || descText.includes(query) || originText.includes(query);

      return matchesCategory && matchesDietary && matchesSearch;
    });
  }, [activeCategory, selectedDietary, searchQuery, lang]);

  return (
    <section id="sabors" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-3">
            {t.menu.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight mb-5">
            {t.menu.title}
          </h2>
          <p className="text-base sm:text-lg text-cacao-700 font-light leading-relaxed">
            {t.menu.subtitle}
          </p>
        </div>

        {/* Search & Quick Filters Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-5">
          
          {/* Search Input */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cacao-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.menu.searchPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-cream-50 border border-cream-200 text-sm text-cacao-900 placeholder:text-cacao-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-cacao-400 hover:text-cacao-800"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-center overflow-x-auto pb-2 gap-2 scrollbar-none no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cacao-900 text-white shadow'
                    : 'bg-cream-100/80 text-cacao-700 hover:bg-cream-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dietary Badges Filter */}
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs">
            <span className="text-cacao-500 font-medium mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Dietètica:
            </span>
            {dietaryFilters.map((df) => (
              <button
                key={df.id}
                onClick={() => setSelectedDietary(df.id)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
                  selectedDietary === df.id
                    ? 'bg-terracotta-500 text-white font-semibold'
                    : 'bg-cream-50 border border-cream-200 text-cacao-600 hover:border-cacao-300'
                }`}
              >
                {df.label}
              </button>
            ))}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-cream-50 rounded-3xl border border-cream-200">
            <p className="text-cacao-600 text-base font-medium mb-2">
              {t.menu.emptyResults}
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="text-xs uppercase font-bold text-terracotta-600 underline"
            >
              Reiniciar filtres
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-cream-50/60 rounded-3xl overflow-hidden border border-cream-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                {/* Product Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-cream-100 card-zoom">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Origin Badge */}
                  <div className="absolute top-3 left-3 bg-cacao-900/80 backdrop-blur-xs text-white text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full">
                    {product.origin}
                  </div>

                  {/* Special Tag */}
                  {product.tags.includes('signature') && (
                    <div className="absolute top-3 right-3 bg-terracotta-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      Edició Especial
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Dietary Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {product.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-cream-200/60 text-cacao-700"
                        >
                          {t.menu.dietary[d] || d}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-cacao-900 mb-2 group-hover:text-terracotta-600 transition-colors">
                      {product.name[lang]}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-cacao-700 font-light leading-relaxed">
                      {product.tagline[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs font-semibold text-cacao-600">
                    <span className="italic font-serif text-cacao-500">Mantecat fresc a l'obrador</span>
                    <span className="text-terracotta-600">Al Bacio</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Serving suggestion note */}
        <div className="mt-14 p-6 rounded-2xl bg-cream-100/70 border border-cream-200 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-cacao-700 font-medium">
            🍦 {t.menu.servingSuggestion}
          </p>
        </div>

      </div>
    </section>
  );
}
