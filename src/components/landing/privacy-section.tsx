"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Lock, MonitorOff, KeyboardOff, UserCheck, ArrowRight } from "lucide-react";

const badges = [
  { key: "encrypted", icon: Lock },
  { key: "noScreenshots", icon: MonitorOff },
  { key: "noKeylogging", icon: KeyboardOff },
  { key: "yourData", icon: UserCheck },
] as const;

export function PrivacySection() {
  const t = useTranslations("privacySection");

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
            {badges.map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/60 bg-card text-sm font-medium"
              >
                <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                {t(`badges.${key}`)}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-1.5 text-sm text-purple-600 dark:text-purple-400 hover:underline"
            >
              {t("link")}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
