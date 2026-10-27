export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <span className="sparkle absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-white/90" />
      <span className="sparkle absolute right-[12%] top-[28%] h-1 w-1 rounded-full bg-gold-soft delay-200" />
      <span className="sparkle absolute left-[22%] bottom-[20%] h-1 w-1 rounded-full bg-white delay-500" />
      <span className="sparkle absolute right-[20%] bottom-[16%] h-1.5 w-1.5 rounded-full bg-gold-soft delay-700" />
    </div>
  );
}
