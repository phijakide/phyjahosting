import React, { useState } from 'react';
import { X, MessageSquare, Send, CheckCircle2, HelpCircle, ExternalLink } from 'lucide-react';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const SupportModal: React.FC<SupportModalProps> = ({ 
  isOpen, 
  onClose,
  initialCategory = 'technical'
}) => {
  const [subject, setSubject] = useState(initialCategory === 'affiliate' ? 'Affiliate Partner Application' : '');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [message, setMessage] = useState(initialCategory === 'affiliate' ? 'Hello, I would like to join the PHY_JA SERVER Affiliate & Creator Program to refer my community...' : '');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  // Sync category if initialCategory changes
  React.useEffect(() => {
    if (isOpen) {
      setCategory(initialCategory);
      if (initialCategory === 'affiliate') {
        setSubject('Affiliate Partner Application');
        setMessage('Hello, I would like to join the PHY_JA SERVER Affiliate & Creator Program to refer my community...');
      }
    }
  }, [isOpen, initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    const randomId = `MPR-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(randomId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setSubject('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-800 bg-[#0c0c10] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0e0e14] px-6 py-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#ff4500]" />
            <span className="text-base font-bold text-white">24/7 PHY_JA SERVER Support</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-5">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Support Ticket Created</h3>
              <p className="mt-1 text-xs text-neutral-400">
                Ticket Reference: <span className="font-mono text-white font-bold">{ticketId}</span>
              </p>
              <p className="mt-3 text-xs text-neutral-300">
                Our level-3 system engineers have received your inquiry. A response will be sent to <span className="text-[#ff4500]">{email}</span> within 15 minutes.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="w-full rounded-lg bg-[#e63600] py-2.5 text-xs font-semibold text-white hover:bg-[#ff3c00]"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-neutral-300">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@example.com"
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300">
                Inquiry Department
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-[#ff4500] focus:outline-none"
              >
                <option value="technical">Technical Assistance (Lag, Modpack, Crash Log)</option>
                <option value="affiliate">Affiliate & Creator Partnership (25% Recurring Commission)</option>
                <option value="migration">Free Server Migration from Old Host</option>
                <option value="billing">Billing & Invoice Inquiries</option>
                <option value="discord">Discord Community Support</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Help installing GeyserMC or optimizing TPS"
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-neutral-300">
                Detailed Message / Crash Log *
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue or paste console logs..."
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-900 p-3 text-xs text-white placeholder-neutral-500 focus:border-[#ff4500] focus:outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-neutral-500">Average response: ~12 minutes</span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e63600] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#ff3c00] active:scale-95 transition-all"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Ticket</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
