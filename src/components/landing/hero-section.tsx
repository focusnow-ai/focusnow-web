"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { activityColors } from "@/lib/activity-colors";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";

/* ─── App preview: real dashboard screenshot inside our window chrome ─── */

function DashboardPreview({ t }: { t: (key: string) => string }) {
  return (
    <div
      className="rounded-xl border border-border/40 bg-gradient-to-br from-card to-muted/60 elevation-4 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Window chrome */}
      <div className="h-8 glass flex items-center px-4 gap-2 border-b border-border/40">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <span className="ml-3 text-[11px] text-muted-foreground font-medium">
          FocusNow
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse",
              activityColors.focus
            )}
          />
          {t("mockup.dashboard.tracking")}
        </span>
      </div>

      {/* Real screenshot */}
      <div className="relative aspect-[2.2/1]">
        <Image
          src="/screenshots/hero-analytics-v3.webp"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 760px"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

/* ─── Hero section ─── */

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-background dark:from-purple-950/20 dark:to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text + CTA */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800">
              {t("badge")}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-5xl font-bold tracking-tight text-balance dark:text-shadow-sm">
              {t("title")}{" "}
              <span className="text-purple-600 dark:text-purple-400">
                {t("titleHighlight")}
              </span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
              {t("description")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                href="#product"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-base px-8 h-12"
                )}
              >
                {t("secondaryCta")}
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AppleIcon className="h-4 w-4" />
                {t("platformBadge.mac")}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <WindowsIcon className="h-4 w-4" />
                {t("platformBadge.windows")}
              </div>
            </div>
          </motion.div>

          {/* Right: App preview */}
          <motion.div
            className="lg:col-span-7 relative w-full max-w-md lg:max-w-none mx-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DashboardPreview t={t} />
            <div className="absolute -inset-4 -z-10 gradient-glow rounded-2xl blur-2xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
