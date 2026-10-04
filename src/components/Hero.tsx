import React from 'react';
import { Zap, Shield, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onViewPlans: () => void;
  onLearnMore: () => void;
  onSelectFeature?: (feature: 'hardware' | 'ddos' | 'uptime') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewPlans,
  onLearnMore,
  onSelectFeature,
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      {/* Warm Ambient Glow behind hero title matching screenshot */}
      <div 
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[520px] opacity-30 blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 30%, #ff4500 0%, #ff6a00 30%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Main Headline */}
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.12]">
          <span className="block font-semibold">{t.hero.titleLine1}</span>
          <span className="block mt-1 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3c00] via-[#ff5500] to-[#ff7700] drop-shadow-[0_0_35px_rgba(255,69,0,0.45)]">
            {t.hero.titleLine2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300 sm:text-lg md:text-xl font-normal leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons - Pixel Match with Image */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onViewPlans}
            className="rounded-lg bg-[#e63600] px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(230,54,0,0.4)] transition-all hover:bg-[#ff3c00] hover:shadow-[0_0_35px_rgba(255,60,0,0.6)] active:scale-98"
          >
            {t.hero.viewPlans}
          </button>

          <button
            onClick={onLearnMore}
            className="rounded-lg border border-neutral-700/70 bg-[#16161a]/90 px-8 py-3.5 text-base font-medium text-neutral-200 transition-all hover:border-neutral-500 hover:bg-[#1f1f25] hover:text-white active:scale-98"
          >
            {t.hero.learnMore}
          </button>
        </div>

        {/* Three Key Feature Cards - Exact Match with Image */}
        <div className="mt-20 md:mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 text-center">
          {/* Card 1: Lightning Fast */}
          <div 
            onClick={() => onSelectFeature?.('hardware')}
            className="group cursor-pointer rounded-2xl border border-neutral-800/80 bg-[#0d0d12]/90 p-8 md:p-9 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4500]/50 hover:bg-[#121217] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center text-[#ff5500] transition-transform duration-200 group-hover:scale-110">
              <Zap className="h-9 w-9 stroke-[2.2]" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white tracking-tight">
              {t.hero.card1Title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 font-normal leading-relaxed">
              {t.hero.card1Desc}
            </p>
          </div>

          {/* Card 2: DDoS Protection */}
          <div 
            onClick={() => onSelectFeature?.('ddos')}
            className="group cursor-pointer rounded-2xl border border-neutral-800/80 bg-[#0d0d12]/90 p-8 md:p-9 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4500]/50 hover:bg-[#121217] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center text-[#ff5500] transition-transform duration-200 group-hover:scale-110">
              <Shield className="h-9 w-9 stroke-[2.2]" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white tracking-tight">
              {t.hero.card2Title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 font-normal leading-relaxed">
              {t.hero.card2Desc}
            </p>
          </div>

          {/* Card 3: 99.9% Uptime */}
          <div 
            onClick={() => onSelectFeature?.('uptime')}
            className="group cursor-pointer rounded-2xl border border-neutral-800/80 bg-[#0d0d12]/90 p-8 md:p-9 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff4500]/50 hover:bg-[#121217] hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center text-[#ff5500] transition-transform duration-200 group-hover:scale-110">
              <Server className="h-9 w-9 stroke-[2.2]" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-white tracking-tight">
              {t.hero.card3Title}
            </h3>
            <p className="mt-2 text-sm text-neutral-400 font-normal leading-relaxed">
              {t.hero.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
