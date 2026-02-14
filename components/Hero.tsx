import Image from "next/image";
import type { Direction, LandingContent } from "../lib/i18n";

interface HeroProps {
  content: LandingContent["hero"];
  direction: Direction;
  onRequestDemo: () => void;
  onSeeFeatures: () => void;
}

export default function Hero({
  content,
  direction,
  onRequestDemo,
  onSeeFeatures,
}: HeroProps) {
  const textAlign = direction === "rtl" ? "text-right" : "text-left";
  const platformLabel =
    direction === "rtl" ? "قابل للتنزيل على" : "Available for download on";

  const platforms = [
    { name: "iOS", icon: "/platforms/ios.svg" },
    { name: "Windows", icon: "/platforms/windows.svg" },
    { name: "Linux", icon: "/platforms/linux.svg" },
  ];

  return (
    <section className="section-shell pt-8 pb-16 md:pb-20">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className={textAlign}>
          <h1 className="text-balance text-3xl font-semibold leading-tight text-slate-900 md:text-5xl">
            {content.title}
          </h1>
          <p className="mt-4 text-pretty text-lg text-slate-600">{content.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onRequestDemo}
              className="rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              aria-label={content.primaryCta}
            >
              {content.primaryCta}
            </button>
            <button
              type="button"
              onClick={onSeeFeatures}
              className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              {content.secondaryCta}
            </button>
          </div>
          <ul className="mt-7 space-y-2 text-sm text-slate-700">
            {content.trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-100 text-teal-800">
                  v
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <Image
            src="/product-tour/chart.png"
            alt={content.imageAlt}
            width={760}
            height={500}
            className="h-auto w-full rounded-xl"
            priority
          />
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 via-cyan-50 to-white p-5 shadow-sm md:p-7">
        <div className={textAlign}>
          <p className="text-lg font-semibold text-slate-900 md:text-xl">{platformLabel}</p>
        </div>

        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="flex flex-col rounded-xl border border-teal-200/80 bg-white/90 p-3 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div
                className={`flex flex-col items-center gap-3 ${
                  direction === "rtl" ? "text-right" : "text-left"
                }`}
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100">
                  <Image
                    src={platform.icon}
                    alt={`${platform.name} logo`}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{platform.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
