import React, { useEffect, useState, useRef } from 'react';
import { Users, Server, Activity } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * end;

      setValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, hasStarted]);

  const formattedNumber = decimals > 0 
    ? value.toFixed(decimals) 
    : Math.floor(value).toLocaleString();

  return (
    <span ref={elementRef} className="tabular-nums font-bold">
      {prefix}{formattedNumber}{suffix}
    </span>
  );
};

export const HeroStats: React.FC = () => {
  const stats = [
    {
      id: 'customers',
      label: 'Happy Customers',
      value: 28500,
      decimals: 0,
      suffix: '+',
      icon: Users,
    },
    {
      id: 'servers',
      label: 'Active Servers',
      value: 14200,
      decimals: 0,
      suffix: '+',
      icon: Server,
    },
    {
      id: 'uptime',
      label: 'Uptime %',
      value: 99.99,
      decimals: 2,
      suffix: '%',
      icon: Activity,
    },
  ];

  return (
    <div className="mt-14 max-w-3xl mx-auto rounded-2xl border border-neutral-800/80 bg-[#0d0d12]/70 backdrop-blur-md p-4 sm:p-6 shadow-xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800/80 text-center">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="pt-4 sm:pt-0 first:pt-0 sm:first:pt-0 px-4">
              <div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1.5">
                <Icon className="h-4 w-4 text-[#ff4500]" />
                <span className="text-xs font-medium tracking-wide uppercase">{stat.label}</span>
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                <AnimatedNumber
                  end={stat.value}
                  decimals={stat.decimals}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
