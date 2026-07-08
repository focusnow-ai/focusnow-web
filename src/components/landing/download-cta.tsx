"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function DownloadCTA() {
  const t = useTranslations("downloadCta");

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-50/50 to-background dark:via-purple-950/20" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-8">
            <Link
              href="/download"
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-base px-8 h-12 press-effect"
              )}
            >
              <Download className="mr-2 h-5 w-5" />
              {t("cta")}
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
