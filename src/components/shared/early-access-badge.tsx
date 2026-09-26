import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function EarlyAccessBadge({ className }: { className?: string }) {
  const t = useTranslations("common");

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-emphasis/30 bg-background/70 px-3 py-1 text-xs font-medium text-emphasis",
        className
      )}
    >
      {t("earlyAccess")}
    </span>
  );
}
