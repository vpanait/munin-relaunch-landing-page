/**
 * Google Analytics 4 (GA4) integration.
 * Tracks page views and button clicks. Campaign traffic is attributed automatically via UTM params.
 */

import { GA_MEASUREMENT_ID } from "@/const";

const MEASUREMENT_ID = GA_MEASUREMENT_ID as string | undefined;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function getMeasurementId(): string | null {
  return MEASUREMENT_ID?.trim() || null;
}

/** Load gtag script and initialize GA4. Call once on app load. */
export function initAnalytics(): void {
  const id = getMeasurementId();
  if (!id) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date().toISOString());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  const isDev = import.meta.env.DEV;
  window.gtag("config", id, {
    send_page_view: false, // we send page_view manually on route change
    anonymize_ip: true,
    ...(isDev && { debug_mode: true }), // see events in GA4 → Admin → DebugView
  });
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
