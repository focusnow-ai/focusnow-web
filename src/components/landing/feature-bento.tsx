import { useTranslations } from "next-intl";
import { ProductShot } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";
import type { ShotKey } from "@/lib/screens";
import { cn } from "@/lib/utils";

type CardHref = React.ComponentProps<typeof ArrowLink>["href"];

interface BentoCard {
  key: "analytics" | "report" | "tasks" | "calendar";
  shot: ShotKey;
  sizes: string;
  href: CardHref;
  className: string;
  surface: string;
  shotClassName: string;
}

const cards: BentoCard[] = [
  {
    key: "analytics",
    shot: "productivityBreakdown",
    sizes: "(min-width: 1344px) 680px, (min-width: 1024px) 52vw, 92vw",
    href: "/features/automatic-time-tracking",
    className: "lg:col-span-7",
    surface: "bg-wash",
    shotClassName: "mt-auto rounded-t-xl border-x border-t border-border/70 shadow-detail",
  },
  {
    key: "report",
    shot: "insightsRecommendations",
    sizes: "(min-width: 1344px) 440px, (min-width: 1024px) 34vw, 92vw",
    href: { pathname: "/guide/[slug]", params: { slug: "ai-daily-report" } },
    className: "lg:col-span-5",
    surface: "bg-gradient-to-b from-purple-100/70 to-card dark:from-purple-950/40 dark:to-card",
    shotClassName: "mt-auto rounded-t-xl border-x border-t border-border/70 shadow-detail",
  },
  {
    key: "tasks",
    shot: "tasksAccuracy",
    sizes: "(min-width: 1344px) 460px, (min-width: 1024px) 36vw, 92vw",
    href: "/features/focus-sessions",
    className: "lg:col-span-5",
    surface: "bg-card",
    shotClassName: "rounded-xl border border-border/70",
  },
  {
    key: "calendar",
    shot: "calendarRow",
    sizes: "(min-width: 1344px) 680px, (min-width: 1024px) 52vw, 92vw",
    href: { pathname: "/guide/[slug]", params: { slug: "calendar-and-your-data" } },
    className: "lg:col-span-7",
    surface: "bg-muted/70",
    shotClassName: "rounded-xl border border-border/70",
  },
];

export function FeatureBento() {
  const t = useTranslations("featureBento");

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <h2 className="reveal max-w-2xl text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:leading-[1.05]">
          {t("title")}
        </h2>
        <p className="reveal mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{t("description")}</p>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {cards.map((card) => {
            const tall = card.key === "analytics" || card.key === "report";
            return (
              <article
                key={card.key}
                className={cn(
                  "reveal flex flex-col overflow-hidden rounded-2xl border border-border/70",
                  card.surface,
                  card.className,
                  tall ? "px-6 pt-6 sm:px-8 sm:pt-8" : "p-6 sm:p-8"
                )}
              >
                <div className={cn(tall ? "max-w-md" : "max-w-sm")}>
                  <h3 className="text-xl font-semibold tracking-tight">{t(`cards.${card.key}.title`)}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {t(`cards.${card.key}.body`)}
                  </p>
                  <ArrowLink href={card.href} className="mt-4">
                    {t(`cards.${card.key}.link`)}
                  </ArrowLink>
                </div>
                <div className={cn(tall ? "mt-8 flex flex-1 flex-col" : "mt-6")}>
                  <ProductShot
                    shot={card.shot}
                    alt={t(`cards.${card.key}.alt`)}
                    sizes={card.sizes}
                    className={card.shotClassName}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
