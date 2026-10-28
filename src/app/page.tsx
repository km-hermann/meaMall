"use client";

import Link from "next/link";
import { Ribbon } from "@/components/Ribbon";
import { Sparkles } from "@/components/Sparkles";
import { useApp } from "@/context/AppContext";
import { gift } from "@/data/gift";

export default function WelcomePage() {
  const { t, locale, setLocale } = useApp();
  const date = locale === "fr" ? gift.birthdayDate : gift.birthdayDateEn;

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-10">
      <Sparkles />
      <Ribbon className="floaty absolute -left-4 top-16 w-24 opacity-80" />
      <Ribbon className="floaty absolute -right-3 bottom-24 w-20 rotate-12 opacity-80" />

      <p className="mb-3 rounded-full border border-gold/40 bg-gold-soft/70 px-4 py-1.5 text-xs font-semibold tracking-wide text-rose-ink">
        {locale === "fr" ? gift.birthdayDate : gift.birthdayDateEn} 🎀
      </p>

      <h1 className="max-w-sm text-center font-serif text-4xl leading-tight text-rose-ink sm:text-5xl">
        {t("welcomeTitle")}
        <span className="mt-2 block font-script text-5xl text-blush-500">
          {gift.herNickname} 👑
        </span>
      </h1>

      <p className="mt-4 max-w-sm text-center text-base leading-relaxed text-rose-ink/80">
        {t("welcomeSub").replace("{date}", date)}
      </p>
      <p className="mt-2 text-center text-sm text-rose-ink/60">{t("startHint")}</p>

      <Link
        href="/wishlist"
        className="mt-8 flex h-14 min-w-[240px] items-center justify-center rounded-full bg-blush-500 px-8 text-base font-semibold text-white shadow-soft transition-transform hover:scale-105"
      >
        {t("welcomeCta")}
      </Link>

      <button
        type="button"
        onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
        className="mt-5 h-11 rounded-full border border-blush-200 bg-white/80 px-5 text-sm font-semibold"
      >
        {locale === "fr" ? "English" : "Français"}
      </button>
    </div>
  );
}
