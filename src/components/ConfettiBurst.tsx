"use client";

import { useEffect, useMemo, useState } from "react";

const COLORS = ["#f4a7b9", "#d4af37", "#fff6ea", "#e8a0bf", "#c9a227", "#ffffff"];

function pseudoRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export function ConfettiBurst({
  show,
  pieces = 42,
}: {
  show: boolean;
  pieces?: number;
}) {
  const [visible, setVisible] = useState(show);
  const [prevShow, setPrevShow] = useState(show);

  if (show !== prevShow) {
    setPrevShow(show);
    setVisible(show);
  }

  const bits = useMemo(
    () =>
      Array.from({ length: pieces }, (_, i) => ({
        id: i,
        left: pseudoRandom(i * 3 + 1) * 100,
        delay: pseudoRandom(i * 5 + 2) * 0.25,
        dur: 0.9 + pseudoRandom(i * 7 + 3) * 0.7,
        rot: pseudoRandom(i * 11 + 4) * 360,
        color: COLORS[i % COLORS.length],
        size: 6 + pseudoRandom(i * 13 + 5) * 8,
      })),
    [pieces],
  );

  useEffect(() => {
    if (!show) return;
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
