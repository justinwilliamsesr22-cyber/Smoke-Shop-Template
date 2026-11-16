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
    <footer id="location" className="bg-zinc-950 pt-16 pb-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 border-b border-zinc-900 pb-12 md:grid-cols-2">
          {/* Left Column: Store Info & Directions */}
          <div>
            <h3 className="text-2xl font-extrabold text-white">
              {shopConfig.businessName}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{shopConfig.tagline}</p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-semibold text-white">Store Address</p>
                  <p>{shopConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                <div>
                  <p className="font-semibold text-white">Store Phone</p>
                  <a
                    href={`tel:${shopConfig.phone.replace(/[^0-9]/g, '')}`}
                    className="transition hover:text-emerald-400"
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
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-500"
            >
              <Navigation className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>

          {/* Right Column: Full Weekly Hours */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6">
            <div className="mb-4 flex items-center gap-2 text-white">
              <Clock className="h-5 w-5 text-emerald-400" />
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
                        ? 'bg-emerald-500/10 font-semibold text-emerald-400'
                        : 'text-zinc-400'
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
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0 text-amber-500" />
            <span>
              21+ Only. Valid government-issued photo ID required for entry and purchase. No online tobacco or vape sales.
            </span>
          </div>
          <p className="shrink-0">
            © {new Date().getFullYear()} {shopConfig.businessName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}