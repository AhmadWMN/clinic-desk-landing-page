import type { Direction, LandingContent } from "../lib/i18n";

interface FeaturesGridProps {
  content: LandingContent["features"];
  direction: Direction;
}

export default function FeaturesGrid({ content, direction }: FeaturesGridProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section id="features" className="section-shell py-14 md:py-18">
      <div className={textAlign}>
        <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.title}
            className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${textAlign}`}
          >
            <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
