import React, { useState } from 'react';
import { Sparkles, RefreshCw, ArrowRight, Heart } from 'lucide-react';
import { products, quizMapping } from '../data/products';

export default function FlavorQuiz({ lang, t }) {
  const [selectedMood, setSelectedMood] = useState('traditional');

  const matchedProductId = quizMapping[selectedMood] || 'pistacchio';
  const matchedProduct = products.find((p) => p.id === matchedProductId) || products[0];

  return (
    <section id="quiz" className="py-20 bg-cream-100/60 border-t border-b border-cream-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-2">
            {t.quiz.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cacao-900 mb-3">
            {t.quiz.title}
          </h2>
          <p className="text-sm sm:text-base text-cacao-700 font-light">
            {t.quiz.subtitle}
          </p>
        </div>

        {/* Mood Selector Options */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {t.quiz.options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedMood(option.id)}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedMood === option.id
                  ? 'bg-cacao-900 text-white shadow-md scale-105'
                  : 'bg-white border border-cream-300 text-cacao-700 hover:border-cacao-400'
              }`}
            >
              <span className="text-base">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        {/* Result Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-cream-200/90 shadow-lg max-w-3xl mx-auto transition-all">
          <div className="text-xs uppercase tracking-widest text-terracotta-600 font-bold mb-4 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-caramel-500" />
            <span>{t.quiz.resultTitle}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Product Image */}
            <div className="sm:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] bg-cream-100 card-zoom shadow-sm">
              <img
                src={matchedProduct.image}
                alt={matchedProduct.name[lang]}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="sm:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {matchedProduct.dietary.map((d) => (
                    <span
                      key={d}
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-cream-100 text-cacao-700"
                    >
                      {t.menu.dietary[d] || d}
                    </span>
                  ))}
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-pistachio-100 text-pistachio-600">
                    {matchedProduct.origin}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cacao-900 mb-2">
                  {matchedProduct.name[lang]}
                </h3>

                <p className="text-sm text-cacao-700 font-light leading-relaxed mb-6">
                  {matchedProduct.tagline[lang]}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-100 flex items-center justify-between">
                <a
                  href="#sabors"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-terracotta-600 hover:text-terracotta-700 uppercase tracking-wider"
                >
                  <span>Veure tota la carta</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs text-cacao-500 italic font-serif">
                  Recomanació d'Obrador
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
