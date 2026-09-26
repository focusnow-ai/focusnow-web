import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { UseCaseTemplate } from "@/components/use-cases/use-case-template";
import { JsonLd } from "@/components/shared/json-ld";
import { useCaseConfigs, type Segment } from "@/lib/use-cases";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getBreadcrumbLD, getFAQPageLD } from "@/lib/structured-data";

type Params = { params: Promise<{ locale: string }> };

export function segmentRoute(segment: Segment) {
  const { pathname } = useCaseConfigs[segment];

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `useCases.${segment}.meta` });
    return pageMetadata({ pathname, locale, title: t("title"), description: t("description") });
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `useCases.${segment}` });
    const common = await getTranslations({ locale, namespace: "common" });
    const faqItems: { question: string; answer: string }[] = t.raw("faq.items");
    return (
      <>
        <JsonLd
          data={[
            getFAQPageLD(faqItems),
            getBreadcrumbLD([
              { name: common("breadcrumbHome"), url: absoluteUrl("/", locale) },
              { name: t("who"), url: absoluteUrl(pathname, locale) },
            ]),
          ]}
        />
        <UseCaseTemplate segment={segment} />
      </>
    );
  }

  return { generateMetadata, Page };
}
