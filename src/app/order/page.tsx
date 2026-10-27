"use client";

import Link from "next/link";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { useApp } from "@/context/AppContext";
import { formatFcfa } from "@/lib/format";

export default function OrderPage() {
  const { t, order } = useApp();

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col items-center px-6 py-12 text-center">
      <ConfettiBurst show pieces={64} />
      <p className="text-5xl" aria-hidden>
        🎉
      </p>
      <h1 className="mt-4 font-serif text-3xl">{t("orderOk")}</h1>
      <p className="mt-2 text-rose-ink/75">{t("orderThanks")}</p>
      {order && (
        <div className="mt-6 w-full rounded-3xl border border-blush-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-rose-ink/55">
            {t("orderNo")}
          </p>
          <p className="mt-1 font-serif text-xl">{order.id}</p>
          <p className="mt-2 text-sm">
            {order.itemCount} {order.itemCount > 1 ? t("items") : t("item")} ·{" "}
            {formatFcfa(order.total)}
          </p>
        </div>
      )}
      <Link
        href="/track"
        className="mt-8 flex h-14 w-full items-center justify-center rounded-full bg-blush-500 font-semibold text-white shadow-soft"
      >
        {t("track")}
      </Link>
    </div>
  );
}
