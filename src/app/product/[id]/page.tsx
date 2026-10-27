"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { QuantitySelector } from "@/components/QuantitySelector";
import { Stars } from "@/components/Stars";
import { useApp } from "@/context/AppContext";
import { getProduct, products } from "@/data/products";
import { formatFcfa } from "@/lib/format";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const { locale, t, addToCart, favs, toggleFav } = useApp();
  const [qty, setQty] = useState(1);
  const [burst, setBurst] = useState(0);
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="p-6 text-center">
        <Link href="/shop">{t("backHome")}</Link>
      </div>
    );
  }

  const name = locale === "fr" ? product.name_fr : product.name_en;
  const desc = locale === "fr" ? product.description_fr : product.description_en;
  const loved = favs.includes(product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-4">
      {burst > 0 && <ConfettiBurst show key={burst} />}
      <div className="overflow-hidden rounded-3xl border border-blush-200 bg-white shadow-soft">
        <div className="relative aspect-square">
          <ProductImage product={product} />
          <span className="absolute left-3 top-3 rounded-full bg-blush-500 px-3 py-1 text-xs font-bold text-white">
            {t("onlyLeft")}
          </span>
        </div>
        <div className="p-5">
          <h1 className="font-serif text-2xl leading-snug">{name}</h1>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <Stars rating={product.rating} />
            <span className="text-rose-ink/60">
              {product.rating} · 128 {t("rating")}
            </span>
          </div>
          <p className="mt-3 text-xl font-semibold">{formatFcfa(product.price)}</p>
          <p className="mt-1 text-xs font-medium text-emerald-700">{t("stock")}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-rose-ink/80">{desc}</p>

          <div className="mt-5 flex items-center justify-between gap-3">
            <QuantitySelector value={qty} onChange={setQty} label={t("qty")} />
            <button
              type="button"
              onClick={() => toggleFav(product.id)}
              className={`heart-pop flex h-11 items-center gap-2 rounded-full border border-blush-200 bg-cream px-4 text-sm ${loved ? "is-loved" : ""}`}
            >
              {loved ? "♥" : "♡"} {loved ? t("inFav") : t("addFav")}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              addToCart(product.id, qty);
              setBurst((n) => n + 1);
            }}
            className="mt-4 flex h-14 w-full items-center justify-center rounded-full bg-blush-500 text-base font-semibold text-white shadow-soft"
          >
            {t("addToCart")}
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-8">
          <h2 className="font-serif text-xl">{t("related")}</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
