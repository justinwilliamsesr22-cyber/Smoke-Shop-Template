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
} from 'lucide-react';

const PRODUCTS = [
  {
    id: 'cc-1',
    name: 'Borosilicate Beaker Water Pipe (14")',
    category: 'Glassware',
    price: 89.99,
    tag: 'Heavy 7mm Glass',
    inStock: true,
    summary: 'Thick-walled lab-grade borosilicate beaker with ice pinch and removable diffused downstem.',
  },
  {
    id: 'cc-2',
    name: 'Brass & Walnut Herb Grinder (4-Piece)',
    category: 'Accessories',
    price: 34.99,
    tag: 'Precision Teeth',
    inStock: true,
    summary: 'Machined chambered grinder with magnetic lid, fine mesh screen, and kief catcher.',
  },
  {
    id: 'cc-3',
    name: 'Cedar & Ash Torch Lighter',
    category: 'Counter Essentials',
    price: 24.99,
    tag: 'Refillable Jet',
    inStock: true,
    summary: 'Refillable jet torch with safety lock, flame adjuster, and weighted counter base.',
  },
  {
    id: 'cc-4',
    name: 'Smoked Quartz Banger & Carb Cap Set',
    category: 'Glassware',
    price: 44.99,
    tag: 'Flat Top',
    inStock: true,
    summary: 'Heat-retentive quartz banger paired with a directional airflow cap for clean sessions.',
  },
  {
    id: 'cc-5',
    name: 'Odor-Lock Canvas Travel Pouch',
    category: 'Accessories',
    price: 29.99,
    tag: 'Carbon Lined',
    inStock: false,
    summary: 'Activated-carbon lined travel pouch with weather-resistant zipper and structured dividers.',
  },
  {
    id: 'cc-6',
    name: 'Glass Cleaning & ISO Prep Kit',
    category: 'Counter Essentials',
    price: 19.99,
    tag: 'Daily Care',
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
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
    setDrawerOpen(true);
  };

  const bagSubtotal = bag.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    setRequestSent(true);
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-zinc-100">
      {/* 21+ Age Gate Modal */}
      {!ageVerified && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-amber-500/30 bg-[#141417] p-7 text-center shadow-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-amber-400">
              Tier 01 Storefront Demo
            </p>
            <h2 className="mt-1 text-2xl font-black text-white">Are you 21 or older?</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
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
                className="cursor-pointer rounded-xl bg-amber-500 py-3 text-xs font-extrabold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-400"
              >
                Yes, I am 21+
              </button>
              <button
                type="button"
                onClick={() => setAgeDeclined(true)}
                className="cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-xs font-bold uppercase tracking-wider text-zinc-300 transition hover:bg-zinc-800"
              >
                Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Demo & Return Bar */}
      <div className="border-b border-amber-500/20 bg-zinc-950 px-4 py-2.5 text-xs text-zinc-300">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded bg-amber-500 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-zinc-950">
              MSJ Cloud Tier 01 Demo
            </span>
            <span className="hidden sm:inline">
              Dark Obsidian &amp; Amber Retail Storefront ($750 Setup &bull; $50/mo SLA)
            </span>
          </div>
          <a
            href="https://cloud.majorstylejunction.com/#contact"
            className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to MSJ Cloud</span>
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-800 bg-[#09090B]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400">
              <Flame className="h-5 w-5" />
            </span>
            <div>
              <span className="text-lg font-black tracking-tight text-white">
                IRON &amp; EMBER SMOKE CO.
              </span>
              <p className="text-[11px] text-amber-400/90">Harrisburg, PA &bull; Glass &amp; Counter Goods</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-400"
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Hold List ({bag.reduce((s, i) => s + i.qty, 0)})</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-zinc-800/80 bg-gradient-to-b from-[#141417] to-[#09090B]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-300">
                <Clock className="h-3.5 w-3.5" />
                Open Today &bull; 10:00 AM – 10:00 PM
              </span>
              <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
                Counter-ready glass, grinders &amp; daily essentials built for speed.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                A clean Tier 01 storefront layout tailored for local retail: browse in-stock counter items, filter by category, build a pickup hold list, or request restocks in seconds.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#141417] p-6 lg:col-span-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Storefront Pickup
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">1420 N 3rd St, Harrisburg, PA</p>
                  <p className="mt-1 text-xs text-zinc-400">
                    Valid 21+ photo ID required at counter pickup.
                  </p>
                </div>
              </div>
              <a
                href="#request-item"
                className="mt-5 block w-full rounded-xl border border-amber-500/40 bg-amber-500/10 py-2.5 text-center text-xs font-extrabold uppercase tracking-wider text-amber-300 transition hover:bg-amber-500 hover:text-zinc-950"
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
                    ? 'bg-amber-500 text-zinc-950'
                    : 'border border-zinc-800 bg-[#141417] text-zinc-300 hover:border-zinc-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items..."
              className="w-full rounded-xl border border-zinc-800 bg-[#141417] py-2 pl-9 pr-3 text-sm text-white placeholder-zinc-500 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-[#141417] p-6 transition hover:border-amber-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-md bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-300">
                    {item.tag}
                  </span>
                  <span
                    className={`text-xs font-bold ${
                      item.inStock ? 'text-emerald-400' : 'text-zinc-500'
                    }`}
                  >
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-extrabold text-white">{item.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.summary}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
                <span className="text-lg font-black text-amber-400">${item.price.toFixed(2)}</span>
                <button
                  type="button"
                  disabled={!item.inStock}
                  onClick={() => addToBag(item)}
                  className="cursor-pointer rounded-xl bg-amber-500 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-zinc-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:bg-zinc-800 disabled:text-zinc-500"
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
          className="mt-16 rounded-3xl border border-zinc-800 bg-[#141417] p-8 md:p-10"
        >
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Counter Inquiry
            </span>
            <h2 className="mt-1 text-2xl font-black text-white">
              Looking for a specific piece or restock?
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
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
                className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Phone or Email"
                value={requestForm.contact}
                onChange={(e) => setRequestForm({ ...requestForm, contact: e.target.value })}
                className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Item or question..."
                  value={requestForm.itemNote}
                  onChange={(e) => setRequestForm({ ...requestForm, itemNote: e.target.value })}
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-white focus:border-amber-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer rounded-xl bg-amber-500 px-5 text-xs font-extrabold uppercase tracking-wider text-zinc-950 hover:bg-amber-400"
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
          className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs"
          onClick={() => setDrawerOpen(false)}
        >
          <div
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-zinc-800 bg-[#141417] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="text-lg font-black text-white">Counter Hold List</h3>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="cursor-pointer rounded-lg p-1 text-zinc-400 hover:bg-zinc-800 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {bag.length === 0 ? (
                <p className="mt-10 text-center text-sm text-zinc-400">
                  Your hold list is currently empty.
                </p>
              ) : (
                <div className="mt-4 space-y-3">
                  {bag.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-3.5 text-sm"
                    >
                      <div>
                        <p className="font-bold text-white">{item.name}</p>
                        <p className="text-xs text-zinc-400">
                          Qty: {item.qty} &bull; ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      <strong className="text-amber-400">
                        ${(item.price * item.qty).toFixed(2)}
                      </strong>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {bag.length > 0 && (
              <div className="border-t border-zinc-800 pt-4">
                <div className="flex items-center justify-between text-sm font-bold">
                  <span className="text-zinc-300">Estimated Total</span>
                  <span className="text-lg font-black text-amber-400">
                    ${bagSubtotal.toFixed(2)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBag([]);
                    setDrawerOpen(false);
                  }}
                  className="mt-4 w-full cursor-pointer rounded-xl bg-amber-500 py-3 text-xs font-extrabold uppercase tracking-wider text-zinc-950 hover:bg-amber-400"
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