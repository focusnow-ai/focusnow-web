import Link from "next/link";
import type { ReactNode } from "react";
import { routing } from "@/i18n/routing";

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;
const linkClass = "font-medium text-emphasis underline underline-offset-4";

/** Maps an English site path to its localized form, e.g. /guide/x → /tr/rehber/x. */
export function localizeHref(href: string, locale: string): string {
  if (locale === routing.defaultLocale || !href.startsWith("/") || href.startsWith(`/${locale}/`)) {
    return href;
  }
  const [path, hash] = href.split("#");
  const guide = path.match(/^\/guide\/([^/]+)$/);
  let localized: string | undefined;
  if (guide) {
    localized = `/rehber/${guide[1]}`;
  } else {
    const entry = routing.pathnames[path as keyof typeof routing.pathnames];
    if (entry) localized = typeof entry === "string" ? entry : entry[locale as "en" | "tr"];
  }
  if (!localized) return href;
  return `/${locale}${localized === "/" ? "" : localized}${hash ? `#${hash}` : ""}`;
}

export function renderInline(text: string, locale: string = routing.defaultLocale): ReactNode[] {
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
          <Link key={i} href={localizeHref(href, locale)} className={linkClass}>
            {label}
          </Link>
        );
      }
      return (
        <a key={i} href={href} className={linkClass} rel="noopener">
          {label}
        </a>
      );
    }
    return part;
  });
}

type Block =
  | { kind: "h2" | "h3" | "p"; text: string }
  | { kind: "ul" | "ol"; items: string[] };

function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of content.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const ordered = line.match(/^\d+\.\s+(.*)$/);
    const last = blocks[blocks.length - 1];
    if (line.startsWith("### ")) blocks.push({ kind: "h3", text: line.slice(4) });
    else if (line.startsWith("## ")) blocks.push({ kind: "h2", text: line.slice(3) });
    else if (line.startsWith("- ")) {
      if (last?.kind === "ul") last.items.push(line.slice(2));
      else blocks.push({ kind: "ul", items: [line.slice(2)] });
    } else if (ordered) {
      if (last?.kind === "ol") last.items.push(ordered[1]);
      else blocks.push({ kind: "ol", items: [ordered[1]] });
    } else blocks.push({ kind: "p", text: line });
  }
  return blocks;
}

/** Comfortable long-form reading for blog posts and guide pages. */
export function MarkdownBody({ content, locale }: { content: string; locale: string }) {
  return (
    <div className="text-[17px] leading-8 text-foreground/85">
      {parseBlocks(content).map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2 key={i} className="mb-4 mt-12 text-2xl font-semibold tracking-tight text-foreground">
                {renderInline(block.text, locale)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mb-3 mt-8 text-xl font-semibold text-foreground">
                {renderInline(block.text, locale)}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 list-disc space-y-2 pl-6 marker:text-emphasis/70">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item, locale)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-6 list-decimal space-y-2 pl-6 marker:text-muted-foreground">
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item, locale)}</li>
                ))}
              </ol>
            );
          default:
            return (
              <p key={i} className="mb-6">
                {renderInline(block.text, locale)}
              </p>
            );
        }
      })}
    </div>
  );
}
