declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const CONSENT_KEY = "focusnow-cookie-consent";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

type ConsentStatus = "granted" | "denied" | null;

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function setConsentStatus(granted: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
}

export function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}
