"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Activity,
  Timer,
  BarChart3,
  Laptop,
  Cloud,
} from "lucide-react";

const featureItems = [
  { key: "tracking", icon: Activity },
  { key: "focus", icon: Timer },
  { key: "analytics", icon: BarChart3 },
  { key: "crossPlatform", icon: Laptop },
  { key: "cloudSync", icon: Cloud },
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

  const roadmapItems: string[] = t.raw("roadmap.items");

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
          {featureItems.map(({ key, icon: Icon }) => (
            <motion.div key={key} variants={itemVariants}>
              <Card className="h-full card-hover border-border/40">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
          ))}
        </motion.div>

        {/* Roadmap note */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-medium text-muted-foreground mb-3">
            {t("roadmap.title")}
          </p>
          <div className="space-y-1.5">
            {roadmapItems.map((item, i) => (
              <p key={i} className="text-sm text-muted-foreground/70">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
