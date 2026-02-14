import LandingPage from "../components/LandingPage";
import { dict } from "../lib/i18n";
import { buildFAQSchema, buildSoftwareApplicationSchema } from "../lib/schema";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://clinicdesk.example";

const softwareApplicationSchema = buildSoftwareApplicationSchema({
  baseUrl: siteUrl,
});
const faqSchema = buildFAQSchema([...dict.en.faq.items, ...dict.ar.faq.items]);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <LandingPage />
    </>
  );
}
