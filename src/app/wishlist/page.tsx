"use client";

import Link from "next/link";
import { useState } from "react";
import { Ribbon } from "@/components/Ribbon";
import { Sparkles } from "@/components/Sparkles";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";

const FALLBACK_WISHLIST_PATHS = [
  gift.wishlistImage,
  "/wishlist/wishlist.jpeg",
  "/wishlist/wishlist.jpg",
  "/wishlist/wishlist.png",
];

export default function WishlistPage() {
  const { t, locale } = useApp();
  const [pathIdx, setPathIdx] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  function handleImgError() {
    if (pathIdx < FALLBACK_WISHLIST_PATHS.length - 1) {
      setPathIdx((prev) => prev + 1);
    } else {
      setImgFailed(true);
    }
  }

  const currentSrc = FALLBACK_WISHLIST_PATHS[pathIdx];

  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-start px-4 py-8 sm:py-12">
      <Sparkles />
      <Ribbon className="floaty absolute -left-6 top-8 w-20 opacity-70" />
      <Ribbon className="floaty absolute -right-4 top-28 w-16 rotate-12 opacity-70" />

      {/* Step Pill */}
      <span className="rounded-full border border-gold/40 bg-gold-soft/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-rose-ink">
        ✨ {locale === "fr" ? "Étape 1 : Le Protocole Milliardaire" : "Step 1: The Billionaire Protocol"}
      </span>

      <h1 className="mt-3 text-center font-serif text-3xl font-bold leading-tight sm:text-4xl">
        {t("wishlistTitle")}
      </h1>
      <p className="mt-2 text-center text-sm text-rose-ink/75 sm:text-base">
        {t("wishlistSub")}
      </p>

      {/* Wishlist Card Container */}
      <div className="relative mt-6 w-full rounded-3xl border border-blush-200 bg-white p-4 sm:p-6 shadow-soft">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-blush-300 bg-cream px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-ink/80 shadow-xs">
          {locale === "fr" ? "Reçue avant l'anniversaire 💌" : "Received before birthday 💌"}
        </div>

        {!imgFailed ? (
          <div className="relative mx-auto mt-2 flex flex-col items-center">
            <div
              onClick={() => setZoomed(true)}
              className="group relative flex max-h-[460px] w-full max-w-sm cursor-zoom-in items-center justify-center overflow-hidden rounded-2xl border border-blush-100 bg-cream/30 p-2 shadow-inner transition-all hover:border-gold/60"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentSrc}
                alt="Wishlist de Mea"
                onError={handleImgError}
                className="max-h-[440px] w-auto max-w-full rounded-xl object-contain shadow-sm transition-transform duration-300 group-hover:scale-[1.01]"
              />

              <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-3 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
                  🔍 {locale === "fr" ? "Agrandir" : "Zoom"}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setZoomed(true)}
              className="mt-2 text-xs font-medium text-rose-ink/65 hover:text-blush-500"
            >
              🔍 {locale === "fr" ? "Toucher la photo pour l'agrandir" : "Tap image to expand"}
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-blush-300 bg-cream/30 px-4 py-8 text-center">
            <span className="text-4xl" aria-hidden>
              📜
            </span>
            <p className="mt-2 font-serif text-lg font-semibold text-rose-ink">
              La Wishlist de Mea
            </p>
            <p className="mt-1 text-xs text-rose-ink/60">
              « Ma liste de souhaits pour mes 25 ans... »
            </p>

            <div className="mt-4 w-full max-w-xs space-y-2 rounded-xl bg-white/90 p-3 text-left text-xs text-rose-ink/80 shadow-inner">
              <p className="flex items-center gap-2">
                <span>🎀</span> <span>Appareils électroménagers chic</span>
              </p>
              <p className="flex items-center gap-2">
                <span>✨</span> <span>Vaisselle & couverts dorés</span>
              </p>
              <p className="flex items-center gap-2">
                <span>👑</span> <span>Et plein d&apos;autres pépites...</span>
              </p>
            </div>

            <p className="mt-4 rounded-full bg-gold-soft/60 px-3 py-1 text-[11px] font-medium text-rose-ink/80">
              💡 Glisse ta photo dans <code className="font-mono font-semibold">public/wishlist/wishlist.jpeg</code>
            </p>
          </div>
        )}

        {/* Punchline Card */}
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-gold-soft/80 via-blush-100 to-gold-soft/80 p-4 text-center shadow-xs">
          <p className="font-serif text-base font-semibold leading-relaxed text-rose-ink sm:text-lg">
            {t("wishlistPunchline")}
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <Link
        href="/shop"
        className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-blush-500 px-6 text-base font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
      >
        {t("wishlistCta")}
      </Link>

      <Link
        href="/shop"
        className="mt-3 text-xs font-medium text-rose-ink/60 underline hover:text-rose-ink"
      >
        {t("wishlistSkip")}
      </Link>

      {/* Lightbox Zoom Modal */}
      {zoomed && !imgFailed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative flex max-h-[92vh] max-w-lg flex-col items-center justify-center overflow-hidden rounded-3xl bg-white/95 p-3 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setZoomed(false)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-lg font-bold text-white transition-transform hover:scale-110"
              aria-label="Fermer"
            >
              ✕
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentSrc}
              alt="Wishlist de Mea en grand"
              className="max-h-[82vh] w-auto max-w-full rounded-2xl object-contain"
            />
            <p className="mt-2 text-xs font-medium text-rose-ink/70">
              {locale === "fr" ? "La liste de Mea pour ses 25 ans ✨" : "Mea's 25th birthday wishlist ✨"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
