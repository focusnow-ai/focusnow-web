"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function SocialProofBar() {
  const t = useTranslations("socialProof");

  const stats = [1, 2, 3, 4] as const;

  return (
    <section className="py-8 sm:py-10 border-y border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-600 dark:text-purple-400">
                {t(`v${i}`)}
              </span>
              <span className="text-sm text-muted-foreground">
                {t(`l${i}`)}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
