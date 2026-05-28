"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Activity,
  Timer,
  Shield,
  BarChart3,
  Laptop,
  BellRing,
  Sparkles,
} from "lucide-react";

const featureItems = [
  { key: "tracking", icon: Activity, color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/30" },
  { key: "focus", icon: Timer, color: "text-pink-600 dark:text-pink-400", bg: "bg-pink-100 dark:bg-pink-900/30" },
  { key: "privacy", icon: Shield, color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-100 dark:bg-teal-900/30" },
  { key: "analytics", icon: BarChart3, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { key: "crossPlatform", icon: Laptop, color: "text-green-600 dark:text-green-400", bg: "bg-green-100 dark:bg-green-900/30" },
  { key: "distraction", icon: BellRing, color: "text-yellow-600 dark:text-yellow-400", bg: "bg-yellow-100 dark:bg-yellow-900/30", comingSoon: true },
  { key: "ai", icon: Sparkles, color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/30", comingSoon: true },
] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </div>

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featureItems.map(({ key, icon: Icon, color, bg, ...rest }) => {
            const isComingSoon = "comingSoon" in rest;

            return (
              <motion.div key={key} variants={itemVariants}>
                <Card className={`h-full ${isComingSoon ? "border-dashed border-border/60 opacity-80" : "card-hover border-glow border-border/40"}`}>
                  <CardContent className="p-6 relative">
                    {isComingSoon && (
                      <Badge className="absolute top-4 right-4 bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 text-[10px] font-semibold">
                        {t("comingSoon")}
                      </Badge>
                    )}
                    <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 ${color} ${isComingSoon ? "animate-pulse" : ""}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {t(`items.${key}.title`)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(`items.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
