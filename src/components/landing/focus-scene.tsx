import { useTranslations } from "next-intl";
import { Headphones, ListChecks, Timer } from "lucide-react";
import { AppWindow } from "@/components/shared/product-shot";
import { ArrowLink } from "@/components/shared/arrow-link";

const facts = [
  { key: "timer", icon: Timer },
  { key: "tasks", icon: ListChecks },
  { key: "music", icon: Headphones },
] as const;

export function FocusScene() {
  const t = useTranslations("focusScene");
  const stations: string[] = t.raw("stations");

  return (
    <section className="relative isolate overflow-hidden bg-scene text-scene-foreground dark:border-y dark:border-scene-border">
      <div className="scene-dark-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-[84rem] items-center gap-14 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8">
        <div className="reveal max-w-md">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-scene-muted text-pretty">{t("description")}</p>

          <ul className="mt-10 space-y-6">
            {facts.map(({ key, icon: Icon }) => (
              <li key={key} className="flex gap-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-scene-border bg-white/5">
                  <Icon className="size-4 text-scene-foreground" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">{t(`facts.${key}.title`)}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-scene-muted">{t(`facts.${key}.body`)}</p>
                  {key === "music" && (
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={t("stationsLabel")}>
                      {stations.map((station) => (
                        <li
                          key={station}
                          className="rounded-full border border-scene-border px-2.5 py-0.5 text-xs text-scene-muted"
                        >
                          {station}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ArrowLink href="/features/focus-sessions" tone="scene" className="mt-10">
            {t("link")}
          </ArrowLink>
        </div>

        <div className="reveal relative">
          <AppWindow
            shot="focusWithTasks"
            alt={t("alt")}
            theme="dark"
            sizes="(min-width: 1344px) 700px, (min-width: 1024px) 54vw, 92vw"
            frameClassName="shadow-[0_40px_120px_-30px_rgb(0_0_0/0.8)]"
          />
        </div>
      </div>
    </section>
  );
}
