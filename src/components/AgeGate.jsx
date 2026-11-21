import { useState, useEffect } from 'react';
import { ShieldAlert } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

export default function AgeGate() {
  const [verified, setVerified] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('ageVerified') === 'true') {
      setVerified(true);
    }
  }, []);

  const handleVerify = () => {
    sessionStorage.setItem('ageVerified', 'true');
    setVerified(true);
  };

  if (verified) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 text-white backdrop-blur-md">
      <div className="w-full max-w-md rounded-2xl border border-[#1B382C] bg-[#08130F] p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-700/40 bg-emerald-950/80 text-emerald-400">
          <ShieldAlert className="h-6 w-6" />
        </div>

        <span className="mb-2 inline-block text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400/85">
          Age Verification Required
        </span>

        <h2 className="mb-2 text-2xl font-black tracking-tight text-white">
          Welcome to {shopConfig.businessName}
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-stone-400">
          This website contains products intended strictly for adults. You must be{' '}
          <strong className="text-stone-200">21 years of age or older</strong> to enter.
        </p>

        {denied ? (
          <div className="rounded-xl border border-rose-900/60 bg-rose-950/40 p-4 text-sm text-rose-300">
            Access denied. You must be 21 or older to view this website.
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleVerify}
              className="flex-1 cursor-pointer rounded-xl border border-emerald-600/40 bg-emerald-800 py-3.5 text-xs font-bold uppercase tracking-wider text-emerald-50 transition hover:bg-emerald-700"
            >
              Yes, I am 21+
            </button>
            <button
              onClick={() => setDenied(true)}
              className="flex-1 cursor-pointer rounded-xl border border-[#1B382C] bg-[#040A08] py-3.5 text-xs font-bold uppercase tracking-wider text-stone-400 transition hover:border-stone-600 hover:text-stone-200"
            >
              No, Exit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}