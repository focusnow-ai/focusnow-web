import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofBar } from "@/components/landing/social-proof-bar";
import { BentoFeatures } from "@/components/landing/bento-features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { DownloadCTA } from "@/components/landing/download-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <BentoFeatures />
      <HowItWorks />
      <DownloadCTA />
    </>
  );
}
