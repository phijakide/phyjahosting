import React, { useState, useRef, useEffect } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

interface LanguageSelectorProps {
  variant?: 'navbar' | 'compact' | 'drawer';
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ variant = 'navbar' }) => {
  const { language, setLanguage, supportedLanguages, currentLanguageOption } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (variant === 'drawer') {
    return (
      <div className="space-y-2 pt-2 border-t border-neutral-800">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          <Globe className="h-3.5 w-3.5 text-[#ff4500]" />
          <span>Select Language</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {supportedLanguages.map((lang) => {
            const isSelected = lang.code === language;
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs transition-colors ${
                  isSelected
                    ? 'bg-[#ff4500]/15 text-[#ff4500] font-bold border border-[#ff4500]/30'
                    : 'bg-neutral-900/90 text-neutral-300 hover:text-white border border-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-sm">{lang.flag}</span>
                  <span className="truncate">{lang.nativeName}</span>
                </div>
                {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-[#ff4500]" />}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-2.5 py-1.5 text-xs font-medium text-neutral-300 transition-all hover:border-neutral-700 hover:text-white focus:outline-none"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select language"
      >
        <span className="text-sm select-none">{currentLanguageOption.flag}</span>
        <span className="hidden sm:inline font-sans">{currentLanguageOption.nativeName}</span>
        <ChevronDown className={`h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#ff4500]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-neutral-800 bg-[#0d0d13] p-1.5 shadow-2xl ring-1 ring-white/5 backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 border-b border-neutral-800/80 mb-1">
            Choose Language
          </div>
          <div className="space-y-0.5">
            {supportedLanguages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-xs transition-colors ${
                    isSelected
                      ? 'bg-[#ff4500]/15 text-[#ff4500] font-semibold'
                      : 'text-neutral-300 hover:bg-neutral-800/70 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-base leading-none select-none">{lang.flag}</span>
                    <div className="text-left">
                      <div className="leading-tight">{lang.nativeName}</div>
                      <div className="text-[10px] text-neutral-500 font-normal">{lang.name}</div>
                    </div>
                  </div>
                  {isSelected && <Check className="h-4 w-4 shrink-0 text-[#ff4500]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
