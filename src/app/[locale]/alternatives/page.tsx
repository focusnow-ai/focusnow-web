import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ExternalLink, Info } from "lucide-react";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { DownloadCTA } from "@/components/landing/download-cta";
import { alternativeSources, alternativeTools, COMPETITOR_CHECKED_ON } from "@/lib/comparisons";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { getArticleLD, getBreadcrumbLD } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "alternatives.meta" });
  return pageMetadata({ pathname: "/alternatives", locale, title: t("title"), description: t("description") });
}

export default async function AlternativesPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "alternatives" });
  const page = await getTranslations({ locale, namespace: "comparePage" });
  const common = await getTranslations({ locale, namespace: "common" });
  const criteria: { title: string; body: string }[] = t.raw("criteria");
  const url = absoluteUrl("/alternatives", locale);

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
          getBreadcrumbLD([
            { name: common("breadcrumbHome"), url: absoluteUrl("/", locale) },
            { name: t("breadcrumb"), url },
          ]),
        ]}
      />
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Breadcrumbs
            label={page("breadcrumb")}
            items={[{ name: common("breadcrumbHome"), href: "/" }, { name: t("breadcrumb") }]}
          />
          <div className="enter mt-10 max-w-3xl">
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">{t("intro")}</p>
            <p className="mt-8 flex gap-3 rounded-2xl border border-border/80 bg-background/70 p-5 text-[15px] leading-relaxed text-foreground/80">
              <Info className="mt-0.5 size-5 shrink-0 text-emphasis" aria-hidden="true" />
              {t("disclosure")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{t("criteriaTitle")}</h2>
          <ol className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {criteria.map((item) => (
              <li key={item.title} className="reveal border-t-2 border-emphasis/50 pt-5">
                <h3 className="font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-wash py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{t("toolsTitle")}</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {alternativeTools.map((tool) => {
              const ours = tool.key === "focusnow";
              return (
                <article
                  key={tool.key}
                  className={cn(
                    "reveal flex flex-col rounded-3xl border p-6 sm:p-8",
                    ours ? "border-emphasis/30 bg-background shadow-detail" : "border-border/80 bg-background/70"
                  )}
                >
                  <h3 className="text-2xl font-semibold tracking-tight">{tool.name}</h3>
                  <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
                    <div>
                      <dt className="text-sm font-medium text-emphasis">{t("fitLabel")}</dt>
                      <dd className="mt-1 text-foreground/85">{t(`tools.${tool.key}.fit`)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">{t("considerLabel")}</dt>
                      <dd className="mt-1 text-muted-foreground">{t(`tools.${tool.key}.consider`)}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">{t("priceLabel")}</dt>
                      <dd className="mt-1 text-muted-foreground">{t(`tools.${tool.key}.price`)}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-2 pt-6">
                    {tool.compare && <ArrowLink href={tool.compare}>{t("compareLink")}</ArrowLink>}
                    {!ours && (
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        {t("officialSite")}
                        <ExternalLink className="size-3.5" aria-hidden="true" />
                      </a>
                    )}
                    {ours && <ArrowLink href="/download">{common("getApp")}</ArrowLink>}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-10 max-w-2xl text-lg font-medium">{t("closing")}</p>
          <div className="mt-8 text-sm text-muted-foreground">
            <p>{page("checked")}</p>
            <h3 className="mt-4 font-medium text-foreground/80">{page("sourcesTitle")}</h3>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {alternativeSources.map((source) => (
                <li key={source}>
                  <a href={source} target="_blank" rel="noopener" className="underline-offset-4 hover:text-foreground hover:underline">
                    {source.replace(/^https:\/\/(www\.)?/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
