import { ArrowLeft } from 'lucide-react';
import AgeGate from './components/AgeGate';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import ProductRequest from './components/ProductRequest';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030806] text-stone-200 selection:bg-emerald-800 selection:text-white">
      <AgeGate />

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

      <Hero />
      <Catalog />
      <ProductRequest />
      <Footer />
    </div>
  );
}