import { MapPin, Phone, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function Footer() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const todayIndex = new Date().getDay();

  const formatHour = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <footer id="location" className="bg-[#020604] pt-16 pb-12 text-stone-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 border-b border-[#12261E] pb-12 md:grid-cols-2">
          {/* Left Column: Store Info & Directions */}
          <div>
            <h3 className="text-2xl font-black text-white">
              {shopConfig.businessName}
            </h3>
            <p className="mt-2 text-sm text-stone-400">{shopConfig.tagline}</p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/90" />
                <div>
                  <p className="font-semibold text-white">Store Address</p>
                  <p>{shopConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/90" />
                <div>
                  <p className="font-semibold text-white">Store Phone</p>
                  <a
                    href={`tel:${shopConfig.phone.replace(/[^0-9]/g, '')}`}
                    className="transition hover:text-emerald-300"
                  >
                    {shopConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={shopConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-800 px-5 py-3 text-sm font-bold text-emerald-50 transition hover:bg-emerald-700"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Right Column: Full Weekly Hours */}
          <div className="rounded-2xl border border-[#162D23] bg-[#08130F] p-6">
            <div className="mb-4 flex items-center gap-2 text-white">
              <Clock className="h-5 w-5 text-emerald-400/90" />
              <h4 className="text-lg font-bold">Store Hours</h4>
            </div>

            <ul className="space-y-2.5 text-sm">
              {daysOfWeek.map((dayName, idx) => {
                const hours = shopConfig.hours[idx];
                const isToday = idx === todayIndex;

                return (
                  <li
                    key={dayName}
                    className={`flex items-center justify-between rounded-lg px-3 py-1.5 ${
                      isToday
                        ? 'border border-emerald-800/60 bg-emerald-950/80 font-semibold text-emerald-300'
                        : 'text-stone-400'
                    }`}
                  >
                    <span>
                      {dayName} {isToday && '(Today)'}
                    </span>
                    <span>
                      {hours
                        ? `${formatHour(hours.open)} – ${formatHour(hours.close)}`
                        : 'Closed'}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-stone-500 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-500/80" />
            <span>
              21+ Only. Valid government-issued photo ID required for entry and purchase. No online tobacco or vape sales.
            </span>
          </div>
          <p className="shrink-0">
            &copy; {new Date().getFullYear()} {shopConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}