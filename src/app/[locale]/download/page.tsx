import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DownloadPageClient } from "@/components/pages/download-page-client";
import { getFAQPageLD } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/download" : `/${locale}/indir`,
      languages: {
        en: "/download",
        tr: "/tr/indir",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download.faq" });
  const faqItems: { question: string; answer: string }[] = t.raw("items");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageLD(faqItems)),
        }}
      />
      <DownloadPageClient />
    </>
  );
}
