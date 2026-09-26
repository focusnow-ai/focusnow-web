"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export interface DayView {
  key: string;
  label: string;
  panel: React.ReactNode;
}

/** Segmented switch between two product views; panels share one grid cell so switching never waits on an image. */
export function DayViews({ views, label }: { views: DayView[]; label: string }) {
  const [active, setActive] = useState(views[0].key);
  const baseId = useId();

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        className="mx-auto flex w-fit gap-1 rounded-xl border border-border/80 bg-muted/60 p-1"
      >
        {views.map((view) => {
          const selected = view.key === active;
          return (
            <button
              key={view.key}
              id={`${baseId}-tab-${view.key}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${view.key}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(view.key)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
                const index = views.findIndex((v) => v.key === active);
                const next = views[(index + (event.key === "ArrowRight" ? 1 : views.length - 1)) % views.length];
                setActive(next.key);
                document.getElementById(`${baseId}-tab-${next.key}`)?.focus();
              }}
              className={cn(
                "rounded-lg px-4 py-1.5 text-sm font-medium transition-colors",
                selected ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {view.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid">
        {views.map((view) => {
          const selected = view.key === active;
          return (
            <div
              key={view.key}
              id={`${baseId}-panel-${view.key}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${view.key}`}
              aria-hidden={!selected}
              inert={!selected}
              className={cn(
                "col-start-1 row-start-1 transition-opacity duration-300",
                selected ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            >
              {view.panel}
            </div>
          );
        })}
      </div>
    </div>
  );
}
