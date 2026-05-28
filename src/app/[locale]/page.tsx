import { HeroSection } from "@/components/landing/hero-section";
import { SocialProofBar } from "@/components/landing/social-proof-bar";
import { FeaturesSection } from "@/components/landing/features-section";
import { ScreenshotShowcase } from "@/components/landing/screenshot-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { PrivacySection } from "@/components/landing/privacy-section";
import { DownloadCTA } from "@/components/landing/download-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <ScreenshotShowcase />
      <FeaturesSection />
      <HowItWorks />
      <PrivacySection />
      <DownloadCTA />
    </>
  );
}
