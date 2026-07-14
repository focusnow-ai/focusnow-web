import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ComparisonTemplate } from "@/components/compare/comparison-template";
import { getFAQPageLD } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare.rize.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/compare/rize" : `/${locale}/karsilastir/rize`,
      languages: {
        en: "/compare/rize",
        tr: "/tr/karsilastir/rize",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function CompareRizePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compare.rize.faq" });
  const faqItems: { question: string; answer: string }[] = t.raw("items");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageLD(faqItems)),
        }}
      />
      <ComparisonTemplate competitor="rize" />
    </>
  );
}
