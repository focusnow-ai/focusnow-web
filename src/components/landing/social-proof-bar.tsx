import { useTranslations } from "next-intl";
import { EyeOff, Laptop, Timer, Wallet } from "lucide-react";

const facts = [
  { key: "platforms", icon: Laptop },
  { key: "free", icon: Wallet },
  { key: "private", icon: EyeOff },
  { key: "setup", icon: Timer },
] as const;

export function SocialProofBar() {
  const t = useTranslations("trustStrip");

  return (
    <section aria-label={t("label")} className="border-y border-border/60 bg-background/60">
      <ul className="mx-auto grid max-w-[84rem] grid-cols-1 gap-x-8 gap-y-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {facts.map(({ key, icon: Icon }) => (
          <li key={key} className="flex items-center gap-3 text-sm">
            <Icon className="size-4 shrink-0 text-emphasis" aria-hidden="true" />
            <span className="text-foreground/80">{t(key)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
