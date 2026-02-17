"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSelector() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <button
        onClick={() => setLocale("en")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === "en"
            ? "bg-primary text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-muted">|</span>
      <button
        onClick={() => setLocale("es")}
        className={`px-2 py-1 rounded transition-colors cursor-pointer ${
          locale === "es"
            ? "bg-primary text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        ES
      </button>
    </div>
  );
}
