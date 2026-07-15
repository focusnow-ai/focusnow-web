import { Suspense } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPageClient } from "@/components/pages/contact-page-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/contact" : `/${locale}/iletisim`,
      languages: {
        en: "/contact",
        tr: "/tr/iletisim",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
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
