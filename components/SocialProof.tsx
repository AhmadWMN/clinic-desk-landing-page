import Image from "next/image";
import type { Direction, LandingContent } from "../lib/i18n";

interface SocialProofProps {
  content: LandingContent["socialProof"];
  direction: Direction;
}

function avatarPlaceholder(seed: string) {
  const letter = seed.charAt(0).toUpperCase();
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#14b8a6' />
          <stop offset='100%' stop-color='#0f172a' />
        </linearGradient>
      </defs>
      <rect width='80' height='80' fill='url(#g)' rx='40' ry='40' />
      <text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle'
        font-family='Segoe UI, Arial' font-size='30' fill='white'>${letter}</text>
    </svg>
  `)}`;
}

export default function SocialProof({ content, direction }: SocialProofProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section className="section-shell py-14 md:py-18">
      <div className={textAlign}>
        <h2 className="text-2xl font-semibold md:text-3xl">{content.title}</h2>
        <p className="mt-3 max-w-3xl text-slate-600">{content.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {content.items.map((item) => (
          <article
            key={item.name}
            className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${textAlign}`}
          >
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={avatarPlaceholder(item.name)}
                alt={`${item.name} avatar`}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full"
              />
              <div>
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-sm text-slate-600">{item.role}</p>
              </div>
            </div>
            <p className="text-sm leading-6 text-slate-700">"{item.quote}"</p>
          </article>
        ))}
      </div>
    </section>
  );
}
