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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 text-white backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center shadow-2xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
          <ShieldAlert className="h-6 w-6" />
        </div>
        
        <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-amber-400">
          Age Verification Required
        </span>
        
        <h2 className="mb-2 text-2xl font-bold text-white">
          Welcome to {shopConfig.businessName}
        </h2>
        
        <p className="mb-6 text-sm leading-relaxed text-zinc-400">
          This website contains products intended strictly for adults. You must be <strong>21 years of age or older</strong> to enter.
        </p>

        {denied ? (
          <div className="rounded-xl border border-red-900/60 bg-red-950/40 p-4 text-sm text-red-400">
            Access denied. You must be 21 or older to view this website.
          </div>
        ) : (
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleVerify}
              className="flex-1 cursor-pointer rounded-xl bg-emerald-600 py-3.5 font-semibold text-white transition hover:bg-emerald-500"
            >
              Yes, I am 21+
            </button>
            <button
              onClick={() => setDenied(true)}
              className="flex-1 cursor-pointer rounded-xl border border-zinc-700 bg-zinc-800 py-3.5 font-semibold text-zinc-300 transition hover:bg-zinc-700"
            >
              No, Exit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}