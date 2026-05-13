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
    "/changelog": {
      en: "/changelog",
      tr: "/degisiklik-kaydi",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
