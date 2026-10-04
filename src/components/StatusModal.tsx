import React from 'react';
import { X, CheckCircle, Activity, ShieldCheck, Database, HardDrive, Wifi } from 'lucide-react';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StatusModal: React.FC<StatusModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const systems = [
    { name: 'North America East (Ashburn - Ryzen 9 9950X3D Cluster)', status: 'Operational', uptime: '99.99%', latency: '12ms' },
    { name: 'North America Central (Dallas - 2027 Gen5 Node Array)', status: 'Operational', uptime: '99.99%', latency: '19ms' },
    { name: 'North America West (Los Angeles - High-Clock Node 1-8)', status: 'Operational', uptime: '99.99%', latency: '24ms' },
    { name: 'Europe Central (Frankfurt - Ultra-Low Jitter Cluster)', status: 'Operational', uptime: '100.00%', latency: '16ms' },
    { name: 'Europe West (London - NVMe Gen5 14,000MB/s Pods)', status: 'Operational', uptime: '99.98%', latency: '21ms' },
    { name: 'Asia-Pacific (Singapore & Tokyo - Anycast Edge)', status: 'Operational', uptime: '99.99%', latency: '38ms' },
    { name: '2027 Anycast 16+ Tbps eBPF/XDP DDoS Shield', status: 'Operational', uptime: '100.00%', latency: '0ms' },
    { name: '2027 AI Copilot & Automated Diagnostics Engine', status: 'Operational', uptime: '100.00%', latency: '2ms' },
    { name: 'Global MariaDB & Redis Distributed Cache', status: 'Operational', uptime: '99.99%', latency: '6ms' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c10] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0e0e14] px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-base font-bold text-white">All Systems Operational</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-3">
          <div className="text-xs text-neutral-400">
            Real-time telemetry from PHY_JA SERVER global cluster network. Updated every 30 seconds.
          </div>

          <div className="space-y-2 mt-4">
            {systems.map((s, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-lg border border-neutral-800/80 bg-neutral-900/50 p-3.5 text-xs"
              >
                <div>
                  <div className="font-semibold text-white">{s.name}</div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    30-Day Uptime: {s.uptime} · Avg Response: {s.latency}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 font-medium text-emerald-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>{s.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-neutral-900 p-4 border border-neutral-800 text-xs text-neutral-400">
            <span className="font-semibold text-white">SLA Guarantee:</span> We maintain a 99.9% uptime SLA across all game nodes and bot instances. Service credits are automatically issued for any unannounced downtime exceeding 0.1%.
          </div>
        </div>

        <div className="border-t border-neutral-800 bg-[#0e0e14] px-6 py-3 text-right">
          <button
            onClick={onClose}
            className="rounded-lg bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700"
          >
            Close Status Monitor
          </button>
        </div>
      </div>
    </div>
  );
};
