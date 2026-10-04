import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onOpenOrder: (planId?: string) => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenStatus: () => void;
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenOrder,
  onNavigateSection,
  onOpenStatus,
  onOpenSupport,
}) => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-neutral-900 bg-[#050507] text-neutral-400 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}
              className="inline-flex items-center gap-1.5 text-2xl font-extrabold tracking-tight"
            >
              <span className="text-[#ff4500] font-black">PHY_JA</span>
              <span className="text-white font-bold">SERVER</span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenStatus}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1 text-xs text-neutral-300 hover:border-emerald-500/50 hover:text-white transition-colors"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>All Systems Operational (99.98%)</span>
              </button>
            </div>
          </div>

          {/* Links Column 1: Hosting */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Hosting</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Minecraft Java Edition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Minecraft Bedrock Edition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Discord Bot Hosting
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-white transition-colors"
                >
                  Modded & Forge Servers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenOrder()}
                  className="hover:text-[#ff4500] transition-colors"
                >
                  Custom Server Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigateSection('panel')}
                  className="hover:text-white transition-colors"
                >
                  Pterodactyl Web Console
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('locations')}
                  className="hover:text-white transition-colors"
                >
                  Global Datacenter Ping Test
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('features')}
                  className="hover:text-white transition-colors"
                >
                  Hardware & Network Specs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenStatus}
                  className="hover:text-white transition-colors"
                >
                  Real-time Status Page
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Help & Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="mt-4 space-y-2.5 text-xs">
              <li>
                <button
                  onClick={onOpenSupport}
                  className="hover:text-white transition-colors"
                >
                  24/7 Help Desk & Tickets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('faq')}
                  className="hover:text-white transition-colors"
                >
                  Knowledgebase & Guides
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSupport}
                  className="hover:text-white transition-colors"
                >
                  Free Server Migration
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSupport}
                  className="hover:text-white transition-colors"
                >
                  Discord Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('affiliate')}
                  className="hover:text-[#ff4500] font-medium transition-colors"
                >
                  Affiliate Partner Program
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} PHY_JA SERVER. All rights reserved. Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">SLA Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
