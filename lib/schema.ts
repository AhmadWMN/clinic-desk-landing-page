import type { FAQItem } from "./i18n";

export function buildSoftwareApplicationSchema({
  baseUrl,
}: {
  baseUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Clinic Desk",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows",
    inLanguage: ["en", "ar"],
    description:
      "Offline bilingual clinic management software for small and medium clinics. Includes patients, visits, staff, inventory, and finance modules.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      url: `${baseUrl}/#pricing`,
      description: "Contact us for pricing.",
      availability: "https://schema.org/InStock",
    },
    url: baseUrl,
  };
}

export function buildFAQSchema(faqItems: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
