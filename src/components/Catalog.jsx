import { useState } from 'react';
import { PackageCheck, AlertCircle, Sparkles } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function Catalog() {
  const [activeTab, setActiveTab] = useState(shopConfig.featuredCategories[0].id);

  const currentCategory = shopConfig.featuredCategories.find(
    (cat) => cat.id === activeTab
  );

  return (
    <section id="catalog" className="border-b border-[#142920] bg-[#030806] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400/90">
              <Sparkles className="h-3.5 w-3.5" />
              Updated Weekly
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Featured In-Store Stock
            </h2>
            <p className="mt-2 max-w-xl text-sm text-stone-400 sm:text-base">
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
                className={`cursor-pointer rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  isSelected
                    ? 'border border-emerald-600/50 bg-emerald-800 text-white shadow-lg shadow-black/40'
                    : 'border border-[#162D23] bg-[#08130F] text-stone-400 hover:border-emerald-800/70 hover:text-stone-100'
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
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#162D23] bg-[#08130F] transition hover:border-emerald-700/60 hover:bg-[#0A1813]"
              >
                <div>
                  {item.image && (
                    <div className="aspect-video w-full overflow-hidden border-b border-[#162D23] bg-gradient-to-b from-[#0C2018] to-[#040A08]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="p-6 pb-0">
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                        {item.brand}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold ${
                          isLowStock
                            ? 'border-amber-800/50 bg-amber-950/60 text-amber-300'
                            : 'border-emerald-800/50 bg-emerald-950/80 text-emerald-300'
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

                    <h3 className="text-lg font-extrabold text-white">{item.name}</h3>
                  </div>
                </div>

                <div className="p-6 pt-4">
                  <div className="border-t border-[#13261E] pt-3 text-xs text-stone-400">
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