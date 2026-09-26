import { useTranslations } from "next-intl";
import { ArrowDown, Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { AppWindow } from "@/components/shared/product-shot";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";
import { cn } from "@/lib/utils";

function HeroScene() {
  const t = useTranslations("hero.scene");

  return (
    <div className="relative">
      <div className="enter-scene relative sm:pr-[20%]">
        <AppWindow
          shot="focusTimer"
          alt={t("mainAlt")}
          sizes="(min-width: 1344px) 580px, (min-width: 1024px) 42vw, (min-width: 640px) 74vw, 92vw"
          priority
          frameClassName="shadow-window"
        />
      </div>

      <div className="enter-detail absolute right-0 top-[14%] hidden w-[38%] sm:block">
        <AppWindow
          shot="insightsHighlights"
          alt={t("insightsAlt")}
          title={t("insightsTitle")}
          sizes="(min-width: 1344px) 300px, (min-width: 1024px) 22vw, 36vw"
          compact
          priority
          frameClassName="shadow-detail"
        />
      </div>

      <div className="enter-detail-late relative -mt-5 ml-auto w-[82%] sm:-ml-[3%] sm:mr-0 sm:w-[54%]">
        <AppWindow
          shot="timecardTimer"
          alt={t("timerAlt")}
          sizes="(min-width: 1344px) 420px, (min-width: 640px) 30vw, 70vw"
          compact
          priority
          frameClassName="shadow-detail"
        />
      </div>
    </div>
  );
}

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden">
      <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-[84rem] items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[45fr_55fr] lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <div className="enter max-w-xl">
          <p className="text-sm font-medium text-emphasis">{t("category")}</p>
          <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty">
            {t("description")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/download"
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base press-effect")}
            >
              <Download className="size-5" aria-hidden="true" />
              {t("cta")}
            </Link>
            <a
              href="#your-day"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 px-6 text-base")}
            >
              {t("secondaryCta")}
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <AppleIcon className="size-4" />
            <WindowsIcon className="size-3.5" />
            <span>{t("platformNote")}</span>
          </p>
        </div>

        <div className="lg:pl-4">
          <HeroScene />
          <p className="mt-4 text-right text-xs text-muted-foreground">{t("scene.demoNote")}</p>
        </div>
      </div>
    </section>
  );
}
