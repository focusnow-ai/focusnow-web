import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofBar } from "@/components/landing/social-proof-bar";
import { DaySection } from "@/components/landing/day-section";
import { FocusScene } from "@/components/landing/focus-scene";
import { FeatureBento } from "@/components/landing/feature-bento";
import { ClientWork } from "@/components/landing/client-work";
import { UseCaseGrid } from "@/components/landing/use-case-grid";
import { CompareTeaser } from "@/components/landing/compare-teaser";
import { TrustOffer } from "@/components/landing/trust-offer";
import { FAQSection } from "@/components/landing/faq-section";
import { DownloadCTA } from "@/components/landing/download-cta";
import { getFAQPageLD } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    ...pageMetadata({ pathname: "/", locale, title: t("title"), description: t("description") }),
    title: { absolute: t("title") },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq" });
  const faqItems: { question: string; answer: string }[] = t.raw("items");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQPageLD(faqItems)),
        }}
      />
      <HeroSection />
      <SocialProofBar />
      <DaySection />
      <FocusScene />
      <FeatureBento />
      <ClientWork />
      <UseCaseGrid />
      <CompareTeaser />
      <TrustOffer />
      <FAQSection />
      <DownloadCTA />
    </>
  );
}
