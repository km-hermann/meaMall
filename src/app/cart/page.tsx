"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductImage } from "@/components/ProductImage";
import { QuantitySelector } from "@/components/QuantitySelector";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";
import { getProduct } from "@/data/products";
import { formatFcfa } from "@/lib/format";

export default function CartPage() {
  const { t, locale, cart, setQty, removeFromCart, promoApplied, applyPromo } =
    useApp();
  const [code, setCode] = useState<string>(gift.promoCode);
  const [msg, setMsg] = useState("");

  const lines = cart
    .map((l) => {
      const product = getProduct(l.id);
      return product ? { ...l, product } : null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const subtotal = lines.reduce((s, l) => s + l.product.price * l.qty, 0);
  const discount = promoApplied ? subtotal : 0;
  const total = subtotal - discount;

  if (lines.length === 0) {
    return (
      <div className="mx-auto flex max-w-md flex-col items-center px-6 py-16 text-center">
        <p className="text-5xl" aria-hidden>
          🛍️
        </p>
        <h1 className="mt-4 font-serif text-2xl">{t("emptyCart")}</h1>
        <Link
          href="/shop"
          className="mt-6 flex h-12 items-center rounded-full bg-blush-500 px-6 font-semibold text-white"
        >
          {t("emptyCartCta")}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-5">
      <h1 className="font-serif text-3xl">{t("cart")}</h1>
      <ul className="mt-4 space-y-3">
        {lines.map((l) => {
          const name = locale === "fr" ? l.product.name_fr : l.product.name_en;
          return (
            <li
              key={l.id}
              className="flex gap-3 rounded-3xl border border-blush-200 bg-white p-3 shadow-soft"
            >
              <div className="h-24 w-24 overflow-hidden rounded-2xl">
                <ProductImage product={l.product} className="h-24 w-24" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-serif leading-snug">{name}</p>
                <p className="mt-1 text-sm font-semibold">
                  {formatFcfa(l.product.price)}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <QuantitySelector
                    value={l.qty}
                    onChange={(n) => setQty(l.id, n)}
                    label={t("qty")}
                  />
                  <button
                    type="button"
                    onClick={() => removeFromCart(l.id)}
                    className="h-11 px-2 text-sm text-rose-ink/70"
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <form
        className="mt-6 rounded-3xl border border-blush-200 bg-white p-4"
        onSubmit={(e) => {
          e.preventDefault();
          const ok = applyPromo(code);
          setMsg(ok ? t("promoOk") : t("promoBad"));
        }}
      >
        <label htmlFor="promo" className="text-sm font-semibold">
          {t("promo")}
        </label>
        <p className="mt-1 text-xs text-rose-ink/60">{t("promoHint")}</p>
        <div className="mt-2 flex gap-2">
          <input
            id="promo"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-12 min-w-0 flex-1 rounded-full border border-blush-200 bg-cream px-4 text-sm outline-none focus:ring-2 focus:ring-gold-soft"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-gold px-4 text-sm font-bold text-rose-ink"
          >
            {t("apply")}
          </button>
        </div>
        {msg && <p className="mt-2 text-sm font-medium">{msg}</p>}
      </form>

      <div className="mt-5 space-y-2 rounded-3xl bg-white p-4 text-sm">
        <div className="flex justify-between">
          <span>{t("subtotal")}</span>
          <span>{formatFcfa(subtotal)}</span>
        </div>
        {promoApplied && (
          <div className="flex justify-between text-emerald-700">
            <span>{t("discount")}</span>
            <span>− {formatFcfa(discount)}</span>
          </div>
        )}
        <div className="flex justify-between border-t border-blush-200 pt-2 font-serif text-lg">
          <span>{t("total")}</span>
          <span>{formatFcfa(total)}</span>
        </div>
      </div>

      <Link
        href="/checkout"
        className="mt-5 flex h-14 items-center justify-center rounded-full bg-blush-500 text-base font-semibold text-white shadow-soft"
      >
        {t("checkout")}
      </Link>
      <Link
        href="/shop"
        className="mt-3 flex h-11 items-center justify-center text-sm font-medium text-rose-ink/70"
      >
        {t("continue")}
      </Link>
    </div>
  );
}
