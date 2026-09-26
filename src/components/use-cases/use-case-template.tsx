import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { AppWindow } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { FaqList, type FaqItem } from "@/components/shared/faq-list";
import { DownloadCTA } from "@/components/landing/download-cta";
import { useCaseConfigs, type Segment } from "@/lib/use-cases";
import { cn } from "@/lib/utils";

export function UseCaseTemplate({ segment }: { segment: Segment }) {
  const t = useTranslations(`useCases.${segment}`);
  const page = useTranslations("useCasePage");
  const common = useTranslations("common");
  const config = useCaseConfigs[segment];
  const scenes: { title: string; body: string; alt: string }[] = t.raw("scenes");
  const faqItems: FaqItem[] = t.raw("faq.items");

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[84rem] px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <Breadcrumbs
            label={page("breadcrumb")}
            items={[{ name: common("breadcrumbHome"), href: "/" }, { name: page("breadcrumb") }, { name: t("who") }]}
          />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-12">
            <div className="enter">
              <p className="text-sm font-medium text-emphasis">{t("who")}</p>
              <h1 className="mt-4 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-balance sm:text-5xl xl:text-[3.75rem]">
                {t("title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{t("description")}</p>
              <Link
                href="/download"
                className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 px-6 text-base press-effect")}
              >
                <Download className="size-5" aria-hidden="true" />
                {common("getApp")}
              </Link>
            </div>
            <div className="enter-scene">
              <AppWindow
                shot={config.heroShot}
                alt={t("heroAlt")}
                sizes="(min-width: 1344px) 720px, (min-width: 1024px) 56vw, 92vw"
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
        </div>
      </section>

      <section className="bg-wash py-20 sm:py-24">
        <div className="reveal mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-sm font-medium text-emphasis">{page("dayTitle")}</h2>
          <p className="mt-5 text-2xl leading-snug tracking-[-0.01em] text-foreground/90 sm:text-[1.75rem] sm:leading-[1.4] text-pretty">
            {t("day")}
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[84rem] space-y-20 px-4 sm:px-6 sm:space-y-28 lg:px-8">
          {scenes.map((scene, index) => (
            <div
              key={scene.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
            >
              <div className={cn("reveal max-w-md", index % 2 === 1 && "md:order-2")}>
                <h2 className="text-3xl font-semibold tracking-[-0.025em] text-balance sm:text-4xl">{scene.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{scene.body}</p>
              </div>
              <div className="reveal flex justify-center">
                <AppWindow
                  shot={config.sceneShots[index]}
                  alt={scene.alt}
                  sizes="(min-width: 1344px) 560px, (min-width: 768px) 44vw, 92vw"
                  capToSource
                  frameClassName="w-full shadow-window"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[84rem] gap-10 px-4 sm:px-6 lg:grid-cols-[4fr_7fr] lg:gap-16 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl font-semibold tracking-[-0.025em] text-balance sm:text-4xl">{page("faqTitle")}</h2>
            <div className="mt-8 space-y-4">
              <h3 className="text-sm font-medium text-muted-foreground">{page("nextTitle")}</h3>
              <ArrowLink href={config.feature}>{t("featureLink")}</ArrowLink>
              <p className="text-[15px] text-muted-foreground">
                {t("compareText")}{" "}
                <Link href={config.compare} className="font-medium text-emphasis underline-offset-4 hover:underline">
                  {t("compareLink")}
                </Link>
              </p>
            </div>
          </div>
          <FaqList items={faqItems} className="reveal" />
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
