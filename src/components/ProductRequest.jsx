import { useState } from 'react';
import { Send, CheckCircle2, MessageSquarePlus } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function ProductRequest() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    category: 'Vapes & Disposables',
    productDetails: '',
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (shopConfig.formspreeEndpoint.includes('your_form_id')) {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', contact: '', category: 'Vapes & Disposables', productDetails: '' });
      }, 600);
      return;
    }

    try {
      const response = await fetch(shopConfig.formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          shop: shopConfig.businessName,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', contact: '', category: 'Vapes & Disposables', productDetails: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="request" className="border-b border-[#142920] bg-[#040B08] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400/90">
              <MessageSquarePlus className="h-3.5 w-3.5" />
              Customer Requests
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Don&apos;t See Your Favorite Flavor or Brand?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-400">
              Let us know what you&apos;re looking for. We restock weekly based on local requests and can text or email you as soon as your item hits our shelves.
            </p>

            <div className="mt-6 rounded-2xl border border-[#162D23] bg-[#08130F] p-4 text-sm text-stone-400">
              <strong className="text-emerald-300">Pro Tip:</strong> Include the exact brand, flavor name, or glass joint size (e.g., 14mm male) so we can order the right match.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#162D23] bg-[#08130F] p-6 sm:p-8 shadow-xl">
              {status === 'success' ? (
                <div className="py-10 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-700/40 bg-emerald-950/80 text-emerald-400">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Request Received!</h3>
                  <p className="mt-2 text-sm text-stone-400">
                    Thanks for letting us know. Our team reviews requests before every weekly distributor order.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 cursor-pointer rounded-xl border border-emerald-700/50 bg-emerald-950/90 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-900"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-400">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-emerald-700 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-400">
                        Phone or Email (For Restock Alert)
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="(717) 555-0123"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        className="w-full rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-emerald-700 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-400">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 focus:border-emerald-700 focus:outline-none"
                    >
                      <option>Vapes &amp; Disposables</option>
                      <option>Hand-Blown Glass &amp; Accessories</option>
                      <option>Papers, Cones &amp; Wraps</option>
                      <option>Hookah &amp; Shisha</option>
                      <option>Botanicals / Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-stone-400">
                      Brand, Flavor, or Item Details
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Example: Geek Bar Pulse X - Blue Rancher, or 14mm quartz banger..."
                      value={formData.productDetails}
                      onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                      className="w-full rounded-xl border border-[#183026] bg-[#030806] px-4 py-3 text-sm text-stone-100 placeholder-stone-600 focus:border-emerald-700 focus:outline-none"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-rose-400">
                      Something went wrong sending your request. Please call the shop directly at {shopConfig.phone}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-emerald-600/40 bg-emerald-800 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-emerald-50 shadow-lg shadow-black/40 transition hover:bg-emerald-700 disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    {status === 'submitting' ? 'Sending Request...' : 'Send Product Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}