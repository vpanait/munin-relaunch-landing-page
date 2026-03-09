/**
 * Google Analytics 4 (GA4) integration.
 * Script and initial config are loaded in index.html; this file only sends events.
 * Tracks page views and button clicks. Campaign traffic is attributed via UTM params.
 */

import { GA_MEASUREMENT_ID } from "@/const";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function getMeasurementId(): string | null {
  return GA_MEASUREMENT_ID?.trim() || null;
}

/** No-op: script is loaded in index.html. Optionally enables debug_mode in dev. */
export function initAnalytics(): void {
  const id = getMeasurementId();
  if (!id || !window.gtag) return;

  // window.gtag("config", id, { debug_mode: true });
}

/** Send a page view. Call on initial load and on every route change. */
export function trackPageView(path: string, title?: string): void {
  const id = getMeasurementId();
  if (!id || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
  });
}

/**
 * Track a button/link click. Use for CTAs to measure conversions and campaign performance.
 * @param buttonName - e.g. "Subscribe", "See pricing", "Go Professional"
 * @param location - Optional section/location on page, e.g. "hero", "header", "pricing"
 */
export function trackClick(buttonName: string, location?: string): void {
  const id = getMeasurementId();
  if (!id || !window.gtag) return;

  window.gtag("event", "click", {
    event_category: "CTA",
    event_label: buttonName,
    button_location: location ?? "unknown",
  });
}
