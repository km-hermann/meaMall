"use client";

import { useEffect, useState } from "react";
import { pad } from "@/lib/format";
import { STORAGE_KEYS } from "@/lib/storage";

const SIX_HOURS = 6 * 60 * 60 * 1000;

export function useFlashSale() {
  const [left, setLeft] = useState(SIX_HOURS);

  useEffect(() => {
    let end = Number(localStorage.getItem(STORAGE_KEYS.flashEnd) || 0);
    if (!end || end < Date.now()) {
      end = Date.now() + SIX_HOURS;
      localStorage.setItem(STORAGE_KEYS.flashEnd, String(end));
    }
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const s = Math.floor(left / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${pad(h)}:${pad(m)}:${pad(sec)}`;
}
