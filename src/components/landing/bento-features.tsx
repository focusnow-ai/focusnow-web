"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { activityColors } from "@/lib/activity-colors";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  AppWindow,
  Timer,
  BarChart3,
  Shield,
  Laptop,
  Lock,
  MonitorOff,
  KeyboardOff,
  UserCheck,
  LayoutDashboard,
  Settings,
  Cloud,
  ArrowRight,
} from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

/* ─── Animation variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── Screenshot tabs data ─── */

const screenshotTabs = [
  { key: "dashboard", icon: LayoutDashboard },
  { key: "analytics", icon: BarChart3 },
  { key: "activities", icon: AppWindow },
  { key: "sessions", icon: Timer },
  { key: "settings", icon: Settings },
] as const;

/* Activity-status dot colors for tabs that show real activity semantics
   (Focus = green, Neutral = blue, Distraction = red). Other tabs fall
   back to theme accent colors. */
const tabDotColors: Record<string, [string, string, string]> = {
  dashboard: [
    activityColors.focus,
    activityColors.focus,
    activityColors.neutral,
  ],
  activities: [
    activityColors.focus,
    activityColors.distraction,
    activityColors.neutral,
  ],
  sessions: [
    activityColors.focus,
    activityColors.focus,
    activityColors.neutral,
  ],
};

/* ─── Privacy badges data ─── */

const privacyBadges = [
  { key: "encrypted", icon: Lock },
  { key: "noScreenshots", icon: MonitorOff },
  { key: "noKeylogging", icon: KeyboardOff },
  { key: "yourData", icon: UserCheck },
] as const;

/* ─── Bar chart data ─── */

const weekDays = ["M", "T", "W", "T", "F"];
const weekHeights = [72, 85, 56, 92, 78];

/* ─── Hero Card (2×2) ─── */

function HeroCard() {
  const t = useTranslations("bentoFeatures");
  const tScreenshots = useTranslations("screenshots");
  const [activeTab, setActiveTab] = useState("dashboard");

  const contentTitle = tScreenshots(`content.${activeTab}.title`);
  const contentItems: string[] = tScreenshots.raw(`content.${activeTab}.items`);

  return (
    <Card className="border-border/40 overflow-hidden h-full">
      <CardContent className="p-5 sm:p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <Activity className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{t("hero.title")}</h3>
            <p className="text-sm text-muted-foreground">{t("hero.description")}</p>
          </div>
        </div>

        {/* Embedded tab interface */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col"
        >
          <TabsList className="mb-3 h-auto hidden sm:flex flex-wrap">
            {screenshotTabs.map(({ key, icon: Icon }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="gap-1.5 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="h-3.5 w-3.5" />
                {tScreenshots(`tabs.${key}`)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Window mockup */}
        <div className="flex-1 rounded-lg border border-border/40 bg-gradient-to-br from-card to-muted/60 elevation-3 overflow-hidden flex flex-col">
          <div className="h-7 glass flex items-center px-3 gap-1.5 border-b border-border/40">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="ml-2 text-[10px] text-muted-foreground">
              FocusNow — {tScreenshots(`tabs.${activeTab}`)}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25 }}
              className="p-3 sm:p-4"
            >
              <h4 className="text-sm font-semibold mb-2">{contentTitle}</h4>
              <div className="space-y-1.5">
                {contentItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-2 rounded-md bg-muted/50"
                  >
                    {tabDotColors[activeTab] ? (
                      <div
                        className={cn(
                          "w-1.5 h-1.5 rounded-full shrink-0",
                          tabDotColors[activeTab][i] ?? tabDotColors[activeTab][2]
                        )}
                      />
                    ) : (
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          backgroundColor:
                            i === 0
                              ? "var(--primary)"
                              : i === 1
                              ? "var(--secondary)"
                              : "var(--accent)",
                        }}
                      />
                    )}
                    <span className="text-xs">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Timer Card (1×1) ─── */

function TimerCard() {
  const t = useTranslations("bentoFeatures");
  const r = 38;
  const circumference = 2 * Math.PI * r;

  return (
    <Card className="border-border/40 h-full">
      <CardContent className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <Timer className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold">{t("timer.title")}</h3>
            <p className="text-xs text-muted-foreground">{t("timer.description")}</p>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col items-center justify-center gap-3"
          aria-hidden="true"
        >
          <div className="relative w-24 h-24">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50" cy="50" r={r}
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                className="text-muted"
              />
              <motion.circle
                cx="50" cy="50" r={r}
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                className="text-purple-500 dark:text-purple-400"
                stroke="currentColor"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: circumference * (1 - 0.73) }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold tabular-nums">18:24</span>
              <span className="text-[9px] text-muted-foreground">remaining</span>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
              {t("timer.presets.pomodoro")}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300">
              {t("timer.presets.deepWork")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Analytics Card (1×1) ─── */

function AnalyticsCard() {
  const t = useTranslations("bentoFeatures");

  return (
    <Card className="border-border/40 h-full">
      <CardContent className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <BarChart3 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold">{t("analytics.title")}</h3>
            <p className="text-xs text-muted-foreground">{t("analytics.description")}</p>
          </div>
        </div>

        <div className="flex-1 flex items-end" aria-hidden="true">
          <div className="flex items-end gap-1.5 w-full">
            {weekDays.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full h-14 flex items-end">
                  <motion.div
                    className="w-full rounded-t bg-purple-500/80 dark:bg-purple-400/50"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${weekHeights[i]}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                  />
                </div>
                <span className="text-[9px] text-muted-foreground font-medium">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Privacy Card (2×1) ─── */

function PrivacyCard() {
  const t = useTranslations("bentoFeatures");
  const tPrivacy = useTranslations("privacySection");

  return (
    <Card className="border-border/40 h-full">
      <CardContent className="p-5 sm:p-6 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold">{t("privacy.title")}</h3>
            <p className="text-xs text-muted-foreground">{t("privacy.description")}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-wrap gap-2 content-start">
          {privacyBadges.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/60 bg-muted/50 text-xs font-medium"
            >
              <Icon className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              {tPrivacy(`badges.${key}`)}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-3">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:underline"
          >
            {tPrivacy("link")}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Platform Card (1×1) ─── */

function PlatformCard() {
  const t = useTranslations("bentoFeatures");

  return (
    <Card className="border-border/40 h-full">
      <CardContent className="p-5 sm:p-6 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
            <Laptop className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold">{t("platform.title")}</h3>
            <p className="text-xs text-muted-foreground">{t("platform.description")}</p>
          </div>
        </div>

        <div className="flex-1 flex items-end">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <AppleIcon className="h-4 w-4" />
              <span>macOS</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <WindowsIcon className="h-4 w-4" />
              <span>Windows</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Cloud className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>Sync</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/* ─── Main section ─── */

export function BentoFeatures() {
  const t = useTranslations("bentoFeatures");
  const includedItems: string[] = t.raw("included.items");
  const roadmapItems: string[] = t.raw("roadmap.items");

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {t("titleHighlight")}
            </span>
          </h2>
        </div>

        {/* Bento grid */}
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={cardVariants} style={{ gridArea: "hero" }}>
            <HeroCard />
          </motion.div>
          <motion.div variants={cardVariants} style={{ gridArea: "timer" }}>
            <TimerCard />
          </motion.div>
          <motion.div variants={cardVariants} style={{ gridArea: "analytics" }}>
            <AnalyticsCard />
          </motion.div>
          <motion.div variants={cardVariants} style={{ gridArea: "privacy" }}>
            <PrivacyCard />
          </motion.div>
          <motion.div variants={cardVariants} style={{ gridArea: "platform" }}>
            <PlatformCard />
          </motion.div>
        </motion.div>

        {/* Also included chips + one-line roadmap note */}
        <motion.div
          className="mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-4">
            {t("included.title")}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {includedItems.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-full border border-border/60 bg-muted/50 text-xs font-medium text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground/70 text-balance">
            <span className="font-medium text-muted-foreground">
              {t("roadmap.title")}:
            </span>{" "}
            {roadmapItems.join(" · ")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
