"use client";

import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { FAQItem } from "@/components/landing/faq-section";
import { DownloadCTA } from "@/components/landing/download-cta";

interface ComparisonTemplateProps {
  competitor: "rize";
}

interface TableRow {
  feature: string;
  us: string;
  them: string;
}

/** Renders "yes"/"no" as icons, anything else as text. */
function CellValue({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "yes") {
    return (
      <Check
        className={
          highlight
            ? "h-5 w-5 text-green-500 mx-auto"
            : "h-5 w-5 text-green-500/80 mx-auto"
        }
        aria-label="Yes"
      />
    );
  }
  if (value === "no") {
    return (
      <X className="h-5 w-5 text-muted-foreground/60 mx-auto" aria-label="No" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTemplate({ competitor }: ComparisonTemplateProps) {
  const t = useTranslations(`compare.${competitor}`);
  const shared = useTranslations("compare");

  const chooseUs: string[] = t.raw("chooseUs.items");
  const chooseThem: string[] = t.raw("chooseThem.items");
  const rows: TableRow[] = t.raw("table.rows");
  const sections: { title: string; body: string }[] = t.raw("sections");
  const faqItems: { question: string; answer: string }[] = t.raw("faq.items");

  return (
    <div className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6 px-4 py-1.5 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800">
            {t("badge")}
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-balance">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            {t("description")}
          </p>
        </motion.div>

        {/* Quick decision cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="h-full border-primary/30 border-glow elevation-2">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">
                {t("chooseUs.title")}
              </h2>
              <ul className="space-y-3">
                {chooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">
                {t("chooseThem.title")}
              </h2>
              <ul className="space-y-3">
                {chooseThem.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <Check className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            {t("table.title")}
          </h2>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/40">
                    <th className="py-3.5 px-4 text-sm font-semibold w-2/5">
                      {t("table.featureCol")}
                    </th>
                    <th className="py-3.5 px-4 text-sm font-semibold text-center text-purple-600 dark:text-purple-400">
                      {t("table.usCol")}
                    </th>
                    <th className="py-3.5 px-4 text-sm font-semibold text-center">
                      {t("table.themCol")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-border/40 last:border-0"
                    >
                      <td className="py-3.5 px-4 text-sm font-medium">
                        {row.feature}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <CellValue value={row.us} highlight />
                      </td>
                      <td className="py-3.5 px-4 text-center text-muted-foreground">
                        <CellValue value={row.them} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <p className="mt-3 text-xs text-muted-foreground text-center">
            {shared("verified")}
          </p>
        </motion.div>

        {/* Deep-dive sections */}
        <motion.div
          className="max-w-3xl mx-auto mb-20 space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5 }}
        >
          {sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-xl sm:text-2xl font-bold mb-3">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            {t("faq.title")}
          </h2>
          <div>
            {faqItems.map((item, i) => (
              <FAQItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </motion.div>
      </div>

      <DownloadCTA />
    </div>
  );
}
