export const STORAGE_KEYS = {
  cart: "mea-mall-cart",
  favs: "mea-mall-favs",
  locale: "mea-mall-locale",
  muted: "mea-mall-muted",
  order: "mea-mall-order",
  tracking: "mea-mall-tracking",
  flashEnd: "mea-mall-flash-end",
  promo: "mea-mall-promo",
} as const;

export function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}
