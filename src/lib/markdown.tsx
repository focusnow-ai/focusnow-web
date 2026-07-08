import Link from "next/link";
import type { ReactNode } from "react";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

export function renderInline(text: string): ReactNode[] {
  return text.split(INLINE_PATTERN).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      if (href.startsWith("/")) {
        return (
          <Link
            key={i}
            href={href}
            className="text-purple-600 dark:text-purple-400 underline underline-offset-4"
          >
            {label}
          </Link>
        );
      }
      return (
        <a
          key={i}
          href={href}
          className="text-purple-600 dark:text-purple-400 underline underline-offset-4"
        >
          {label}
        </a>
      );
    }
    return part;
  });
}
