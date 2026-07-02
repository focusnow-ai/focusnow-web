import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { TermsPageClient } from "@/components/pages/terms-page-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsPage.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/terms" : `/${locale}/kullanim-kosullari`,
      languages: {
        en: "/terms",
        tr: "/tr/kullanim-kosullari",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default function TermsPage() {
  return <TermsPageClient />;
}
