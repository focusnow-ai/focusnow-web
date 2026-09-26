import { Suspense } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPageClient } from "@/components/pages/contact-page-client";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });

  return pageMetadata({ pathname: "/contact", locale, title: t("title"), description: t("description") });
}

export default function ContactPage() {
  // Suspense boundary is required because ContactPageClient reads
  // useSearchParams() (for ?topic= pre-selection from the desktop app).
  return (
    <Suspense>
      <ContactPageClient />
    </Suspense>
  );
}
