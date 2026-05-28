import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { UseCaseTemplate } from "@/components/use-cases/use-case-template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "useCases.remoteWorkers.meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/use-cases/remote-workers" : `/${locale}/kullanim-alanlari/uzaktan-calisanlar`,
      languages: {
        en: "/use-cases/remote-workers",
        tr: "/tr/kullanim-alanlari/uzaktan-calisanlar",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      locale: locale === "tr" ? "tr_TR" : "en_US",
    },
  };
}

export default function RemoteWorkersPage() {
  return <UseCaseTemplate segment="remoteWorkers" />;
}
