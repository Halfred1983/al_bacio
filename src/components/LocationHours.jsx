import React, { useMemo } from 'react';
import { MapPin, Clock, Navigation, Instagram, CheckCircle2 } from 'lucide-react';

export default function LocationHours({ lang, t }) {
  // Check live if open or closed
  const isOpenNow = useMemo(() => {
    try {
      const now = new Date();
      const options = { timeZone: 'Europe/Madrid', hour12: false };
      const day = now.toLocaleDateString('en-US', { ...options, weekday: 'short' });
      const hour = parseInt(now.toLocaleTimeString('en-US', { ...options, hour: '2-digit' }), 10);
      const min = parseInt(now.toLocaleTimeString('en-US', { ...options, minute: '2-digit' }), 10);
      const currentMinutes = hour * 60 + min;

      if (day === 'Mon') return false; // Closed Monday

      if (day === 'Sat' || day === 'Sun') {
        return currentMinutes >= 720 || currentMinutes <= 30; // 12:00 to 00:30
      }

      return currentMinutes >= 960 && currentMinutes <= 1440; // 16:00 to 00:00
    } catch {
      return true;
    }
  }, []);

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Avenida+de+la+M%C3%BAsica+12+46360+Bu%C3%B1ol+Valencia+Spain";

  return (
    <section
      id="on-som"
      className="min-h-screen flex flex-col justify-center relative py-20 bg-cream-50 border-b border-cream-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-terracotta-600 block mb-2">
            {t.location.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-cacao-900 tracking-tight mb-3">
            {t.location.title}
          </h2>
          <div className="w-16 h-0.5 bg-caramel-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Status Card */}
            <div className={`p-5 rounded-3xl border flex items-center space-x-4 transition-all ${
              isOpenNow 
                ? 'bg-pistachio-100/80 border-pistachio-500/40 text-pistachio-900' 
                : 'bg-white border-cream-300 text-cacao-700'
            }`}>
              <div className={`p-3 rounded-2xl text-white ${isOpenNow ? 'bg-pistachio-600 animate-pulse' : 'bg-cacao-600'}`}>
                {isOpenNow ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
              </div>
              <div>
                <div className="text-xs uppercase font-bold tracking-wider">
                  {isOpenNow ? t.location.openNow : t.location.closedNow}
                </div>
                <div className="text-xs text-cacao-600 mt-0.5">
                  {lang === 'ca' ? 'Avinguda de la Música, 12 · Bunyol' : 'Avenida de la Música, 12 · Buñol'}
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-2xs">
              <div className="flex items-center space-x-2 text-cacao-900 mb-2">
                <MapPin className="w-5 h-5 text-terracotta-500" />
                <h3 className="font-serif text-lg font-bold">{t.location.addressLabel}</h3>
              </div>
              <p className="text-sm text-cacao-700 leading-relaxed font-light mb-4">
                {t.location.address}
              </p>
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

            {/* Schedule */}
            <div className="bg-white p-6 rounded-3xl border border-cream-200 shadow-2xs">
              <div className="flex items-center space-x-2 text-cacao-900 mb-3">
                <Clock className="w-5 h-5 text-caramel-500" />
                <h3 className="font-serif text-lg font-bold">{t.location.hoursLabel}</h3>
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                {t.location.schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1 border-b border-cream-100 last:border-0">
                    <span className="text-cacao-700 font-medium">{item.days}</span>
                    <span className="text-cacao-900 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 h-[420px] rounded-3xl overflow-hidden border border-cream-200 shadow-md relative">
            <iframe
              title="Gelateria Al Bacio Buñol"
              src="https://maps.google.com/maps?q=Avenida%20de%20la%20M%C3%BAsica%2012,%2046360%20Bu%C3%B1ol,%20Valencia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-cream-200 text-xs font-bold text-cacao-800 pointer-events-none">
              📍 {lang === 'ca' ? 'Av. de la Música, 12 · Bunyol' : 'Av. de la Música, 12 · Buñol'}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
