import React, { useMemo } from 'react';
import { MapPin, Clock, Navigation, Instagram, Phone, CheckCircle2, XCircle } from 'lucide-react';

export default function LocationHours({ t }) {
  // Check live if open or closed
  const isOpenNow = useMemo(() => {
    try {
      const now = new Date();
      // Spain timezone (Europe/Madrid)
      const options = { timeZone: 'Europe/Madrid', hour12: false };
      const day = now.toLocaleDateString('en-US', { ...options, weekday: 'short' });
      const hour = parseInt(now.toLocaleTimeString('en-US', { ...options, hour: '2-digit' }), 10);
      const min = parseInt(now.toLocaleTimeString('en-US', { ...options, minute: '2-digit' }), 10);
      const currentMinutes = hour * 60 + min;

      if (day === 'Mon') return false; // Closed Monday

      if (day === 'Sat' || day === 'Sun') {
        // 12:00 (720 min) to 00:30 next day (30 min)
        return currentMinutes >= 720 || currentMinutes <= 30;
      }

      // Tue to Fri: 16:00 (960 min) to 00:00 (1440 min)
      return currentMinutes >= 960 && currentMinutes <= 1440;
    } catch {
      return true;
    }
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida+de+la+M%C3%BAsica+12+46360+Bu%C3%B1ol+Valencia+Spain";

  return (
    <section id="on-som" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 block mb-3">
            {t.location.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-cacao-900 tracking-tight mb-4">
            {t.location.title}
          </h2>
          <p className="text-base sm:text-lg text-cacao-700 font-light">
            {t.location.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Badge */}
            <div className={`p-5 rounded-3xl border flex items-center space-x-4 transition-all ${
              isOpenNow 
                ? 'bg-pistachio-100/70 border-pistachio-500/40 text-pistachio-900' 
                : 'bg-cream-100/80 border-cream-300 text-cacao-700'
            }`}>
              {isOpenNow ? (
                <div className="p-3 bg-pistachio-500 text-white rounded-2xl animate-pulse">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              ) : (
                <div className="p-3 bg-cacao-600 text-white rounded-2xl">
                  <Clock className="w-6 h-6" />
                </div>
              )}
              <div>
                <div className="text-xs uppercase font-bold tracking-wider">
                  {isOpenNow ? t.location.statusOpen : t.location.statusClosed}
                </div>
                <div className="text-xs text-cacao-600 mt-0.5">
                  Av. de la Música, 12 · Buñol
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-cream-50 p-6 rounded-3xl border border-cream-200">
              <div className="flex items-center space-x-3 text-cacao-900 mb-2">
                <MapPin className="w-5 h-5 text-terracotta-500" />
                <h3 className="font-serif text-xl font-bold">{t.location.addressTitle}</h3>
              </div>
              <p className="text-sm text-cacao-700 font-medium leading-relaxed pl-8">
                {t.location.addressText}
              </p>
              <div className="mt-4 pl-8">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-terracotta-600 hover:text-terracotta-700"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.location.directionsBtn}</span>
                </a>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-cream-50 p-6 rounded-3xl border border-cream-200">
              <div className="flex items-center space-x-3 text-cacao-900 mb-4">
                <Clock className="w-5 h-5 text-caramel-500" />
                <h3 className="font-serif text-xl font-bold">{t.location.hoursTitle}</h3>
              </div>
              
              <div className="space-y-3 text-sm">
                {t.location.hoursSchedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1.5 border-b border-cream-200/80 last:border-0">
                    <span className="text-cacao-700 font-medium">{item.days}</span>
                    <span className="text-cacao-900 font-semibold">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram Connect Card */}
            <div className="bg-gradient-to-br from-cacao-900 to-cacao-800 text-white p-6 rounded-3xl shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-caramel-400 font-bold block mb-1">
                  Comunitat Al Bacio
                </span>
                <p className="text-sm font-medium text-cream-100">
                  {t.location.instagramHandle}
                </p>
              </div>
              <a
                href="https://www.instagram.com/gelateria.al.bacio.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 bg-white text-cacao-900 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-cream-100 transition-colors"
              >
                <Instagram className="w-4 h-4 text-terracotta-500" />
                <span>Seguir</span>
              </a>
            </div>

          </div>

          {/* Interactive Map Column */}
          <div className="lg:col-span-7 h-full min-h-[420px] rounded-3xl overflow-hidden border border-cream-200 shadow-md relative">
            <iframe
              title="Gelateria Al Bacio Buñol"
              src="https://maps.google.com/maps?q=Avenida%20de%20la%20M%C3%BAsica%2012,%2046360%20Bu%C3%B1ol,%20Valencia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Map corner badge */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-cream-200 text-xs font-medium text-cacao-800 pointer-events-none">
              📍 Av. de la Música, 12 · Buñol (València)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
