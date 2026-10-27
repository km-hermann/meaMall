"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/context/AppContext";
import { categories, products, searchProducts } from "@/data/products";
import { useFlashSale } from "@/hooks/useFlashSale";

export function ShopHome() {
  const { t, locale } = useApp();
  const params = useSearchParams();
  const q = params.get("q") || "";
  const countdown = useFlashSale();
  const list = q ? searchProducts(q) : products;
  const bestsellers = products.filter((p) => p.bestseller);
  const flashItems = products.filter((p) => p.flashSale);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-4">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blush-400 via-blush-500 to-gold px-5 py-6 text-white shadow-soft">
        <p className="font-serif text-2xl leading-snug">{t("banner")}</p>
        <p className="mt-1 text-sm text-white/90">{t("bannerSub")}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold">
          ⚡ {t("flash")} · {t("flashLeft")} {countdown}
        </div>
      </section>

      {q ? (
        <section className="mt-6">
          <h2 className="font-serif text-xl">
            {t("results")} “{q}”
          </h2>
          {list.length === 0 ? (
            <p className="mt-3 text-sm text-rose-ink/70">{t("noResults")}</p>
          ) : (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          <section className="mt-7">
            <h2 className="font-serif text-xl">{t("categories")}</h2>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {categories.map((c) => (
                <Link
                  key={c.id}
                  href={`/category/${c.id}`}
                  className="min-h-24 rounded-3xl border border-blush-200 bg-white p-4 shadow-soft"
                >
                  <span className="text-2xl" aria-hidden>
                    {c.emoji}
                  </span>
                  <p className="mt-2 font-serif text-[15px] leading-snug">
                    {locale === "fr" ? c.name_fr : c.name_en}
                  </p>
                  <p className="mt-1 text-xs text-rose-ink/65">
                    {locale === "fr" ? c.blurb_fr : c.blurb_en}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {flashItems.length > 0 && (
            <section className="mt-8">
              <div className="flex items-end justify-between">
                <h2 className="font-serif text-xl">{t("flash")}</h2>
                <p className="text-xs font-semibold text-blush-500">
                  {t("flashLeft")} {countdown}
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {flashItems.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}

          <section className="mt-8">
            <h2 className="font-serif text-xl">{t("bestsellers")}</h2>
            <div className="-mx-4 mt-3 flex gap-3 overflow-x-auto px-4 pb-2">
              {bestsellers.map((p) => (
                <div key={p.id} className="w-[210px] shrink-0">
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
