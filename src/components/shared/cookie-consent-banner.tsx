"use client";

import { useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  type ConsentStatus,
  getConsentStatus,
  setConsentStatus,
  subscribeConsentStatus,
  updateGtagConsent,
} from "@/lib/analytics";
import { cn } from "@/lib/utils";

// On the server (and during hydration) the status is unknown → banner hidden.
const getServerSnapshot = (): ConsentStatus | undefined => undefined;

export function CookieConsentBanner() {
  const t = useTranslations("consent");
  const status = useSyncExternalStore<ConsentStatus | undefined>(
    subscribeConsentStatus,
    getConsentStatus,
    getServerSnapshot
  );

  function handleAccept() {
    setConsentStatus(true);
    updateGtagConsent(true);
  }

  function handleDecline() {
    setConsentStatus(false);
    updateGtagConsent(false);
  }

  // Only show when we know the user hasn't made a choice yet.
  if (status !== null) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto m-4 w-full max-w-2xl rounded-xl border border-border/60 bg-card p-5 elevation-4",
          "flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5",
          "animate-in slide-in-from-bottom duration-300"
        )}
      >
        <p className="flex-1 text-sm text-foreground leading-relaxed">
          {t("message")}{" "}
          <Link
            href="/privacy"
            className="font-medium underline underline-offset-4 hover:text-primary transition-colors"
          >
            {t("learnMore")}
          </Link>
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
