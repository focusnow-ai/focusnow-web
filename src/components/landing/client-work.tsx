import { useTranslations } from "next-intl";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AppWindow } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";
import { EarlyAccessBadge } from "@/components/shared/early-access-badge";

function Connector() {
  return (
    <li role="presentation" className="flex items-center justify-center text-emphasis/70" aria-hidden="true">
      <ArrowRight className="hidden size-5 lg:block" />
      <ArrowDown className="size-5 lg:hidden" />
    </li>
  );
}

function Moment({
  label,
  title,
  body,
  children,
}: {
  label: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <li className="reveal flex flex-col">
      <p className="font-mono text-xs text-emphasis">{label}</p>
      <h3 className="mt-2 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{body}</p>
      <div className="mt-6 flex flex-1 flex-col justify-end gap-3">{children}</div>
    </li>
  );
}

export function ClientWork() {
  const t = useTranslations("clientWork");

  return (
    <section className="bg-wash py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="reveal max-w-2xl">
          <EarlyAccessBadge />
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">{t("description")}</p>
        </div>

        <ol className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:gap-6">
          <Moment label={t("moments.review.label")} title={t("moments.review.title")} body={t("moments.review.body")}>
            <AppWindow
              shot="activitiesFocus"
              alt={t("moments.review.alt")}
              sizes="(min-width: 1344px) 320px, (min-width: 1024px) 24vw, 80vw"
              compact
              frameClassName="mx-auto w-full max-w-xs shadow-detail lg:max-w-none"
            />
          </Moment>
          <Connector />
          <Moment label={t("moments.assign.label")} title={t("moments.assign.title")} body={t("moments.assign.body")}>
            <AppWindow
              shot="timecardTimer"
              alt={t("moments.assign.timerAlt")}
              sizes="(min-width: 1344px) 440px, (min-width: 1024px) 32vw, 92vw"
              compact
              frameClassName="shadow-detail"
            />
            <AppWindow
              shot="timecardRecords"
              alt={t("moments.assign.recordsAlt")}
              sizes="(min-width: 1344px) 440px, (min-width: 1024px) 32vw, 92vw"
              compact
              frameClassName="shadow-detail"
            />
          </Moment>
          <Connector />
          <Moment label={t("moments.statement.label")} title={t("moments.statement.title")} body={t("moments.statement.body")}>
            <AppWindow
              shot="billingCreate"
              alt={t("moments.statement.alt")}
              sizes="(min-width: 1344px) 320px, (min-width: 1024px) 24vw, 80vw"
              compact
              frameClassName="mx-auto w-full max-w-xs shadow-detail lg:max-w-none"
            />
          </Moment>
        </ol>

        <div className="mt-14 flex flex-col gap-4 border-t border-border/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{t("note")}</p>
          <ArrowLink href="/features/timecards" className="shrink-0">
            {t("link")}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
