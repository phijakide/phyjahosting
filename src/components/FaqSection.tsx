import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '../data/hostingData';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 border-t border-neutral-900 bg-[#060608]">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff4500]">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            {t.faq.title}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-neutral-800 bg-[#0d0d12]/90 transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-base font-semibold text-white focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#ff4500]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-neutral-800/80 px-5 pb-5 pt-3 text-sm text-neutral-300 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
