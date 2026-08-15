/**
 * Validation + normalization for social links configured in the portfolio.
 * Catches common typos (linkdin.com, gihub.com, missing protocol, ...) early.
 */

export type SocialKey = "github" | "linkedin" | "leetcode" | "email";

export type LinkIssue = {
  key: SocialKey;
  level: "error" | "warning";
  message: string;
};

export type LinkCheck = {
  key: SocialKey;
  raw: string;
  href: string;
  display: string;
  ok: boolean;
  issues: LinkIssue[];
};

const HOST_TYPOS: Record<string, string> = {
  "linkdin.com": "linkedin.com",
  "linkedln.com": "linkedin.com",
  "linkedin.co": "linkedin.com",
  "gihub.com": "github.com",
  "githb.com": "github.com",
  "guthub.com": "github.com",
  "leetcode.co": "leetcode.com",
};

const EXPECTED_HOST: Record<Exclude<SocialKey, "email">, string> = {
  github: "github.com",
  linkedin: "linkedin.com",
  leetcode: "leetcode.com",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeHost(host: string) {
  return host.toLowerCase().replace(/^www\./, "");
}

export function normalizeSocialLink(key: SocialKey, raw: string): LinkCheck {
  const issues: LinkIssue[] = [];
  const value = (raw ?? "").trim();

  if (key === "email") {
    const address = value.replace(/^mailto:/i, "");
    const ok = EMAIL_RE.test(address);
    if (!ok) issues.push({ key, level: "error", message: `Invalid email address: "${address}"` });
    return {
      key,
      raw: value,
      href: `mailto:${address}`,
      display: address,
      ok,
      issues,
    };
  }

  let candidate = value;
  if (candidate && !/^https?:\/\//i.test(candidate)) {
    issues.push({ key, level: "warning", message: "Missing protocol — assumed https://" });
    candidate = `https://${candidate.replace(/^\/+/, "")}`;
  }

  let url: URL | null = null;
  try {
    url = new URL(candidate);
  } catch {
    issues.push({ key, level: "error", message: `Not a valid URL: "${value}"` });
    return { key, raw: value, href: value, display: value, ok: false, issues };
  }

  if (url.protocol === "http:") {
    issues.push({ key, level: "warning", message: "Upgraded http:// to https://" });
    url.protocol = "https:";
  }

  let host = normalizeHost(url.hostname);
  const typoFix = HOST_TYPOS[host];
  if (typoFix) {
    issues.push({
      key,
      level: "error",
      message: `Typo in domain: "${host}" corrected to "${typoFix}"`,
    });
    host = typoFix;
  }

  const expected = EXPECTED_HOST[key];
  if (host !== expected) {
    issues.push({
      key,
      level: "error",
      message: `Expected ${expected} for ${key}, got "${host}"`,
    });
    host = expected;
  }

  url.hostname = key === "linkedin" ? `www.${host}` : host;

  // normalize path: strip trailing slash for display, keep it clean
  const path = url.pathname.replace(/\/+$/, "");
  url.pathname = path || "/";

  if (!path) {
    issues.push({ key, level: "error", message: `Missing profile path for ${key}` });
  }

  const href = url.toString().replace(/\/$/, "");
  return {
    key,
    raw: value,
    href,
    display: `${normalizeHost(url.hostname)}${path}`,
    ok: !issues.some((i) => i.level === "error"),
    issues,
  };
}

export function validateSocials(input: Record<SocialKey, string>) {
  const checks = (Object.keys(input) as SocialKey[]).map((k) =>
    normalizeSocialLink(k, input[k]),
  );
  const byKey = Object.fromEntries(checks.map((c) => [c.key, c])) as Record<SocialKey, LinkCheck>;
  const issues = checks.flatMap((c) => c.issues);

  if (issues.length && typeof console !== "undefined") {
    for (const issue of issues) {
      const line = `[socials:${issue.key}] ${issue.message}`;
      if (issue.level === "error") console.error(line);
      else console.warn(line);
    }
  }

  return {
    checks,
    byKey,
    issues,
    /** Normalized, safe-to-use hrefs. */
    hrefs: Object.fromEntries(checks.map((c) => [c.key, c.href])) as Record<SocialKey, string>,
  };
}
