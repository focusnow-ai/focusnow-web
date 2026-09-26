import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { DownloadCTA } from "@/components/landing/download-cta";
import { comparisons } from "@/lib/comparisons";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getBreadcrumbLD } from "@/lib/structured-data";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compareHub.meta" });
  return pageMetadata({ pathname: "/compare", locale, title: t("title"), description: t("description") });
}

export default async function CompareHubPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compareHub" });
  const page = await getTranslations({ locale, namespace: "comparePage" });
  const compare = await getTranslations({ locale, namespace: "compare" });
  const common = await getTranslations({ locale, namespace: "common" });
  const methodItems: string[] = t.raw("method.items");

  return (
    <>
      <JsonLd
        data={getBreadcrumbLD([
          { name: common("breadcrumbHome"), url: absoluteUrl("/", locale) },
          { name: page("breadcrumb"), url: absoluteUrl("/compare", locale) },
        ])}
      />
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Breadcrumbs
            label={page("breadcrumb")}
            items={[{ name: common("breadcrumbHome"), href: "/" }, { name: page("breadcrumb") }]}
          />
          <div className="enter mt-10 max-w-3xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">{t("description")}</p>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <ul className="mx-auto max-w-[84rem] space-y-4 px-4 sm:px-6 lg:px-8">
          {comparisons.map((item) => {
            const pickUs: string[] = compare.raw(`${item.key}.pickUs`);
            const pickThem: string[] = compare.raw(`${item.key}.pickThem`);
            return (
              <li key={item.key} className="reveal">
                <Link
                  href={item.href}
                  className="group grid gap-8 rounded-3xl border border-border/80 bg-card p-6 transition-colors hover:border-emphasis/40 sm:p-8 lg:grid-cols-[5fr_4fr_4fr_auto] lg:items-start"
                >
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight">
                      <span className="text-muted-foreground">FocusNow vs </span>
                      {item.name}
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {t(`items.${item.key}.summary`)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-emphasis">{page("pickUsTitle")}</h3>
                    <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed">
                      {pickUs.slice(0, 2).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground/70">{compare(`${item.key}.pickThemTitle`)}</h3>
                    <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {pickThem.slice(0, 2).map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="flex size-11 items-center justify-center rounded-full border border-border transition-colors group-hover:border-emphasis/50 group-hover:text-emphasis">
                    <ArrowRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">{t(`items.${item.key}.cta`)}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bg-wash py-20 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-semibold tracking-[-0.025em]">{t("method.title")}</h2>
            <ul className="mt-6 space-y-4">
              {methodItems.map((line) => (
                <li key={line} className="border-l-2 border-emphasis/40 pl-4 text-[15px] leading-relaxed text-foreground/80">
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{page("checked")}</p>
          </div>
          <div className="reveal rounded-3xl border border-border/80 bg-background p-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t("guide.title")}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("guide.body")}</p>
            <ArrowLink href="/alternatives" className="mt-6">
              {t("guide.link")}
            </ArrowLink>
          </div>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
