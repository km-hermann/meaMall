"use client";

import { useState } from "react";
import { ConfettiBurst } from "@/components/ConfettiBurst";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";

export default function SurprisePage() {
  const { t, locale } = useApp();
  const [open, setOpen] = useState(false);
  const message = locale === "fr" ? gift.messageFr : gift.messageEn;
  const title = locale === "fr" ? gift.giftTitleFr : gift.giftTitleEn;
  const desc = locale === "fr" ? gift.giftDescriptionFr : gift.giftDescriptionEn;

  return (
    <div className="relative mx-auto flex w-full max-w-md flex-col items-center px-5 py-10">
      {open && <ConfettiBurst show pieces={70} />}
      <h1 className="text-center font-serif text-3xl">{t("surpriseTitle")}</h1>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-10 flex flex-col items-center"
          aria-label={t("tapBox")}
        >
          <div className="relative h-48 w-48" style={{ perspective: 800 }}>
            <div className="absolute inset-x-6 bottom-0 h-28 rounded-b-2xl bg-blush-500 shadow-soft" />
            <div className="absolute inset-x-2 top-10 h-16 rounded-2xl bg-blush-400" />
            <div className="absolute left-1/2 top-6 h-36 w-8 -translate-x-1/2 bg-gold" />
            <div className="absolute inset-x-2 top-8 h-12 rounded-2xl bg-gold-soft" />
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-4xl">
              🎀
            </span>
          </div>
          <p className="mt-4 text-sm text-rose-ink/70">{t("tapBox")}</p>
        </button>
      ) : (
        <div className="mt-8 w-full">
          <div className="relative mx-auto h-36 w-36" style={{ perspective: 900 }}>
            <div className="absolute inset-x-3 bottom-0 h-20 rounded-b-2xl bg-blush-500" />
            <div className="lid-open absolute inset-x-0 top-0 h-14 rounded-2xl bg-gold-soft" />
            <p className="absolute inset-0 flex items-center justify-center pt-6 text-4xl">
              ✨
            </p>
          </div>

          <article className="mt-6 rounded-3xl border border-blush-200 bg-white p-5 shadow-soft">
            <p className="whitespace-pre-line text-[15px] leading-relaxed">
              {message}
            </p>
          </article>

          <article className="mt-4 rounded-3xl bg-gradient-to-br from-gold-soft to-blush-200 p-5 shadow-soft">
            <p className="font-script text-3xl text-rose-ink">{title}</p>
            {gift.giftImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={gift.giftImage}
                alt=""
                className="mt-3 w-full rounded-2xl object-cover"
              />
            ) : null}
            <p className="mt-3 text-[15px] leading-relaxed">{desc}</p>
          </article>

          <p className="mt-6 text-center font-script text-3xl">
            {t("giftFrom")}
          </p>
          <p className="text-center font-serif text-xl">{gift.myName}</p>
        </div>
      )}
    </div>
  );
}
