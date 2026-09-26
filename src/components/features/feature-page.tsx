import { useTranslations } from "next-intl";
import { ArrowUpRight, Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { AppWindow } from "@/components/shared/product-shot";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { EarlyAccessBadge } from "@/components/shared/early-access-badge";
import { DownloadCTA } from "@/components/landing/download-cta";
import { featureConfigs, type FeatureKey } from "@/lib/features";
import { cn } from "@/lib/utils";

export function FeaturePage({ feature }: { feature: FeatureKey }) {
  const t = useTranslations(`features.${feature}`);
  const page = useTranslations("featurePage");
  const common = useTranslations("common");
  const config = featureConfigs[feature];
  const outcomes: { title: string; body: string }[] = t.raw("outcomes");
  const steps: { title: string; body: string }[] = t.raw("steps");

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Breadcrumbs
            label={page("breadcrumb")}
            items={[{ name: common("breadcrumbHome"), href: "/" }, { name: page("breadcrumb") }, { name: t("category") }]}
          />
          <div className="enter mt-10 max-w-3xl">
            {config.earlyAccess && <EarlyAccessBadge className="mb-5" />}
            <p className="text-sm font-medium text-emphasis">{t("category")}</p>
            <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4rem]">
              {t("title")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
              {t("description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/download" className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base press-effect")}>
                <Download className="size-5" aria-hidden="true" />
                {common("getApp")}
              </Link>
              <Link
                href={config.guide}
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>

          <div className="enter-scene mt-14">
            <AppWindow
              shot={config.heroShot}
              alt={t("heroAlt")}
              sizes="(min-width: 1344px) 1216px, 92vw"
              priority
              frameClassName="hidden shadow-window md:block"
            />
            <AppWindow
              shot={config.heroMobileShot}
              alt={t("heroAlt")}
              sizes="92vw"
              priority
              frameClassName="shadow-window md:hidden"
            />
            <p className="mt-3 text-right text-xs text-muted-foreground">{common("demoData")}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{page("outcomesTitle")}</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {outcomes.map((outcome) => (
              <div key={outcome.title} className="reveal border-t-2 border-emphasis/50 pt-5">
                <h3 className="text-lg font-semibold tracking-tight">{outcome.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{outcome.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-wash py-20 sm:py-28">
        <div className="mx-auto grid max-w-[84rem] items-start gap-12 px-4 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-semibold tracking-[-0.025em] sm:text-4xl">{page("flowTitle")}</h2>
            <ol className="mt-8 space-y-7 border-l border-border pl-6">
              {steps.map((step) => (
                <li key={step.title} className="relative">
                  <span className="absolute -left-[1.84rem] top-1.5 size-2.5 rounded-full bg-emphasis" aria-hidden="true" />
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
                </li>
              ))}
            </ol>
            {config.earlyAccess && (
              <p className="mt-10 rounded-2xl border border-border/80 bg-background/70 p-5 text-sm leading-relaxed text-muted-foreground">
                {t("note")}
              </p>
            )}
          </div>
          <div className="reveal lg:sticky lg:top-24">
            <AppWindow
              shot={config.flowShot}
              alt={t("flowAlt")}
              sizes="(min-width: 1344px) 700px, (min-width: 1024px) 54vw, 92vw"
              frameClassName="shadow-window"
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <h2 className="reveal text-2xl font-semibold tracking-tight sm:text-3xl">{page("relatedTitle")}</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {config.related.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-border/80 px-5 py-4 transition-colors hover:border-emphasis/40 hover:bg-muted/50"
                >
                  <span className="font-medium">{t(`related.${item.key}`)}</span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emphasis"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
