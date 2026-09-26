"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, ShieldCheck, UserRound, Laptop } from "lucide-react";
import { AppWindow } from "@/components/shared/product-shot";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";
import {
  type DownloadLink,
  type Platform,
  detectPlatform,
  getPrimaryDownload,
  getWindowsStoreLink,
} from "@/lib/downloads";
import { trackEvent } from "@/lib/analytics";

function trackDownload(link: DownloadLink) {
  trackEvent("download_click", {
    platform: link.platform,
    file_name: link.fileName,
  });
}

const platformIcons: Record<string, React.ReactNode> = {
  "mac-arm": <AppleIcon className="size-6" />,
  "mac-intel": <AppleIcon className="size-6" />,
  windows: <WindowsIcon className="size-5" />,
};

const afterInstallSteps = [
  { key: "permissions", icon: ShieldCheck },
  { key: "run", icon: UserRound },
  { key: "dashboard", icon: Laptop },
] as const;

// Hydration-safe platform detection: server renders the default,
// the client snapshot takes over after hydration.
const emptySubscribe = () => () => {};
const getServerPlatform = (): Platform => "mac-arm";

export function DownloadPageClient({ links }: { links: DownloadLink[] }) {
  const t = useTranslations("download");
  const platform = useSyncExternalStore<Platform>(
    emptySubscribe,
    detectPlatform,
    getServerPlatform
  );

  const primary = getPrimaryDownload(links, platform);

  /* Windows ships via the Microsoft Store: deep link on Windows machines,
     web listing everywhere else (the deep link is a dead click there). */
  const isStore = (link: DownloadLink) => link.platform === "windows";
  const hrefFor = (link: DownloadLink) =>
    isStore(link) ? getWindowsStoreLink(platform) : link.url;
  /* Web listing opens in a new tab (visitor keeps the site); the
     ms-windows-store:// deep link must stay target-less — _blank would
     leave a blank tab behind while the OS opens the Store app. */
  const targetFor = (link: DownloadLink) =>
    isStore(link) && platform !== "windows"
      ? { target: "_blank", rel: "noopener" }
      : {};
  const isAvailable = (link: DownloadLink) => isStore(link) || link.available;
  const track = (link: DownloadLink) =>
    trackDownload(
      isStore(link) ? { ...link, fileName: "microsoft-store" } : link
    );

  return (
    <section className="relative isolate overflow-hidden">
      <div className="scene-light pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="mx-auto grid max-w-[84rem] items-start gap-12 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:px-8">
        <div className="enter">
          <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground sm:text-xl">{t("description")}</p>

          <div className="mt-10 rounded-3xl border border-emphasis/30 bg-card p-6 shadow-detail sm:p-8">
            <p className="text-sm font-medium text-emphasis">{t("detected")}</p>
            <div className="mt-4 flex items-center gap-3">
              {platformIcons[primary.platform]}
              <div>
                <h2 className="text-xl font-semibold">{t(`platforms.${primary.platform}`)}</h2>
                {primary.arch && <p className="text-sm text-muted-foreground">{primary.arch}</p>}
              </div>
            </div>
            {isAvailable(primary) ? (
              <a
                href={hrefFor(primary)}
                {...targetFor(primary)}
                onClick={() => track(primary)}
                className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 w-full text-base press-effect")}
              >
                <Download className="size-5" aria-hidden="true" />
                {isStore(primary)
                  ? t("storeFor")
                  : t("downloadFor", { platform: t(`platforms.${primary.platform}`) })}
              </a>
            ) : (
              <div className={cn(buttonVariants({ size: "lg", variant: "outline" }), "pointer-events-none mt-6 h-12 w-full opacity-60")}>
                {t("comingSoon")}
              </div>
            )}
          </div>

          <h2 className="mt-12 text-sm font-medium text-muted-foreground">{t("otherPlatforms")}</h2>
          <ul className="mt-3 divide-y divide-border/70 rounded-2xl border border-border/80 bg-background/70">
            {links.map((link) => (
              <li key={link.platform} className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="flex items-center gap-3">
                  {platformIcons[link.platform]}
                  <div>
                    <p className="font-medium">{t(`platforms.${link.platform}`)}</p>
                    {link.arch && <p className="text-xs text-muted-foreground">{link.arch}</p>}
                  </div>
                </div>
                {isAvailable(link) ? (
                  <a
                    href={hrefFor(link)}
                    {...targetFor(link)}
                    onClick={() => track(link)}
                    className={cn(buttonVariants({ variant: "outline", size: "lg" }), "shrink-0")}
                  >
                    <Download className="size-4" aria-hidden="true" />
                    {isStore(link) ? t("microsoftStore") : "DMG"}
                  </a>
                ) : (
                  <Badge variant="outline">{t("comingSoon")}</Badge>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">{t("noLinux")}</p>
        </div>

        <div className="enter-scene space-y-10 lg:pt-4">
          <AppWindow
            shot="focusTimer"
            alt={t("demoAlt")}
            sizes="(min-width: 1344px) 540px, (min-width: 1024px) 40vw, 92vw"
            priority
            frameClassName="shadow-window"
          />

          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{t("afterInstall.title")}</h2>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {afterInstallSteps.map(({ key, icon: Icon }) => (
                <li key={key} className="relative">
                  <span className="absolute -left-[2.35rem] top-0 flex size-7 items-center justify-center rounded-full border border-border bg-background">
                    <Icon className="size-3.5 text-emphasis" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold">{t(`afterInstall.steps.${key}.title`)}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
                    {t(`afterInstall.steps.${key}.description`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-sm font-medium text-muted-foreground">{t("requirements.title")}</h2>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {(["mac", "windows"] as const).map((os) => (
                <div key={os} className="rounded-2xl border border-border/80 p-5">
                  <h3 className="flex items-center gap-2 font-semibold">
                    {os === "mac" ? <AppleIcon className="size-4" /> : <WindowsIcon className="size-4" />}
                    {t(`requirements.${os}.title`)}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {(t.raw(`requirements.${os}.items`) as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
