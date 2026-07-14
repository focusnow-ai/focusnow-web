"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Fires a single `blog_read` event when the reader reaches the end of the
 * article AND has spent a minimum amount of time on the page. Both
 * conditions together separate real readers from fast scrollers.
 *
 * Render it at the bottom of the article body — the invisible sentinel div
 * is what the IntersectionObserver watches.
 */
const MIN_READ_MS = 15_000;

export function BlogReadTracker({
  slug,
  locale,
  readingTime,
}: {
  slug: string;
  locale: string;
  readingTime: string;
}) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const firedRef = useRef(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const startedAt = Date.now();
    let timer: ReturnType<typeof setTimeout> | null = null;

    const fire = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      trackEvent("blog_read", {
        slug,
        locale,
        reading_time_minutes: readingTime,
        // Actual seconds on page when the event fired — lets us tighten
        // the "real read" definition at analysis time without ever
        // changing the event itself.
        dwell_seconds: Math.round((Date.now() - startedAt) / 1000),
      });
      observer.disconnect();
    };

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (firedRef.current) continue;
        if (entry.isIntersecting) {
          // Reader reached the end. If the minimum dwell time hasn't
          // passed yet, wait out the remainder instead of giving up —
          // fast scrollers who *stay* at the end still count as readers.
          const remaining = MIN_READ_MS - (Date.now() - startedAt);
          if (remaining <= 0) {
            fire();
          } else if (!timer) {
            timer = setTimeout(fire, remaining);
          }
        } else if (timer) {
          // Scrolled back up before the timer ran out — cancel.
          clearTimeout(timer);
          timer = null;
        }
      }
    });

    observer.observe(sentinel);
    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [slug, locale, readingTime]);

  return <div ref={sentinelRef} aria-hidden="true" className="h-px" />;
}
