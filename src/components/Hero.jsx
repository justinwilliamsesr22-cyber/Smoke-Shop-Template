import { MapPin, Phone, Clock, Navigation, Flame } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function Hero() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHour = now.getHours();

  const todayHours = shopConfig.hours[currentDay];
  const isOpen = todayHours && currentHour >= todayHours.open && currentHour < todayHours.close;

  const formatHour = (hour) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour}:00 ${period}`;
  };

  return (
    <header className="relative overflow-hidden border-b border-[#142920] bg-[#040B08]">
      {/* Background Photo + Moody Dark Forest Overlay */}
      {shopConfig.heroImage && (
        <div className="pointer-events-none absolute inset-0 z-0">
          <img
            src={shopConfig.heroImage}
            alt={shopConfig.businessName}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030806] via-[#040B08]/85 to-[#030806]/75" />
        </div>
      )}

      {/* Subtle Ambient Forest-Green Mist */}
      <div className="pointer-events-none absolute -top-24 left-1/2 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-700/15 blur-3xl" />

      {/* Top Sticky Navbar */}
      <nav className="relative z-10 border-b border-[#142920] bg-[#030806]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-700/40 bg-emerald-950/90 text-emerald-400">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wide text-white">
                {shopConfig.businessName}
              </span>
              <p className="hidden text-[10px] font-semibold uppercase tracking-widest text-emerald-400/80 sm:block">
                21+ Glass, Vapes &amp; Counter Goods
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm font-medium text-stone-400 md:flex">
            <a href="#catalog" className="transition hover:text-emerald-300">
              In-Store Menu
            </a>
            <a href="#request" className="transition hover:text-emerald-300">
              Request a Product
            </a>
            <a href="#location" className="transition hover:text-emerald-300">
              Hours &amp; Location
            </a>
          </div>

          <a
            href={`tel:${shopConfig.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-xl border border-[#183227] bg-[#08130F] px-3.5 py-2 text-sm font-semibold text-stone-100 transition hover:border-emerald-700/60 hover:bg-[#0B1B15]"
          >
            <Phone className="h-4 w-4 text-emerald-400" />
            <span className="hidden sm:inline">{shopConfig.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </nav>

      {/* Main Hero Banner */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-[#183227] bg-[#08130F]/90 px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              {isOpen && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  isOpen ? 'bg-emerald-400' : 'bg-rose-500'
                }`}
              ></span>
            </span>
            <span className={`font-semibold ${isOpen ? 'text-emerald-400' : 'text-rose-400'}`}>
              {isOpen ? 'Open Now' : 'Currently Closed'}
            </span>
            <span className="text-stone-600">&bull;</span>
            <span className="flex items-center gap-1.5 text-stone-400">
              <Clock className="h-3.5 w-3.5 text-emerald-400/80" />
              {todayHours
                ? `Today: ${formatHour(todayHours.open)} – ${formatHour(todayHours.close)}`
                : 'Closed Today'}
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            {shopConfig.businessName}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-300 sm:text-xl">
            {shopConfig.tagline}. Stop by our shop for the latest disposables, locally blown glass, and daily in-store deals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={shopConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-800 px-6 py-4 text-base font-bold text-emerald-50 shadow-lg shadow-black/40 transition hover:bg-emerald-700"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>

            <a
              href="#catalog"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#183227] bg-[#08130F]/95 px-6 py-4 text-base font-semibold text-stone-200 backdrop-blur-sm transition hover:border-emerald-700/60 hover:bg-[#0C1D17]"
            >
              Browse In-Store Stock
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-stone-400">
            <MapPin className="h-4 w-4 shrink-0 text-emerald-400/90" />
            <span>{shopConfig.address}</span>
          </div>
        </div>
      </div>
    </header>
  );
}