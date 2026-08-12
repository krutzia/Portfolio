/**
 * Lightweight click analytics for recruiter-engagement tracking.
 *
 * Events are forwarded to any analytics provider present on the page
 * (Lovable analytics, Google Analytics, Plausible, Umami) and mirrored to
 * localStorage so counts are inspectable even without a provider.
 */

export type TrackEventName =
  | "linkedin_click"
  | "github_click"
  | "resume_download";

const STORAGE_KEY = "portfolio_engagement_events";

export function trackEvent(name: TrackEventName, props: Record<string, string> = {}) {
  if (typeof window === "undefined") return;

  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    plausible?: (event: string, opts?: { props: Record<string, string> }) => void;
    umami?: { track: (event: string, data?: Record<string, string>) => void };
    dataLayer?: unknown[];
  };

  try {
    w.gtag?.("event", name, props);
    w.plausible?.(name, { props });
    w.umami?.track(name, props);
    w.dataLayer?.push({ event: name, ...props });
  } catch {
    /* provider errors must never break a link click */
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const counts: Record<string, number> = raw ? JSON.parse(raw) : {};
    const key = props.location ? `${name}:${props.location}` : name;
    counts[key] = (counts[key] ?? 0) + 1;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
  } catch {
    /* storage may be unavailable (private mode) */
  }
}

export function getEngagementCounts(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}
