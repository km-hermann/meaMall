"use client";

import { useEffect, useMemo, useState } from "react";

const COLORS = ["#f4a7b9", "#d4af37", "#fff6ea", "#e8a0bf", "#c9a227", "#ffffff"];

export function ConfettiBurst({
  show,
  pieces = 42,
}: {
  show: boolean;
  pieces?: number;
}) {
  const [visible, setVisible] = useState(show);
  const bits = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.25,
        dur: 0.9 + Math.random() * 0.7,
        rot: Math.random() * 360,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 8,
      })),
    [pieces, show],
  );

  useEffect(() => {
    if (!show) return;
    setVisible(true);
    const t = window.setTimeout(() => setVisible(false), 1600);
    return () => window.clearTimeout(t);
  }, [show]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      {bits.map((b) => (
        <span
          key={`${b.id}-${b.left}`}
          className="absolute top-[-12px] rounded-sm"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size * 0.6,
            background: b.color,
            animation: `confetti-fall ${b.dur}s ease-in ${b.delay}s forwards`,
            transform: `rotate(${b.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
}
