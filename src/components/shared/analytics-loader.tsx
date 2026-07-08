"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";
import {
  GA_MEASUREMENT_ID,
  getConsentStatus,
  subscribeConsentStatus,
  type ConsentStatus,
} from "@/lib/analytics";

const getServerConsent = (): ConsentStatus => null;

export function AnalyticsLoader() {
  const consent = useSyncExternalStore(
    subscribeConsentStatus,
    getConsentStatus,
    getServerConsent
  );

  if (!GA_MEASUREMENT_ID || consent !== "granted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'granted'
          });
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}
