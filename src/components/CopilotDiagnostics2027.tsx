import React, { useState } from 'react';
import { 
  Cpu, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Terminal, 
  ArrowRight, 
  Zap, 
  RefreshCw, 
  ShieldCheck,
  Activity,
  Layers,
  Code
} from 'lucide-react';

interface DiagnosticPreset {
  id: string;
  title: string;
  type: 'TPS Lag' | 'Crash Dump' | 'Memory Leak';
  snippet: string;
  rootCause: string;
  remediation: string;
  tpsGain: string;
  fixedStatus: string;
}

const PRESETS: DiagnosticPreset[] = [
  {
    id: 'tps-lag',
    title: 'Entity Tick Stutter & Redstone Spikes',
    type: 'TPS Lag',
    snippet: `[14:22:01 WARN]: Can't keep up! Is the server overloaded? Running 3820ms or 76 ticks behind
[14:22:02 INFO]: [spark] Breakdown: 48.2% World 'world' -> TileEntities (villager_ai, hopper_checks, redstone_wire)
[14:22:03 WARN]: Chunk [x: -124, z: 88] contains 412 ticking entities`,
    rootCause: 'Unoptimized Hopper search intervals & 400+ unstacked mob entities in world spawn chunks.',
    remediation: 'Applied Paper 2027 Folia entity-activation-range optimizations & hopper-cooldown patches.',
    tpsGain: '+6.4 TPS (Restored to solid 20.0 TPS)',
    fixedStatus: 'Resolved automatically in 0.4s'
  },
  {
    id: 'plugin-conflict',
    title: 'Paper 1.22 ClassDefNotFound Exception',
    type: 'Crash Dump',
    snippet: `[14:25:12 ERROR]: Could not pass event PlayerInteractEvent to Vault v1.7.3
java.lang.NoClassDefFoundError: net/milkbowl/vault/economy/Economy
    at com.earth2me.essentials.Economy.getAccount(Economy.java:42) ~[EssentialsX.jar:?]
    at net.core.EventListener.onPlayerClick(EventListener.java:88) ~[CustomShop.jar:?]`,
    rootCause: 'Outdated Vault API bridge colliding with modern Paper 2027 modular Java 21 bytecode.',
    remediation: 'Replaced legacy binary with VaultUnlocked 2027 LTS edition; reindexed economy provider hooks.',
    tpsGain: 'Crash eliminated; 0 errors in console',
    fixedStatus: 'Bytecode shim applied successfully'
  },
  {
    id: 'memory-heap',
    title: 'Garbage Collection Heap Spill (OOM)',
    type: 'Memory Leak',
    snippet: `[14:28:44 WARN]: [ZGC/G1GC] Pause Young (Normal) (G1 Evacuation Pause) 1840M->1820M(2048M) 320.12ms
[14:28:49 ERROR]: The server has stopped responding! Watchdog thread dump initiated
[14:28:50 FATAL]: java.lang.OutOfMemoryError: Java heap space`,
    rootCause: 'Suboptimal JVM garbage collector flags causing heap fragmentation during heavy chunk serialization.',
    remediation: 'Activated PHY_JA 2027 Aikar-Zen5 tuned flags with dynamic ZGC concurrent compaction enabled.',
    tpsGain: '-68% GC pause time, saved 1.4 GB heap',
    fixedStatus: 'Optimized JVM parameters active'
  }
];

export const CopilotDiagnostics2027: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState<DiagnosticPreset>(PRESETS[0]);
  const [customLog, setCustomLog] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<DiagnosticPreset | null>(PRESETS[0]);
  const [isApplyingFix, setIsApplyingFix] = useState(false);
  const [fixApplied, setFixApplied] = useState(false);

  const handleSelectPreset = (preset: DiagnosticPreset) => {
    setSelectedPreset(preset);
    setCustomLog(preset.snippet);
    setAnalysisResult(preset);
    setFixApplied(false);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setFixApplied(false);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult(selectedPreset);
    }, 700);
  };

  const handleApplyFix = () => {
    setIsApplyingFix(true);
    setTimeout(() => {
      setIsApplyingFix(false);
      setFixApplied(true);
    }, 800);
  };

  return (
    <section className="relative py-24 border-t border-neutral-900 bg-[#07070a] overflow-hidden">
      {/* Background ambient accent */}
      <div 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] opacity-15 blur-[120px] -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #ff4500 0%, #ff7700 35%, transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4500]/30 bg-[#ff4500]/10 px-3.5 py-1 text-xs font-bold text-[#ff4500] mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PHY_JA 2027 NEXT-GEN ENGINE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            2027 AI Copilot & Live Crash Diagnostics
          </h2>
          <p className="mt-4 text-base text-neutral-300 sm:text-lg leading-relaxed">
            Eliminate server crashes and lag spikes before players even notice. 
            Our 2027 kernel diagnostics automatically parses crash dumps, identifies culprit plugins, and tunes TPS to a flawless 20.0.
          </p>
        </div>

        {/* Interactive Workspace */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Preset Selector & Raw Log Input */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-neutral-800 bg-[#0c0c11]/95 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Select Incident Scenario
                </span>
                <span className="text-[11px] text-[#ff4500] font-mono">2027 Telemetry Active</span>
              </div>

              {/* 3 Preset selector buttons */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PRESETS.map((p) => {
                  const isSelected = selectedPreset.id === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => handleSelectPreset(p)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-[#ff4500] bg-[#ff4500]/10 text-white shadow-md'
                          : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-[10px] font-mono text-[#ff4500] uppercase font-bold">{p.type}</div>
                      <div className="mt-1 text-xs font-semibold line-clamp-1">{p.title}</div>
                    </button>
                  );
                })}
              </div>

              {/* Console Log Preview / Editor */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#ff4500]" />
                    <span>Raw Server Log / Stacktrace</span>
                  </span>
                  <span className="text-[11px] text-neutral-500">Live sandbox</span>
                </div>
                <textarea
                  rows={6}
                  value={customLog || selectedPreset.snippet}
                  onChange={(e) => setCustomLog(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950/90 p-3.5 font-mono text-xs text-neutral-300 placeholder-neutral-600 focus:border-[#ff4500] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Action */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-[11px] text-neutral-500">
                  Instant real-time neural parser
                </span>
                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#e63600] px-5 py-2.5 text-xs font-semibold text-white shadow-md shadow-[#e63600]/30 hover:bg-[#ff3c00] active:scale-95 transition-all disabled:opacity-60"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${isAnalyzing ? 'animate-spin' : ''}`} />
                  <span>{isAnalyzing ? 'Analyzing Stack...' : 'Run 2027 Diagnostic'}</span>
                </button>
              </div>
            </div>

            {/* Quick spec badge */}
            <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-4 flex items-center justify-between text-xs font-mono">
              <span className="text-neutral-400">Node Hardware Engine:</span>
              <span className="text-emerald-400 font-bold">AMD Ryzen 9 9950X3D @ 5.7+ GHz</span>
            </div>
          </div>

          {/* Right Column: 2027 Neural Diagnostic Report */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-neutral-800 bg-[#0c0c11]/95 p-6 sm:p-7 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Diagnostics Report</h3>
                    <p className="text-[11px] text-neutral-400">Automated Resolution & Performance Patch</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>2027 AI Active</span>
                </span>
              </div>

              {analysisResult && (
                <div className="mt-5 space-y-4">
                  {/* Root Cause Card */}
                  <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-4">
                    <div className="flex items-start gap-2.5">
                      <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                          Identified Root Cause:
                        </span>
                        <p className="mt-1 text-xs text-neutral-200 leading-relaxed font-sans">
                          {analysisResult.rootCause}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Remediation Plan */}
                  <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-4">
                    <div className="flex items-start gap-2.5">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                          Recommended Remediation:
                        </span>
                        <p className="mt-1 text-xs text-neutral-200 leading-relaxed font-sans">
                          {analysisResult.remediation}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance Impact Tile */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-3.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Performance Gain</div>
                      <div className="mt-1 text-sm sm:text-base font-bold text-emerald-400 font-mono">
                        {analysisResult.tpsGain}
                      </div>
                    </div>
                    <div className="rounded-xl border border-neutral-800/80 bg-neutral-900/40 p-3.5 text-center">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-400">Resolution Speed</div>
                      <div className="mt-1 text-sm sm:text-base font-bold text-white font-mono">
                        &lt; 0.5s Latency
                      </div>
                    </div>
                  </div>

                  {/* 1-Click Action */}
                  <div className="pt-2">
                    {fixApplied ? (
                      <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-center text-xs font-semibold text-emerald-400 flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{analysisResult.fixedStatus}</span>
                      </div>
                    ) : (
                      <button
                        onClick={handleApplyFix}
                        disabled={isApplyingFix}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e63600] to-[#ff5500] py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-[#e63600]/30 hover:brightness-110 active:scale-98 transition-all disabled:opacity-50"
                      >
                        {isApplyingFix ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin" />
                            <span>Applying Automated Patch to Node...</span>
                          </>
                        ) : (
                          <>
                            <Zap className="h-4 w-4 fill-current" />
                            <span>1-Click Apply 2027 Automated Remediation</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
