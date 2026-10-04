import React, { useState } from 'react';
import { DATACENTER_LOCATIONS } from '../data/hostingData';
import { Globe, Wifi, Copy, Check, Play, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const LocationPingTester: React.FC = () => {
  const { t } = useLanguage();
  const [testingId, setTestingId] = useState<string | null>(null);
  const [pings, setPings] = useState<Record<string, number>>({});
  const [copiedIp, setCopiedIp] = useState<string | null>(null);
  const [isTestingAll, setIsTestingAll] = useState(false);

  const runPingTest = (id: string, basePing: number) => {
    setTestingId(id);
    setTimeout(() => {
      // Simulate real ping variation
      const jitter = Math.floor(Math.random() * 8) - 4;
      const result = Math.max(12, basePing + jitter);
      setPings(prev => ({ ...prev, [id]: result }));
      setTestingId(null);
    }, 500);
  };

  const testAllLocations = () => {
    setIsTestingAll(true);
    DATACENTER_LOCATIONS.forEach((loc, index) => {
      setTimeout(() => {
        const jitter = Math.floor(Math.random() * 8) - 4;
        const result = Math.max(12, loc.basePing + jitter);
        setPings(prev => ({ ...prev, [loc.id]: result }));
        if (index === DATACENTER_LOCATIONS.length - 1) {
          setIsTestingAll(false);
        }
      }, (index + 1) * 200);
    });
  };

  const copyIp = (ip: string) => {
    navigator.clipboard.writeText(ip);
    setCopiedIp(ip);
    setTimeout(() => setCopiedIp(null), 2000);
  };

  return (
    <section id="locations" className="relative py-24 border-t border-neutral-900 bg-[#060608]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
              {t.locations.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              {t.locations.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base text-neutral-400">
              {t.locations.subtitle}
            </p>
          </div>

          <div>
            <button
              onClick={testAllLocations}
              disabled={isTestingAll}
              className="inline-flex items-center gap-2 rounded-lg bg-[#e63600] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all disabled:opacity-50"
            >
              <Wifi className="h-4 w-4" />
              <span>{isTestingAll ? 'Pinging All Nodes...' : t.locations.runAllTests}</span>
            </button>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DATACENTER_LOCATIONS.map((loc) => {
            const currentPing = pings[loc.id];
            const isCurrentlyTesting = testingId === loc.id;

            return (
              <div
                key={loc.id}
                className="flex flex-col justify-between rounded-xl border border-neutral-800 bg-[#0d0d12]/90 p-5 transition-all duration-150 hover:border-neutral-700"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl">{loc.flag}</span>
                      <div>
                        <h4 className="text-base font-bold text-white">{loc.city}</h4>
                        <div className="text-xs text-neutral-400">{loc.country}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-lg bg-neutral-900/80 px-3 py-2 border border-neutral-800/80 text-xs font-mono">
                    <span className="text-neutral-400">{loc.testIp}</span>
                    <button
                      onClick={() => copyIp(loc.testIp)}
                      title="Copy Test IP"
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {copiedIp === loc.testIp ? (
                        <Check className="h-4 w-4 text-emerald-400" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-800/80 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-white tabular-nums">
                      {currentPing ? `${currentPing} ms` : `~${loc.basePing} ms`}
                    </span>
                  </div>

                  <button
                    onClick={() => runPingTest(loc.id, loc.basePing)}
                    disabled={isCurrentlyTesting}
                    className="rounded-md border border-neutral-700 bg-neutral-800/80 px-3 py-1 text-xs font-medium text-neutral-300 hover:border-[#ff4500] hover:text-white active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isCurrentlyTesting ? 'Testing...' : 'Test Ping'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
