"use client";

import { useEffect, useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { MemoryAlbum } from "@/components/MemoryAlbum";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";
import { startCelebrationAudio, stopCelebrationAudio } from "@/lib/sound";

export default function SurprisePage() {
  const { t, locale, muted } = useApp();
  const [open, setOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const message = locale === "fr" ? gift.messageFr : gift.messageEn;
  const title = locale === "fr" ? gift.giftTitleFr : gift.giftTitleEn;
  const desc = locale === "fr" ? gift.giftDescriptionFr : gift.giftDescriptionEn;

  function handleOpen() {
    setOpen(true);
    if (!muted) {
      void startCelebrationAudio((playing) => setIsMusicPlaying(playing));
    }
  }

  function toggleMusic() {
    if (isMusicPlaying) {
      stopCelebrationAudio();
      setIsMusicPlaying(false);
    } else {
      void startCelebrationAudio((playing) => setIsMusicPlaying(playing));
    }
  }

  useEffect(() => {
    return () => {
      stopCelebrationAudio();
    };
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 py-8 sm:px-6 sm:py-12">
      {open && <ConfettiBurst show pieces={90} />}

      {/* Floating Music Controls */}
      {open && (
        <div className="sticky top-16 z-30 mb-4 flex items-center justify-end w-full">
          <button
            type="button"
            onClick={toggleMusic}
            className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold shadow-md backdrop-blur-md transition-all ${
              isMusicPlaying
                ? "border-gold bg-gold-soft/90 text-rose-ink animate-pulse"
                : "border-blush-200 bg-white/90 text-rose-ink/70"
            }`}
            title={t("musicToggle")}
          >
            <span>{isMusicPlaying ? "🎶" : "🔇"}</span>
            <span>{isMusicPlaying ? t("musicPlaying") : "Musique en pause"}</span>
          </button>
        </div>
      )}

      <h1 className="text-center font-serif text-3xl font-bold sm:text-4xl">
        {t("surpriseTitle")}
      </h1>

      {!open ? (
        <button
          type="button"
          onClick={handleOpen}
          className="group mt-10 flex flex-col items-center transition-transform hover:scale-105 active:scale-95"
          aria-label={t("tapBox")}
        >
          <div className="relative h-52 w-52" style={{ perspective: 800 }}>
            <div className="absolute inset-x-6 bottom-0 h-32 rounded-b-2xl bg-blush-500 shadow-soft" />
            <div className="absolute inset-x-2 top-10 h-18 rounded-2xl bg-blush-400" />
            <div className="absolute left-1/2 top-6 h-40 w-8 -translate-x-1/2 bg-gold" />
            <div className="absolute inset-x-2 top-8 h-12 rounded-2xl bg-gold-soft" />
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-5xl">
              🎀
            </span>
          </div>
          <p className="mt-5 rounded-full bg-gold-soft/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-ink">
            {t("tapBox")} ✨
          </p>
        </button>
      ) : (
        <div className="mt-6 w-full">
          {/* Opened Box Animation */}
          <div className="relative mx-auto h-36 w-36" style={{ perspective: 900 }}>
            <div className="absolute inset-x-3 bottom-0 h-20 rounded-b-2xl bg-blush-500" />
            <div className="lid-open absolute inset-x-0 top-0 h-14 rounded-2xl bg-gold-soft" />
            <p className="absolute inset-0 flex items-center justify-center pt-6 text-4xl">
              ✨
            </p>
          </div>

          {/* Personalized Heartfelt Letter */}
          <article className="mt-8 rounded-3xl border border-blush-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="mb-4 flex items-center justify-between border-b border-blush-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blush-500">
                💌 Lettre Personnelle
              </span>
              <span className="text-xs text-rose-ink/60">
                Pour Mea La Milliardaire
              </span>
            </div>
            <p className="whitespace-pre-line font-sans text-[15px] leading-relaxed text-rose-ink/90 sm:text-base">
              {message}
            </p>
            <div className="mt-6 border-t border-blush-100 pt-4 text-right">
              <p className="font-script text-2xl text-rose-ink">{t("giftFrom")}</p>
              <p className="font-serif text-lg font-bold text-rose-ink">
                {gift.myName}
              </p>
            </div>
          </article>

          {/* Real Gift Reveal Box */}
          <article className="mt-6 rounded-3xl bg-gradient-to-br from-gold-soft via-blush-100 to-cream p-6 shadow-soft sm:p-8">
            <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-rose-ink">
              🎁 Le Vrai Cadeau
            </span>
            <p className="mt-3 font-serif text-2xl font-bold text-rose-ink sm:text-3xl">
              {title}
            </p>
            {gift.giftImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={gift.giftImage}
                alt=""
                className="mt-4 w-full rounded-2xl object-cover shadow-md"
              />
            ) : null}
            <p className="mt-3 text-[15px] leading-relaxed text-rose-ink/90 sm:text-base">
              {desc}
            </p>
          </article>

          {/* Memory Album: Retrospective Checkpoints */}
          <MemoryAlbum />
        </div>
      )}
    </div>
  );
}
