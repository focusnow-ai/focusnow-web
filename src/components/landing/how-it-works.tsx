"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Coffee, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

/* ─── Animation variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── Mini visual data ─── */

const trackingApps = ["VS Code", "Chrome", "Slack"];
const weekDays = ["M", "T", "W", "T", "F"];
const weekHeights = [65, 88, 52, 95, 74];

/* ─── Step 1: Install Mini ─── */

function InstallMini() {
  return (
    <div className="mt-4 rounded-lg border border-border/40 bg-gradient-to-br from-card to-muted/60 overflow-hidden" aria-hidden="true">
      <div className="h-6 glass flex items-center px-2.5 gap-1.5 border-b border-border/40">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="ml-1.5 text-[9px] text-muted-foreground">FocusNow Installer</span>
      </div>
      <div className="p-3 space-y-2.5">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <AppleIcon className="h-3.5 w-3.5" />
            <span>macOS</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
            <WindowsIcon className="h-3.5 w-3.5" />
            <span>Windows</span>
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-purple-500 dark:bg-purple-400"
            initial={{ width: "0%" }}
            whileInView={{ width: "82%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Step 2: Running Mini ─── */

function RunningMini() {
  return (
    <div className="mt-4 space-y-1.5" aria-hidden="true">
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-muted/50">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <span className="text-[10px] text-muted-foreground font-medium">Running</span>
      </div>
      {trackingApps.map((app, i) => (
        <motion.div
          key={app}
          className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-muted/50"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{
              backgroundColor:
                i === 0 ? "var(--primary)" : i === 1 ? "var(--secondary)" : "var(--accent)",
            }}
          />
          <span className="text-[10px] text-muted-foreground">{app}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Step 3: Insights Mini ─── */

function InsightsMini() {
  return (
    <div className="mt-4 flex items-end gap-1.5 w-full" aria-hidden="true">
      {weekDays.map((day, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full h-12 flex items-end">
            <motion.div
              className="w-full rounded-t bg-purple-500/80 dark:bg-purple-400/50"
              initial={{ height: 0 }}
              whileInView={{ height: `${weekHeights[i]}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: "easeOut" as const }}
            />
          </div>
          <span className="text-[8px] text-muted-foreground font-medium">{day}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── Step data ─── */

const steps = [
  { key: "install", icon: Download, number: "1", Visual: InstallMini },
  { key: "run", icon: Coffee, number: "2", Visual: RunningMini },
  { key: "insights", icon: BarChart3, number: "3", Visual: InsightsMini },
] as const;

/* ─── Connector ─── */

function Connector() {
  return (
    <div className="hidden md:flex items-center justify-center" aria-hidden="true">
      <motion.div
        className="w-full border-t-2 border-dashed border-border/60"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}

/* ─── Main section ─── */

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Steps with connectors */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_2rem_1fr_2rem_1fr] gap-y-6 md:gap-y-0 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map(({ key, icon: Icon, number, Visual }, index) => (
            <motion.div key={key} variants={itemVariants} className="contents">
              {/* Connector before this card (skip first) */}
              {index > 0 && <Connector />}

              {/* Step card */}
              <Card className="border-border/40">
                <CardContent className="p-5 sm:p-6 flex flex-col h-full">
                  {/* Number + Icon + Text */}
                  <div className="flex items-start gap-3 mb-1">
                    <div className="relative shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                        {number}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight">
                        {t(`steps.${key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        {t(`steps.${key}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Mini visual */}
                  <div className="flex-1 flex flex-col justify-end">
                    <Visual />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
