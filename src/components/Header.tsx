"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useApp } from "@/context/AppContext";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { t, locale, setLocale, cartCount, cartPulse, muted, toggleMute } =
    useApp();
  const [q, setQ] = useState("");

  if (pathname === "/") return null;

  function onSearch(e: FormEvent) {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/shop?q=${encodeURIComponent(query)}` : "/shop");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-blush-200/70 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2.5">
        <Link
          href="/shop"
          className="shrink-0 font-serif text-lg tracking-tight text-rose-ink"
          aria-label={t("mall")}
        >
          Mea Mall <span aria-hidden>👑</span>
        </Link>

        <form onSubmit={onSearch} className="relative min-w-0 flex-1">
          <label htmlFor="mall-search" className="sr-only">
            {t("searchAria")}
          </label>
          <input
            id="mall-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("search")}
            className="h-11 w-full rounded-full border border-blush-200 bg-white/80 px-4 text-sm text-rose-ink outline-none ring-gold-soft/0 placeholder:text-rose-ink/45 focus:ring-2 focus:ring-gold-soft"
          />
        </form>

        <button
          type="button"
          onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
          className="flex h-11 min-w-11 items-center justify-center rounded-full border border-blush-200 bg-white px-2 text-xs font-semibold text-rose-ink"
          aria-label={`${t("langFr")} / ${t("langEn")}`}
        >
          {locale === "fr" ? t("langFr") : t("langEn")}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-blush-200 bg-white text-base"
          aria-label={muted ? t("unmute") : t("mute")}
        >
          {muted ? "🔇" : "🔔"}
        </button>

        <Link
          href="/cart"
          className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-blush-400 text-lg text-white ${cartPulse ? "cart-bounce" : ""}`}
          aria-label={`${t("cart")} (${cartCount})`}
        >
          🛍️
          {cartCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-rose-ink">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
