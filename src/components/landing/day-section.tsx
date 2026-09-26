import { useTranslations } from "next-intl";
import { AppWindow } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";
import { DayViews } from "@/components/landing/day-views";
import type { ShotKey } from "@/lib/screens";

function ViewPanel({ shot, mobileShot, alt }: { shot: ShotKey; mobileShot: ShotKey; alt: string }) {
  return (
    <>
      <AppWindow
        shot={shot}
        alt={alt}
        sizes="(min-width: 1344px) 1216px, 92vw"
        frameClassName="hidden shadow-window md:block"
      />
      <AppWindow shot={mobileShot} alt={alt} sizes="92vw" frameClassName="shadow-window md:hidden" />
    </>
  );
}

export function DaySection() {
  const t = useTranslations("daySection");
  const points = ["apps", "hours", "patterns"] as const;

  return (
    <section id="your-day" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t("description")}
          </p>
        </div>

        <div className="reveal mt-12">
          <DayViews
            label={t("viewsLabel")}
            views={[
              {
                key: "productivity",
                label: t("views.productivity"),
                panel: <ViewPanel shot="productivityTop" mobileShot="productivityMobile" alt={t("alts.productivity")} />,
              },
              {
                key: "calendar",
                label: t("views.calendar"),
                panel: <ViewPanel shot="calendarMonth" mobileShot="calendarMobile" alt={t("alts.calendar")} />,
              },
            ]}
          />
        </div>

        <dl className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {points.map((point) => (
            <div key={point} className="reveal border-l-2 border-emphasis/40 pl-5">
              <dt className="font-semibold">{t(`points.${point}.title`)}</dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                {t(`points.${point}.body`)}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 text-center">
          <ArrowLink href="/features/automatic-time-tracking">{t("link")}</ArrowLink>
        </div>
      </div>
    </section>
  );
}
