import React, { useState } from 'react';
import { 
  Users, 
  Repeat, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Gift, 
  CheckCircle2, 
  Wallet,
  Copy,
  Check,
  Search,
  ExternalLink,
  DollarSign,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AffiliateProgramProps {
  onJoinAffiliate: () => void;
}

interface ReferralRecord {
  id: string;
  planName: string;
  location: string;
  monthlyCommission: number;
  date: string;
  status: 'Active' | 'Pending Verification';
}

interface PartnerAccount {
  partnerId: string;
  partnerName: string;
  tier: string;
  promoCode: string;
  discountRate: string;
  commissionRate: string;
  pendingPayout: number;
  lifetimeEarnings: number;
  activeReferrals: number;
  totalClicks: number;
  conversionRate: string;
  nextPayoutDate: string;
  conversions: ReferralRecord[];
}

const DEMO_PARTNERS: Record<string, PartnerAccount> = {
  'CREATOR-77': {
    partnerId: 'CREATOR-77',
    partnerName: 'Alex Craft (Gaming Network)',
    tier: 'Tier 2 Verified Partner',
    promoCode: 'ALEX77',
    discountRate: '15% Off',
    commissionRate: '25% Recurring',
    pendingPayout: 248.50,
    lifetimeEarnings: 2140.00,
    activeReferrals: 38,
    totalClicks: 1420,
    conversionRate: '4.8%',
    nextPayoutDate: 'Nov 1, 2026',
    conversions: [
      { id: 'tx-101', planName: 'Ryzen 9 7950X - 12GB', location: 'Frankfurt, DE', monthlyCommission: 6.00, date: '2 hours ago', status: 'Active' },
      { id: 'tx-102', planName: 'Extreme Node - 16GB', location: 'Dallas, US', monthlyCommission: 8.50, date: 'Yesterday', status: 'Active' },
      { id: 'tx-103', planName: 'Discord Bot Pro - 4GB', location: 'Falkenstein, DE', monthlyCommission: 2.25, date: '3 days ago', status: 'Active' },
      { id: 'tx-104', planName: 'Paper MC - 8GB', location: 'Singapore, SG', monthlyCommission: 4.00, date: '5 days ago', status: 'Active' },
      { id: 'tx-105', planName: 'Vanilla SMP - 4GB', location: 'Virginia, US', monthlyCommission: 2.00, date: '6 days ago', status: 'Active' }
    ]
  },
  'MINE-VIP': {
    partnerId: 'MINE-VIP',
    partnerName: 'PixelVerse Modpacks',
    tier: 'Tier 3 Ambassador',
    promoCode: 'PIXEL15',
    discountRate: '15% Off',
    commissionRate: '30% Recurring',
    pendingPayout: 496.00,
    lifetimeEarnings: 4820.00,
    activeReferrals: 62,
    totalClicks: 2890,
    conversionRate: '5.2%',
    nextPayoutDate: 'Nov 1, 2026',
    conversions: [
      { id: 'tx-201', planName: 'Modpack Titan - 24GB', location: 'London, UK', monthlyCommission: 12.50, date: '1 hour ago', status: 'Active' },
      { id: 'tx-202', planName: 'Ryzen 9 7950X - 8GB', location: 'Dallas, US', monthlyCommission: 4.00, date: '8 hours ago', status: 'Active' },
      { id: 'tx-203', planName: 'Bot Ultra - 8GB', location: 'Tokyo, JP', monthlyCommission: 3.50, date: '2 days ago', status: 'Active' },
      { id: 'tx-204', planName: 'Purpur Extreme - 16GB', location: 'Frankfurt, DE', monthlyCommission: 8.50, date: '4 days ago', status: 'Active' }
    ]
  }
};

export const AffiliateProgram: React.FC<AffiliateProgramProps> = ({ onJoinAffiliate }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'tracker'>('overview');
  
  // Earnings calculator state
  const [referredCount, setReferredCount] = useState<number>(25);
  const averagePlanPrice = 16.0;
  const commissionRate = 0.25;
  const monthlyEarnings = (referredCount * averagePlanPrice * commissionRate).toFixed(2);
  const annualEarnings = (parseFloat(monthlyEarnings) * 12).toFixed(2);

  // Tracker state
  const [partnerIdInput, setPartnerIdInput] = useState('');
  const [currentPartner, setCurrentPartner] = useState<PartnerAccount | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [payoutRequested, setPayoutRequested] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLookup = (idToLookup?: string) => {
    setErrorMsg('');
    const id = (idToLookup || partnerIdInput).trim().toUpperCase();
    if (!id) {
      setErrorMsg('Please enter a Partner ID or Referral Code.');
      return;
    }

    if (DEMO_PARTNERS[id]) {
      setCurrentPartner(DEMO_PARTNERS[id]);
      setPartnerIdInput(id);
    } else {
      // Dynamic fallback partner instance for any custom ID
      const generatedPartner: PartnerAccount = {
        partnerId: id,
        partnerName: `${id} Community`,
        tier: 'Standard Affiliate',
        promoCode: id,
        discountRate: '15% Off',
        commissionRate: '25% Recurring',
        pendingPayout: 32.00,
        lifetimeEarnings: 128.00,
        activeReferrals: 4,
        totalClicks: 142,
        conversionRate: '4.2%',
        nextPayoutDate: 'Nov 1, 2026',
        conversions: [
          { id: `tx-${id}-1`, planName: 'Ryzen 9 7950X - 8GB', location: 'Dallas, US', monthlyCommission: 4.00, date: '3 hours ago', status: 'Active' },
          { id: `tx-${id}-2`, planName: 'Discord Bot Host - 4GB', location: 'Frankfurt, DE', monthlyCommission: 2.25, date: '2 days ago', status: 'Active' }
        ]
      };
      setCurrentPartner(generatedPartner);
      setPartnerIdInput(id);
    }
  };

  const handleCopyLink = () => {
    if (!currentPartner) return;
    const refUrl = `https://phyjaserver.net/ref?id=${currentPartner.partnerId}`;
    navigator.clipboard.writeText(refUrl).catch(() => {});
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleRequestPayout = () => {
    setPayoutRequested(true);
    setTimeout(() => {
      setPayoutRequested(false);
    }, 3500);
  };

  const handleLogOut = () => {
    setCurrentPartner(null);
    setPartnerIdInput('');
    setErrorMsg('');
  };

  return (
    <section id="affiliate" className="relative py-24 border-t border-neutral-900 bg-[#060608] overflow-hidden">
      {/* Background warm radial accent */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] opacity-15 blur-[130px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ff4500 0%, #ff7700 40%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 px-3.5 py-1 text-xs font-bold text-[#ff4500] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.affiliate.badge}</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            {t.affiliate.title}
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg leading-relaxed">
            {t.affiliate.subtitle}
          </p>

          {/* Tab Switcher: Overview / Calculator vs. Live Tracker */}
          <div className="mt-8 inline-flex items-center rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
            <button
              onClick={() => setActiveTab('overview')}
              className={`rounded-lg px-5 py-2 text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.affiliate.overviewTab}
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className={`relative rounded-lg px-5 py-2 text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'tracker'
                  ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/30'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>{t.affiliate.trackerTab}</span>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          </div>
        </div>

        {activeTab === 'overview' ? (
          <>
            {/* 4 Feature Pillars Grid */}
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-6 transition-all hover:border-neutral-700 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff4500]/10 text-[#ff4500]">
                  <Repeat className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">25% Recurring Payouts</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Unlike 1-time affiliate bounties, you get paid every month for the lifetime of the client's subscription.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-6 transition-all hover:border-neutral-700 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                  <Clock className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">90-Day Cookie Window</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Generous 90-day tracking window. If your audience visits today and deploys a server two months later, you get full credit.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-6 transition-all hover:border-neutral-700 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Wallet className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">Fast & Flexible Cashouts</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Withdraw to PayPal, Bank Wire, Stripe, Crypto, or hosting credits with a low $20 minimum payout threshold.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-6 transition-all hover:border-neutral-700 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Gift className="h-6 w-6 stroke-[2.2]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">Creator Perks & Codes</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                  Get custom promo codes (e.g. your username for 15% off) and free server test benches for content creators.
                </p>
              </div>
            </div>

            {/* Interactive Earnings Calculator & How It Works */}
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: Interactive Earnings Calculator */}
              <div className="lg:col-span-7 rounded-2xl border border-neutral-800 bg-[#0c0c11]/95 p-8 sm:p-10 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-[#ff4500]/10 p-2 text-[#ff4500]">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Affiliate Earnings Estimator</h3>
                    <p className="text-xs text-neutral-400">Based on 25% recurring commission on standard server plans</p>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-neutral-300">Active Referred Clients:</span>
                      <span className="text-2xl font-black text-[#ff4500] tabular-nums">
                        {referredCount} Servers
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="150"
                      step="5"
                      value={referredCount}
                      onChange={(e) => setReferredCount(Number(e.target.value))}
                      className="mt-3 w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff4500]"
                    />
                    <div className="mt-2 flex justify-between text-[11px] text-neutral-500 font-mono">
                      <span>5 Clients</span>
                      <span>50 Clients</span>
                      <span>100 Clients</span>
                      <span>150+ Clients</span>
                    </div>
                  </div>

                  {/* Real-time calculated returns */}
                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-neutral-900/80 p-5 border border-neutral-800/80 text-center">
                    <div>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Monthly Recurring</div>
                      <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-white tabular-nums">
                        ${monthlyEarnings}
                      </div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">Paid every 30 days</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Annual Revenue</div>
                      <div className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#ff4500] tabular-nums">
                        ${annualEarnings}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-0.5">Estimated yearly total</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800/80 pt-6">
                    <div>
                      <div className="text-xs text-neutral-300 font-medium">Ready to start earning?</div>
                      <div className="text-[11px] text-neutral-500">Fast application approval in &lt; 2 hours</div>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveTab('tracker')}
                        className="flex-1 sm:flex-none text-xs font-semibold text-neutral-300 hover:text-white px-3 py-2.5 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors"
                      >
                        Log In to Tracker →
                      </button>
                      <button
                        onClick={onJoinAffiliate}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-lg bg-[#e63600] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all whitespace-nowrap"
                      >
                        <span>Join Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: 3 Simple Steps */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-white">How The Program Works</h3>
                  
                  <div className="mt-6 space-y-5 text-xs text-neutral-300">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff4500]/20 font-bold text-[#ff4500]">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Apply in 60 Seconds</h4>
                        <p className="mt-0.5 text-neutral-400 leading-relaxed">
                          Click Join Now to submit your channel, Discord, or website. Our partner team provides immediate credentials.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff4500]/20 font-bold text-[#ff4500]">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Share Your Link & Code</h4>
                        <p className="mt-0.5 text-neutral-400 leading-relaxed">
                          Place your referral link in video descriptions, Discord announcements, or your website footer with your promo discount.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff4500]/20 font-bold text-[#ff4500]">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">Collect Monthly Payouts</h4>
                        <p className="mt-0.5 text-neutral-400 leading-relaxed">
                          Track clicks and active clients in your partner dashboard. Cash out seamlessly every single month.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 border-t border-neutral-800/80 pt-5">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>No minimum audience requirement to join</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Live Referral Tracker Dashboard */
          <div className="mt-12 max-w-5xl mx-auto">
            {!currentPartner ? (
              /* Login / Look Up Card */
              <div className="rounded-2xl border border-neutral-800 bg-[#0c0c11]/95 p-8 sm:p-12 shadow-2xl backdrop-blur-md">
                <div className="max-w-xl mx-auto text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff4500]/10 text-[#ff4500] mb-5">
                    <Search className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Partner Referral Tracker
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
                    Enter your unique Partner Referral ID or Affiliate Code to view your real-time clicks, conversions, and pending commission balance.
                  </p>

                  <form 
                    onSubmit={(e) => { e.preventDefault(); handleLookup(); }}
                    className="mt-8 space-y-4"
                  >
                    <div className="relative">
                      <input
                        type="text"
                        value={partnerIdInput}
                        onChange={(e) => setPartnerIdInput(e.target.value.toUpperCase())}
                        placeholder="e.g. CREATOR-77, MINE-VIP, or your code"
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-900/90 py-3.5 pl-4 pr-32 text-sm text-white placeholder-neutral-500 font-mono focus:border-[#ff4500] focus:outline-none uppercase"
                      />
                      <button
                        type="submit"
                        className="absolute right-1.5 top-1.5 bottom-1.5 rounded-lg bg-[#e63600] px-5 text-xs font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all"
                      >
                        Track Stats
                      </button>
                    </div>

                    {errorMsg && (
                      <div className="text-xs text-red-400 text-left">
                        {errorMsg}
                      </div>
                    )}
                  </form>

                  {/* Quick demo account presets */}
                  <div className="mt-8 border-t border-neutral-800/80 pt-6">
                    <span className="text-xs text-neutral-500 block mb-3">
                      Try quick demo partner accounts:
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                      <button
                        onClick={() => handleLookup('CREATOR-77')}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300 hover:border-[#ff4500] hover:text-white transition-all font-mono"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>CREATOR-77</span>
                        <span className="text-[10px] text-neutral-500">(38 Referrals)</span>
                      </button>

                      <button
                        onClick={() => handleLookup('MINE-VIP')}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300 hover:border-[#ff4500] hover:text-white transition-all font-mono"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        <span>MINE-VIP</span>
                        <span className="text-[10px] text-neutral-500">(62 Referrals)</span>
                      </button>
                    </div>

                    <div className="mt-6 text-xs text-neutral-400">
                      Don't have an affiliate code yet?{' '}
                      <button 
                        onClick={onJoinAffiliate}
                        className="text-[#ff4500] hover:underline font-semibold"
                      >
                        Join the Partner Program
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Authenticated Tracker Dashboard */
              <div className="space-y-6 animate-in fade-in duration-200">
                {/* Partner Header Card */}
                <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {currentPartner.partnerName}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400">
                          <ShieldCheck className="h-3 w-3" />
                          <span>{currentPartner.tier}</span>
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-400 font-mono">
                        <span>Partner ID: <strong className="text-white">{currentPartner.partnerId}</strong></span>
                        <span className="text-neutral-700">·</span>
                        <span>Audience Code: <strong className="text-[#ff4500]">{currentPartner.promoCode}</strong> ({currentPartner.discountRate})</span>
                        <span className="text-neutral-700">·</span>
                        <span>Rate: <strong className="text-emerald-400">{currentPartner.commissionRate}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 shrink-0">
                      <button
                        onClick={handleLogOut}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        <span>Switch ID</span>
                      </button>
                    </div>
                  </div>

                  {/* Shareable Link Box */}
                  <div className="mt-6 rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xs font-semibold text-neutral-400 whitespace-nowrap">Your Referral Link:</span>
                      <code className="text-xs text-[#ff4500] font-mono truncate">
                        https://phyjaserver.net/ref?id={currentPartner.partnerId}
                      </code>
                    </div>

                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors shrink-0"
                    >
                      {copiedLink ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied Link!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-neutral-400" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* 4 Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Pending Commission */}
                  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-5 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Pending Payout</span>
                      <DollarSign className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="mt-2 text-2xl sm:text-3xl font-black text-white tabular-nums">
                      ${currentPartner.pendingPayout.toFixed(2)}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Next auto payout:</span>
                      <span className="text-neutral-300 font-mono">{currentPartner.nextPayoutDate}</span>
                    </div>
                  </div>

                  {/* Lifetime Earnings */}
                  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-5 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Lifetime Earnings</span>
                      <Wallet className="h-4 w-4 text-[#ff4500]" />
                    </div>
                    <div className="mt-2 text-2xl sm:text-3xl font-black text-white tabular-nums">
                      ${currentPartner.lifetimeEarnings.toFixed(2)}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>All-time payouts:</span>
                      <span className="text-emerald-400 font-semibold">100% Paid</span>
                    </div>
                  </div>

                  {/* Active Paying Referrals */}
                  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-5 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Active Subscriptions</span>
                      <Users className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="mt-2 text-2xl sm:text-3xl font-black text-white tabular-nums">
                      {currentPartner.activeReferrals} Servers
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Generating monthly:</span>
                      <span className="text-white font-mono font-medium">+${(currentPartner.activeReferrals * 5.25).toFixed(0)}/mo</span>
                    </div>
                  </div>

                  {/* Conversion Rate & Clicks */}
                  <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-5 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>Traffic & Conversion</span>
                      <TrendingUp className="h-4 w-4 text-amber-400" />
                    </div>
                    <div className="mt-2 text-2xl sm:text-3xl font-black text-white tabular-nums">
                      {currentPartner.conversionRate}
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-500">
                      <span>Total tracked clicks:</span>
                      <span className="text-neutral-300 font-mono">{currentPartner.totalClicks.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Conversion History Table & Early Payout Action */}
                <div className="rounded-2xl border border-neutral-800 bg-[#0c0c11]/95 p-6 sm:p-8 shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-5">
                    <div>
                      <h4 className="text-lg font-bold text-white">Recent Referral Conversions</h4>
                      <p className="text-xs text-neutral-400">Live feed of server instances deployed via your affiliate link</p>
                    </div>

                    <div>
                      {payoutRequested ? (
                        <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-xs font-semibold text-emerald-400">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>Payout request submitted! Processing in &lt; 24h</span>
                        </div>
                      ) : (
                        <button
                          onClick={handleRequestPayout}
                          className="inline-flex items-center gap-2 rounded-lg bg-[#e63600] px-4 py-2 text-xs font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all"
                        >
                          <Wallet className="h-3.5 w-3.5" />
                          <span>Request Early Payout (${currentPartner.pendingPayout.toFixed(2)})</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Transactions list */}
                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-neutral-800 text-neutral-500">
                          <th className="pb-3 font-semibold">Instance Plan</th>
                          <th className="pb-3 font-semibold">Datacenter</th>
                          <th className="pb-3 font-semibold">Commission</th>
                          <th className="pb-3 font-semibold">Date</th>
                          <th className="pb-3 font-semibold text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/60 font-mono">
                        {currentPartner.conversions.map((conv) => (
                          <tr key={conv.id} className="hover:bg-neutral-900/50 transition-colors">
                            <td className="py-3 font-sans font-semibold text-white">
                              {conv.planName}
                            </td>
                            <td className="py-3 text-neutral-400">
                              {conv.location}
                            </td>
                            <td className="py-3 text-emerald-400 font-bold">
                              +${conv.monthlyCommission.toFixed(2)}/mo
                            </td>
                            <td className="py-3 text-neutral-400">
                              {conv.date}
                            </td>
                            <td className="py-3 text-right">
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20 font-sans">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                <span>{conv.status}</span>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 border-t border-neutral-800/80 pt-4">
                    <span>Showing 5 most recent active conversions</span>
                    <span className="text-[#ff4500]">Lifetime cookie tracking active</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
