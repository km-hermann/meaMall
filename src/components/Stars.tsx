export function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < full ? "opacity-100" : "opacity-25"}>
          ★
        </span>
      ))}
    </span>
  );
}
