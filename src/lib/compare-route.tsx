import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ComparisonTemplate } from "@/components/compare/comparison-template";
import { JsonLd } from "@/components/shared/json-ld";
import { comparisons, COMPETITOR_CHECKED_ON, type Competitor } from "@/lib/comparisons";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getArticleLD, getBreadcrumbLD, getFAQPageLD } from "@/lib/structured-data";

type Params = { params: Promise<{ locale: string }> };

export function compareRoute(competitor: Competitor) {
  const { href: pathname } = comparisons.find((item) => item.key === competitor)!;

  async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `compare.${competitor}.meta` });
    return pageMetadata({ pathname, locale, title: t("title"), description: t("description") });
  }

  async function Page({ params }: Params) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `compare.${competitor}` });
    const common = await getTranslations({ locale, namespace: "common" });
    const page = await getTranslations({ locale, namespace: "comparePage" });
    const faqItems: { question: string; answer: string }[] = t.raw("faq.items");
    const url = absoluteUrl(pathname, locale);
    return (
      <>
        <JsonLd
          data={[
            getArticleLD({
              headline: t("title"),
              description: t("meta.description"),
              url,
              locale,
              dateModified: COMPETITOR_CHECKED_ON,
            }),
            getFAQPageLD(faqItems),
            getBreadcrumbLD([
              { name: common("breadcrumbHome"), url: absoluteUrl("/", locale) },
              { name: page("breadcrumb"), url: absoluteUrl("/compare", locale) },
              { name: t("title"), url },
            ]),
          ]}
        />
        <ComparisonTemplate competitor={competitor} />
      </>
    );
  }

  return { generateMetadata, Page };
}
