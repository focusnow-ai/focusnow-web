"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { GitCommit, Check } from "lucide-react";

interface ChangelogVersion {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

export default function ChangelogPage() {
  const t = useTranslations("changelog");

  const versions: ChangelogVersion[] = t.raw("versions");

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {versions.map((version, i) => (
            <motion.div
              key={version.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <GitCommit className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-semibold">{version.title}</h2>
                        <Badge variant="secondary">v{version.version}</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {version.date}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-[3.25rem]">
                    {version.changes.map((change, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
