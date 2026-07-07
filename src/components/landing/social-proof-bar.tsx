"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Lock, MonitorOff, MonitorSmartphone } from "lucide-react";

export function SocialProofBar() {
  const t = useTranslations("socialProof");

  const items = [
    { key: "freeForever", icon: Shield },
    { key: "platforms", icon: MonitorSmartphone },
    { key: "noTracking", icon: MonitorOff },
    { key: "encrypted", icon: Lock },
  ];

  return (
    <section className="py-8 sm:py-10 border-y border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-wrap justify-center gap-6 sm:gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {items.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span>{t(key)}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
