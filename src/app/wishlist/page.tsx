"use client";

import Link from "next/link";
import { useState } from "react";
import { Ribbon } from "@/components/Ribbon";
import { Sparkles } from "@/components/Sparkles";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";

export default function WishlistPage() {
  const { t } = useApp();
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto flex w-full max-w-lg flex-1 flex-col items-center justify-center px-4 py-8">
      <Sparkles />
      <Ribbon className="floaty absolute -left-6 top-8 w-20 opacity-70" />
      <Ribbon className="floaty absolute -right-4 top-28 w-16 rotate-12 opacity-70" />

      {/* Step Pill */}
      <span className="rounded-full border border-gold/40 bg-gold-soft/80 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-rose-ink">
        ✨ Étape 1 : Le Protocole Milliardaire
      </span>

      <h1 className="mt-3 text-center font-serif text-3xl font-bold leading-tight sm:text-4xl">
        {t("wishlistTitle")}
      </h1>
      <p className="mt-2 text-center text-sm text-rose-ink/75 sm:text-base">
        {t("wishlistSub")}
      </p>

      {/* Wishlist Card / Photo */}
      <div className="relative mt-6 w-full rounded-3xl border border-blush-200 bg-white p-5 shadow-soft">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-blush-300 bg-cream px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-rose-ink/70">
          Reçue avant l&apos;anniversaire 💌
        </div>

        {!imgError ? (
          <div className="relative overflow-hidden rounded-2xl border border-blush-100 bg-cream/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={gift.wishlistImage}
              alt="Wishlist de Mea"
              onError={() => setImgError(true)}
              className="max-h-[360px] w-full object-contain"
            />
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
              💡 Glisse ta photo dans <code className="font-mono font-semibold">public/wishlist/wishlist.jpg</code>
            </p>
          </div>
        )}

        {/* Punchline Card */}
        <div className="mt-5 rounded-2xl bg-gradient-to-r from-gold-soft/80 via-blush-100 to-gold-soft/80 p-4 text-center">
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
    </div>
  );
}
