import type { Direction, LandingContent } from "../lib/i18n";

interface FooterProps {
  content: LandingContent["footer"];
  nav: LandingContent["nav"];
  footerNavigationLabel: string;
  direction: Direction;
}

export default function Footer({
  content,
  nav,
  footerNavigationLabel,
  direction,
}: FooterProps) {
  const year = new Date().getFullYear();
  const textAlign = direction === "rtl" ? "text-right" : "text-left";
  const companyLogoSrc = "/logo-clean.png";

  return (
    <footer className="border-t border-slate-200 bg-white py-8">
      <div className={`section-shell ${textAlign}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div
              className={`inline-flex items-center gap-3 ${
                direction === "rtl" ? "flex-row-reverse" : ""
              }`}
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-xl">
                <img
                  src={companyLogoSrc}
                  alt="Company logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <p className="text-base font-semibold text-slate-900">Clinic Desk</p>
            </div>
            <p className="text-sm text-slate-600">{content.summary}</p>
          </div>
          <nav aria-label={footerNavigationLabel} className="flex flex-wrap gap-4 text-sm">
            <a href="#features" className="text-slate-700 hover:text-teal-700">
              {nav.features}
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-teal-700">
              {nav.pricing}
            </a>
            <a href="#faq" className="text-slate-700 hover:text-teal-700">
              {nav.faq}
            </a>
          </nav>
        </div>
        <p className="mt-5 text-xs text-slate-500">
          (c) {year} Clinic Desk. {content.rights}
        </p>
      </div>
    </footer>
  );
}
