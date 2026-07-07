"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { activityColors, type ActivityStatus } from "@/lib/activity-colors";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

/* ─── Static mockup data ─── */

const timelineSegments: { status: ActivityStatus; percent: number }[] = [
  { status: "focus", percent: 58 },
  { status: "neutral", percent: 22 },
  { status: "distraction", percent: 12 },
  { status: "idle", percent: 8 },
];

const legendKeys: ActivityStatus[] = [
  "focus",
  "neutral",
  "distraction",
  "idle",
];

const activityRows: {
  time: string;
  app: string;
  duration: string;
  status: ActivityStatus;
}[] = [
  { time: "09:24", app: "VS Code", duration: "42m", status: "focus" },
  { time: "10:06", app: "Chrome — Docs", duration: "18m", status: "neutral" },
  { time: "10:24", app: "YouTube", duration: "6m", status: "distraction" },
];

/* ─── Dashboard mockup ─── */
/* Mini replica of the real desktop Dashboard (metric cards + timeline
   stacked bar + activity list). Swapping in a real screenshot with
   next/image remains optional. */

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
        {/* Metric cards row */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider truncate">
              {t("mockup.dashboard.focusScore")}
            </p>
            <p className="text-xl font-bold text-purple-600 dark:text-purple-400 tabular-nums leading-tight mt-0.5">
              87%
            </p>
            <div className="mt-1.5 h-1 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-purple-500 dark:bg-purple-400"
                initial={{ width: 0 }}
                animate={{ width: "87%" }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider truncate">
              {t("mockup.dashboard.focusTime")}
            </p>
            <p className="text-xl font-bold tabular-nums leading-tight mt-0.5">
              4h 32m
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-muted/30 p-2.5">
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider truncate">
              {t("mockup.dashboard.sessions")}
            </p>
            <p className="text-xl font-bold tabular-nums leading-tight mt-0.5">
              3
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">
              {t("mockup.dashboard.timeline")}
            </p>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 rounded-full text-[9px] font-medium bg-purple-600 text-white">
                {t("mockup.dashboard.tabs.today")}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-medium text-muted-foreground">
                {t("mockup.dashboard.tabs.yesterday")}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-medium text-muted-foreground">
                {t("mockup.dashboard.tabs.week")}
              </span>
            </div>
          </div>

          {/* Stacked activity bar */}
          <div className="h-2.5 rounded-full bg-muted overflow-hidden flex">
            {timelineSegments.map((segment, i) => (
              <motion.div
                key={segment.status}
                className={cn("h-full", activityColors[segment.status])}
                initial={{ width: 0 }}
                animate={{ width: `${segment.percent}%` }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.12,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
            {legendKeys.map((status) => (
              <div key={status} className="flex items-center gap-1.5">
                <span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full",
                    activityColors[status]
                  )}
                />
                <span className="text-[10px] text-muted-foreground">
                  {t(`mockup.dashboard.legend.${status}`)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity list */}
        <div className="space-y-2">
          {activityRows.map((row, i) => (
            <motion.div
              key={row.app}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full shrink-0",
                  activityColors[row.status]
                )}
              />
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {row.time}
              </span>
              <span className="text-xs font-medium flex-1 truncate">
                {row.app}
              </span>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {row.duration}
              </span>
            </motion.div>
          ))}
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
