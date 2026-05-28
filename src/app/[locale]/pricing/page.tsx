"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export default function PricingPage() {
  const t = useTranslations("pricing");

  const freeFeatures: string[] = t.raw("free.features");
  const proFeatures: string[] = t.raw("pro.features");

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">{t("titleHighlight")}</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full border-primary/30 border-glow elevation-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              <CardContent className="p-8">
                <Badge className="mb-4 bg-primary text-primary-foreground border-0">
                  {t("free.title")}
                </Badge>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{t("free.price")}</span>
                  <span className="text-muted-foreground ml-2">
                    /{t("free.period")}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("free.description")}
                </p>
                <Link
                  href="/download"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full"
                  )}
                >
                  {t("free.cta")}
                </Link>
                <ul className="mt-8 space-y-3">
                  {freeFeatures.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      {feature}
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
            <Card className="h-full">
              <CardContent className="p-8">
                <Badge className="mb-4 bg-muted text-muted-foreground border-border">
                  <Sparkles className="h-3 w-3 mr-1" />
                  {t("pro.title")}
                </Badge>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{t("pro.price")}</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {t("pro.description")}
                </p>
                <div
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "w-full pointer-events-none opacity-60"
                  )}
                >
                  {t("pro.cta")}
                </div>
                <ul className="mt-8 space-y-3">
                  {proFeatures.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
