"use client";

import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";

export function Footer() {
  const pathname = usePathname();
  const { t } = useApp();
  if (pathname === "/") return null;
  return (
    <footer className="mt-auto border-t border-blush-200/60 bg-cream/80 px-4 py-6 text-center text-xs text-rose-ink/70">
      {t("footer")} • 25.10
    </footer>
  );
}
