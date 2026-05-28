"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  BarChart3,
  Timer,
  Settings,
} from "lucide-react";

const tabs = [
  { key: "dashboard", icon: LayoutDashboard },
  { key: "analytics", icon: BarChart3 },
  { key: "sessions", icon: Timer },
  { key: "settings", icon: Settings },
];

export function ScreenshotShowcase() {
  const t = useTranslations("screenshots");
  const [activeTab, setActiveTab] = useState("dashboard");

  const contentTitle = t(`content.${activeTab}.title`);
  const contentItems: string[] = t.raw(`content.${activeTab}.items`);

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex flex-col items-center"
        >
          <TabsList className="mb-8 h-auto flex-wrap">
            {tabs.map(({ key, icon: Icon }) => (
              <TabsTrigger
                key={key}
                value={key}
                className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
                {t(`tabs.${key}`)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Screenshot area */}
        <div className="relative mx-auto max-w-4xl">
          <div className="sm:aspect-[16/10] rounded-xl border border-border/40 bg-card elevation-3 overflow-hidden">
            <div className="h-8 glass flex items-center px-4 gap-2 border-b border-border/40">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-muted-foreground">
                FocusNow — {t(`tabs.${activeTab}`)}
              </span>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="p-4 sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {contentTitle}
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {contentItems.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-muted/50"
                      >
                        <div
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{
                            backgroundColor:
                              i === 0
                                ? "var(--primary)"
                                : i === 1
                                ? "var(--secondary)"
                                : "var(--accent)",
                          }}
                        />
                        <span className="text-xs sm:text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Glow */}
          <div className="absolute -inset-4 -z-10 gradient-glow rounded-2xl blur-2xl" />
        </div>
      </div>
    </section>
  );
}
