import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, ShieldCheck, Bell, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Newsletter: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Simulate instant subscription
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
    setError('');
  };

  return (
    <section className="relative py-20 border-t border-neutral-900 bg-[#060608] overflow-hidden">
      {/* Subtle ambient background glow */}
      <div 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[280px] opacity-20 blur-[100px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 100%, #ff4500 0%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="relative rounded-2xl border border-neutral-800 bg-[#0c0c11]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
          {isSubmitted ? (
            <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-200">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-white tracking-tight">
                You're On The List!
              </h3>
              <p className="mt-2 text-sm text-neutral-300 max-w-md mx-auto">
                We've registered <span className="font-semibold text-white">{email}</span>. You'll receive real-time maintenance advisories and exclusive discount codes directly to your inbox.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Welcome code <code className="text-[#ff4500] font-mono font-bold">PHYJA15</code> active for 15% off</span>
                </span>
              </div>
              <div className="mt-6">
                <button
                  onClick={handleReset}
                  className="text-xs text-neutral-400 hover:text-white underline transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Text side */}
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-[#ff4500] text-xs font-bold uppercase tracking-wider">
                  <Bell className="h-4 w-4" />
                  <span>{t.newsletter.badge}</span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {t.newsletter.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                  {t.newsletter.subtitle}
                </p>
              </div>

              {/* Form side */}
              <div className="w-full lg:max-w-md">
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <div className="relative flex-1">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.newsletter.placeholder}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-900/90 py-3 pl-10 pr-4 text-sm text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-[#e63600] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all disabled:opacity-60"
                    >
                      <span>{isLoading ? t.newsletter.subscribing : t.newsletter.subscribe}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {error && (
                    <div className="text-xs text-red-400 font-medium">
                      {error}
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                    <span>Zero spam. Unsubscribe anytime in 1 click.</span>
                    <span className="hidden sm:inline">Encrypted & private</span>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
