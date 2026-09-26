import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { NavHref } from "@/lib/site-nav";
import { cn } from "@/lib/utils";

type LinkHref = React.ComponentProps<typeof Link>["href"];

export function ArrowLink({
  href,
  children,
  className,
  tone = "emphasis",
}: {
  href: NavHref | LinkHref;
  children: React.ReactNode;
  className?: string;
  tone?: "emphasis" | "scene";
}) {
  return (
    <Link
      href={href as LinkHref}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline",
        tone === "emphasis" ? "text-emphasis" : "text-scene-foreground",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
    </Link>
  );
}
