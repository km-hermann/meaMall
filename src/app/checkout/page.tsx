"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";
import { getProduct } from "@/data/products";
import { formatFcfa } from "@/lib/format";
import { playSuccess } from "@/lib/sound";

export default function CheckoutPage() {
  const router = useRouter();
  const { t, cart, promoApplied, placeOrder, muted } = useApp();
  const [status, setStatus] = useState<"idle" | "paying" | "paid">("idle");

  const { subtotal, total, count } = useMemo(() => {
    const lines = cart
      .map((l) => {
        const p = getProduct(l.id);
        return p ? l.qty * p.price : 0;
      })
      .reduce((a, b) => a + b, 0);
    return {
      subtotal: lines,
      total: promoApplied ? 0 : lines,
      count: cart.reduce((s, l) => s + l.qty, 0),
    };
  }, [cart, promoApplied]);

  async function pay() {
    if (cart.length === 0 || status !== "idle") return;
    setStatus("paying");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("paid");
    if (!muted) void playSuccess();
    placeOrder(total, count);
    await new Promise((r) => setTimeout(r, 700));
    router.push("/order");
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-5">
      <h1 className="font-serif text-3xl">{t("checkoutTitle")}</h1>

      <section className="mt-5 rounded-3xl border border-blush-200 bg-white p-4 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-rose-ink/60">
          {t("address")}
        </h2>
        <p className="mt-2 font-serif text-lg">{gift.herNickname}</p>
        <p className="text-sm text-rose-ink/80">{t("addressLine")}</p>
        <p className="mt-1 text-sm">
          {t("city")} : {gift.herCity}
        </p>
      </section>

      <section className="mt-4 rounded-3xl border border-blush-200 bg-white p-4 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-rose-ink/60">
          {t("delivery")}
        </h2>
        <label className="mt-3 flex min-h-14 items-center gap-3 rounded-2xl bg-cream p-3">
          <input type="radio" defaultChecked className="accent-blush-500" />
          <span>
            <span className="block font-medium">{t("deliveryLove")}</span>
            <span className="text-xs text-rose-ink/65">{t("deliveryNote")}</span>
          </span>
        </label>
      </section>

      <section className="mt-4 rounded-3xl border border-blush-200 bg-white p-4 shadow-soft">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-rose-ink/60">
          {t("payment")}
        </h2>
        <div className="mt-3 overflow-hidden rounded-3xl bg-gradient-to-br from-blush-400 via-blush-500 to-gold p-5 text-white shadow-soft">
          <p className="text-xs uppercase tracking-[0.2em] opacity-90">
            {t("cardName")}
          </p>
          <p className="mt-6 font-script text-4xl">Mea 👑</p>
          <div className="mt-6 flex items-end justify-between text-sm">
            <span>•••• •••• •••• 0025</span>
            <span className="font-semibold">{t("cardBalance")}</span>
          </div>
        </div>
      </section>

      <p className="mt-4 text-center font-serif text-xl">
        {t("total")} : {formatFcfa(total)}
        {promoApplied && subtotal > 0 && (
          <span className="ml-2 text-sm text-rose-ink/50 line-through">
            {formatFcfa(subtotal)}
          </span>
        )}
      </p>

      <button
        type="button"
        onClick={pay}
        disabled={cart.length === 0 || status !== "idle"}
        className={`mt-5 flex h-14 w-full items-center justify-center rounded-full text-base font-semibold text-white shadow-soft ${
          status === "paying" ? "pay-shimmer" : "bg-blush-500"
        }`}
      >
        {status === "idle" && t("pay")}
        {status === "paying" && t("paying")}
        {status === "paid" && t("paid")}
      </button>
    </div>
  );
}
