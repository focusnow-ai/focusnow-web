"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { getConsentStatus, setConsentStatus, updateGtagConsent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function CookieConsentBanner() {
  const t = useTranslations("consent");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const status = getConsentStatus();
    if (status === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsentStatus(true);
    updateGtagConsent(true);
    setVisible(false);
  }

  function handleDecline() {
    setConsentStatus(false);
    updateGtagConsent(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 p-4",
        "animate-in slide-in-from-bottom duration-300"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-2xl rounded-xl border bg-card p-4 shadow-lg",
          "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        )}
      >
        <p className="flex-1 text-sm text-muted-foreground leading-relaxed">
          {t("message")}{" "}
          <a
            href="/privacy"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {t("learnMore")}
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={handleDecline}>
            {t("decline")}
          </Button>
          <Button size="sm" onClick={handleAccept}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
