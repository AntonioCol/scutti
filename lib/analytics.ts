const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const CONSENT_KEY = "scutti_cookie_consent";

export interface CookieConsent {
  analytics: boolean;
  timestamp: string;
}

// ---------------------------------------------------------------------------
// Consent management
// ---------------------------------------------------------------------------

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.analytics === "boolean" && parsed.timestamp) {
      return parsed as CookieConsent;
    }
    return null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): void {
  const consent: CookieConsent = { analytics, timestamp: new Date().toISOString() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  if (analytics) {
    initializeGA();
  }
}

export function hasAnalyticsConsent(): boolean {
  return getConsent()?.analytics === true;
}

export function revokeConsent(): void {
  localStorage.removeItem(CONSENT_KEY);
  // Rimuovi cookie GA
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  });
}

// ---------------------------------------------------------------------------
// GA4 initialization (consent-gated)
// ---------------------------------------------------------------------------

let gaInitialized = false;

export function initializeGA(): void {
  if (!GA_ID || gaInitialized || typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;

  // Inject gtag.js script
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Configure dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID, {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });

  gaInitialized = true;
}

// ---------------------------------------------------------------------------
// Custom events (no-op senza consenso)
// ---------------------------------------------------------------------------

function trackEvent(name: string, params?: Record<string, string>): void {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
}

export function trackWhatsAppClick(): void {
  trackEvent("whatsapp_click");
}

export function trackFormSubmit(): void {
  trackEvent("contact_form_submit");
}

export function trackFornitoreClick(fornitore: string, source: "collezioni" | "marchi"): void {
  trackEvent("fornitore_click", { fornitore_name: fornitore, source });
}

// ---------------------------------------------------------------------------
// Type augmentation
// ---------------------------------------------------------------------------

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
