"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Download, CheckCircle2 } from "lucide-react";
import { AppleIcon } from "@/components/shared/apple-icon";
import { WindowsIcon } from "@/components/shared/windows-icon";
import {
  type Platform,
  downloadLinks,
  detectPlatform,
  getPrimaryDownload,
} from "@/lib/downloads";

const platformIcons: Record<string, React.ReactNode> = {
  "mac-arm": <AppleIcon className="h-6 w-6" />,
  "mac-intel": <AppleIcon className="h-6 w-6" />,
  windows: <WindowsIcon className="h-6 w-6" />,
};

export default function DownloadPage() {
  const t = useTranslations("download");
  const [platform, setPlatform] = useState<Platform>("mac-arm");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const primary = getPrimaryDownload(platform);

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
              <h2 className="text-xl font-semibold mb-2">{primary.label}</h2>
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
                  {t("downloadFor", { platform: primary.label })}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-center mb-6">
            {t("otherPlatforms")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {downloadLinks.map((link) => (
              <Card
                key={link.platform}
                className={cn(
                  "card-hover",
                  link.platform === primary.platform && "border-primary/40"
                )}
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-2">
                    {platformIcons[link.platform]}
                  </div>
                  <h4 className="font-medium text-sm">{link.label}</h4>
                  {link.arch && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {link.arch}
                    </p>
                  )}
                  {link.available ? (
                    <a
                      href={link.url}
                      className={cn(
                        buttonVariants({ size: "sm", variant: "outline" }),
                        "mt-3 w-full"
                      )}
                    >
                      <Download className="mr-1 h-3 w-3" />
                      {link.fileName}
                    </a>
                  ) : (
                    <Badge variant="outline" className="mt-3">
                      {t("comingSoon")}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
      </div>
    </div>
  );
}
