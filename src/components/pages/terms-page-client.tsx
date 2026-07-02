"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { ScrollText } from "lucide-react";

const sectionKeys = [
  "service",
  "license",
  "accounts",
  "acceptableUse",
  "plans",
  "aiContent",
  "privacyRef",
  "updates",
  "ip",
  "warranty",
  "liability",
  "termination",
  "law",
  "changes",
  "contact",
] as const;

const sectionsWithItems = new Set(["acceptableUse"]);

export function TermsPageClient() {
  const t = useTranslations("termsPage");

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 mx-auto">
            <ScrollText className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("lastUpdated")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t("intro")}
              </p>

              <div className="space-y-8">
                {sectionKeys.map((key, i) => {
                  const hasItems = sectionsWithItems.has(key);
                  const items: string[] = hasItems
                    ? t.raw(`sections.${key}.items`)
                    : [];

                  return (
                    <div key={key}>
                      {i > 0 && <Separator className="mb-8" />}
                      <h2 className="text-lg font-semibold mb-3">
                        {t(`sections.${key}.title`)}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {t(`sections.${key}.content`)}
                      </p>
                      {hasItems && items.length > 0 && (
                        <ul className="mt-4 space-y-2.5">
                          {items.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
