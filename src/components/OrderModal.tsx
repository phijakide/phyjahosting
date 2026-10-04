import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Server, Globe, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { Plan, BotPlan, DatacenterLocation } from '../types';
import { MINECRAFT_PLANS, DATACENTER_LOCATIONS } from '../data/hostingData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: Plan | BotPlan | null;
  category: 'minecraft' | 'bot';
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  category,
}) => {
  const currentPlan = selectedPlan || MINECRAFT_PLANS[1]; // default to Iron plan
  const [selectedLocation, setSelectedLocation] = useState<string>(DATACENTER_LOCATIONS[0].id);
  const [serverVersion, setServerVersion] = useState<string>(
    category === 'bot' ? 'Node.js 22 LTS (discord.js)' : 'Paper 1.21.4 (High Performance)'
  );
  const [subdomain, setSubdomain] = useState<string>('myserver');
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoMessage, setPromoMessage] = useState<string>('');
  const [step, setStep] = useState<'configure' | 'deploying' | 'completed'>('configure');

  useEffect(() => {
    if (isOpen) {
      setStep('configure');
      setPromoCode('');
      setDiscountPercent(0);
      setPromoMessage('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'PHYJA15') {
      setDiscountPercent(15);
      setPromoMessage('Promo code PHYJA15 applied! 15% discount granted.');
    } else if (code === 'PHYJALAUNCH' || code === 'MPRLAUNCH' || code === 'MINECRAFT') {
      setDiscountPercent(20);
      setPromoMessage('Launch promo applied! 20% discount granted.');
    } else {
      setPromoMessage('Invalid promo code. Try "PHYJA15" or "PHYJALAUNCH" for up to 20% off.');
    }
  };

  const finalPrice = (
    currentPlan.monthlyPrice *
    (1 - discountPercent / 100)
  ).toFixed(2);

  const handleStartDeploy = () => {
    setStep('deploying');
    setTimeout(() => {
      setStep('completed');
    }, 2400);
  };

  const locationObj = DATACENTER_LOCATIONS.find((l) => l.id === selectedLocation) || DATACENTER_LOCATIONS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c10] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0e0e14] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-[#ff4500] font-black text-lg">PHY_JA</span>
            <span className="text-white font-bold text-lg">SERVER Deploy Wizard</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step: Configure */}
        {step === 'configure' && (
          <div className="max-h-[80vh] overflow-y-auto p-6 space-y-6">
            {/* Plan Info Card */}
            <div className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-900/60 p-4">
              <div>
                <div className="text-xs text-[#ff4500] font-semibold uppercase tracking-wider">
                  Selected Configuration
                </div>
                <div className="text-lg font-bold text-white">{currentPlan.name}</div>
                <div className="text-xs text-neutral-400">
                  {'description' in currentPlan
                    ? `${currentPlan.description} · ${currentPlan.ram} RAM`
                    : `${currentPlan.ram} GB DDR5 RAM · ${currentPlan.vCpu} vCPU`}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-white tabular-nums">${finalPrice}</div>
                <div className="text-[11px] text-neutral-400">billed monthly</div>
              </div>
            </div>

            {/* Software / Engine Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                1. Select Server Software / Runtime
              </label>
              <select
                value={serverVersion}
                onChange={(e) => setServerVersion(e.target.value)}
                className="mt-2 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white focus:border-[#ff4500] focus:outline-none"
              >
                {category === 'minecraft' ? (
                  <>
                    <option value="Paper 2027 / 1.22 (Folia Multi-Threaded)">Paper 2027 / Folia (Multi-Threaded Regionized Engine - Recommended)</option>
                    <option value="Purpur 2027 (Extreme TPS)">Purpur 2027 (Highly Configurable SMP Server)</option>
                    <option value="Fabric 2027 (Lithium + Sodium)">Fabric 2027 (Ultra-Lightweight Modding Engine)</option>
                    <option value="NeoForge 2027 (Next-Gen Modpacks)">NeoForge 2027 (Engineered for Heavy 2027 Modpacks)</option>
                    <option value="Bedrock Dedicated 2027 (Crossplay)">Bedrock Dedicated 2027 (Mobile, Console & PC)</option>
                    <option value="Vanilla Minecraft 1.22 LTS">Vanilla Minecraft 1.22 LTS (Official Mojang JAR)</option>
                  </>
                ) : (
                  <>
                    <option value="Node.js 24 LTS (discord.js)">Node.js 24 LTS (discord.js 2027 ready)</option>
                    <option value="Python 3.14 (discord.py / hikari)">Python 3.14 (discord.py & nextcord)</option>
                    <option value="Java 25 (JDA / Lavalink 2027)">Java 25 (JDA & Lavalink Audio Engine)</option>
                    <option value="Go 1.25 (High Concurrency)">Go 1.25 (Custom High-Concurrency Bot)</option>
                    <option value="Custom 2027 Docker Container">Custom 2027 OCI/Dockerfile runtime</option>
                  </>
                )}
              </select>
            </div>

            {/* Datacenter Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                2. Datacenter Node Location
              </label>
              <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {DATACENTER_LOCATIONS.map((loc) => {
                  const isSelected = selectedLocation === loc.id;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedLocation(loc.id)}
                      className={`flex flex-col items-start rounded-lg border p-3 text-left transition-all ${
                        isSelected
                          ? 'border-[#ff4500] bg-[#ff4500]/10 text-white ring-1 ring-[#ff4500]'
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-700 hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{loc.flag}</span>
                      <span className="mt-1 text-xs font-bold text-white">{loc.city}</span>
                      <span className="text-[10px] text-neutral-500 font-mono">~{loc.basePing}ms ping</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Server Subdomain */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                3. Free Server Address & Subdomain
              </label>
              <div className="mt-2 flex items-center rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2">
                <input
                  type="text"
                  value={subdomain}
                  onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                  placeholder="your-server-name"
                  className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                />
                <span className="text-xs text-neutral-500 font-mono select-none">
                  .phyjaserver.net
                </span>
              </div>
            </div>

            {/* Promo Code Form */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                4. Have a Promo Code? (Use "MPRLAUNCH" for 20% off)
              </label>
              <form onSubmit={handleApplyPromo} className="mt-2 flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code..."
                  className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none uppercase"
                />
                <button
                  type="submit"
                  className="rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <div
                  className={`mt-1.5 text-xs ${
                    discountPercent > 0 ? 'text-emerald-400 font-medium' : 'text-amber-400'
                  }`}
                >
                  {promoMessage}
                </div>
              )}
            </div>

            {/* Total & Action */}
            <div className="border-t border-neutral-800 pt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Total Due Today:</div>
                <div className="text-2xl font-black text-white tabular-nums">${finalPrice}</div>
              </div>
              <button
                onClick={handleStartDeploy}
                className="inline-flex items-center gap-2 rounded-lg bg-[#e63600] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-98 transition-all"
              >
                <span>Deploy Server Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step: Deploying Animation */}
        {step === 'deploying' && (
          <div className="p-12 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff4500]/10 text-[#ff4500]">
              <Server className="h-8 w-8 animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Provisioning Container on Node</h3>
              <p className="mt-2 text-xs text-neutral-400 font-mono">
                Allocating {currentPlan.name} in {locationObj.city} ({locationObj.testIp})...
              </p>
            </div>
            <div className="mx-auto max-w-xs w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#ff4500] to-[#ff7a00] animate-[pulse_1s_infinite] w-3/4 rounded-full" />
            </div>
          </div>
        )}

        {/* Step: Completed */}
        {step === 'completed' && (
          <div className="p-8 text-center space-y-6">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Server Successfully Deployed!</h3>
              <p className="mt-2 text-sm text-neutral-400">
                Your instance is online, secured by Anycast DDoS mitigation, and waiting for connections.
              </p>
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-900/80 p-4 text-left font-mono text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Server Address:</span>
                <span className="text-[#ff4500] font-bold">{subdomain || 'myserver'}.phyjaserver.net</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Node IP & Port:</span>
                <span className="text-white">{locationObj.testIp}:25565</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Software:</span>
                <span className="text-white">{serverVersion.split(' ')[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Status:</span>
                <span className="text-emerald-400 font-semibold">Running (20.0 TPS)</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full rounded-lg bg-[#e63600] py-3 text-sm font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00]"
            >
              Open Control Panel Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
