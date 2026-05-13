import { HeroSection } from "@/components/landing/hero-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ScreenshotShowcase } from "@/components/landing/screenshot-showcase";
import { PrivacySection } from "@/components/landing/privacy-section";
import { DownloadCTA } from "@/components/landing/download-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ScreenshotShowcase />
      <PrivacySection />
      <DownloadCTA />
    </>
  );
}
