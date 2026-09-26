import { useTranslations } from "next-intl";
import { Download } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { AppWindow } from "@/components/shared/product-shot";
import { cn } from "@/lib/utils";

/** Closing scene on every marketing page: a promise, one download action and a glimpse of the app. */
export function DownloadCTA() {
  const t = useTranslations("downloadCta");

  return (
    <section className="px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:px-8">
      <div className="relative isolate mx-auto grid max-w-[84rem] items-center gap-12 overflow-hidden rounded-[2rem] border border-border/70 bg-wash px-6 py-14 sm:px-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:gap-8 lg:py-20">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="reveal max-w-lg">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("description")}</p>
          <Link
            href="/download"
            className={cn(buttonVariants({ size: "lg" }), "mt-8 h-12 px-6 text-base press-effect")}
          >
            <Download className="size-5" aria-hidden="true" />
            {t("cta")}
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">{t("note")}</p>
        </div>

        <div className="reveal relative mx-auto w-full max-w-xl lg:mr-0">
          <AppWindow
            shot="focusToday"
            alt={t("todayAlt")}
            sizes="(min-width: 1024px) 560px, 88vw"
            frameClassName="shadow-window"
          />
          <div className="ml-auto mt-4 w-[82%]">
            <AppWindow
              shot="timecardTimer"
              alt={t("timerAlt")}
              sizes="(min-width: 1024px) 460px, 72vw"
              compact
              frameClassName="shadow-detail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
