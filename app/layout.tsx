import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cairo } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL &&
  process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://clinicdesk.example";

const title = "Clinic Desk | Offline Clinic Management Software for Windows";
const description =
  "Clinic Desk is a bilingual Arabic/English Windows app for small and medium clinics. Manage patients, visits, staff roles, inventory, and payments with reliable offline access.";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Clinic Desk",
  icons: {
    icon: "/logo-clean.png",
    apple: "/logo-clean.png",
    shortcut: "/logo-clean.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Clinic Desk",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const languageBootScript = `
(() => {
  try {
    const key = "clinic-desk-language";
    const saved = window.localStorage.getItem(key);
    const nextLang = saved === "ar" || saved === "en" ? saved : "ar";

    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
  } catch (_error) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${cairo.variable} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <script dangerouslySetInnerHTML={{ __html: languageBootScript }} />
        {children}
      </body>
    </html>
  );
}
