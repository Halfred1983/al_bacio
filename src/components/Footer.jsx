import React from 'react';
import { Heart, Instagram, MapPin, Sparkles } from 'lucide-react';

export default function Footer({ t, lang }) {
  return (
    <footer className="bg-cacao-900 text-cream-100 pt-16 pb-12 border-t border-cacao-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-cacao-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5">
            <span className="font-serif text-3xl font-bold tracking-tight text-white block mb-1">
              Al Bacio
            </span>
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-caramel-400 block mb-4">
              Gelateria Artigianale · Buñol
            </span>
            <p className="text-sm text-cream-300 font-light leading-relaxed max-w-sm mb-6">
              {t.footer.description}
            </p>
            <div className="flex items-center space-x-3 text-xs text-cream-300 font-light">
              <Sparkles className="w-4 h-4 text-caramel-400" />
              <span>{t.footer.madeWith}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-caramel-400 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-medium text-cream-300">
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  {t.nav.story}
                </a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-white transition-colors">
                  {t.nav.craft}
                </a>
              </li>
              <li>
                <a href="#sabors" className="hover:text-white transition-colors">
                  {t.nav.flavors}
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  {t.nav.match}
                </a>
              </li>
              <li>
                <a href="#tomatina" className="hover:text-white transition-colors">
                  {t.nav.tomatina}
                </a>
              </li>
              <li>
                <a href="#on-som" className="hover:text-white transition-colors">
                  {t.nav.visit}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-caramel-400 mb-4">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-sm text-cream-300 font-light">
              <p className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-1" />
                <span>Avinguda de la Música, 12<br />46360 Bunyol, València</span>
              </p>
              
              <p className="pt-2">
                <a
                  href="https://www.instagram.com/gelateria.al.bacio.es/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-white hover:text-caramel-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-terracotta-400" />
                  <span>@gelateria.al.bacio.es</span>
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-400 font-light">
          <p>© {new Date().getFullYear()} Gelateria Artigianale Al Bacio. {t.footer.legal}</p>
          <p className="mt-2 sm:mt-0 italic font-serif">
            "Fatto al bacio con amore a Bunyol"
          </p>
        </div>

      </div>
    </footer>
  );
}
