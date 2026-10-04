import React from 'react';
import { Cpu, ShieldCheck, Server, Zap, RefreshCw, HardDrive } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HardwareSpecsProps {
  onLearnMore?: () => void;
}

export const HardwareSpecs: React.FC<HardwareSpecsProps> = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative py-24 border-t border-neutral-900 bg-[#07070a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
            {t.hardware.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            {t.hardware.title}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t.hardware.subtitle}
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hardware Feature 1 */}
          <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-8 transition-all hover:border-neutral-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff4500]/10 text-[#ff4500]">
              <Cpu className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">AMD Ryzen 9 @ 5.7 GHz</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Minecraft runs predominantly on a single thread. Our dedicated Ryzen 9 7950X / 9950X cores guarantee consistent 20.0 TPS even under heavy redstone or entity load.
            </p>
            <div className="mt-6 border-t border-neutral-800/80 pt-4 text-xs font-mono text-neutral-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Single-Core Boost:</span>
                <span className="text-white font-semibold">5.70 GHz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Memory Architecture:</span>
                <span className="text-white font-semibold">DDR5 5600 MHz</span>
              </div>
            </div>
          </div>

          {/* Hardware Feature 2 */}
          <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-8 transition-all hover:border-neutral-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff4500]/10 text-[#ff4500]">
              <ShieldCheck className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">12+ Tbps DDoS Mitigation</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Custom Layer 7 filtering engineered specifically for Minecraft protocols, BungeeCord handshake validation, and bot attack scrubbers.
            </p>
            <div className="mt-6 border-t border-neutral-800/80 pt-4 text-xs font-mono text-neutral-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Mitigation Speed:</span>
                <span className="text-white font-semibold">&lt; 1 Second</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Filtering Capacity:</span>
                <span className="text-white font-semibold">12+ Tbps Anycast</span>
              </div>
            </div>
          </div>

          {/* Hardware Feature 3 */}
          <div className="rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-8 transition-all hover:border-neutral-700">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff4500]/10 text-[#ff4500]">
              <HardDrive className="h-6 w-6 stroke-[2.2]" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">PCIe 4.0 NVMe Storage</h3>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              Chunk generation and world saves bottleneck on slow hard drives. Our Samsung Enterprise NVMe SSDs deliver sequential read/write rates up to 7,000 MB/s.
            </p>
            <div className="mt-6 border-t border-neutral-800/80 pt-4 text-xs font-mono text-neutral-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Read / Write Speeds:</span>
                <span className="text-white font-semibold">7,000 MB/s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Random 4K IOPS:</span>
                <span className="text-white font-semibold">1,000,000+ IOPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
