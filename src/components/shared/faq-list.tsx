import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

/** Native disclosure list: works without JavaScript and keeps answers in the HTML. */
export function FaqList({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-border/80 border-y border-border/80", className)}>
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-base font-medium sm:text-[17px]">{item.question}</span>
            <Plus
              className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-2xl pb-6 pr-10 text-[15px] leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
