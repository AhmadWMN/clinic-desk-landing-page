import type { Direction, LandingContent } from "../lib/i18n";

interface PricingOfferProps {
  content: LandingContent["pricing"];
  direction: Direction;
  onContactClick: () => void;
}

export default function PricingOffer({
  content,
  direction,
  onContactClick,
}: PricingOfferProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section id="pricing" className="section-shell py-14 md:py-18">
      <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
        <div className={`grid gap-8 lg:grid-cols-[1.2fr_1fr] ${textAlign}`}>
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
            <p className="mt-3 text-slate-600">{content.subtitle}</p>
            <button
              type="button"
              onClick={onContactClick}
              className="mt-6 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              {content.contactCta}
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {content.includedTitle}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {content.includedItems.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-teal-700 text-xs text-white">
                    v
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
