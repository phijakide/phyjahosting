import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Gamepad2, 
  Boxes, 
  Cpu, 
  Bot, 
  Code2, 
  Terminal, 
  HelpCircle, 
  MessageSquare, 
  Activity, 
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

interface NavbarProps {
  onOpenOrder: (planId?: string) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenStatus: () => void;
  onOpenSupport: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenOrder,
  onNavigateSection,
  onOpenStatus,
  onOpenSupport,
}) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-900/80 bg-[#060608]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand Zone: Exactly one line text wordmark */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}
          className="group flex items-center gap-1.5 text-2xl font-extrabold tracking-tight transition-transform hover:opacity-95"
        >
          <span className="text-[#ff4500] font-black tracking-tight drop-shadow-[0_0_12px_rgba(255,69,0,0.5)]">
            PHY_JA
          </span>
          <span className="text-white font-bold tracking-tight">
            SERVER
          </span>
        </a>

        {/* Center Nav Zone: Exactly matches image */}
        <nav ref={dropdownRef} className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => { setActiveDropdown(null); onNavigateSection('hero'); }}
            className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
          >
            {t.nav.home}
          </button>

          {/* Minecraft Hosting Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick('minecraft')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                activeDropdown === 'minecraft' ? 'text-[#ff4500]' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{t.nav.minecraftHosting}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'minecraft' ? 'rotate-180 text-[#ff4500]' : 'text-neutral-400'}`} />
            </button>

            {activeDropdown === 'minecraft' && (
              <div className="absolute left-1/2 mt-3 w-80 -translate-x-1/2 rounded-xl border border-neutral-800 bg-[#0b0b0f] p-3 shadow-2xl shadow-black/80 ring-1 ring-white/5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('pricing');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-[#ff4500]/10 p-2 text-[#ff4500]">
                      <Gamepad2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Java & Bedrock Edition</div>
                      <div className="text-xs text-neutral-400">Paper, Purpur, Spigot, Vanilla with crossplay support</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('pricing');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-amber-500/10 p-2 text-amber-500">
                      <Boxes className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Modded Servers</div>
                      <div className="text-xs text-neutral-400">CurseForge, Modrinth, FTB & NeoForge 1-click install</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('panel');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-neutral-800 p-2 text-neutral-300">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">High-Clock Ryzen Hardware</div>
                      <div className="text-xs text-neutral-400">Ryzen 9 7950X cores @ 5.7 GHz single-thread beast</div>
                    </div>
                  </button>
                </div>

                <div className="mt-2 border-t border-neutral-800/80 pt-2">
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenOrder();
                    }}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold text-[#ff4500] hover:bg-[#ff4500]/10"
                  >
                    <span>View all Minecraft server plans</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Bot Hosting Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick('bot')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                activeDropdown === 'bot' ? 'text-[#ff4500]' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{t.nav.botHosting}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'bot' ? 'rotate-180 text-[#ff4500]' : 'text-neutral-400'}`} />
            </button>

            {activeDropdown === 'bot' && (
              <div className="absolute left-1/2 mt-3 w-80 -translate-x-1/2 rounded-xl border border-neutral-800 bg-[#0b0b0f] p-3 shadow-2xl shadow-black/80 ring-1 ring-white/5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('pricing');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-[#ff4500]/10 p-2 text-[#ff4500]">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Discord Bot Hosting</div>
                      <div className="text-xs text-neutral-400">Node.js, discord.js, discord.py, JDA & Go runtimes</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('pricing');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-blue-500/10 p-2 text-blue-400">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Continuous GitHub Deploy</div>
                      <div className="text-xs text-neutral-400">Push to git repo and your bot restarts automatically</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('panel');
                    }}
                    className="flex w-full items-start gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <div className="rounded-md bg-neutral-800 p-2 text-neutral-300">
                      <Terminal className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Always-On 24/7 Process</div>
                      <div className="text-xs text-neutral-400">Auto-recovery with live web terminal & env secrets</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Support Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownClick('support')}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                activeDropdown === 'support' ? 'text-[#ff4500]' : 'text-neutral-300 hover:text-white'
              }`}
            >
              <span>{t.nav.support}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'support' ? 'rotate-180 text-[#ff4500]' : 'text-neutral-400'}`} />
            </button>

            {activeDropdown === 'support' && (
              <div className="absolute left-1/2 mt-3 w-72 -translate-x-1/2 rounded-xl border border-neutral-800 bg-[#0b0b0f] p-3 shadow-2xl shadow-black/80 ring-1 ring-white/5 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenSupport();
                    }}
                    className="flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <MessageSquare className="h-5 w-5 text-[#ff4500]" />
                    <div>
                      <div className="text-sm font-semibold text-white">24/7 Help Desk</div>
                      <div className="text-xs text-neutral-400">Instant ticket response in &lt; 15 mins</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onOpenStatus();
                    }}
                    className="flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <Activity className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.nav.status}</div>
                      <div className="text-xs text-neutral-400">99.98% operational uptime across all nodes</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('faq');
                    }}
                    className="flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <HelpCircle className="h-5 w-5 text-neutral-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.nav.faq}</div>
                      <div className="text-xs text-neutral-400">Guides for plugins, optimization, and setups</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setActiveDropdown(null);
                      onNavigateSection('affiliate');
                    }}
                    className="flex w-full items-center gap-3 rounded-lg p-2.5 text-left transition-colors hover:bg-neutral-800/60"
                  >
                    <Sparkles className="h-5 w-5 text-amber-400" />
                    <div>
                      <div className="text-sm font-semibold text-white">{t.nav.affiliate}</div>
                      <div className="text-xs text-neutral-400">Earn 25% recurring commission</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Action Button & Language Selector */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSelector variant="navbar" />

          <button
            onClick={() => onOpenOrder()}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#e63600] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(230,54,0,0.4)] transition-all hover:bg-[#ff3c00] hover:shadow-[0_0_25px_rgba(255,60,0,0.6)] active:scale-95"
          >
            {t.nav.getStarted}
          </button>
        </div>

        {/* Mobile Right Controls: Language Selector + Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector variant="navbar" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-800 bg-[#09090d] px-6 py-6 md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateSection('hero'); }}
              className="text-left text-base font-medium text-white"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateSection('pricing'); }}
              className="text-left text-base font-medium text-neutral-300 hover:text-white"
            >
              {t.nav.minecraftHosting}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateSection('pricing'); }}
              className="text-left text-base font-medium text-neutral-300 hover:text-white"
            >
              {t.nav.botHosting}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigateSection('affiliate'); }}
              className="text-left text-base font-medium text-neutral-300 hover:text-white"
            >
              {t.nav.affiliate}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSupport(); }}
              className="text-left text-base font-medium text-neutral-300 hover:text-white"
            >
              {t.nav.support}
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenStatus(); }}
              className="text-left text-base font-medium text-emerald-400"
            >
              {t.nav.status} (99.9% Uptime)
            </button>

            {/* Language Selector in Drawer */}
            <LanguageSelector variant="drawer" />

            <div className="pt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenOrder(); }}
                className="w-full rounded-md bg-[#e63600] py-3 text-center text-sm font-semibold text-white shadow-lg shadow-[#e63600]/30"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
