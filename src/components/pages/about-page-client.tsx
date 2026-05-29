"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Shield, Zap, Eye } from "lucide-react";

/* ─── Animation variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── Pillar data ─── */

const pillars = [
  { key: "privacy", icon: Shield },
  { key: "simplicity", icon: Zap },
  { key: "transparency", icon: Eye },
] as const;

export function AboutPageClient() {
  const t = useTranslations("about");
  const techItems: string[] = t.raw("tech.items");

  return (
    <div>
      {/* Hero header */}
      <div className="bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/10 dark:to-transparent">
        <div className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {t("title")}{" "}
                <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl font-semibold text-foreground/80">
                {t("mission")}
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {pillars.map(({ key, icon: Icon }) => (
              <motion.div key={key} variants={itemVariants} className="text-center md:text-left">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto md:mx-0 mb-4">
                  <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-lg font-semibold mb-2">
                  {t(`pillars.${key}.title`)}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`pillars.${key}.content`)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech stack — simple badges */}
          <motion.div
            className="mt-16 sm:mt-20 text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-sm font-medium text-muted-foreground mb-4">
              {t("tech.title")}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {techItems.map((item: string) => (
                <Badge key={item} variant="outline" className="text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
