import type { Direction, LandingContent } from "../lib/i18n";

interface FinalCTAProps {
  content: LandingContent["finalCta"];
  direction: Direction;
  onPrimaryClick: () => void;
}

export default function FinalCTA({
  content,
  direction,
  onPrimaryClick,
}: FinalCTAProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-700 to-teal-800 p-8 text-white md:p-12">
        <div className={`mx-auto max-w-3xl ${textAlign}`}>
          <h2 className="text-2xl font-semibold md:text-4xl">{content.title}</h2>
          <p className="mt-3 text-teal-50">{content.subtitle}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onPrimaryClick}
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
            >
              {content.primaryCta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
