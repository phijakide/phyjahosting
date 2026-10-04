import React, { useState } from 'react';
import { MINECRAFT_PLANS, BOT_PLANS } from '../data/hostingData';
import { Check, Sparkles, Sliders, ArrowRight } from 'lucide-react';
import { Plan, BotPlan } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PricingSectionProps {
  onSelectPlan: (plan: Plan | BotPlan, category: 'minecraft' | 'bot') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'minecraft' | 'bot' | 'custom'>('minecraft');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  // Custom Slider state for custom server builder
  const [customRam, setCustomRam] = useState<number>(8);

  const discountMultiplier = billingCycle === 'annual' ? 0.8 : 1.0;

  // Custom calculator values
  const customVcpu = Math.min(8, Math.max(2, Math.floor(customRam / 2.5) + 1));
  const customDisk = customRam * 10;
  const customPrice = (customRam * 2.25 * discountMultiplier).toFixed(2);
  const customPlayers = `${customRam * 4}-${customRam * 10} Players`;

  return (
    <section id="pricing" className="relative py-24 border-t border-neutral-900 bg-[#060608]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
            {t.pricing.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t.pricing.subtitle}
          </p>

          {/* Category Selector Tabs */}
          <div className="mt-8 inline-flex items-center rounded-xl bg-neutral-900/90 p-1.5 border border-neutral-800">
            <button
              onClick={() => setActiveCategory('minecraft')}
              className={`rounded-lg px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'minecraft'
                  ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.pricing.minecraftTab}
            </button>
            <button
              onClick={() => setActiveCategory('bot')}
              className={`rounded-lg px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'bot'
                  ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.pricing.botTab}
            </button>
            <button
              onClick={() => setActiveCategory('custom')}
              className={`rounded-lg px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === 'custom'
                  ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Custom Server Configurator
            </button>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="mt-6 flex items-center justify-center gap-3 text-xs sm:text-sm font-medium">
            <span className={billingCycle === 'monthly' ? 'text-white' : 'text-neutral-500'}>
              Monthly Billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-800 transition-colors focus:outline-none"
              role="switch"
              aria-checked={billingCycle === 'annual'}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-[#ff4500] transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className="flex items-center gap-1.5">
              <span className={billingCycle === 'annual' ? 'text-white font-semibold' : 'text-neutral-500'}>
                Annual Billing
              </span>
              <span className="text-[11px] font-bold text-[#ff4500]">
                (Save 20%)
              </span>
            </span>
          </div>
        </div>

        {/* Content based on Active Category */}
        <div className="mt-14">
          {/* Minecraft Plans */}
          {activeCategory === 'minecraft' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MINECRAFT_PLANS.map((plan) => {
                const calculatedPrice = (plan.monthlyPrice * discountMultiplier).toFixed(2);
                return (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col justify-between rounded-2xl border bg-[#0d0d12]/90 p-7 transition-all duration-200 hover:-translate-y-1.5 ${
                      plan.isPopular
                        ? 'border-[#ff4500] shadow-[0_0_30px_rgba(255,69,0,0.15)] ring-1 ring-[#ff4500]/50'
                        : 'border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#e63600] px-3.5 py-0.5 text-[11px] font-bold tracking-wide uppercase text-white shadow-md">
                        Most Popular
                      </div>
                    )}

                    <div>
                      <div className="flex items-baseline justify-between">
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <span className="text-xs font-semibold text-neutral-400">{plan.recommendedPlayers}</span>
                      </div>
                      <p className="mt-1 text-xs text-neutral-400">{plan.tagline}</p>

                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-white tabular-nums">${calculatedPrice}</span>
                        <span className="text-xs text-neutral-400">/month</span>
                      </div>

                      {/* Specs summary */}
                      <div className="mt-5 space-y-2 border-t border-neutral-800/80 pt-5 text-xs text-neutral-300">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Memory (RAM)</span>
                          <span className="font-semibold text-white">{plan.ram} GB DDR5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Processor</span>
                          <span className="font-semibold text-white">{plan.vCpu} vCPU (Ryzen 9)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">NVMe Storage</span>
                          <span className="font-semibold text-white">{plan.disk}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Backup Slots</span>
                          <span className="font-semibold text-white">{plan.backupSlots} Automatic</span>
                        </div>
                      </div>

                      {/* Feature checkmarks */}
                      <ul className="mt-6 space-y-2.5 border-t border-neutral-800/80 pt-5">
                        {plan.features.slice(4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <Check className="h-4 w-4 shrink-0 text-[#ff4500] mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-2">
                      <button
                        onClick={() => onSelectPlan(plan, 'minecraft')}
                        className={`w-full rounded-lg py-2.5 text-sm font-semibold transition-all active:scale-98 ${
                          plan.isPopular
                            ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00]'
                            : 'border border-neutral-700 bg-neutral-900 text-neutral-200 hover:border-neutral-500 hover:bg-neutral-800 hover:text-white'
                        }`}
                      >
                        Order {plan.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Bot Hosting Plans */}
          {activeCategory === 'bot' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
              {BOT_PLANS.map((plan) => {
                const calculatedPrice = (plan.monthlyPrice * discountMultiplier).toFixed(2);
                return (
                  <div
                    key={plan.id}
                    className="flex flex-col justify-between rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-7 transition-all duration-200 hover:-translate-y-1.5 hover:border-neutral-700"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="mt-1 text-xs text-neutral-400">{plan.description}</p>

                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-white tabular-nums">${calculatedPrice}</span>
                        <span className="text-xs text-neutral-400">/month</span>
                      </div>

                      {/* Specs */}
                      <div className="mt-5 space-y-2 border-t border-neutral-800/80 pt-5 text-xs text-neutral-300">
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Allocated RAM</span>
                          <span className="font-semibold text-white">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">CPU Allocation</span>
                          <span className="font-semibold text-white">{plan.vCpu}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-neutral-400">Storage</span>
                          <span className="font-semibold text-white">{plan.disk}</span>
                        </div>
                      </div>

                      {/* Features */}
                      <ul className="mt-6 space-y-2.5 border-t border-neutral-800/80 pt-5">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <Check className="h-4 w-4 shrink-0 text-[#ff4500] mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-2">
                      <button
                        onClick={() => onSelectPlan(plan, 'bot')}
                        className="w-full rounded-lg border border-neutral-700 bg-neutral-900 py-2.5 text-sm font-semibold text-neutral-200 transition-all hover:border-[#ff4500] hover:bg-neutral-800 hover:text-white"
                      >
                        Deploy {plan.name}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Custom Server Configurator */}
          {activeCategory === 'custom' && (
            <div className="max-w-3xl mx-auto rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-[#ff4500]/10 p-2.5 text-[#ff4500]">
                  <Sliders className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Interactive Server Configurator</h3>
                  <p className="text-sm text-neutral-400">
                    Fine-tune exact hardware resources to your community size.
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-neutral-300">Target Memory (DDR5 RAM):</span>
                    <span className="text-2xl font-extrabold text-[#ff4500] tabular-nums">
                      {customRam} GB
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="32"
                    step="2"
                    value={customRam}
                    onChange={(e) => setCustomRam(Number(e.target.value))}
                    className="mt-3 w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff4500]"
                  />
                  <div className="mt-2 flex justify-between text-[11px] text-neutral-500 font-mono">
                    <span>2 GB (Vanilla)</span>
                    <span>8 GB (SMP / Modpacks)</span>
                    <span>16 GB (Network)</span>
                    <span>32 GB (Mega Node)</span>
                  </div>
                </div>

                {/* Real-time Calculated Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 rounded-xl bg-neutral-900/80 p-5 border border-neutral-800/80 text-center">
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Processor</div>
                    <div className="mt-1 text-base font-bold text-white">{customVcpu} vCPUs</div>
                    <div className="text-[10px] text-neutral-500">Ryzen 9 7950X</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Storage</div>
                    <div className="mt-1 text-base font-bold text-white">{customDisk} GB</div>
                    <div className="text-[10px] text-neutral-500">PCIe 4.0 NVMe</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wide">Capacity</div>
                    <div className="mt-1 text-base font-bold text-white">{customPlayers}</div>
                    <div className="text-[10px] text-neutral-500">Smooth 20 TPS</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-neutral-400 uppercase tracking-wide">DDoS Cap</div>
                    <div className="mt-1 text-base font-bold text-white">12+ Tbps</div>
                    <div className="text-[10px] text-neutral-500">Unmetered</div>
                  </div>
                </div>

                {/* Price and Checkout Button */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-800 pt-6">
                  <div>
                    <div className="text-xs text-neutral-400">Estimated Total:</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold text-white tabular-nums">${customPrice}</span>
                      <span className="text-xs text-neutral-400">/ month ({billingCycle})</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      onSelectPlan(
                        {
                          id: `custom-${customRam}gb`,
                          name: `Custom ${customRam}GB Node`,
                          tagline: `Custom tuned ${customRam} GB DDR5 server with ${customVcpu} vCPUs`,
                          ram: customRam,
                          vCpu: customVcpu,
                          disk: `${customDisk} GB NVMe`,
                          backupSlots: Math.max(3, Math.floor(customRam / 2)),
                          monthlyPrice: parseFloat(customPrice),
                          recommendedPlayers: customPlayers,
                          features: [
                            `${customRam} GB DDR5 RAM`,
                            `${customVcpu} Dedicated vCPUs`,
                            `${customDisk} GB Enterprise NVMe`,
                            '12+ Tbps Anycast DDoS Shield',
                            'Automated Backups & FTP Access',
                          ],
                        },
                        'minecraft'
                      )
                    }
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#e63600] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-98 transition-all"
                  >
                    <span>Deploy Custom Instance</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
