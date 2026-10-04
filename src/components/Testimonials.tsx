import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2,
  Quote
} from 'lucide-react';

interface Review {
  id: string;
  author: string;
  handle: string;
  role: string;
  community: string;
  platform: 'Trustpilot' | 'Discord';
  rating: number;
  date: string;
  title: string;
  comment: string;
  avatarColor: string;
}

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Marcus Vance',
    handle: '@vance_mc',
    role: 'Server Owner',
    community: 'AetherCraft Network (200+ Players)',
    platform: 'Trustpilot',
    rating: 5,
    date: '3 days ago',
    title: 'Flawless 20.0 TPS even during massive PvP events',
    comment: 'Migrated from another host where TPS constantly dipped below 14 during peak hours. On PHY_JA SERVER’s Ryzen 9 node, our server maintains a rock-solid 20.0 TPS with 180+ players online. Their support engineers migrated our 45GB world files in under 25 minutes.',
    avatarColor: 'from-orange-500 to-amber-600',
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    handle: '@dev_elena',
    role: 'Bot Developer',
    community: 'OmniBot (35,000+ Discord Guilds)',
    platform: 'Discord',
    rating: 5,
    date: '1 week ago',
    title: 'Zero dropped gateway connections in 90 days',
    comment: 'Hosting a large Discord bot usually means dealing with random gateway resets or memory leaks. PHY_JA SERVER’s node has given us 99.99% uptime for 3 months straight. The live web console and GitHub webhook auto-deploy save me hours every week.',
    avatarColor: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'rev-3',
    author: 'Devon Miller',
    handle: '@craftmaster_dev',
    role: 'Modpack Admin',
    community: 'Pixelmon & Create Realms',
    platform: 'Trustpilot',
    rating: 5,
    date: '2 weeks ago',
    title: 'Heavy 180-mod packs load like butter',
    comment: 'Modded Minecraft is notorious for CPU bottlenecks. The Samsung Enterprise NVMe Gen4 drives make world saves and chunk pre-generation virtually instantaneous. 1-click modpack installer worked immediately with Modrinth.',
    avatarColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'rev-4',
    author: 'Soren Lindqvist',
    handle: '@nordic_soren',
    role: 'SMP Creator & Streamer',
    community: 'Nordic SMP Community',
    platform: 'Discord',
    rating: 5,
    date: '3 weeks ago',
    title: 'GeyserMC Bedrock crossplay worked straight out of the box',
    comment: 'Over 40% of my community plays on Bedrock edition (Switch, iPad, Xbox). Setting up crossplay was a single click in the panel. Zero config file editing needed, and players joined immediately with low latency.',
    avatarColor: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'rev-5',
    author: 'Kai Tanaka',
    handle: '@tokyo_botdev',
    role: 'DevOps Lead',
    community: 'GameLounge Esports',
    platform: 'Trustpilot',
    rating: 5,
    date: '1 month ago',
    title: '12+ Tbps Anycast DDoS filter stopped an attack in seconds',
    comment: 'Our launch tournament was targeted by a 400 Gbps UDP flood. The cosmic-grade DDoS mitigation filtered out malicious packets in under two seconds. Not a single participant was kicked or disconnected.',
    avatarColor: 'from-rose-500 to-red-600',
  },
];

export const Testimonials: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Trustpilot' | 'Discord'>('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredReviews = filter === 'All' 
    ? REVIEWS 
    : REVIEWS.filter((r) => r.platform === filter);

  useEffect(() => {
    if (!isPaused && filteredReviews.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
      }, 5000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, filteredReviews.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const activeReview = filteredReviews[currentIndex] || filteredReviews[0];

  return (
    <section id="testimonials" className="relative py-24 border-t border-neutral-900 bg-[#07070a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
              Verified Social Proof
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Trusted by 28,000+ Server Owners
            </h2>
            <div className="mt-3 flex items-center gap-3 text-sm text-neutral-400">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9 / 5.0 Rating</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>1,450+ verified Trustpilot & Discord reviews</span>
            </div>
          </div>

          {/* Platform Filter Tabs */}
          <div className="inline-flex items-center rounded-xl bg-neutral-900/90 p-1 border border-neutral-800">
            {(['All', 'Trustpilot', 'Discord'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all whitespace-nowrap ${
                  filter === tab
                    ? 'bg-[#e63600] text-white shadow-md shadow-[#e63600]/30'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab === 'All' ? 'All Reviews' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Card Container */}
        <div 
          className="mt-12 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#0d0d12]/90 p-8 sm:p-10 shadow-2xl relative">
            <Quote className="absolute right-8 top-8 h-20 w-20 text-neutral-800/40 pointer-events-none select-none" />

            <div className="flex flex-col justify-between gap-6 min-h-[220px]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex text-amber-400">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-neutral-400">
                      {activeReview.platform === 'Trustpilot' ? 'Trustpilot Verified' : 'Discord Community'}
                    </span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">
                    {activeReview.date}
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight">
                  "{activeReview.title}"
                </h3>

                <p className="mt-3 text-base text-neutral-300 leading-relaxed max-w-3xl">
                  {activeReview.comment}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-neutral-800/80 pt-6">
                <div className="flex items-center gap-3.5">
                  <div className={`h-11 w-11 rounded-full bg-gradient-to-tr ${activeReview.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {activeReview.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{activeReview.author}</span>
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-xs text-neutral-400">{activeReview.handle}</span>
                    </div>
                    <div className="text-xs text-neutral-400">
                      <span>{activeReview.role}</span>
                      <span className="mx-1.5 text-neutral-600">·</span>
                      <span className="text-neutral-300">{activeReview.community}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous review"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80 text-neutral-300 transition-colors hover:border-[#ff4500] hover:text-white active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next review"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/80 text-neutral-300 transition-colors hover:border-[#ff4500] hover:text-white active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {filteredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Jump to review ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'w-7 bg-[#ff4500]' 
                    : 'w-2 bg-neutral-800 hover:bg-neutral-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
