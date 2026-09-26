import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { ArrowLink } from "@/components/shared/arrow-link";
import { comparisons } from "@/lib/comparisons";

export function CompareTeaser() {
  const t = useTranslations("compareTeaser");
  const hub = useTranslations("compareHub");

  return (
    <section className="border-t border-border/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[84rem] gap-12 px-4 sm:px-6 lg:grid-cols-[4fr_7fr] lg:gap-16 lg:px-8">
        <div className="reveal">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">{t("description")}</p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <ArrowLink href="/compare">{t("allLink")}</ArrowLink>
            <ArrowLink href="/alternatives">{t("guideLink")}</ArrowLink>
          </div>
        </div>

        <ul className="reveal divide-y divide-border/70 border-y border-border/70">
          {comparisons.map((item) => (
            <li key={item.key}>
              <Link
                href={item.href}
                className="group grid gap-3 py-7 sm:grid-cols-[12rem_1fr_auto] sm:items-center sm:gap-8"
              >
                <span className="text-2xl font-semibold tracking-tight">
                  <span className="text-muted-foreground">vs </span>
                  {item.name}
                </span>
                <span className="text-[15px] leading-relaxed text-muted-foreground">
                  {hub(`items.${item.key}.summary`)}
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-emphasis/50 group-hover:text-emphasis">
                  <ArrowRight className="size-4" aria-hidden="true" />
                  <span className="sr-only">{hub(`items.${item.key}.cta`)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
