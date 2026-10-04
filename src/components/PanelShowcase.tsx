import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Cpu, 
  Activity, 
  RotateCw, 
  Play, 
  Square, 
  FolderTree, 
  Puzzle, 
  Check, 
  Send,
  Users,
  HardDrive
} from 'lucide-react';
import { INITIAL_MODS } from '../data/hostingData';
import { ModItem } from '../types';
import panelPreviewImg from '../assets/images/panel_dashboard_preview_1791089867492.jpg';

export const PanelShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'console' | 'mods' | 'overview'>('console');
  const [serverState, setServerState] = useState<'online' | 'restarting' | 'offline'>('online');
  const [cpuUsage, setCpuUsage] = useState<number>(14);
  const [ramUsage, setRamUsage] = useState<number>(4.8);
  const [playerCount, setPlayerCount] = useState<number>(18);
  const [commandInput, setCommandInput] = useState<string>('');
  
  // Console logs
  const [logs, setLogs] = useState<string[]>([
    '[12:44:01 INFO]: [Paper] Server running Paper version git-Paper-194 (MC: 1.21.4)',
    '[12:44:02 INFO]: [EssentialsX] Loaded 4 warps, 18 player homes.',
    '[12:44:03 INFO]: [Geyser-Spigot] Started Geyser on 0.0.0.0:19132 (Bedrock Bridge Ready)',
    '[12:44:05 INFO]: [Server] Done (3.412s)! For help, type "help"',
    '[12:44:19 INFO]: Player Notch joined the game (198.51.100.82:54812)',
    '[12:45:00 INFO]: [TickRateMonitor] Average TPS: 20.0 (MSPT: 11.2ms) - 0 lag spikes detected',
  ]);

  const [mods, setMods] = useState<ModItem[]>(INITIAL_MODS);
  const consoleBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll console
  useEffect(() => {
    if (activeTab === 'console') {
      consoleBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, activeTab]);

  // Subtle live stat fluctuation
  useEffect(() => {
    const interval = setInterval(() => {
      if (serverState === 'online') {
        setCpuUsage(prev => Math.min(45, Math.max(8, prev + (Math.random() * 6 - 3))));
        setRamUsage(prev => Math.min(7.8, Math.max(4.2, +(prev + (Math.random() * 0.2 - 0.1)).toFixed(2))));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [serverState]);

  const handleSendCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;

    const cmd = commandInput.trim();
    setLogs(prev => [...prev, `[USER >_]: ${cmd}`]);
    setCommandInput('');

    // Handle interactive command feedback
    setTimeout(() => {
      const lower = cmd.toLowerCase();
      let response = '';
      if (lower === 'help' || lower === '/help') {
        response = '[Server INFO]: Available: /tps, /list, /say <msg>, /plugins, /status, /seed';
      } else if (lower === 'tps' || lower === '/tps') {
        response = `[Server INFO]: TPS from last 1m, 5m, 15m: 20.00, 20.00, 20.00 (MSPT: 9.8ms)`;
      } else if (lower === 'list' || lower === '/list') {
        response = `[Server INFO]: There are ${playerCount} of 100 players online: Notch, Alex, Steve, EnderDragon99, RedstoneGuy, and 13 others.`;
      } else if (lower.startsWith('say ') || lower.startsWith('/say ')) {
        const text = cmd.replace(/^\/?say\s+/, '');
        response = `[Server Broadcast]: [Server] ${text}`;
      } else if (lower === 'plugins' || lower === '/plugins') {
        response = `[Server INFO]: Plugins (5): EssentialsX, GeyserMC, Floodgate, WorldEdit, Spark`;
      } else {
        response = `[Server INFO]: Command executed successfully on node node-04-us-east.`;
      }
      setLogs(prev => [...prev, response]);
    }, 400);
  };

  const handleServerAction = (action: 'restart' | 'stop' | 'start') => {
    if (action === 'restart') {
      setServerState('restarting');
      setLogs(prev => [
        ...prev, 
        '[12:46:10 WARN]: Server restart initiated by user...',
        '[12:46:11 INFO]: Saving chunks and players...',
        '[12:46:13 INFO]: Container rebooting on AMD Ryzen 9 7950X...',
        '[12:46:15 INFO]: [Paper] Server re-initialized in 2.1s (TPS: 20.0)'
      ]);
      setTimeout(() => {
        setServerState('online');
      }, 2500);
    } else if (action === 'stop') {
      setServerState('offline');
      setCpuUsage(0);
      setRamUsage(0);
      setLogs(prev => [...prev, '[12:46:25 INFO]: Server process halted gracefully.']);
    } else if (action === 'start') {
      setServerState('online');
      setCpuUsage(18);
      setRamUsage(4.5);
      setLogs(prev => [...prev, '[12:46:35 INFO]: Container spun up. Paper 1.21.4 listening on port 25565.']);
    }
  };

  const toggleMod = (modId: string) => {
    setMods(prev =>
      prev.map(m => {
        if (m.id === modId) {
          const newState = !m.installed;
          setLogs(prevLogs => [
            ...prevLogs,
            `[Panel]: ${newState ? 'Installed' : 'Uninstalled'} plugin: ${m.name}. Restart required for changes.`
          ]);
          return { ...m, installed: newState };
        }
        return m;
      })
    );
  };

  return (
    <section id="panel" className="relative py-24 border-t border-neutral-900 bg-[#07070a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
            Pterodactyl-Powered Control
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Intuitive Game Management at Your Fingertips
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Full root terminal access, live resource graphs, automatic crash recovery, and 1-click modpack installer.
          </p>
        </div>

        {/* Interactive Dashboard Container */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c10] shadow-2xl">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-neutral-800 bg-[#0e0e14] px-6 py-4 gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span 
                  className={`h-3 w-3 rounded-full ${
                    serverState === 'online' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 
                    serverState === 'restarting' ? 'bg-amber-500 animate-pulse' : 'bg-red-500'
                  }`}
                />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  {serverState === 'online' ? 'Server Online' : serverState === 'restarting' ? 'Rebooting Node' : 'Server Offline'}
                </span>
              </div>
              <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
                play.phyjaserver.net:25565
              </span>
            </div>

            {/* Power buttons */}
            <div className="flex items-center gap-2">
              {serverState === 'offline' ? (
                <button
                  onClick={() => handleServerAction('start')}
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500 active:scale-95 transition-all"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Start</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleServerAction('restart')}
                    disabled={serverState === 'restarting'}
                    className="flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-800 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:bg-neutral-700 hover:text-white active:scale-95 transition-all"
                  >
                    <RotateCw className={`h-3.5 w-3.5 ${serverState === 'restarting' ? 'animate-spin' : ''}`} />
                    <span>Restart</span>
                  </button>
                  <button
                    onClick={() => handleServerAction('stop')}
                    className="flex items-center gap-1.5 rounded-lg border border-red-900/60 bg-red-950/40 px-3.5 py-1.5 text-xs font-semibold text-red-400 hover:bg-red-900/60 hover:text-red-200 active:scale-95 transition-all"
                  >
                    <Square className="h-3.5 w-3.5 fill-current" />
                    <span>Stop</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Real-time Hardware Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-neutral-800/80 bg-neutral-900/40 px-6 py-4 gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <Cpu className="h-5 w-5 text-[#ff4500]" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">CPU Load</div>
                <div className="text-sm font-bold text-white tabular-nums">{cpuUsage.toFixed(1)}% / 400%</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-amber-500" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">DDR5 Memory</div>
                <div className="text-sm font-bold text-white tabular-nums">{ramUsage.toFixed(2)} GB / 8.0 GB</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-400" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">Active Players</div>
                <div className="text-sm font-bold text-white tabular-nums">{playerCount} / 100 Online</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <HardDrive className="h-5 w-5 text-emerald-400" />
              <div>
                <div className="text-neutral-400 text-[10px] uppercase">NVMe Disk</div>
                <div className="text-sm font-bold text-white tabular-nums">14.2 GB / 60 GB</div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-neutral-800 bg-[#0e0e13] px-6 gap-6">
            <button
              onClick={() => setActiveTab('console')}
              className={`flex items-center gap-2 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                activeTab === 'console'
                  ? 'border-[#ff4500] text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Terminal className="h-4 w-4" />
              <span>Interactive Web Console</span>
            </button>

            <button
              onClick={() => setActiveTab('mods')}
              className={`flex items-center gap-2 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                activeTab === 'mods'
                  ? 'border-[#ff4500] text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Puzzle className="h-4 w-4" />
              <span>1-Click Mod / Plugin Manager</span>
            </button>

            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 py-3.5 text-xs font-bold transition-colors border-b-2 ${
                activeTab === 'overview'
                  ? 'border-[#ff4500] text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <FolderTree className="h-4 w-4" />
              <span>Panel UI Snapshot</span>
            </button>
          </div>

          {/* Tab 1: Terminal Console */}
          {activeTab === 'console' && (
            <div className="p-6 bg-[#08080c]">
              <div className="h-80 overflow-y-auto rounded-lg bg-black/80 p-4 font-mono text-xs text-neutral-300 border border-neutral-800/80 space-y-1.5">
                {logs.map((log, index) => {
                  let color = 'text-neutral-300';
                  if (log.includes('WARN')) color = 'text-amber-400';
                  if (log.includes('ERROR')) color = 'text-red-400 font-bold';
                  if (log.includes('USER >_')) color = 'text-[#ff5500] font-bold';
                  if (log.includes('Done')) color = 'text-emerald-400 font-semibold';
                  if (log.includes('joined the game')) color = 'text-cyan-400';
                  return (
                    <div key={index} className={color}>
                      {log}
                    </div>
                  );
                })}
                <div ref={consoleBottomRef} />
              </div>

              {/* Command Input Bar */}
              <form onSubmit={handleSendCommand} className="mt-3 flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-neutral-500">
                    &gt;_
                  </span>
                  <input
                    type="text"
                    value={commandInput}
                    onChange={(e) => setCommandInput(e.target.value)}
                    placeholder="Type server command (e.g. /tps, /list, /say Hello Server, /plugins)..."
                    className="w-full rounded-lg border border-neutral-800 bg-neutral-900/90 py-2.5 pl-9 pr-4 font-mono text-xs text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-lg bg-[#e63600] px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#ff3c00] active:scale-95 transition-all"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send</span>
                </button>
              </form>
            </div>
          )}

          {/* Tab 2: Mod / Plugin Manager */}
          {activeTab === 'mods' && (
            <div className="p-6 bg-[#08080c]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mods.map((mod) => (
                  <div
                    key={mod.id}
                    className="flex items-start justify-between rounded-xl border border-neutral-800 bg-[#0e0e14] p-4 transition-all hover:border-neutral-700"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{mod.name}</span>
                        <span className="text-[10px] text-neutral-400 border border-neutral-800 rounded px-1.5 py-0.5">
                          {mod.category}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-neutral-400 pr-2">{mod.description}</p>
                      <div className="mt-2 text-[11px] text-neutral-500">
                        {mod.downloads} active downloads
                      </div>
                    </div>

                    <button
                      onClick={() => toggleMod(mod.id)}
                      className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                        mod.installed
                          ? 'border border-emerald-800 bg-emerald-950/60 text-emerald-400 hover:bg-emerald-900/40'
                          : 'bg-[#e63600] text-white hover:bg-[#ff3c00]'
                      }`}
                    >
                      {mod.installed ? 'Installed ✓' : 'Install 1-Click'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Panel UI Snapshot */}
          {activeTab === 'overview' && (
            <div className="p-6 bg-[#08080c] flex justify-center">
              <div className="relative max-w-4xl overflow-hidden rounded-xl border border-neutral-800">
                <img
                  src={panelPreviewImg}
                  alt="Control Panel Interface"
                  className="w-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Styled graceful fallback container per design guidelines
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
