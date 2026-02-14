import type { Direction, LandingContent } from "../lib/i18n";

interface BenefitsSectionProps {
  content: LandingContent["benefits"];
  direction: Direction;
}

export default function BenefitsSection({
  content,
  direction,
}: BenefitsSectionProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section className="section-shell py-14 md:py-18">
      <div className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 to-cyan-50 p-7 md:p-10">
        <div className={textAlign}>
          <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
          <p className="mt-3 max-w-3xl text-slate-700">{content.subtitle}</p>
        </div>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {content.bullets.map((bullet) => (
            <li
              key={bullet}
              className={`flex items-start gap-3 rounded-xl border border-teal-100 bg-white p-4 text-sm text-slate-700 ${textAlign}`}
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-700 text-white">
                v
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
