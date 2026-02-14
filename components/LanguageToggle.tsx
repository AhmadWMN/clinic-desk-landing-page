import type { LandingContent, Language } from "../lib/i18n";

interface LanguageToggleProps {
  language: Language;
  labels: LandingContent["languageToggle"];
  onChange: (language: Language) => void;
}

export default function LanguageToggle({
  language,
  labels,
  onChange,
}: LanguageToggleProps) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-slate-300 bg-white p-1"
      role="group"
      aria-label={labels.ariaLabel}
    >
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === "en"
            ? "bg-teal-700 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`}
        aria-pressed={language === "en"}
      >
        {labels.en}
      </button>
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
          language === "ar"
            ? "bg-teal-700 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`}
        aria-pressed={language === "ar"}
      >
        {labels.ar}
      </button>
    </div>
  );
}
