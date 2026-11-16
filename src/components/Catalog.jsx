import { useState } from 'react';
import { PackageCheck, AlertCircle, Sparkles } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(shopConfig.featuredCategories[0].id);

  const currentCategory = shopConfig.featuredCategories.find(
    (cat) => cat.id === activeTab
  );

  return (
    <section id="catalog" className="border-b border-zinc-900 bg-zinc-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
              <Sparkles className="h-3.5 w-3.5" />
              Updated Weekly
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Featured In-Store Stock
            </h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400 sm:text-base">
              Browse our most popular shelves below. Valid 21+ government ID required for all in-store purchases.
            </p>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {shopConfig.featuredCategories.map((category) => {
            const isSelected = category.id === activeTab;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`cursor-pointer rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/50'
                    : 'border border-zinc-800 bg-zinc-900 text-zinc-400 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentCategory?.items.map((item, index) => {
            const isLowStock = item.status === 'Low Stock';
            return (
              <div
                key={index}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/60 transition hover:border-zinc-700"
              >
                <div>
                  {item.image && (
                    <div className="aspect-video w-full overflow-hidden bg-zinc-950">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {item.brand}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          isLowStock
                            ? 'bg-amber-500/10 text-amber-400'
                            : 'bg-emerald-500/10 text-emerald-400'
                        }`}
                      >
                        {isLowStock ? (
                          <AlertCircle className="h-3.5 w-3.5" />
                        ) : (
                          <PackageCheck className="h-3.5 w-3.5" />
                        )}
                        {item.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <div className="border-t border-zinc-800/80 pt-3 text-xs text-zinc-400">
                    {item.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}