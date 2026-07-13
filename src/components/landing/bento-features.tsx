"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Activity,
  Timer,
  Sparkles,
  ShieldCheck,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  { key: "tracking", icon: Activity, tab: "dashboard" },
  { key: "sessions", icon: Timer, tab: "sessions" },
  { key: "report", icon: Sparkles, tab: "report" },
  { key: "privacy", icon: ShieldCheck, tab: "categories" },
] as const;

function goToShowcaseTab(tab: string) {
  window.dispatchEvent(new CustomEvent("showcase-tab", { detail: tab }));
  document
    .getElementById("product")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function BentoFeatures() {
  const t = useTranslations("bentoFeatures");

  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center text-balance">
          {t("title")}{" "}
          <span className="text-purple-600 dark:text-purple-400">
            {t("titleHighlight")}
          </span>
        </h2>

        {/* Benefit cards — click scrolls up to the matching real screenshot */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(({ key, icon: Icon, tab }, i) => (
            <motion.button
              key={key}
              type="button"
              onClick={() => goToShowcaseTab(tab)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={cn(
                "group text-left rounded-xl border border-border/40 bg-card p-6",
                "hover:border-purple-400/50 hover:elevation-2 transition-all cursor-pointer"
              )}
            >
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(`cards.${key}.description`)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {t("seeIt")}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </motion.button>
          ))}
        </div>

        {/* Also included + roadmap */}
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border/40 bg-card p-6">
            <h3 className="font-semibold">{t("included.title")}</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 mt-0.5 shrink-0 text-purple-600 dark:text-purple-400" />
                  {t(`included.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-card p-6">
            <h3 className="font-semibold">{t("roadmap.title")}</h3>
            <ul className="mt-4 space-y-2.5">
              {[0, 1].map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                  {t(`roadmap.items.${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
