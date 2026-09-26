import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

type Href = React.ComponentProps<typeof Link>["href"];

export function Breadcrumbs({ items, label }: { items: { name: string; href?: Href }[]; label: string }) {
  return (
    <nav aria-label={label} className="text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5">
            {index > 0 && <ChevronRight className="size-3.5 opacity-60" aria-hidden="true" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground/80">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
