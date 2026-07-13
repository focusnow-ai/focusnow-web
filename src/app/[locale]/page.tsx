import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofBar } from "@/components/landing/social-proof-bar";
import { BentoFeatures } from "@/components/landing/bento-features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductShowcase } from "@/components/landing/product-showcase";
import { FAQSection } from "@/components/landing/faq-section";
import { DownloadCTA } from "@/components/landing/download-cta";
import { getFAQPageLD } from "@/lib/structured-data";

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
      <ProductShowcase />
      <BentoFeatures />
      <HowItWorks />
      <FAQSection />
      <DownloadCTA />
    </>
  );
}
