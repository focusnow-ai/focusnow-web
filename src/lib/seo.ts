import type { Metadata } from "next";
import { routing, type Pathnames } from "@/i18n/routing";

export const SITE_URL = "https://focusnow.ai";

type StaticPathname = Exclude<Pathnames, `${string}[${string}]${string}`>;

export function localizedPath(pathname: StaticPathname, locale: string): string {
  const entry = routing.pathnames[pathname];
  const path = typeof entry === "string" ? entry : entry[locale as "en" | "tr"];
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function absoluteUrl(pathname: StaticPathname, locale: string): string {
  const path = localizedPath(pathname, locale);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

export function pageMetadata({
  pathname,
  locale,
  title,
  description,
}: {
  pathname: StaticPathname;
  locale: string;
  title: string;
  description: string;
}): Metadata {
  return {
    title: title.includes("FocusNow") ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localizedPath(pathname, locale),
      languages: {
        en: localizedPath(pathname, "en"),
        tr: localizedPath(pathname, "tr"),
        "x-default": localizedPath(pathname, "en"),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(pathname, locale),
      siteName: "FocusNow",
      type: "website",
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
