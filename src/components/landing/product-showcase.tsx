"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const TABS = [
  "dashboard",
  "report",
  "analytics",
  "activities",
  "sessions",
  "categories",
] as const;

type TabKey = (typeof TABS)[number];

export function ProductShowcase() {
  const t = useTranslations("showcase");
  const [active, setActive] = useState<TabKey>("dashboard");

  return (
    <section id="product" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            {t("description")}
          </p>
        </div>

        {/* Tabs */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label={t("title")}
        >
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={active === tab}
              onClick={() => setActive(tab)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                active === tab
                  ? "bg-purple-600 text-white"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/70"
              )}
            >
              {t(`tabs.${tab}.label`)}
            </button>
          ))}
        </div>

        {/* Screenshot frame */}
        <div className="mt-8 relative mx-auto max-w-5xl">
          <div className="rounded-xl border border-border/40 bg-gradient-to-br from-card to-muted/60 elevation-4 overflow-hidden">
            {/* Window chrome */}
            <div className="h-8 glass flex items-center px-4 gap-2 border-b border-border/40">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-[11px] text-muted-foreground font-medium">
                FocusNow
              </span>
            </div>
            <div className="relative aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={`/screenshots/${active}.webp`}
                    alt={t(`tabs.${active}.caption`)}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                    priority={active === "dashboard"}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 gradient-glow rounded-2xl blur-2xl opacity-50" />
        </div>

        {/* Caption */}
        <p className="mt-6 text-center text-muted-foreground max-w-2xl mx-auto text-balance">
          {t(`tabs.${active}.caption`)}
        </p>
      </div>
    </section>
  );
}
