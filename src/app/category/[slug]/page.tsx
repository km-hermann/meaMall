"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { useApp } from "@/context/AppContext";
import {
  getCategory,
  productsByCategory,
  type CategoryId,
} from "@/data/products";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t } = useApp();
  const category = getCategory(slug);
  if (!category) {
    return (
      <div className="p-6 text-center">
        <p>Introuvable</p>
        <Link href="/shop" className="mt-4 inline-block text-blush-500">
          {t("backHome")}
        </Link>
      </div>
    );
  }
  const items = productsByCategory(category.id as CategoryId);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-5">
      <p className="text-3xl" aria-hidden>
        {category.emoji}
      </p>
      <h1 className="mt-1 font-serif text-3xl">
        {locale === "fr" ? category.name_fr : category.name_en}
      </h1>
      <p className="mt-2 text-sm text-rose-ink/70">
        {locale === "fr" ? category.blurb_fr : category.blurb_en}
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
