export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", eventName, parameters);
}