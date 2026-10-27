export function QuantitySelector({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (n: number) => void;
  label: string;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-blush-200 bg-white">
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center text-xl text-rose-ink"
        onClick={() => onChange(Math.max(1, value - 1))}
        aria-label="−"
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-semibold" aria-label={label}>
        {value}
      </span>
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center text-xl text-rose-ink"
        onClick={() => onChange(value + 1)}
        aria-label="+"
      >
        +
      </button>
    </div>
  );
}
