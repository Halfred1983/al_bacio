import React, { useMemo } from 'react';
import { MapPin, Clock, Navigation, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function LocationHours({ lang, t }) {
  // Check live if open or closed according to official Google Maps listing
  const isOpenNow = useMemo(() => {
    try {
      const now = new Date();
      const options = { timeZone: 'Europe/Madrid', hour12: false };
      const day = now.toLocaleDateString('en-US', { ...options, weekday: 'short' });
      const hour = parseInt(now.toLocaleTimeString('en-US', { ...options, hour: '2-digit' }), 10);
      const min = parseInt(now.toLocaleTimeString('en-US', { ...options, minute: '2-digit' }), 10);
      const currentMinutes = hour * 60 + min;

      // Monday: Closed (Descanso semanal)
      if (day === 'Mon') return false;

      // Tuesday & Wednesday: 17:30 – 21:00
      if (day === 'Tue' || day === 'Wed') {
        return currentMinutes >= 1050 && currentMinutes < 1260;
      }

      // Thursday: 17:30 – 21:30
      if (day === 'Thu') {
        return currentMinutes >= 1050 && currentMinutes < 1290;
      }

      // Friday & Saturday: 17:30 – 00:00 (midnight)
      if (day === 'Fri' || day === 'Sat') {
        return currentMinutes >= 1050 && currentMinutes < 1440;
      }

      // Sunday: 17:30 – 21:00
      if (day === 'Sun') {
        return currentMinutes >= 1050 && currentMinutes < 1260;
      }

      return false;
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
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
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-cream-200 shadow-2xs">
              <div className="flex items-center space-x-2 text-cacao-900 mb-2">
                <MapPin className="w-5 h-5 text-terracotta-500" />
                <h3 className="font-serif text-lg font-bold">{t.location.addressLabel}</h3>
              </div>
              <p className="text-sm text-cacao-700 leading-relaxed font-light mb-3">
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
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-cream-200 shadow-2xs">
              <div className="flex items-center space-x-2 text-cacao-900 mb-3">
                <Clock className="w-5 h-5 text-caramel-500" />
                <h3 className="font-serif text-lg font-bold">{t.location.hoursLabel}</h3>
              </div>
              <div className="space-y-1.5 text-xs sm:text-sm">
                {t.location.schedule.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-1 border-b border-cream-100 last:border-0">
                    <span className="text-cacao-700 font-medium">{item.days}</span>
                    <span className="text-cacao-900 font-bold">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card (Phone, WhatsApp, Email) */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-cream-200 shadow-2xs">
              <div className="flex items-center space-x-2 text-cacao-900 mb-4">
                <Phone className="w-5 h-5 text-terracotta-500" />
                <h3 className="font-serif text-lg font-bold">{t.location.contactLabel}</h3>
              </div>

              {/* Phone & WhatsApp */}
              <div className="mb-4 pb-4 border-b border-cream-100">
                <div className="text-[11px] uppercase font-bold text-cacao-500 tracking-wider mb-1.5">
                  {t.location.phoneLabel}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <a
                    href="tel:+34611985121"
                    className="font-mono text-base font-bold text-cacao-900 hover:text-terracotta-600 transition-colors"
                  >
                    +34 611 98 51 21
                  </a>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/34611985121"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-xs hover:shadow transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      <span>{t.location.whatsappBtn}</span>
                    </a>
                    <a
                      href="tel:+34611985121"
                      className="inline-flex items-center gap-1 bg-cream-100 hover:bg-cream-200 text-cacao-800 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                    >
                      <Phone className="w-3 h-3 text-cacao-600" />
                      <span>{t.location.callBtn}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="text-[11px] uppercase font-bold text-cacao-500 tracking-wider mb-1.5">
                  {t.location.emailLabel}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <a
                    href="mailto:naturalmentegelato.lab@gmail.com"
                    className="text-xs sm:text-sm font-medium text-terracotta-600 hover:text-terracotta-700 break-all"
                  >
                    naturalmentegelato.lab@gmail.com
                  </a>
                  <a
                    href="mailto:naturalmentegelato.lab@gmail.com"
                    className="inline-flex items-center gap-1 self-start sm:self-auto bg-cream-100 hover:bg-cream-200 text-cacao-800 text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
                  >
                    <Mail className="w-3 h-3 text-cacao-600" />
                    <span>{t.location.emailBtn}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 min-h-[480px] h-full rounded-3xl overflow-hidden border border-cream-200 shadow-md relative">
            <iframe
              title="Gelateria Al Bacio Buñol"
              src="https://maps.google.com/maps?q=Avenida%20de%20la%20M%C3%BAsica%2012,%2046360%20Bu%C3%B1ol,%20Valencia&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[480px] border-0"
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
