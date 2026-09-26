"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

export function WaitlistForm() {
  const t = useTranslations("pricing.pro.waitlist");
  const locale = useLocale();
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorKey, setErrorKey] = useState<string>("errorGeneric");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          locale,
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        trackEvent("waitlist_signup", { locale });
        return;
      }
      const payload = await res.json().catch(() => ({}));
      setErrorKey(
        payload.error === "invalid_fields" ? "errorInvalid" : "errorGeneric"
      );
      setStatus("error");
    } catch {
      setErrorKey("errorGeneric");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-6 flex items-start gap-2 text-sm" role="status">
        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
        <span>{t("success")}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <p className="text-sm font-medium mb-2">{t("prompt")}</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="waitlist-email" className="sr-only">
          {t("emailLabel")}
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          maxLength={254}
          placeholder={t("emailPlaceholder")}
          className="h-11 flex-1 rounded-lg border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 px-4 press-effect"
          )}
        >
          {status === "sending" ? t("joining") : t("cta")}
        </button>
      </div>
      {/* Honeypot — invisible to humans, irresistible to bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {status === "error" && (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {t(errorKey)}
        </p>
      )}
      <p className="mt-2 text-xs text-muted-foreground">{t("privacyNote")}</p>
    </form>
  );
}
