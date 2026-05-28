"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 dark:to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge
            className="mb-6 px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
          >
            {t("badge")}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl text-balance dark:text-shadow-sm">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl text-balance">
            {t("description")}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
            <a
              href="#features"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "text-base px-8 h-12"
              )}
            >
              {t("secondaryCta")}
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <AppleIcon className="h-4 w-4" />
              {t("platformBadge.mac")}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <WindowsIcon className="h-4 w-4" />
              {t("platformBadge.windows")}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            {t("aiTeaser")}
          </div>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 relative mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-[16/10] rounded-xl border border-border/40 bg-gradient-to-br from-card to-muted elevation-4 overflow-hidden">
            <div className="h-8 glass flex items-center px-4 gap-2 border-b border-border/40">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-4 text-xs text-muted-foreground">FocusNow</span>
            </div>
            <div className="p-8 flex items-center justify-center h-[calc(100%-2rem)]">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary flex items-center justify-center mb-4">
                  <span className="text-2xl text-white font-bold">F</span>
                </div>
                <p className="text-muted-foreground text-sm">App Screenshot Preview</p>
              </div>
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 gradient-glow rounded-2xl blur-2xl opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
