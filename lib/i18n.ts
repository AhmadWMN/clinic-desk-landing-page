export const languages = ["en", "ar"] as const;
export type Language = (typeof languages)[number];
export type Direction = "ltr" | "rtl";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

export interface TourItem {
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LandingContent {
  a11y: {
    skipToContent: string;
    mainNavigation: string;
    footerNavigation: string;
  };
  nav: {
    features: string;
    pricing: string;
    faq: string;
    requestDemo: string;
  };
  languageToggle: {
    ariaLabel: string;
    en: string;
    ar: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    imageAlt: string;
    trustPoints: string[];
  };
  whoWhy: {
    title: string;
    subtitle: string;
    whoTitle: string;
    whyTitle: string;
    whoItems: BenefitItem[];
    whyItems: BenefitItem[];
  };
  features: {
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  benefits: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
  socialProof: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  tour: {
    title: string;
    subtitle: string;
    items: TourItem[];
  };
  pricing: {
    title: string;
    subtitle: string;
    contactCta: string;
    includedTitle: string;
    includedItems: string[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: FAQItem[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  footer: {
    summary: string;
    rights: string;
  };
  form: {
    openLabel: string;
    title: string;
    subtitle: string;
    fullName: string;
    clinicName: string;
    contact: string;
    message: string;
    submit: string;
    close: string;
    successTitle: string;
    successMessage: string;
    submitAnother: string;
    validationRequired: string;
    validationContact: string;
  };
}

export const dict: Record<Language, LandingContent> = {
  en: {
    a11y: {
      skipToContent: "Skip to content",
      mainNavigation: "Main navigation",
      footerNavigation: "Footer navigation",
    },
    nav: {
      features: "Features",
      pricing: "Pricing",
      faq: "FAQ",
      requestDemo: "Request a Demo",
    },
    languageToggle: {
      ariaLabel: "Change language",
      en: "EN",
      ar: "AR",
    },
    hero: {
      badge: "Clinic Desk for Windows",
      title: "Run your clinic with confidence, even when internet is down",
      subtitle:
        "Clinic Desk is an offline desktop app built for small and medium clinics. Manage patients, visits, staff, inventory, and payments in Arabic or English.",
      primaryCta: "Request a Demo",
      secondaryCta: "See Features",
      imageAlt: "Clinic Desk product preview",
      trustPoints: [
        "Works fully offline",
        "Arabic + English interface",
        "Role-based access for Admin, Doctor, and Nurse",
      ],
    },
    whoWhy: {
      title: "Who it is for and why teams choose it",
      subtitle:
        "Designed for daily clinic operations with clarity, speed, and control.",
      whoTitle: "Who it is for",
      whyTitle: "Why Clinic Desk",
      whoItems: [
        {
          title: "Clinic owners and managers",
          description:
            "See operations clearly, track financial flow, and keep every role accountable.",
        },
        {
          title: "Reception and admin staff",
          description:
            "Register patients quickly, manage visits, and reduce front-desk confusion.",
        },
        {
          title: "Small medical centers",
          description:
            "Use one practical system across doctors, nurses, and support staff.",
        },
      ],
      whyItems: [
        {
          title: "Offline reliability",
          description:
            "Continue serving patients even during unstable internet conditions.",
        },
        {
          title: "Clear role permissions",
          description:
            "Admin, Doctor, and Nurse each get access that matches their responsibilities.",
        },
        {
          title: "Built for bilingual teams",
          description:
            "Switch between Arabic and English without interrupting your workflow.",
        },
      ],
    },
    features: {
      title: "Core features built for clinic flow",
      subtitle: "Everything you need to run day-to-day operations in one place.",
      items: [
        {
          title: "Patients",
          description:
            "Keep complete patient profiles, history, and contact details organized.",
        },
        {
          title: "Visits",
          description:
            "Record consultations, notes, and follow-up plans with clear timelines.",
        },
        {
          title: "Doctors and staff",
          description:
            "Manage users, responsibilities, and role-based permissions from one panel.",
        },
        {
          title: "Stock and inventory",
          description:
            "Track medical stock levels to reduce shortages and over-ordering.",
        },
        {
          title: "Finance and payments",
          description:
            "Log charges and payments so daily totals and balances stay transparent.",
        },
        {
          title: "Arabic and English",
          description:
            "Use the language that fits each team member without separate systems.",
        },
      ],
    },
    benefits: {
      title: "Why teams switch from spreadsheets and generic tools",
      subtitle:
        "Clinic Desk reduces manual work and helps teams stay aligned throughout the day.",
      bullets: [
        "Avoid interruptions caused by internet outages.",
        "Keep patient, visit, and payment data in one consistent workflow.",
        "Control who can view or edit sensitive records by role.",
        "Improve handoffs between reception, nurses, and doctors.",
      ],
    },
    socialProof: {
      title: "What clinic teams say",
      subtitle: "Example testimonials from common clinic scenarios.",
      items: [
        {
          name: "Mona A.",
          role: "Reception Supervisor",
          quote:
            "Our front desk is calmer now. Patient registration and visit tracking are much clearer.",
        },
        {
          name: "Dr. Kareem H.",
          role: "Clinic Manager",
          quote:
            "The offline workflow helps us continue operations without delays during internet issues.",
        },
        {
          name: "Samir T.",
          role: "Operations Lead",
          quote:
            "The bilingual interface made onboarding easier for both Arabic and English speakers.",
        },
      ],
    },
    tour: {
      title: "Quick product tour",
      subtitle: "Preview key screens before your demo.",
      items: [
        {
          title: "Clinic dashboard",
          caption: "Get a clear daily overview of visits, quick actions, and recent activity.",
          imageSrc: "/product-tour/dashboard.png",
          imageAlt: "Clinic Desk dashboard screen",
        },
        {
          title: "Doctors and staff",
          caption: "View doctors, roles, and availability in a clean searchable list.",
          imageSrc: "/product-tour/doctors.png",
          imageAlt: "Clinic Desk doctors screen",
        },
        {
          title: "Finance and payments",
          caption: "Track payments, expenses, and net balance for the selected period.",
          imageSrc: "/product-tour/finance.png",
          imageAlt: "Clinic Desk finance screen",
        },
        {
          title: "Patients",
          caption: "Search and manage patient records with fast access to key details.",
          imageSrc: "/product-tour/patients.png",
          imageAlt: "Clinic Desk patients screen",
        },
        {
          title: "Visits",
          caption: "Review and manage scheduled visits in one organized timeline.",
          imageSrc: "/product-tour/visits.png",
          imageAlt: "Clinic Desk visits screen",
        },
        {
          title: "Inventory",
          caption: "Monitor stock levels and low-stock alerts to avoid shortages.",
          imageSrc: "/product-tour/stock.png",
          imageAlt: "Clinic Desk inventory screen",
        },
      ],
    },
    pricing: {
      title: "Simple offer for growing clinics",
      subtitle:
        "Contact us for pricing based on your clinic size and workflow needs.",
      contactCta: "Contact Sales / Pricing",
      includedTitle: "What is included",
      includedItems: [
        "Windows desktop app setup",
        "Patients, visits, staff, inventory, and finance modules",
        "Arabic and English user interface",
        "Role-based access for Admin, Doctor, and Nurse",
        "Onboarding guidance for your team",
      ],
    },
    faq: {
      title: "Frequently asked questions",
      subtitle: "Straight answers before you book a demo.",
      items: [
        {
          question: "Does Clinic Desk work without internet?",
          answer:
            "Yes. Clinic Desk is designed to run offline so your clinic can continue daily operations reliably.",
        },
        {
          question: "Is this only for large hospitals?",
          answer:
            "No. It is designed for small and medium clinics and medical centers that need practical daily workflow support.",
        },
        {
          question: "Can each role have different permissions?",
          answer:
            "Yes. Admin, Doctor, and Nurse roles can have access aligned with their responsibilities.",
        },
        {
          question: "Does it support Arabic and English?",
          answer:
            "Yes. Teams can use a bilingual Arabic and English interface.",
        },
        {
          question: "Which modules are included?",
          answer:
            "Clinic Desk includes Patients, Visits, Doctors and Staff, Stock and Inventory, and Finance and Payments.",
        },
        {
          question: "How can we get pricing details?",
          answer:
            "Use the contact or demo request form. We share pricing based on clinic requirements.",
        },
      ],
    },
    finalCta: {
      title: "See how Clinic Desk fits your clinic",
      subtitle:
        "Book a guided demo and discuss pricing for your team and workflow.",
      primaryCta: "Request a Demo",
      secondaryCta: "Download for Windows",
    },
    footer: {
      summary:
        "Clinic Desk is a Windows desktop app for offline, bilingual clinic operations.",
      rights: "All rights reserved.",
    },
    form: {
      openLabel: "Open demo request form",
      title: "Request a Demo",
      subtitle: "Tell us about your clinic and we will contact you shortly.",
      fullName: "Full Name",
      clinicName: "Clinic Name",
      contact: "WhatsApp Number",
      message: "Message",
      submit: "Send Request",
      close: "Close",
      successTitle: "Thank you. Your request was sent.",
      successMessage:
        "We received your details and will reach out to schedule a demo.",
      submitAnother: "Send another request",
      validationRequired: "Please fill in all required fields.",
      validationContact: "Enter a valid phone number.",
    },
  },
  ar: {
    a11y: {
      skipToContent: "تجاوز إلى المحتوى",
      mainNavigation: "التنقل الرئيسي",
      footerNavigation: "تنقل التذييل",
    },
    nav: {
      features: "المميزات",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      requestDemo: "طلب عرض تجريبي",
    },
    languageToggle: {
      ariaLabel: "تغيير اللغة",
      en: "EN",
      ar: "AR",
    },
    hero: {
      badge: "Clinic Desk لنظام ويندوز",
      title: "أدر عيادتك بثبات حتى عند انقطاع الإنترنت",
      subtitle:
        "Clinic Desk تطبيق سطح مكتب يعمل دون اتصال، مخصص للعيادات الصغيرة والمتوسطة لإدارة المرضى والزيارات والطاقم والمخزون والمدفوعات بالعربية أو الإنجليزية.",
      primaryCta: "طلب عرض تجريبي",
      secondaryCta: "عرض المميزات",
      imageAlt: "معاينة لواجهة Clinic Desk",
      trustPoints: [
        "يعمل بالكامل دون اتصال",
        "واجهة عربية + إنجليزية",
        "صلاحيات حسب الدور: مدير، طبيب، ممرض",
      ],
    },
    whoWhy: {
      title: "لمن هذا النظام ولماذا تختاره العيادات",
      subtitle: "مصمم لعمليات العيادة اليومية بوضوح وسرعة وتحكم.",
      whoTitle: "لمن هو مناسب",
      whyTitle: "لماذا Clinic Desk",
      whoItems: [
        {
          title: "أصحاب العيادات والمديرون",
          description:
            "متابعة أوضح للتشغيل والتدفقات المالية مع ضبط المسؤوليات بين الفريق.",
        },
        {
          title: "الاستقبال والموظفون الإداريون",
          description:
            "تسجيل أسرع للمرضى وتنظيم الزيارات وتقليل الارتباك في مكتب الاستقبال.",
        },
        {
          title: "المراكز الطبية الصغيرة",
          description:
            "نظام عملي واحد للطبيب والممرض والموظف الإداري ضمن سير عمل موحّد.",
        },
      ],
      whyItems: [
        {
          title: "اعتمادية دون اتصال",
          description:
            "استمرار خدمة المرضى حتى عند ضعف أو انقطاع الإنترنت.",
        },
        {
          title: "صلاحيات واضحة لكل دور",
          description:
            "وصول مناسب لكل من المدير والطبيب والممرض حسب المسؤولية.",
        },
        {
          title: "دعم ثنائي اللغة",
          description:
            "التبديل بين العربية والإنجليزية بدون تعطيل سير العمل.",
        },
      ],
    },
    features: {
      title: "مميزات أساسية مبنية على واقع العيادات",
      subtitle: "كل ما تحتاجه لإدارة العمل اليومي في مكان واحد.",
      items: [
        {
          title: "المرضى",
          description: "تنظيم ملفات المرضى الكاملة والتاريخ الطبي ومعلومات التواصل.",
        },
        {
          title: "الزيارات",
          description: "تسجيل الاستشارات والملاحظات وخطط المتابعة ضمن تسلسل واضح.",
        },
        {
          title: "الأطباء والطاقم",
          description: "إدارة المستخدمين والمهام والصلاحيات من لوحة واحدة.",
        },
        {
          title: "المخزون والمستلزمات",
          description: "متابعة الكميات لتقليل النقص والطلبات الزائدة.",
        },
        {
          title: "المالية والمدفوعات",
          description:
            "تسجيل الرسوم والتحصيلات مع رؤية واضحة للإجماليات والأرصدة.",
        },
        {
          title: "العربية والإنجليزية",
          description: "واجهة ثنائية اللغة تناسب جميع أفراد الفريق.",
        },
      ],
    },
    benefits: {
      title: "لماذا تنتقل العيادات من الجداول والأدوات العامة",
      subtitle: "Clinic Desk يقلل العمل اليدوي ويحافظ على تناغم الفريق طوال اليوم.",
      bullets: [
        "تجنب توقف العمل بسبب مشاكل الإنترنت.",
        "جمع بيانات المرضى والزيارات والمدفوعات ضمن مسار واحد متناسق.",
        "التحكم بمن يطّلع أو يعدّل السجلات الحساسة حسب الدور.",
        "تحسين تسليم المهام بين الاستقبال والتمريض والأطباء.",
      ],
    },
    socialProof: {
      title: "آراء فرق العيادات",
      subtitle: "نماذج شهادات تعكس حالات تشغيلية شائعة.",
      items: [
        {
          name: "منى أ.",
          role: "مشرفة الاستقبال",
          quote:
            "أصبح العمل في الاستقبال أكثر هدوءًا. تسجيل المرضى ومتابعة الزيارات صار أوضح.",
        },
        {
          name: "د. كريم ح.",
          role: "مدير عيادة",
          quote:
            "ميزة العمل دون اتصال تساعدنا على الاستمرار بدون تأخير عند انقطاع الإنترنت.",
        },
        {
          name: "سمير ت.",
          role: "مسؤول التشغيل",
          quote:
            "الواجهة الثنائية سهّلت تدريب الفريق بالعربية والإنجليزية.",
        },
      ],
    },
    tour: {
      title: "جولة سريعة داخل النظام",
      subtitle: "تعرف على الشاشات الأساسية قبل حجز العرض التجريبي.",
      items: [
        {
          title: "لوحة التحكم",
          caption: "نظرة يومية واضحة على الزيارات والإجراءات السريعة وآخر النشاطات.",
          imageSrc: "/product-tour/dashboard.png",
          imageAlt: "لقطة شاشة لوحة التحكم",
        },
        {
          title: "الأطباء والطاقم",
          caption: "عرض الأطباء والأدوار وحالة النشاط في قائمة واضحة وسريعة البحث.",
          imageSrc: "/product-tour/doctors.png",
          imageAlt: "لقطة شاشة الأطباء",
        },
        {
          title: "المالية والمدفوعات",
          caption: "متابعة المدفوعات والمصروفات وصافي النتائج ضمن الفترة المحددة.",
          imageSrc: "/product-tour/finance.png",
          imageAlt: "لقطة شاشة المالية",
        },
        {
          title: "المرضى",
          caption: "إدارة سجلات المرضى والبحث السريع مع الوصول السهل للبيانات الأساسية.",
          imageSrc: "/product-tour/patients.png",
          imageAlt: "لقطة شاشة المرضى",
        },
        {
          title: "الزيارات",
          caption: "عرض وتنظيم جميع الزيارات في مسار واضح وسهل المتابعة.",
          imageSrc: "/product-tour/visits.png",
          imageAlt: "لقطة شاشة الزيارات",
        },
        {
          title: "المخزون",
          caption: "مراقبة الكميات والتنبيهات الخاصة بالنقص لتفادي الانقطاع.",
          imageSrc: "/product-tour/stock.png",
          imageAlt: "لقطة شاشة المخزون",
        },
      ],
    },
    pricing: {
      title: "عرض مناسب للعيادات النامية",
      subtitle: "تواصل معنا لمعرفة السعر المناسب لحجم عيادتك واحتياجات العمل.",
      contactCta: "تواصل للمبيعات / الأسعار",
      includedTitle: "ما الذي يشمله العرض",
      includedItems: [
        "تهيئة تطبيق ويندوز للعيادة",
        "وحدات المرضى والزيارات والطاقم والمخزون والمالية",
        "واجهة استخدام عربية وإنجليزية",
        "صلاحيات حسب الدور: مدير، طبيب، ممرض",
        "إرشاد أولي لتدريب فريق العمل",
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات مباشرة قبل حجز العرض.",
      items: [
        {
          question: "هل يعمل Clinic Desk بدون إنترنت؟",
          answer:
            "نعم. النظام مصمم للعمل دون اتصال لضمان استمرارية عمليات العيادة اليومية.",
        },
        {
          question: "هل هو مناسب فقط للمستشفيات الكبيرة؟",
          answer:
            "لا. النظام مخصص للعيادات والمراكز الطبية الصغيرة والمتوسطة.",
        },
        {
          question: "هل يمكن تحديد صلاحيات مختلفة لكل دور؟",
          answer:
            "نعم. يمكن ضبط صلاحيات المدير والطبيب والممرض حسب المسؤوليات.",
        },
        {
          question: "هل يدعم العربية والإنجليزية؟",
          answer: "نعم. الواجهة ثنائية اللغة لتناسب جميع أفراد الفريق.",
        },
        {
          question: "ما الوحدات المتوفرة داخل النظام؟",
          answer:
            "يتضمن النظام: المرضى، الزيارات، الأطباء والطاقم، المخزون، والمالية والمدفوعات.",
        },
        {
          question: "كيف أحصل على تفاصيل الأسعار؟",
          answer:
            "يمكنك إرسال طلب عبر نموذج التواصل أو العرض التجريبي وسنتواصل معك بالتفاصيل.",
        },
      ],
    },
    finalCta: {
      title: "اكتشف كيف يناسب Clinic Desk عيادتك",
      subtitle:
        "احجز عرضًا موجهًا لفريقك وناقش تفاصيل السعر وفق احتياجاتك.",
      primaryCta: "طلب عرض تجريبي",
      secondaryCta: "تنزيل لويندوز",
    },
    footer: {
      summary:
        "Clinic Desk تطبيق ويندوز لإدارة العيادات بشكل ثنائي اللغة مع دعم العمل دون اتصال.",
      rights: "جميع الحقوق محفوظة.",
    },
    form: {
      openLabel: "فتح نموذج طلب العرض",
      title: "طلب عرض تجريبي",
      subtitle: "شاركنا معلومات عيادتك وسنتواصل معك قريبًا.",
      fullName: "الاسم الكامل",
      clinicName: "اسم العيادة",
      contact: "هاتف (رقم واتس)",
      message: "الرسالة",
      submit: "إرسال الطلب",
      close: "إغلاق",
      successTitle: "شكرًا لك. تم إرسال طلبك.",
      successMessage: "استلمنا بياناتك وسنتواصل لتحديد موعد العرض.",
      submitAnother: "إرسال طلب آخر",
      validationRequired: "يرجى تعبئة جميع الحقول المطلوبة.",
      validationContact: "يرجى إدخال رقم هاتف صحيح.",
    },
  },
};

export const defaultLanguage: Language = "ar";

export function getDirection(language: Language): Direction {
  return language === "ar" ? "rtl" : "ltr";
}
