import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { UseCaseTemplate } from "@/components/use-cases/use-case-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases.developers.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/use-cases/developers" : `/${locale}/kullanim-alanlari/yazilimcilar`,
      languages: {
        en: "/use-cases/developers",
        tr: "/tr/kullanim-alanlari/yazilimcilar",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default function DevelopersPage() {
  return <UseCaseTemplate segment="developers" />;
}
