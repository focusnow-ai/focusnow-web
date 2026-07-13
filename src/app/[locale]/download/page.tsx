import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DownloadPageClient } from "@/components/pages/download-page-client";
import { getLatestDownloadLinks } from "@/lib/downloads";

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

export default async function DownloadPage() {
  const links = await getLatestDownloadLinks();

  return <DownloadPageClient links={links} />;
}
