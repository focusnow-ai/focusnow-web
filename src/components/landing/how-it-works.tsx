"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

/* ─── Animation variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── Step data ─── */

const steps = [
  { key: "install", number: "01" },
  { key: "run", number: "02" },
  { key: "insights", number: "03" },
] as const;

/* ─── Main section ─── */

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>
        </div>

        {/* Steps — typography-driven, minimal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map(({ key, number }) => (
            <motion.div key={key} variants={itemVariants} className="text-center md:text-left">
              <span className="text-5xl sm:text-6xl font-extrabold text-purple-600/15 dark:text-purple-400/15 tabular-nums select-none">
                {number}
              </span>
              <h3 className="font-semibold text-lg mt-2">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                {t(`steps.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
