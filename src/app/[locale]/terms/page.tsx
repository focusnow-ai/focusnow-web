import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalDocument } from "@/components/shared/legal-document";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "termsPage.meta" });
  return pageMetadata({ pathname: "/terms", locale, title: t("title"), description: t("description") });
}

export default async function TermsPage({ params }: Params) {
  const { locale } = await params;
  return <LegalDocument namespace="termsPage" locale={locale} />;
}
