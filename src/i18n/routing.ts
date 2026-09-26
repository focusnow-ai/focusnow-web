import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "tr"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/download": {
      en: "/download",
      tr: "/indir",
    },
    "/blog": {
      en: "/blog",
      tr: "/blog",
    },
    "/blog/[slug]": {
      en: "/blog/[slug]",
      tr: "/blog/[slug]",
    },
    "/pricing": {
      en: "/pricing",
      tr: "/fiyatlandirma",
    },
    "/about": {
      en: "/about",
      tr: "/hakkimizda",
    },
    "/privacy": {
      en: "/privacy",
      tr: "/gizlilik",
    },
    "/terms": {
      en: "/terms",
      tr: "/kullanim-kosullari",
    },
    "/changelog": {
      en: "/changelog",
      tr: "/degisiklik-kaydi",
    },
    "/contact": {
      en: "/contact",
      tr: "/iletisim",
    },
    "/use-cases/remote-workers": {
      en: "/use-cases/remote-workers",
      tr: "/kullanim-alanlari/uzaktan-calisanlar",
    },
    "/use-cases/students": {
      en: "/use-cases/students",
      tr: "/kullanim-alanlari/ogrenciler",
    },
    "/use-cases/freelancers": {
      en: "/use-cases/freelancers",
      tr: "/kullanim-alanlari/serbest-calisanlar",
    },
    "/use-cases/developers": {
      en: "/use-cases/developers",
      tr: "/kullanim-alanlari/yazilimcilar",
    },
    "/compare": {
      en: "/compare",
      tr: "/karsilastir",
    },
    "/compare/rize": {
      en: "/compare/rize",
      tr: "/karsilastir/rize",
    },
    "/compare/rescuetime": {
      en: "/compare/rescuetime",
      tr: "/karsilastir/rescuetime",
    },
    "/compare/toggl": {
      en: "/compare/toggl",
      tr: "/karsilastir/toggl",
    },
    "/alternatives": {
      en: "/alternatives",
      tr: "/alternatifler",
    },
    "/features/automatic-time-tracking": {
      en: "/features/automatic-time-tracking",
      tr: "/ozellikler/otomatik-zaman-takibi",
    },
    "/features/focus-sessions": {
      en: "/features/focus-sessions",
      tr: "/ozellikler/odak-oturumlari",
    },
    "/features/timecards": {
      en: "/features/timecards",
      tr: "/ozellikler/zaman-kartlari",
    },
    "/guide": {
      en: "/guide",
      tr: "/rehber",
    },
    "/guide/[slug]": {
      en: "/guide/[slug]",
      tr: "/rehber/[slug]",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
