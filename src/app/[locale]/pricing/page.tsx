import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Check, Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { EarlyAccessBadge } from "@/components/shared/early-access-badge";
import { FaqList, type FaqItem } from "@/components/shared/faq-list";
import { JsonLd } from "@/components/shared/json-ld";
import { WaitlistForm } from "@/components/pages/waitlist-form";
import { DownloadCTA } from "@/components/landing/download-cta";
import { pageMetadata } from "@/lib/seo";
import { getFAQPageLD } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing.meta" });
  return pageMetadata({ pathname: "/pricing", locale, title: t("title"), description: t("description") });
}

function FeatureList({ items, muted }: { items: string[]; muted?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-snug">
          <Check
            className={cn("mt-0.5 size-4 shrink-0", muted ? "text-muted-foreground" : "text-emphasis")}
            aria-hidden="true"
          />
          <span className={muted ? "text-muted-foreground" : undefined}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PricingPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pricing" });
  const faq: FaqItem[] = t.raw("faq");

  return (
    <>
      <JsonLd data={getFAQPageLD(faq)} />
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-10 pt-14 sm:px-6 sm:pt-20 lg:px-8">
          <div className="enter max-w-3xl">
            <p className="text-sm font-medium text-emphasis">{t("category")}</p>
            <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem]">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{t("description")}</p>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-6 sm:pb-24">
        <div className="mx-auto grid max-w-[84rem] gap-4 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr_0.95fr] lg:px-8">
          <article className="reveal flex flex-col rounded-3xl border border-emphasis/30 bg-card p-7 shadow-detail sm:p-8">
            <h2 className="text-sm font-medium text-emphasis">{t("free.label")}</h2>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-mono text-5xl font-medium tracking-tight">{t("free.price")}</span>
              <span className="text-sm text-muted-foreground">{t("free.period")}</span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("free.description")}</p>
            <Link href="/download" className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 text-base press-effect")}>
              <Download className="size-5" aria-hidden="true" />
              {t("free.cta")}
            </Link>
            <div className="mt-8">
              <FeatureList items={t.raw("free.features")} />
            </div>
          </article>

          <article className="reveal flex flex-col rounded-3xl border border-border/80 bg-wash p-7 sm:p-8">
            <EarlyAccessBadge className="self-start" />
            <h2 className="mt-4 text-xl font-semibold tracking-tight">{t("clients.title")}</h2>
            <p className="mt-3 flex items-baseline gap-2">
              <span className="font-mono text-4xl font-medium tracking-tight">{t("clients.price")}</span>
              <span className="text-sm text-muted-foreground">{t("clients.period")}</span>
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("clients.description")}</p>
            <div className="mt-6">
              <FeatureList items={t.raw("clients.features")} />
            </div>
            <p className="mt-auto pt-8 text-sm leading-relaxed text-muted-foreground">{t("clients.note")}</p>
          </article>

          <article className="reveal flex flex-col rounded-3xl border border-border/80 bg-muted/50 p-7 sm:p-8">
            <h2 className="text-sm font-medium text-muted-foreground">{t("pro.label")}</h2>
            <p className="mt-4 text-2xl font-semibold tracking-tight">{t("pro.price")}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{t("pro.description")}</p>
            <WaitlistForm />
          </article>
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] gap-10 px-4 sm:px-6 lg:grid-cols-[4fr_7fr] lg:gap-16 lg:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{t("faqTitle")}</h2>
          <FaqList items={faq} className="reveal" />
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
