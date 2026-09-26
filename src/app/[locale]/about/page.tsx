import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { AppWindow } from "@/components/shared/product-shot";
import { DownloadCTA } from "@/components/landing/download-cta";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return pageMetadata({ pathname: "/about", locale, title: t("title"), description: t("description") });
}

const pillars = ["simplicity", "privacy", "transparency"] as const;

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const home = await getTranslations({ locale, namespace: "hero.scene" });
  const linkClass = "font-medium text-emphasis underline-offset-4 hover:underline";

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto grid max-w-[84rem] items-center gap-12 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:px-8">
          <div className="enter">
            <p className="text-sm font-medium text-emphasis">{t("category")}</p>
            <h1 className="mt-4 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-balance sm:text-6xl">
              {t("mission")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">{t("description")}</p>
          </div>
          <div className="enter-scene">
            <AppWindow
              shot="focusTimer"
              alt={home("mainAlt")}
              sizes="(min-width: 1344px) 540px, (min-width: 1024px) 40vw, 92vw"
              priority
              frameClassName="shadow-window"
            />
          </div>
        </div>
      </section>

      <section className="bg-scene py-20 text-scene-foreground sm:py-28 dark:border-y dark:border-scene-border">
        <div className="reveal mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-sm font-medium text-scene-muted">{t("founder.title")}</h2>
          <p className="mt-6 text-xl leading-relaxed sm:text-2xl sm:leading-[1.55] text-pretty">
            {t.rich("founder.content", {
              mail: (chunks) => (
                <a href="mailto:info@focusnow.ai" className="underline decoration-scene-muted underline-offset-4 hover:decoration-scene-foreground">
                  {chunks}
                </a>
              ),
            })}
          </p>
          <p className="mt-8 font-medium">{t("founder.signature")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {pillars.map((key) => (
              <div key={key} className="reveal border-t-2 border-emphasis/50 pt-5">
                <h2 className="text-lg font-semibold tracking-tight">{t(`pillars.${key}.title`)}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{t(`pillars.${key}.content`)}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-[15px] text-muted-foreground">
            {t("proof.lead")}{" "}
            <Link href="/privacy" className={linkClass}>
              {t("proof.privacyLink")}
            </Link>{" "}
            {t("proof.middle")}{" "}
            <Link href="/changelog" className={linkClass}>
              {t("proof.changelogLink")}
            </Link>
            .
          </p>
        </div>
      </section>

      <DownloadCTA />
    </>
  );
}
