export function Ribbon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 48"
      className={className}
      aria-hidden
      fill="none"
    >
      <path
        d="M40 22c-10-16-28-16-28 2 0 14 18 20 28 24 10-4 28-10 28-24 0-18-18-18-28-2z"
        fill="#f4a7b9"
      />
      <path d="M40 22c10-16 28-16 28 2" stroke="#d4af37" strokeWidth="2" />
      <circle cx="40" cy="24" r="6" fill="#d4af37" />
    </svg>
  );
}
