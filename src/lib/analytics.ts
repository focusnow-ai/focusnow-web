declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const CONSENT_KEY = "focusnow-cookie-consent";

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type ConsentStatus = "granted" | "denied" | null;

let consentListeners: Array<() => void> = [];

/** Subscribe to consent changes (for useSyncExternalStore). */
export function subscribeConsentStatus(listener: () => void): () => void {
  consentListeners = [...consentListeners, listener];
  return () => {
    consentListeners = consentListeners.filter((l) => l !== listener);
  };
}

export function getConsentStatus(): ConsentStatus {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "granted" || value === "denied") return value;
  return null;
}

export function setConsentStatus(granted: boolean) {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_KEY, granted ? "granted" : "denied");
  for (const listener of consentListeners) listener();
}

export function updateGtagConsent(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params ?? {});
}
