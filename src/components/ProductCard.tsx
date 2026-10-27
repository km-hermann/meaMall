"use client";

import Link from "next/link";
import { useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { ProductImage } from "@/components/ProductImage";
import { Stars } from "@/components/Stars";
import { useApp } from "@/context/AppContext";
import type { Product } from "@/data/products";
import { formatFcfa } from "@/lib/format";

export function ProductCard({ product }: { product: Product }) {
  const { locale, t, addToCart, favs, toggleFav } = useApp();
  const [burst, setBurst] = useState(0);
  const name = locale === "fr" ? product.name_fr : product.name_en;
  const loved = favs.includes(product.id);

  return (
    <article className="relative flex flex-col overflow-hidden rounded-3xl border border-blush-200/80 bg-white shadow-soft">
      {burst > 0 && <ConfettiBurst show key={burst} pieces={28} />}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square">
          <ProductImage product={product} />
          {product.flashSale && (
            <span className="absolute left-2 top-2 rounded-full bg-gold px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-rose-ink">
              {t("flash")}
            </span>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <Link href={`/product/${product.id}`} className="font-serif text-[15px] leading-snug text-rose-ink">
          {name}
        </Link>
        <Stars rating={product.rating} />
        <p className="font-semibold text-rose-ink">{formatFcfa(product.price)}</p>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
              setBurst((n) => n + 1);
            }}
            className="h-11 flex-1 rounded-full bg-blush-500 px-3 text-sm font-semibold text-white"
          >
            {t("addToCart")}
          </button>
          <button
            type="button"
            onClick={() => toggleFav(product.id)}
            className={`heart-pop flex h-11 w-11 items-center justify-center rounded-full border border-blush-200 bg-cream text-lg ${loved ? "is-loved" : ""}`}
            aria-label={loved ? t("inFav") : t("addFav")}
          >
            {loved ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </article>
  );
}
