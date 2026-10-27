"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useApp } from "@/context/AppContext";
import { STORAGE_KEYS } from "@/lib/storage";

const STEPS = ["step1", "step2", "step3", "step4"] as const;

export default function TrackPage() {
  const { t, order } = useApp();
  const [step, setStep] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(STORAGE_KEYS.tracking) || 0);
    setStep(Number.isFinite(saved) ? saved : 0);
  }, []);

  useEffect(() => {
    if (step >= 3) return;
    const id = window.setTimeout(() => {
      setStep((s) => {
        const next = Math.min(3, s + 1);
        localStorage.setItem(STORAGE_KEYS.tracking, String(next));
        return next;
      });
    }, 1800);
    return () => window.clearTimeout(id);
  }, [step]);

  return (
    <div className="mx-auto w-full max-w-md px-5 py-8">
      <h1 className="text-center font-serif text-3xl">{t("trackTitle")}</h1>
      {order && (
        <p className="mt-2 text-center text-sm text-rose-ink/60">{order.id}</p>
      )}

      <ol className="mt-8 space-y-4">
        {STEPS.map((key, i) => {
          const done = i <= step;
          const current = i === step;
          return (
            <li
              key={key}
              className={`flex items-center gap-3 rounded-3xl border p-4 ${
                done
                  ? "border-gold bg-white shadow-soft"
                  : "border-blush-200/70 bg-white/50 opacity-60"
              }`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${
                  done ? "bg-blush-400 text-white" : "bg-cream"
                }`}
              >
                {done ? "♥" : i + 1}
              </span>
              <span className={`font-serif text-lg ${current ? "text-blush-500" : ""}`}>
                {t(key)}
              </span>
            </li>
          );
        })}
      </ol>

      {step >= 3 && (
        <Link
          href="/surprise"
          className="mt-8 flex h-14 items-center justify-center rounded-full bg-gold font-semibold text-rose-ink shadow-soft"
        >
          {t("surpriseCta")}
        </Link>
      )}
    </div>
  );
}
