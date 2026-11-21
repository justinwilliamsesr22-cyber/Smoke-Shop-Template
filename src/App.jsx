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
  Sparkles,
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 'cc-1',
    name: 'Borosilicate Beaker Water Pipe (14")',
    category: 'Glassware',
    price: 89.99,
    tag: 'Heavy 7mm Glass',
    swatch: 'from-blue-950 via-slate-900 to-blue-900',
    accent: 'text-blue-300',
    inStock: true,
    summary: 'Thick-walled lab-grade borosilicate beaker with ice pinch and removable diffused downstem.',
  },
  {
    id: 'cc-2',
    name: 'Machined Alloy Herb Grinder (4-Piece)',
    category: 'Accessories',
    price: 34.99,
    tag: 'Precision Teeth',
    swatch: 'from-slate-800 via-slate-900 to-emerald-950',
    accent: 'text-emerald-300',
    inStock: true,
    summary: 'Chambered grinder with magnetic lid, fine mesh screen, and kief catcher.',
  },
  {
    id: 'cc-3',
    name: 'Pro Counter Torch Lighter',
    category: 'Counter Essentials',
    price: 24.99,
    tag: 'Refillable Jet',
    swatch: 'from-blue-900 via-slate-900 to-slate-950',
    accent: 'text-blue-300',
    inStock: true,
    summary: 'Refillable jet torch with safety lock, flame adjuster, and weighted counter base.',
  },
  {
    id: 'cc-4',
    name: 'Smoked Quartz Banger & Carb Cap Set',
    category: 'Glassware',
    price: 44.99,
    tag: 'Flat Top',
    swatch: 'from-slate-900 via-blue-950 to-slate-900',
    accent: 'text-emerald-300',
    inStock: true,
    summary: 'Heat-retentive quartz banger paired with a directional airflow cap for clean sessions.',
  },
  {
    id: 'cc-5',
    name: 'Odor-Lock Canvas Travel Pouch',
    category: 'Accessories',
    price: 29.99,
    tag: 'Carbon Lined',
    swatch: 'from-slate-800 via-slate-900 to-slate-950',
    accent: 'text-slate-300',
    inStock: false,
    summary: 'Activated-carbon lined travel pouch with weather-resistant zipper and structured dividers.',
  },
  {
    id: 'cc-6',
    name: 'Glass Cleaning & Counter Prep Kit',
    category: 'Counter Essentials',
    price: 19.99,
    tag: 'Daily Care',
    swatch: 'from-emerald-950 via-slate-900 to-blue-950',
    accent: 'text-emerald-300',
    inStock: true,
    summary: 'Reusable caps, coarse cleaning granules, and detail brushes for quick glass maintenance.',
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

  const bagSubtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* 21+ Age Gate Modal */}
      {!ageVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-blue-500/30 bg-slate-900 p-7 text-center shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Tier 01 Storefront Demo
            </p>
            <h2 className="mt-1 text-2xl font-black text-white">Are you 21 or older?</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
              This storefront demo showcases adult smoke shop and accessory merchandise. Confirm your age to enter.
            </p>

            {ageDeclined ? (
              <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-950/40 p-3.5 text-xs text-rose-200">
                You must be 21 or older to view this storefront demo.
              </div>
            ) : null}

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setAgeDeclined(false);
                  setAgeVerified(true);
                }}
                className="cursor-pointer rounded-xl bg-blue-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-blue-500"
              >
                Yes, I am 21+
              </button>
              <button
                type="button"
                onClick={() => setAgeDeclined(true)}
                className="cursor-pointer rounded-xl border border-slate-700 bg-slate-800 py-3 text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:bg-slate-700"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Demo & Return Bar */}
      <div className="border-b border-blue-500/20 bg-slate-950 px-4 py-2.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-600 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-white">
              MSJ Cloud Tier 01 Demo
            </span>
            <span className="hidden sm:inline">
              Retail Storefront Build ($750 Setup &bull; $50/mo SLA)
            </span>
          </div>
          <a
            href="https://cloud.majorstylejunction.com/#contact"
            className="inline-flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to MSJ Cloud</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <span className="text-lg font-black tracking-tight text-white">
                CAPITAL CITY SMOKE &amp; VAPE
              </span>
              <p className="text-[11px] text-emerald-400">Harrisburg, PA &bull; Glass &amp; Counter Goods</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-blue-500"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Hold List ({bag.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Clock className="h-3.5 w-3.5" />
                Open Today &bull; 10:00 AM – 10:00 PM
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Counter-ready glass, grinders &amp; daily essentials built for speed.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                A clean Tier 01 storefront layout tailored for local retail: browse in-stock counter items, filter by category, build a pickup hold list, or request restocks in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    Storefront Pickup
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">1420 N 3rd St, Harrisburg, PA</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Valid 21+ photo ID required at counter pickup.
                  </p>
                </div>
              </div>
              <a
                href="#request-item"
                className="mt-5 block w-full rounded-xl border border-blue-500/40 bg-blue-600/15 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-blue-300 transition hover:bg-blue-600 hover:text-white"
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
                className={`cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-800 bg-slate-900 text-slate-300 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900 py-2 pl-9 pr-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition hover:border-blue-500/40"
            >
              <div>
                {/* Visual Preview Banner */}
                <div
                  className={`flex h-36 flex-col justify-between border-b border-slate-800 bg-gradient-to-br ${item.swatch} p-4`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-slate-950/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                      {item.category}
                    </span>
                    <Sparkles className={`h-4 w-4 ${item.accent}`} />
                  </div>
                  <div>
                    <p className={`text-[11px] font-bold uppercase tracking-widest ${item.accent}`}>
                      {item.tag}
                    </p>
                    <p className="mt-0.5 line-clamp-1 text-sm font-extrabold text-white">
                      {item.name}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-blue-500/15 px-2.5 py-0.5 text-[11px] font-bold text-blue-300">
                      {item.tag}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        item.inStock ? 'text-emerald-400' : 'text-slate-500'
                      }`}
                    >
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-extrabold text-white">{item.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.summary}</p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/80 px-6 py-4">
                <span className="text-lg font-black text-emerald-400">${item.price.toFixed(2)}</span>
                <button
                  type="button"
                  disabled={!item.inStock}
                  onClick={() => addToBag(item)}
                  className="cursor-pointer rounded-xl bg-blue-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-800 disabled:text-slate-500"
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
          className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8 md:p-10"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Counter Inquiry
            </span>
            <h2 className="mt-1 text-2xl font-black text-white">
              Looking for a specific piece or restock?
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Send a quick note with what you need and our counter team will check availability before you head in.
            </p>
          </div>

          {requestSent ? (
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-sm text-emerald-200">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
              <span>
                Request noted for <strong>{requestForm.name || 'shopper'}</strong>. Resetting preview so you can test again.
              </span>
              <button
                type="button"
                onClick={() => {
                  setRequestSent(false);
                  setRequestForm({ name: '', contact: '', itemNote: '' });
                }}
                className="ml-auto cursor-pointer rounded-lg bg-emerald-600 px-3 py-1 text-xs font-bold text-white"
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
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Phone or Email"
                value={requestForm.contact}
                onChange={(e) => setRequestForm({ ...requestForm, contact: e.target.value })}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Item or question..."
                  value={requestForm.itemNote}
                  onChange={(e) => setRequestForm({ ...requestForm, itemNote: e.target.value })}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer rounded-xl bg-blue-600 px-5 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-blue-500"
                >
                  Send
                </button>
              </div>
            </form>
          )}
        </section>
      </main>

      {/* Slide-Over Hold List Drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/75 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-slate-800 bg-slate-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <h3 className="text-lg font-black text-white">Counter Hold List</h3>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="cursor-pointer rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {bag.length === 0 ? (
                <p className="mt-10 text-center text-sm text-slate-400">
                  Your hold list is currently empty.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {bag.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-3.5 text-sm"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                          {item.category}
                        </span>
                        <p className="font-bold text-white">{item.name}</p>
                        <p className="text-xs text-slate-400">
                          Qty: {item.qty} &bull; ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <strong className="text-emerald-400">
                        ${(item.price * item.qty).toFixed(2)}
                      </strong>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {bag.length > 0 && (
              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-slate-300">Estimated Total</span>
                  <span className="text-lg font-black text-emerald-400">
                    ${bagSubtotal.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBag([]);
                    setDrawerOpen(false);
                  }}
                  className="mt-4 w-full cursor-pointer rounded-xl bg-blue-600 py-3 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-blue-500"
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