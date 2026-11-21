import React, { useState, useMemo } from 'react';
import {
  Flame,
  ShieldCheck,
  Clock,
  MapPin,
  Search,
  ShoppingBag,
  X,
  ArrowLeft,
  CheckCircle2,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';

function ProductArtwork({ type }) {
  switch (type) {
    case 'beaker':
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M34 12h12M36 12v18L22 60a4 4 0 0 0 3.6 5.8h28.8A4 4 0 0 0 58 60L44 30V12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27 50h26" strokeOpacity="0.5" strokeDasharray="3 3" />
          <path d="M50 42l10-10m-3-3l6 6" strokeLinecap="round" />
        </svg>
      );
    case 'grinder':
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <ellipse cx="40" cy="24" rx="20" ry="7" />
          <path d="M20 24v30c0 3.9 9 7 20 7s20-3.1 20-7V24" />
          <path d="M20 35c0 3.9 9 7 20 7s20-3.1 20-7M20 45c0 3.9 9 7 20 7s20-3.1 20-7" strokeOpacity="0.6" />
        </svg>
      );
    case 'torch':
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="30" y="34" width="16" height="30" rx="4" />
          <path d="M34 34v-8h18v6H38" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M56 29c4-2 8 0 10 0-2 2-6 4-10 2" strokeLinecap="round" />
          <path d="M26 64h24" strokeLinecap="round" />
        </svg>
      );
    case 'quartz':
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="24" y="20" width="16" height="22" rx="2" />
          <path d="M40 32h12v28" strokeLinecap="round" strokeLinejoin="round" />
          <ellipse cx="32" cy="14" rx="6" ry="2.5" strokeOpacity="0.65" />
        </svg>
      );
    case 'pouch':
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="18" y="24" width="44" height="34" rx="6" />
          <path d="M18 34h44" />
          <circle cx="52" cy="34" r="2.5" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 80" className="h-16 w-16 text-emerald-400/50" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="24" y="22" width="14" height="38" rx="3" />
          <path d="M28 22v-5h6v5" />
          <rect x="44" y="32" width="12" height="28" rx="3" />
          <path d="M47 32v-4h6v4" />
        </svg>
      );
  }
}

const PRODUCTS = [
  {
    id: 'cc-1',
    name: 'Borosilicate Beaker Water Pipe (14")',
    category: 'Glassware',
    price: 89.99,
    tag: '7mm Heavy Glass',
    art: 'beaker',
    backdrop: 'from-[#0C2219] via-[#07130E] to-[#040A07]',
    inStock: true,
    summary: 'Thick-walled lab-grade borosilicate beaker with ice pinch and removable diffused downstem.',
  },
  {
    id: 'cc-2',
    name: 'Anodized Alloy Herb Grinder (4-Piece)',
    category: 'Accessories',
    price: 34.99,
    tag: 'CNC Milled',
    art: 'grinder',
    backdrop: 'from-[#091D15] via-[#06110D] to-[#040A07]',
    inStock: true,
    summary: 'Chambered grinder with magnetic lid, fine pollen screen, and precision-cut teeth.',
  },
  {
    id: 'cc-3',
    name: 'Matte Tactical Counter Torch',
    category: 'Counter Essentials',
    price: 24.99,
    tag: 'Refillable Jet',
    art: 'torch',
    backdrop: 'from-[#0E241B] via-[#07130E] to-[#040A07]',
    inStock: true,
    summary: 'Refillable butane torch with safety lock, adjustable flame dial, and weighted base.',
  },
  {
    id: 'cc-4',
    name: 'Smoked Quartz Banger & Carb Cap Set',
    category: 'Glassware',
    price: 44.99,
    tag: 'Flat-Top Quartz',
    art: 'quartz',
    backdrop: 'from-[#0A1E16] via-[#06110C] to-[#040A07]',
    inStock: true,
    summary: 'Heat-retentive quartz banger paired with a directional airflow cap for even sessions.',
  },
  {
    id: 'cc-5',
    name: 'Carbon-Lined Odor-Lock Travel Case',
    category: 'Accessories',
    price: 29.99,
    tag: 'Smell-Proof',
    art: 'pouch',
    backdrop: 'from-[#081711] via-[#050E0A] to-[#030806]',
    inStock: false,
    summary: 'Activated-carbon lined case with weather-sealed zipper and padded interior dividers.',
  },
  {
    id: 'cc-6',
    name: 'Glass Care & ISO Maintenance Kit',
    category: 'Counter Essentials',
    price: 19.99,
    tag: 'Daily Care',
    art: 'kit',
    backdrop: 'from-[#0B2017] via-[#06110D] to-[#040A07]',
    inStock: true,
    summary: 'Silicone cleaning caps, coarse mineral scrub, and detail brushes for quick glass upkeep.',
  },
];

const CATEGORIES = ['All', 'Glassware', 'Accessories', 'Counter Essentials'];

export default function App() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [ageDeclined, setAgeDeclined] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [bag, setBag] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [requestForm, setRequestForm] = useState({
    name: '',
    contact: '',
    itemNote: '',
  });
  const [requestSent, setRequestSent] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const matchesQuery =
        !searchQuery.trim() ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const addToBag = (product) => {
    if (!product.inStock) return;
    setBag((prev) => {
      const existing = prev.find((entry) => entry.id === product.id);
      if (existing) {
        return prev.map((entry) =>
          entry.id === product.id ? { ...entry, qty: entry.qty + 1 } : entry
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          qty: 1,
        },
      ];
    });
    setDrawerOpen(true);
  };

  const updateQty = (id, delta) => {
    setBag((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const bagSubtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div className="min-h-screen bg-[#030806] text-stone-200 selection:bg-emerald-800 selection:text-white">
      {/* 21+ Age Gate Modal */}
      {!ageVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="w-full max-w-md rounded-2xl border border-[#1B382C] bg-[#08130F] p-8 text-center shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-700/40 bg-emerald-950/80 text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400/80">
              Age Verification Required
            </p>
            <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white">
              Are you 21 or older?
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-stone-400">
              Capital City Smoke &amp; Vape showcases adult glass, vapor, and counter accessories. Confirm your age to enter.
            </p>

            {ageDeclined ? (
              <div className="mt-5 rounded-xl border border-rose-900/60 bg-rose-950/40 p-3.5 text-xs text-rose-300">
                You must be 21 years of age or older to enter this storefront.
              </div>
            ) : null}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAgeDeclined(false);
                  setAgeVerified(true);
                }}
                className="cursor-pointer rounded-xl border border-emerald-600/40 bg-emerald-800 py-3 text-xs font-bold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-700"
              >
                Yes, I am 21+
              </button>
              <button
                type="button"
                onClick={() => setAgeDeclined(true)}
                className="cursor-pointer rounded-xl border border-[#1B382C] bg-[#040A08] py-3 text-xs font-bold uppercase tracking-wider text-stone-400 transition hover:border-stone-600 hover:text-stone-200"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Demo & Return Bar */}
      <div className="border-b border-[#12261E] bg-[#020604] px-4 py-2 text-xs text-stone-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="rounded border border-emerald-700/50 bg-emerald-950 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              MSJ Cloud Tier 01
            </span>
            <span className="hidden text-stone-400 sm:inline">
              Boutique Retail Storefront ($750 Setup &bull; $50/mo SLA)
            </span>
          </div>
          <a
            href="https://cloud.majorstylejunction.com/#contact"
            className="inline-flex items-center gap-1 font-semibold text-emerald-400/90 transition hover:text-emerald-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to MSJ Cloud</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-[#142920] bg-[#030806]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-700/40 bg-emerald-950/90 text-emerald-400">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <span className="text-lg font-black tracking-wide text-white">
                CAPITAL CITY SMOKE &amp; VAPE
              </span>
              <p className="text-[11px] font-medium tracking-wider text-emerald-400/80 uppercase">
                Harrisburg, PA &bull; Glass &amp; Counter Goods
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-800 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-emerald-50 shadow-sm transition hover:bg-emerald-700"
          >
            <ShoppingBag className="h-4 w-4 text-emerald-200" />
            <span>Hold List ({bag.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>
      </header>

      {/* Atmospheric Dark Green Hero */}
      <section className="relative overflow-hidden border-b border-[#142920] bg-[#040B08]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,65,45,0.32),_transparent_68%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-800/70 bg-emerald-950/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300/90">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <Clock className="h-3.5 w-3.5 text-emerald-400/80" />
                Open Today &bull; 10:00 AM – 10:00 PM
              </span>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl sm:leading-[1.1]">
                Heavy glass, precision hardware &amp; counter essentials.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base">
                Browse live shelf inventory, reserve pieces for same-day counter pickup, or send a direct restock request to our Harrisburg storefront team.
              </p>
            </div>

            <div className="rounded-2xl border border-[#183227] bg-[#08130F]/95 p-6 shadow-xl lg:col-span-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/90" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400/85">
                    Storefront Location
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">1420 N 3rd St, Harrisburg, PA</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-stone-400">
                    Valid government-issued 21+ ID verified at counter pickup.
                  </p>
                </div>
              </div>
              <a
                href="#request-item"
                className="mt-5 block w-full rounded-xl border border-emerald-700/50 bg-emerald-950/90 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-emerald-200 transition hover:border-emerald-500/60 hover:bg-emerald-900/80 hover:text-white"
              >
                Request Specific Item
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Catalog */}
      <main className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold tracking-wide transition ${
                  selectedCategory === cat
                    ? 'border border-emerald-600/50 bg-emerald-800 text-white'
                    : 'border border-[#162D23] bg-[#08130F] text-stone-400 hover:border-emerald-800/70 hover:text-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search catalog..."
              className="w-full rounded-xl border border-[#162D23] bg-[#08130F] py-2 pl-10 pr-3 text-sm text-stone-100 placeholder-stone-500 focus:border-emerald-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#162D23] bg-[#08130F] transition hover:border-emerald-700/60 hover:bg-[#0A1813]"
            >
              <div>
                {/* Moody Dark Green Item Visual Preview */}
                <div
                  className={`relative flex h-40 flex-col justify-between border-b border-[#162D23] bg-gradient-to-br ${item.backdrop} p-4`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-[#1D3B2E] bg-[#030806]/80 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-stone-300">
                      {item.category}
                    </span>
                    <span className="rounded-md border border-emerald-800/50 bg-emerald-950/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-300/90">
                      {item.tag}
                    </span>
                  </div>

                  <div className="my-auto flex items-center justify-center">
                    <ProductArtwork type={item.art} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                      Counter SKU
                    </span>
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                        item.inStock ? 'text-emerald-400/90' : 'text-stone-500'
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.inStock ? 'bg-emerald-400' : 'bg-stone-600'
                        }`}
                      />
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <h2 className="mt-2 text-lg font-extrabold tracking-tight text-white">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{item.summary}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#13261E] px-6 py-4">
                <span className="text-lg font-black text-emerald-300">${item.price.toFixed(2)}</span>
                <button
                  type="button"
                  disabled={!item.inStock}
                  onClick={() => addToBag(item)}
                  className="cursor-pointer rounded-xl border border-emerald-600/40 bg-emerald-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:border-[#162D23] disabled:bg-[#050C09] disabled:text-stone-600"
                >
                  {item.inStock ? 'Add to Hold' : 'Restock Soon'}
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Direct Product / Restock Request Section */}
        <section
          id="request-item"
          className="mt-16 rounded-3xl border border-[#162D23] bg-[#08130F] p-8 md:p-10"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400/85">
              Counter Desk Inquiry
            </span>
            <h2 className="mt-1.5 text-2xl font-black text-white">
              Looking for a specific piece or restock?
            </h2>
            <p className="mt-2 text-sm text-stone-400">
              Send a quick message with what you are searching for and our counter staff will confirm stock before you visit.
            </p>
          </div>

          {requestSent ? (
            <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-emerald-800/60 bg-emerald-950/60 p-4 text-sm text-emerald-200">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>
                Inquiry logged for <strong>{requestForm.name || 'shopper'}</strong>. Our counter desk will follow up shortly.
              </span>
              <button
                type="button"
                onClick={() => {
                  setRequestSent(false);
                  setRequestForm({ name: '', contact: '', itemNote: '' });
                }}
                className="ml-auto cursor-pointer rounded-lg border border-emerald-600/40 bg-emerald-800 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
              >
                New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleRequestSubmit} className="mt-6 grid gap-4 sm:grid-cols-3">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={requestForm.name}
                onChange={(e) => setRequestForm({ ...requestForm, name: e.target.value })}
                className="rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:border-emerald-700 focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Phone or Email"
                value={requestForm.contact}
                onChange={(e) => setRequestForm({ ...requestForm, contact: e.target.value })}
                className="rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:border-emerald-700 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Item or question..."
                  value={requestForm.itemNote}
                  onChange={(e) => setRequestForm({ ...requestForm, itemNote: e.target.value })}
                  className="w-full rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-500 focus:border-emerald-700 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer rounded-xl border border-emerald-600/40 bg-emerald-800 px-5 text-xs font-bold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-700"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#12261E] bg-[#020604] px-6 py-8 text-xs text-stone-500">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <span>Capital City Smoke &amp; Vape &bull; 1420 N 3rd St, Harrisburg, PA</span>
          <span>21+ Only &bull; Powered by MSJ Cloud</span>
        </div>
      </footer>

      {/* Slide-Over Hold List Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-[#183227] bg-[#08130F] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#162D23] pb-4">
                <div>
                  <h3 className="text-lg font-black text-white">Counter Hold List</h3>
                  <p className="text-xs text-stone-400">Same-day in-store pickup reservation</p>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="cursor-pointer rounded-lg p-1.5 text-stone-400 hover:bg-[#0F221B] hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {bag.length === 0 ? (
                <p className="mt-12 text-center text-sm text-stone-500">
                  Your hold list is currently empty.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {bag.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-[#162D23] bg-[#030806] p-3.5 text-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400/85">
                            {item.category}
                          </span>
                          <p className="font-bold text-white">{item.name}</p>
                        </div>
                        <strong className="text-emerald-300">
                          ${(item.price * item.qty).toFixed(2)}
                        </strong>
                      </div>

                      <div className="mt-3 flex items-center justify-between border-t border-[#12241D] pt-2.5 text-xs text-stone-400">
                        <span>${item.price.toFixed(2)} each</span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -1)}
                            className="cursor-pointer rounded border border-[#1B382C] bg-[#08130F] p-1 text-stone-300 hover:border-emerald-700"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="min-w-4 text-center font-bold text-white">{item.qty}</span>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, 1)}
                            className="cursor-pointer rounded border border-[#1B382C] bg-[#08130F] p-1 text-stone-300 hover:border-emerald-700"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => updateQty(item.id, -item.qty)}
                            className="ml-1 cursor-pointer rounded p-1 text-stone-500 hover:text-rose-400"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {bag.length > 0 && (
              <div className="border-t border-[#162D23] pt-4">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-stone-400">Estimated Counter Total</span>
                  <span className="text-lg font-black text-emerald-300">
                    ${bagSubtotal.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBag([]);
                    setDrawerOpen(false);
                  }}
                  className="mt-4 w-full cursor-pointer rounded-xl border border-emerald-600/40 bg-emerald-800 py-3 text-xs font-bold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-700"
                >
                  Clear Demo Hold List
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}