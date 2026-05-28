import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutPageClient } from "@/components/pages/about-page-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/about" : `/${locale}/hakkimizda`,
      languages: {
        en: "/about",
        tr: "/tr/hakkimizda",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
