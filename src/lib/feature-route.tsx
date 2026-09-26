import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { FeaturePage } from "@/components/features/feature-page";
import { JsonLd } from "@/components/shared/json-ld";
import { featureConfigs, type FeatureKey } from "@/lib/features";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getBreadcrumbLD } from "@/lib/structured-data";

type Params = { params: Promise<{ locale: string }> };

export function featureRoute(feature: FeatureKey) {
  const { pathname } = featureConfigs[feature];

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `features.${feature}.meta` });
    return pageMetadata({ pathname, locale, title: t("title"), description: t("description") });
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `features.${feature}` });
    const common = await getTranslations({ locale, namespace: "common" });
    return (
      <>
        <JsonLd
          data={getBreadcrumbLD([
            { name: common("breadcrumbHome"), url: absoluteUrl("/", locale) },
            { name: t("category"), url: absoluteUrl(pathname, locale) },
          ])}
        />
        <FeaturePage feature={feature} />
      </>
    );
  }

  return { generateMetadata, Page };
}
