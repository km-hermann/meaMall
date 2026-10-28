"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/context/AppContext";
import {
  categories,
  products,
  searchProducts,
  type CategoryId,
} from "@/data/products";
import { useFlashSale } from "@/hooks/useFlashSale";

export function ShopHome() {
  const { t, locale } = useApp();
  const params = useSearchParams();
  const q = params.get("q") || "";
  const countdown = useFlashSale();

  const [activeCategory, setActiveCategory] = useState<CategoryId | "all">("all");

  const searchResults = q ? searchProducts(q) : [];
  const flashItems = products.filter((p) => p.flashSale);

  const activeCategoryInfo =
    activeCategory !== "all"
      ? categories.find((c) => c.id === activeCategory)
      : null;

  const currentProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-4">
      {/* Top Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blush-400 via-blush-500 to-gold px-5 py-6 text-white shadow-soft">
        <p className="font-serif text-2xl leading-snug">{t("banner")}</p>
        <p className="mt-1 text-sm text-white/90">{t("bannerSub")}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-xs">
          ⚡ {t("flash")} · {t("flashLeft")} {countdown}
        </div>
      </section>

      {/* Filter Bar: Replaces the old bulky grid and filters on the same page */}
      {!q && (
        <section className="sticky top-[58px] z-30 -mx-4 mt-4 bg-cream/95 px-4 py-2.5 backdrop-blur-md border-y border-blush-200/60 shadow-xs">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-0.5">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-blush-500 text-white shadow-soft scale-[1.02]"
                  : "border border-blush-200 bg-white text-rose-ink/80 hover:bg-cream hover:border-gold/50"
              }`}
            >
              <span>✨</span>
              <span>{locale === "fr" ? "Tout le Mall" : "All Items"}</span>
              <span
                className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  activeCategory === "all"
                    ? "bg-white/25 text-white"
                    : "bg-cream text-rose-ink/70"
                }`}
              >
                {products.length}
              </span>
            </button>

            {categories.map((c) => {
              const count = products.filter((p) => p.category === c.id).length;
              const isActive = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setActiveCategory(c.id)}
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blush-500 text-white shadow-soft scale-[1.02]"
                      : "border border-blush-200 bg-white text-rose-ink/80 hover:bg-cream hover:border-gold/50"
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{locale === "fr" ? c.name_fr : c.name_en}</span>
                  <span
                    className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-cream text-rose-ink/70"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Main Catalog Display */}
      {q ? (
        /* Search Mode */
        <section className="mt-6">
          <h2 className="font-serif text-xl">
            {t("results")} “{q}”
          </h2>
          {searchResults.length === 0 ? (
            <p className="mt-3 text-sm text-rose-ink/70">{t("noResults")}</p>
          ) : (
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {searchResults.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </section>
      ) : activeCategory !== "all" ? (
        /* Single Filtered Category Mode */
        <section className="mt-6">
          {activeCategoryInfo && (
            <div className="rounded-3xl border border-blush-200 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>
                  {activeCategoryInfo.emoji}
                </span>
                <div>
                  <h2 className="font-serif text-xl font-bold">
                    {locale === "fr"
                      ? activeCategoryInfo.name_fr
                      : activeCategoryInfo.name_en}
                  </h2>
                  <p className="mt-0.5 text-xs text-rose-ink/70">
                    {locale === "fr"
                      ? activeCategoryInfo.blurb_fr
                      : activeCategoryInfo.blurb_en}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {currentProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : (
        /* Default Mode: ALL products displayed cleanly and organized by department */
        <>
          {/* Flash Sales Section */}
          {flashItems.length > 0 && (
            <section className="mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">⚡</span>
                  <h2 className="font-serif text-lg font-bold sm:text-xl text-rose-ink">
                    {t("flash")}
                  </h2>
                </div>
                <p className="text-xs font-semibold text-blush-500">
                  {t("flashLeft")} {countdown}
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {flashItems.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}

          {/* Department by department: Clean, structured & complete */}
          <div className="mt-8 space-y-8">
            {categories.map((c) => {
              const catProducts = products.filter((p) => p.category === c.id);
              if (catProducts.length === 0) return null;

              return (
                <section key={c.id} className="scroll-mt-24">
                  <div className="flex items-center justify-between border-b border-blush-200/80 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl" aria-hidden>
                        {c.emoji}
                      </span>
                      <h2 className="font-serif text-lg font-bold sm:text-xl text-rose-ink">
                        {locale === "fr" ? c.name_fr : c.name_en}
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(c.id)}
                      className="rounded-full bg-cream border border-blush-200 px-3 py-1 text-xs font-semibold text-rose-ink/75 hover:bg-gold-soft/50 transition-colors"
                    >
                      {locale === "fr" ? "Filtrer" : "Filter"} ({catProducts.length})
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-rose-ink/65">
                    {locale === "fr" ? c.blurb_fr : c.blurb_en}
                  </p>

                  <div className="mt-3.5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {catProducts.map((p) => (
                      <ProductCard key={p.id} product={p} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
