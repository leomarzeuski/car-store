'use client';

import { useLanguage } from '@/context/LanguageContext';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useLanguage();

  return (
    <div className="relative">
      <svg
        className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-light/60"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('inventory.searchPlaceholder')}
        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-input border border-border text-foreground placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-base shadow-sm"
      />
    </div>
  );
}
