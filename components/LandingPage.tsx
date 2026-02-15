"use client";

import { useEffect, useState } from "react";
import BenefitsSection from "./BenefitsSection";
import FAQ from "./FAQ";
import FeaturesGrid from "./FeaturesGrid";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";
import Hero from "./Hero";
import LanguageToggle from "./LanguageToggle";
import ModalForm from "./ModalForm";
import PricingOffer from "./PricingOffer";
import ProductTour from "./ProductTour";
import WhyClinicDesk from "./WhyClinicDesk";
import { defaultLanguage, dict, getDirection, type Language } from "../lib/i18n";

const STORAGE_KEY = "clinic-desk-language";
const WHATSAPP_NUMBER = "970569000968";
const COMPANY_LOGO_SRC = "/logo-clean.png";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === "en" || savedLanguage === "ar") {
      setLanguage(savedLanguage);
    }
  }, []);

  const direction = getDirection(language);
  const copy = dict[language];

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [direction, language]);

  function openDemoModal() {
    setIsModalOpen(true);
  }

  function closeDemoModal() {
    setIsModalOpen(false);
  }

  function scrollToFeatures() {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function openWhatsAppDemo() {
    const message =
      language === "ar"
        ? "مرحبًا، أريد طلب عرض تجريبي لنظام Clinic Desk."
        : "Hello, I would like to request a Clinic Desk demo.";
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(link, "_blank", "noopener,noreferrer");
  }

  return (
    <main
      id="top"
      lang={language}
      dir={direction}
      className={`min-h-screen ${language === "ar" ? "lang-ar" : ""}`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium"
      >
        {copy.a11y.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="section-shell flex items-center justify-between gap-4 py-4">
          <a
            href="#top"
            className="inline-flex items-center gap-3 rounded-lg px-1 py-1 transition hover:bg-slate-50"
            aria-label="Clinic Desk Home"
          >
            <span
              className="inline-flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--surface-soft)]"
              style={{ background: "unset", backgroundColor: "unset" }}
            >
              <img
                src={COMPANY_LOGO_SRC}
                alt="Company logo"
                width={56}
                height={56}
                className="h-14 w-14 object-contain"
                loading="eager"
                decoding="async"
              />
            </span>
            <span className="text-lg font-semibold tracking-tight text-slate-900">Clinic Desk</span>
          </a>
          <nav
            aria-label={copy.a11y.mainNavigation}
            className="hidden items-center gap-5 text-sm md:flex"
          >
            <a href="#features" className="text-slate-700 transition hover:text-teal-700">
              {copy.nav.features}
            </a>
            <a href="#pricing" className="text-slate-700 transition hover:text-teal-700">
              {copy.nav.pricing}
            </a>
            <a href="#faq" className="text-slate-700 transition hover:text-teal-700">
              {copy.nav.faq}
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle
              language={language}
              labels={copy.languageToggle}
              onChange={setLanguage}
            />
            <button
              type="button"
              onClick={openWhatsAppDemo}
              className="hidden rounded-lg bg-teal-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-800 sm:inline-flex"
              style={{ backgroundColor: "rgba(17, 94, 89, 1)" }}
              aria-label={copy.nav.requestDemo}
            >
              {copy.nav.requestDemo}
            </button>
          </div>
        </div>
      </header>

      <div id="content">
        <Hero
          content={copy.hero}
          direction={direction}
          onRequestDemo={openWhatsAppDemo}
          onSeeFeatures={scrollToFeatures}
        />
        <WhyClinicDesk content={copy.whoWhy} direction={direction} />
        <FeaturesGrid content={copy.features} direction={direction} />
        <BenefitsSection content={copy.benefits} direction={direction} />
        <ProductTour content={copy.tour} direction={direction} />
        <PricingOffer
          content={copy.pricing}
          direction={direction}
          onContactClick={openDemoModal}
        />
        <FAQ content={copy.faq} direction={direction} />
        <FinalCTA
          content={copy.finalCta}
          direction={direction}
          onPrimaryClick={openWhatsAppDemo}
        />
      </div>

      <Footer
        content={copy.footer}
        nav={copy.nav}
        footerNavigationLabel={copy.a11y.footerNavigation}
        direction={direction}
      />
      <ModalForm
        isOpen={isModalOpen}
        onClose={closeDemoModal}
        direction={direction}
        content={copy.form}
      />
    </main>
  );
}
