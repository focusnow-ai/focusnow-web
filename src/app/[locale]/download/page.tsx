import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { DownloadPageClient } from "@/components/pages/download-page-client";
import { getLatestDownloadLinks } from "@/lib/downloads";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "download.meta" });
  return pageMetadata({ pathname: "/download", locale, title: t("title"), description: t("description") });
}

export default async function DownloadPage() {
  const links = await getLatestDownloadLinks();

  return <DownloadPageClient links={links} />;
}
