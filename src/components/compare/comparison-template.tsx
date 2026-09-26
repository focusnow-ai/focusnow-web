import { useTranslations } from "next-intl";
import { Check, Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { AppWindow } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqList, type FaqItem } from "@/components/shared/faq-list";
import { DownloadCTA } from "@/components/landing/download-cta";
import { comparisons, type Competitor } from "@/lib/comparisons";
import { cn } from "@/lib/utils";

interface Row {
  criterion: string;
  us: string;
  them: string;
}

function PickList({ title, items, lead }: { title: string; items: string[]; lead?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        lead ? "border-emphasis/30 bg-background shadow-detail" : "border-border/80 bg-background/60"
      )}
    >
      <h2 className="font-semibold">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-relaxed">
            <Check
              className={cn("mt-1 size-4 shrink-0", lead ? "text-emphasis" : "text-muted-foreground")}
              aria-hidden="true"
            />
            <span className={lead ? "text-foreground/90" : "text-muted-foreground"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DecisionTable({ rows, usLabel, themLabel, criterionLabel, caption }: {
  rows: Row[];
  usLabel: string;
  themLabel: string;
  criterionLabel: string;
  caption: string;
}) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-border/80 md:block">
        <table className="w-full text-left text-[15px]">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-muted/60 text-sm">
            <tr>
              <th scope="col" className="w-[28%] px-5 py-3.5 font-medium text-muted-foreground">{criterionLabel}</th>
              <th scope="col" className="w-[36%] px-5 py-3.5 font-semibold text-emphasis">{usLabel}</th>
              <th scope="col" className="w-[36%] px-5 py-3.5 font-semibold">{themLabel}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/70">
            {rows.map((row) => (
              <tr key={row.criterion} className="align-top">
                <th scope="row" className="px-5 py-4 font-medium">{row.criterion}</th>
                <td className="px-5 py-4 leading-relaxed text-foreground/85">{row.us}</td>
                <td className="px-5 py-4 leading-relaxed text-muted-foreground">{row.them}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dl className="space-y-3 md:hidden">
        {rows.map((row) => (
          <div key={row.criterion} className="rounded-2xl border border-border/80 p-4">
            <dt className="font-medium">{row.criterion}</dt>
            <dd className="mt-3 grid gap-3 text-[15px] leading-relaxed">
              <p>
                <span className="block text-xs font-medium text-emphasis">{usLabel}</span>
                {row.us}
              </p>
              <p className="text-muted-foreground">
                <span className="block text-xs font-medium text-foreground/70">{themLabel}</span>
                {row.them}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
}

export function ComparisonTemplate({ competitor }: { competitor: Competitor }) {
  const t = useTranslations(`compare.${competitor}`);
  const page = useTranslations("comparePage");
  const common = useTranslations("common");
  const nav = useTranslations("nav");
  const entry = comparisons.find((item) => item.key === competitor)!;
  const others = comparisons.filter((item) => item.key !== competitor);

  const rows: Row[] = t.raw("rows");
  const sections: { title: string; body: string }[] = t.raw("sections");
  const faqItems: FaqItem[] = t.raw("faq.items");

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Breadcrumbs
            label={page("breadcrumb")}
            items={[
              { name: common("breadcrumbHome"), href: "/" },
              { name: page("breadcrumb"), href: "/compare" },
              { name: t("title") },
            ]}
          />
          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[6fr_5fr] lg:gap-16">
            <div className="enter">
              <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">{t("summary")}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/download" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base press-effect")}>
                  <Download className="size-5" aria-hidden="true" />
                  {common("getApp")}
                </Link>
                <a href="#side-by-side" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}>
                  {page("tableTitle")}
                </a>
              </div>
            </div>
            <div className="enter-scene grid gap-4">
              <PickList title={page("pickUsTitle")} items={t.raw("pickUs")} lead />
              <PickList title={t("pickThemTitle")} items={t.raw("pickThem")} />
            </div>
          </div>
        </div>
      </section>

      <section id="side-by-side" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{page("tableTitle")}</h2>
          <div className="reveal mt-8">
            <DecisionTable
              rows={rows}
              usLabel={page("usCol")}
              themLabel={t("themCol")}
              criterionLabel={page("criterionCol")}
              caption={t("title")}
            />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{page("checked")}</p>
        </div>
      </section>

      <section className="bg-wash py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[4fr_7fr] lg:gap-16">
            <div className="reveal">
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-balance sm:text-4xl">{page("experienceTitle")}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("experience")}</p>
            </div>
            <AppWindow
              shot={entry.experienceShot}
              alt={t("experienceAlt")}
              sizes="(min-width: 1344px) 760px, (min-width: 1024px) 58vw, 92vw"
              frameClassName="reveal shadow-window"
            />
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-8">
            {sections.map((section) => (
              <div key={section.title} className="reveal border-t border-border pt-5">
                <h3 className="text-lg font-semibold tracking-tight">{section.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] gap-10 px-4 sm:px-6 lg:grid-cols-[4fr_7fr] lg:gap-16 lg:px-8">
          <div className="reveal space-y-10">
            <div className="rounded-2xl border border-border/80 p-6">
              <h2 className="text-xl font-semibold tracking-tight">{page("switchTitle")}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("switch")}</p>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">{page("moreTitle")}</h2>
              <ul className="mt-3 space-y-2">
                {others.map((other) => (
                  <li key={other.key}>
                    <ArrowLink href={other.href}>{nav(`groups.compare.links.${other.key}.title`)}</ArrowLink>
                  </li>
                ))}
                <li>
                  <ArrowLink href="/alternatives">{page("guideLink")}</ArrowLink>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-medium text-muted-foreground">{page("sourcesTitle")}</h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {entry.sources.map((source) => (
                  <li key={source}>
                    <a href={source} rel="noopener" target="_blank" className="break-all text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                      {source.replace(/^https:\/\/(www\.)?/, "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="reveal">
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{page("faqTitle")}</h2>
            <FaqList items={faqItems} className="mt-8" />
          </div>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
