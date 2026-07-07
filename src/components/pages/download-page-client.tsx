"use client";

import { useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download, CheckCircle2, ShieldCheck, Monitor, BarChart3, ChevronDown } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";
import {
  type DownloadLink,
  type Platform,
  detectPlatform,
  getPrimaryDownload,
} from "@/lib/downloads";

const platformIcons: Record<string, React.ReactNode> = {
  "mac-arm": <AppleIcon className="h-6 w-6" />,
  "mac-intel": <AppleIcon className="h-6 w-6" />,
  windows: <WindowsIcon className="h-6 w-6" />,
};

const afterInstallSteps = [
  { key: "permissions", icon: ShieldCheck },
  { key: "run", icon: Monitor },
  { key: "dashboard", icon: BarChart3 },
] as const;

// Hydration-safe platform detection: server renders the default,
// the client snapshot takes over after hydration.
const emptySubscribe = () => () => {};
const getServerPlatform = (): Platform => "mac-arm";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-medium text-sm">{question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground shrink-0 ml-4 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}

export function DownloadPageClient({ links }: { links: DownloadLink[] }) {
  const t = useTranslations("download");
  const platform = useSyncExternalStore<Platform>(
    emptySubscribe,
    detectPlatform,
    getServerPlatform
  );

  const primary = getPrimaryDownload(links, platform);

  const faqItems: { question: string; answer: string }[] = t.raw("faq.items");

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
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        {/* Primary download */}
        <motion.div
          className="max-w-md mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="border-primary/20 elevation-2 border-glow">
            <CardContent className="p-6 text-center">
              <Badge className="mb-4">{t("detected")}</Badge>
              <div className="flex justify-center mb-4">
                {platformIcons[primary.platform]}
              </div>
              <h2 className="text-xl font-semibold mb-2">
                {t(`platforms.${primary.platform}`)}
              </h2>
              {primary.arch && (
                <p className="text-sm text-muted-foreground mb-4">
                  {primary.arch}
                </p>
              )}
              {primary.available ? (
                <a
                  href={primary.url}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full press-effect"
                  )}
                >
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadFor", { platform: t(`platforms.${primary.platform}`) })}
                </a>
              ) : (
                <div
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "w-full pointer-events-none opacity-60"
                  )}
                >
                  {t("comingSoon")}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Other platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            {t("otherPlatforms")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {links.map((link) => (
              <Card
                key={link.platform}
                className={cn(
                  "card-hover h-full",
                  link.platform === primary.platform && "border-primary/40"
                )}
              >
                <CardContent className="p-4 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-2">
                    {platformIcons[link.platform]}
                  </div>
                  <h4 className="font-medium text-sm">
                    {t(`platforms.${link.platform}`)}
                  </h4>
                  {link.arch && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {link.arch}
                    </p>
                  )}
                  <div className="mt-auto pt-3">
                    {link.available ? (
                      <a
                        href={link.url}
                        className={cn(
                          buttonVariants({ size: "sm", variant: "outline" }),
                          "w-full"
                        )}
                      >
                        <Download className="mr-1 h-3 w-3" />
                        {link.fileName}
                      </a>
                    ) : (
                      <Badge variant="outline">{t("comingSoon")}</Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* After You Install */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10">
            {t("afterInstall.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {afterInstallSteps.map(({ key, icon: Icon }, i) => (
              <div key={key} className="text-center">
                <div className="relative mx-auto mb-4 w-14 h-14">
                  <div className="w-14 h-14 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h4 className="font-semibold mb-1.5">
                  {t(`afterInstall.steps.${key}.title`)}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  {t(`afterInstall.steps.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">
            {t("requirements.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {(["mac", "windows"] as const).map((os) => (
              <Card key={os}>
                <CardContent className="p-5">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    {os === "mac" && <AppleIcon className="h-4 w-4" />}
                    {os === "windows" && <WindowsIcon className="h-4 w-4" />}
                    {t(`requirements.${os}.title`)}
                  </h4>
                  <ul className="space-y-2">
                    {(t.raw(`requirements.${os}.items`) as string[]).map(
                      (item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            {t("faq.title")}
          </h3>
          <Card>
            <CardContent className="p-6">
              {faqItems.map((item, i) => (
                <FAQItem
                  key={i}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
