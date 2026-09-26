import { useTranslations } from "next-intl";
import { Check, CloudOff, X } from "lucide-react";
import { ArrowLink } from "@/components/shared/arrow-link";
import { EarlyAccessBadge } from "@/components/shared/early-access-badge";

export function TrustOffer() {
  const t = useTranslations("trustOffer");
  const recorded: string[] = t.raw("trust.recorded.items");
  const never: string[] = t.raw("trust.never.items");

  return (
    <section className="pb-24 sm:pb-32">
      <div className="mx-auto grid max-w-[84rem] gap-6 px-4 sm:px-6 lg:grid-cols-[7fr_5fr] lg:px-8">
        <div className="reveal rounded-3xl border border-border/70 bg-card p-7 sm:p-10">
          <h2 className="max-w-lg text-3xl font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
            {t("trust.title")}
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{t("trust.recorded.title")}</h3>
              <ul className="mt-3 space-y-2.5">
                {recorded.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px]">
                    <Check className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">{t("trust.never.title")}</h3>
              <ul className="mt-3 space-y-2.5">
                {never.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px]">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex gap-3 rounded-2xl bg-muted/70 p-4 text-[15px] leading-relaxed">
            <CloudOff className="mt-0.5 size-5 shrink-0 text-emphasis" aria-hidden="true" />
            <p className="text-foreground/80">{t("trust.storage")}</p>
          </div>
          <ArrowLink href="/privacy" className="mt-6">
            {t("trust.link")}
          </ArrowLink>
        </div>

        <div className="reveal flex flex-col gap-6">
          <div className="flex-1 rounded-3xl border border-border/70 bg-wash p-7 sm:p-8">
            <p className="font-mono text-3xl font-medium tracking-tight">{t("offer.free.price")}</p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{t("offer.free.title")}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t("offer.free.body")}</p>
          </div>
          <div className="flex-1 rounded-3xl border border-border/70 bg-card p-7 sm:p-8">
            <EarlyAccessBadge />
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{t("offer.clients.title")}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t("offer.clients.body")}</p>
            <ArrowLink href="/pricing" className="mt-5">
              {t("offer.link")}
            </ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
