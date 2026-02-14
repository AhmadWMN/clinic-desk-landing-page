import type { Direction, LandingContent } from "../lib/i18n";

interface WhyClinicDeskProps {
  content: LandingContent["whoWhy"];
  direction: Direction;
}

export default function WhyClinicDesk({ content, direction }: WhyClinicDeskProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section className="section-shell py-14 md:py-18">
      <div className={textAlign}>
        <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className={`text-xl font-semibold ${textAlign}`}>{content.whoTitle}</h3>
          <ul className="mt-5 space-y-4">
            {content.whoItems.map((item) => (
              <li
                key={item.title}
                className={`rounded-xl border border-slate-200 bg-slate-50 p-4 ${textAlign}`}
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className={`text-xl font-semibold ${textAlign}`}>{content.whyTitle}</h3>
          <ul className="mt-5 space-y-4">
            {content.whyItems.map((item) => (
              <li
                key={item.title}
                className={`rounded-xl border border-slate-200 bg-slate-50 p-4 ${textAlign}`}
              >
                <p className="font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
