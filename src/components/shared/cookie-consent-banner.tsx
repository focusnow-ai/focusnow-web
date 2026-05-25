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
        "fixed inset-0 z-50 flex items-end justify-center",
        "bg-black/40 backdrop-blur-sm",
        "animate-in fade-in duration-300"
      )}
    >
      <div
        className={cn(
          "m-4 w-full max-w-2xl rounded-xl border-2 border-primary/20 bg-card p-5 shadow-2xl",
          "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5",
          "animate-in slide-in-from-bottom duration-300"
        )}
      >
        <p className="flex-1 text-sm text-foreground leading-relaxed">
          {t("message")}{" "}
          <a
            href="/privacy"
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            {t("learnMore")}
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button variant="outline" onClick={handleDecline}>
            {t("decline")}
          </Button>
          <Button onClick={handleAccept}>
            {t("accept")}
          </Button>
        </div>
      </div>
    </div>
  );
}
