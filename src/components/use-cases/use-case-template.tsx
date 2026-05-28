"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download, Check, AlertCircle } from "lucide-react";

interface UseCaseTemplateProps {
  segment: "remoteWorkers" | "students" | "freelancers" | "developers";
}

export function UseCaseTemplate({ segment }: UseCaseTemplateProps) {
  const t = useTranslations(`useCases.${segment}`);

  const painPoints: string[] = t.raw("painPoints.items");
  const solutions: string[] = t.raw("solution.items");

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge
            className="mb-6 px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
          >
            {t("badge")}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
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
        </motion.div>

        {/* Pain points + Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                  </div>
                  {t("painPoints.title")}
                </h2>
                <ul className="space-y-3">
                  {painPoints.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-muted-foreground/60 mt-0.5 shrink-0">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-green-200 dark:border-green-800/40">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  {t("solution.title")}
                </h2>
                <ul className="space-y-3">
                  {solutions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
}
