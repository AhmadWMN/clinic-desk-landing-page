import type { Direction, LandingContent } from "../lib/i18n";

interface FAQProps {
  content: LandingContent["faq"];
  direction: Direction;
}

export default function FAQ({ content, direction }: FAQProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section id="faq" className="section-shell py-14 md:py-18">
      <div className={textAlign}>
        <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.subtitle}</p>
      </div>
      <div className="mt-8 space-y-3">
        {content.items.map((item) => (
          <details
            key={item.question}
            className={`group rounded-xl border border-slate-200 bg-white p-5 shadow-sm ${textAlign}`}
          >
            <summary className="cursor-pointer list-none font-semibold text-slate-900 marker:content-none">
              <span>{item.question}</span>
              <span className="px-1 text-teal-700 group-open:hidden">+</span>
              <span className="hidden px-1 text-teal-700 group-open:inline">-</span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
