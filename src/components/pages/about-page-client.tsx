"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Target, Code2 } from "lucide-react";

/* ─── Animation variants ─── */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function AboutPageClient() {
  const t = useTranslations("about");

  const techItems: string[] = t.raw("tech.items");

  return (
    <div>
      {/* Hero header with gradient background */}
      <div className="bg-gradient-to-b from-purple-50/50 to-transparent dark:from-purple-950/10 dark:to-transparent">
        <div className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-2xl mx-auto"
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
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Story + Mission — asymmetric grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-4xl mx-auto mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Story card — wider */}
            <motion.div variants={itemVariants} className="lg:col-span-7">
              <Card className="h-full border-border/40">
                <CardContent className="p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <BookOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-lg font-semibold">{t("story.title")}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("story.content")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission card — narrower */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <Card className="h-full border-border/40">
                <CardContent className="p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                      <Target className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-lg font-semibold">{t("mission.title")}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t("mission.content")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Tech Stack — window chrome mockup */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-border/40 overflow-hidden">
              <div className="h-7 glass flex items-center px-3 gap-1.5 border-b border-border/40">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <div className="w-2 h-2 rounded-full bg-yellow-400" />
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="ml-2 text-[10px] text-muted-foreground">
                  {t("tech.title")}
                </span>
              </div>

              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                    <Code2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-lg font-semibold">{t("tech.title")}</h2>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {techItems.map((item: string) => (
                    <motion.div
                      key={item}
                      variants={itemVariants}
                      className="flex items-center px-3 py-1.5 rounded-md bg-muted/50 text-xs font-medium text-muted-foreground border border-border/40"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
