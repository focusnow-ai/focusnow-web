import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { UseCaseTemplate } from "@/components/use-cases/use-case-template";
import { getFAQPageLD } from "@/lib/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases.freelancers.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/use-cases/freelancers" : `/${locale}/kullanim-alanlari/serbest-calisanlar`,
      languages: {
        en: "/use-cases/freelancers",
        tr: "/tr/kullanim-alanlari/serbest-calisanlar",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default async function FreelancersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases.freelancers.faq" });
  const faqItems: { question: string; answer: string }[] = t.raw("items");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageLD(faqItems)),
        }}
      />
      <UseCaseTemplate segment="freelancers" />
    </>
  );
}
