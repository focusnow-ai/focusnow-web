"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

/* ─── Static mockup data ─── */

const weekDays = ["M", "T", "W", "T", "F"];
const weekHeights = [65, 82, 48, 90, 70];

const topApps = [
  { name: "VS Code", time: "2h 15m", percent: 68, color: "bg-purple-500" },
  { name: "Chrome", time: "1h 42m", percent: 52, color: "bg-blue-500" },
  { name: "Slack", time: "45m", percent: 22, color: "bg-emerald-500" },
];

/* ─── Dashboard mockup ─── */
/* TODO: Replace this component with a real app screenshot / video
   once the desktop app UI is finalized. Use next/image with the
   screenshot file and remove this entire component. */

function DashboardMockup({ t }: { t: (key: string) => string }) {
  return (
    <div
      className="rounded-xl border border-border/40 bg-gradient-to-br from-card to-muted/60 elevation-4 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Window chrome */}
      <div className="h-8 glass flex items-center px-4 gap-2 border-b border-border/40">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-muted-foreground font-medium">
          FocusNow
        </span>
      </div>

      <div className="p-5 sm:p-6 space-y-5">
        {/* Stats row */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
              {t("mockup.dashboard.focusScore")}
            </p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 tabular-nums leading-tight mt-0.5">
              87%
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
              {t("mockup.dashboard.today")}
            </p>
            <p className="text-3xl font-bold tabular-nums leading-tight mt-0.5">
              6h 42m
            </p>
          </div>
        </div>

        {/* Weekly focus bar chart */}
        <div>
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-2.5">
            {t("mockup.dashboard.weeklyFocus")}
          </p>
          <div className="flex items-end gap-2">
            {weekDays.map((day, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div className="w-full h-14 flex items-end">
                  <motion.div
                    className="w-full rounded-t bg-purple-500/80 dark:bg-purple-400/50"
                    initial={{ height: 0 }}
                    animate={{ height: `${weekHeights[i]}%` }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + i * 0.08,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">
                  {day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Top apps */}
        <div>
          <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mb-2">
            {t("mockup.dashboard.topApps")}
          </p>
          <div className="space-y-2">
            {topApps.map((app, i) => (
              <motion.div
                key={app.name}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.1 + i * 0.1 }}
              >
                <span className="text-xs font-medium w-[56px] truncate">
                  {app.name}
                </span>
                <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className={cn("h-full rounded-full", app.color)}
                    initial={{ width: 0 }}
                    animate={{ width: `${app.percent}%` }}
                    transition={{
                      duration: 0.6,
                      delay: 1.1 + i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                </div>
                <span className="text-[11px] text-muted-foreground tabular-nums w-[48px] text-right">
                  {app.time}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Hero section ─── */

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 dark:to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text + CTA */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              {t("badge")}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-5xl font-bold tracking-tight text-balance dark:text-shadow-sm">
              {t("title")}{" "}
              <span className="text-purple-600 dark:text-purple-400">
                {t("titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/download"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "text-base px-8 h-12 press-effect"
                )}
              >
                <Download className="mr-2 h-5 w-5" />
                {t("cta")}
              </Link>
              <a
                href="#how-it-works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-base px-8 h-12"
                )}
              >
                {t("secondaryCta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AppleIcon className="h-4 w-4" />
                {t("platformBadge.mac")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <WindowsIcon className="h-4 w-4" />
                {t("platformBadge.windows")}
              </div>
            </div>
          </motion.div>

          {/* Right: App preview */}
          <motion.div
            className="relative lg:justify-self-end w-full max-w-md lg:max-w-none mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DashboardMockup t={t} />
            <div className="absolute -inset-4 -z-10 gradient-glow rounded-2xl blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
