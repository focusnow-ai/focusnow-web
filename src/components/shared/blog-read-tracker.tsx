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
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || firedRef.current) continue;
        if (Date.now() - startedAt < MIN_READ_MS) continue;
        firedRef.current = true;
        trackEvent("blog_read", {
          slug,
          locale,
          reading_time_minutes: readingTime,
        });
        observer.disconnect();
      }
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [slug, locale, readingTime]);

  return <div ref={sentinelRef} aria-hidden="true" className="h-px" />;
}
