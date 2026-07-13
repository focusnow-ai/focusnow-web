"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";

const TOPICS = ["feedback", "support", "partnership", "other"] as const;

type Status = "idle" | "sending" | "success" | "error";

export function ContactPageClient() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string>("errorGeneric");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }
      const payload = await res.json().catch(() => ({}));
      setErrorKey(
        payload.error === "rate_limited"
          ? "errorRate"
          : payload.error === "invalid_fields"
            ? "errorFields"
            : "errorGeneric"
      );
      setStatus("error");
    } catch {
      setErrorKey("errorGeneric");
      setStatus("error");
    }
  }

  return (
    <div className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("title")}{" "}
            <span className="text-purple-600 dark:text-purple-400">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-6 sm:p-8">
              {status === "success" ? (
                <div
                  className="flex flex-col items-center text-center py-8"
                  role="status"
                >
                  <CheckCircle2 className="h-10 w-10 text-green-500 mb-4" />
                  <p className="text-base">{t("form.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium mb-1.5"
                      >
                        {t("form.name")}
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        maxLength={100}
                        placeholder={t("form.namePlaceholder")}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium mb-1.5"
                      >
                        {t("form.email")}
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        placeholder={t("form.emailPlaceholder")}
                        className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-sm font-medium mb-1.5"
                    >
                      {t("form.topic")}
                    </label>
                    <select
                      id="contact-topic"
                      name="topic"
                      defaultValue="feedback"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {TOPICS.map((topic) => (
                        <option key={topic} value={topic}>
                          {t(`form.topics.${topic}`)}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium mb-1.5"
                    >
                      {t("form.message")}
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={5}
                      placeholder={t("form.messagePlaceholder")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-y"
                    />
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
                    <p className="text-sm text-red-500" role="alert">
                      {t(`form.${errorKey}`)}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-full press-effect"
                    )}
                  >
                    {status === "sending" ? t("form.sending") : t("form.submit")}
                  </button>
                </form>
              )}
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Mail className="inline h-4 w-4 mr-1.5 align-[-2px]" />
            {t("direct")}{" "}
            <a
              href="mailto:info@focusnow.ai"
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              info@focusnow.ai
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
