import Image from "next/image";
import type { Direction, LandingContent } from "../lib/i18n";

interface ProductTourProps {
  content: LandingContent["tour"];
  direction: Direction;
}

function screenshotPlaceholder(label: string, index: number) {
  const shades = [
    ["#0f766e", "#0f172a"],
    ["#0369a1", "#0f172a"],
    ["#0d9488", "#1e293b"],
    ["#059669", "#0f172a"],
  ];
  const gradient = shades[index % shades.length];
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='640' height='400'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='${gradient[0]}' />
          <stop offset='100%' stop-color='${gradient[1]}' />
        </linearGradient>
      </defs>
      <rect width='640' height='400' fill='url(#g)' rx='20' ry='20' />
      <rect x='28' y='28' width='220' height='18' fill='#ffffff' opacity='0.9' rx='8' />
      <rect x='28' y='58' width='440' height='12' fill='#ffffff' opacity='0.65' rx='6' />
      <rect x='28' y='92' width='180' height='120' fill='#ffffff' opacity='0.82' rx='12' />
      <rect x='220' y='92' width='180' height='120' fill='#ffffff' opacity='0.82' rx='12' />
      <rect x='412' y='92' width='200' height='120' fill='#ffffff' opacity='0.82' rx='12' />
      <rect x='28' y='226' width='584' height='146' fill='#ffffff' opacity='0.9' rx='12' />
      <text x='40' y='356' font-family='Segoe UI, Arial' font-size='24' fill='#0f172a'>${label}</text>
    </svg>
  `)}`;
}
export default function ProductTour({ content, direction }: ProductTourProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section className="section-shell py-14 md:py-18">
      <div className={textAlign}>
        <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {content.items.map((item, index) => (
          <article
            key={item.title}
            className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${textAlign}`}
          >
            <Image
              src={item.imageSrc || screenshotPlaceholder(item.title, index)}
              alt={item.imageAlt}
              width={640}
              height={400}
              className="h-auto w-full rounded-xl"
            />
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
