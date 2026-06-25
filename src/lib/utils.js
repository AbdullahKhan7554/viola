/** Tiny className combiner (no clsx dependency to keep bundle lean). */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/** Build an absolute URL from a path, for canonical & OG tags. */
export function absoluteUrl(path = "/") {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://voilaaesthetics.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Basic email shape validation (server + client share this). */
export function isValidEmail(email) {
  if (!email) return true; // email is optional on the lead form
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

/** Format an ISO date (YYYY-MM-DD) as e.g. "12 June 2026". */
export function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Pakistani / international phone validation — lenient but real. */
export function isValidPhone(phone) {
  if (!phone) return false;
  const digits = phone.replace(/[^\d]/g, "");
  return digits.length >= 10 && digits.length <= 15;
}
