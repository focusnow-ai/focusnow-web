import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalDocument } from "@/components/shared/legal-document";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage.meta" });
  return pageMetadata({ pathname: "/privacy", locale, title: t("title"), description: t("description") });
}

export default async function PrivacyPage({ params }: Params) {
  const { locale } = await params;
  return <LegalDocument namespace="privacyPage" locale={locale} />;
}
