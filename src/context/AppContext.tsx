"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { gift } from "@/data/gift";
import { type Locale, translations, type TranslationKey } from "@/data/i18n";
import { playDing } from "@/lib/sound";
import { readJson, STORAGE_KEYS, writeJson } from "@/lib/storage";

export type CartLine = { id: string; qty: number };

export type Order = {
  id: string;
  createdAt: string;
  itemCount: number;
  total: number;
  promoApplied: boolean;
};

type AppState = {
  ready: boolean;
  locale: Locale;
  muted: boolean;
  cart: CartLine[];
  favs: string[];
  promoApplied: boolean;
  cartPulse: boolean;
  order: Order | null;
  setLocale: (l: Locale) => void;
  toggleMute: () => void;
  addToCart: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
  toggleFav: (id: string) => void;
  applyPromo: (code: string) => boolean;
  cartCount: number;
  t: (key: TranslationKey) => string;
  placeOrder: (total: number, itemCount: number) => Order;
};

const AppContext = createContext<AppState | null>(null);

function dingIf(muted: boolean) {
  if (!muted) void playDing();
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const [locale, setLocaleState] = useState<Locale>("fr");
  const [muted, setMuted] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [favs, setFavs] = useState<string[]>([]);
  const [promoApplied, setPromoApplied] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    queueMicrotask(() => {
      setLocaleState(readJson<Locale>(STORAGE_KEYS.locale, "fr"));
      setMuted(readJson<boolean>(STORAGE_KEYS.muted, false));
      setCart(readJson<CartLine[]>(STORAGE_KEYS.cart, []));
      setFavs(readJson<string[]>(STORAGE_KEYS.favs, []));
      setPromoApplied(readJson<boolean>(STORAGE_KEYS.promo, false));
      setOrder(readJson<Order | null>(STORAGE_KEYS.order, null));
      setReady(true);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.locale, locale);
  }, [locale, ready]);
  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.muted, muted);
  }, [muted, ready]);
  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.cart, cart);
  }, [cart, ready]);
  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.favs, favs);
  }, [favs, ready]);
  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.promo, promoApplied);
  }, [promoApplied, ready]);
  useEffect(() => {
    if (!ready) return;
    writeJson(STORAGE_KEYS.order, order);
  }, [order, ready]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggleMute = useCallback(() => setMuted((m) => !m), []);

  const addToCart = useCallback(
    (id: string, qty = 1) => {
      setCart((prev) => {
        const found = prev.find((l) => l.id === id);
        if (found) {
          return prev.map((l) =>
            l.id === id ? { ...l, qty: l.qty + qty } : l,
          );
        }
        return [...prev, { id, qty }];
      });
      dingIf(muted);
      setCartPulse(true);
      window.setTimeout(() => setCartPulse(false), 700);
    },
    [muted],
  );

  const setQty = useCallback((id: string, qty: number) => {
    setCart((prev) => {
      if (qty <= 0) return prev.filter((l) => l.id !== id);
      return prev.map((l) => (l.id === id ? { ...l, qty } : l));
    });
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const toggleFav = useCallback(
    (id: string) => {
      setFavs((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      );
      dingIf(muted);
    },
    [muted],
  );

  const applyPromo = useCallback((code: string) => {
    const ok = code.trim().toUpperCase() === gift.promoCode;
    setPromoApplied(ok);
    return ok;
  }, []);

  const placeOrder = useCallback((total: number, itemCount: number) => {
    const next: Order = {
      id: `MEA-${Date.now().toString().slice(-8)}`,
      createdAt: new Date().toISOString(),
      itemCount,
      total,
      promoApplied,
    };
    setOrder(next);
    setCart([]);
    localStorage.setItem(STORAGE_KEYS.tracking, "0");
    return next;
  }, [promoApplied]);

  const cartCount = useMemo(
    () => cart.reduce((sum, l) => sum + l.qty, 0),
    [cart],
  );

  const t = useCallback(
    (key: TranslationKey) => translations[locale][key],
    [locale],
  );

  const value = useMemo(
    () => ({
      ready,
      locale,
      muted,
      cart,
      favs,
      promoApplied,
      cartPulse,
      order,
      setLocale,
      toggleMute,
      addToCart,
      setQty,
      removeFromCart,
      toggleFav,
      applyPromo,
      cartCount,
      t,
      placeOrder,
    }),
    [
      ready,
      locale,
      muted,
      cart,
      favs,
      promoApplied,
      cartPulse,
      order,
      setLocale,
      toggleMute,
      addToCart,
      setQty,
      removeFromCart,
      toggleFav,
      applyPromo,
      cartCount,
      t,
      placeOrder,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
