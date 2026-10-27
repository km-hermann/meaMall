type Props = { art: string; className?: string };

export function ProductArt({ art, className = "" }: Props) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        aria-hidden
        role="img"
      >
        <defs>
          <linearGradient id={`${art}-bg`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff6ea" />
            <stop offset="100%" stopColor="#f8c8d4" />
          </linearGradient>
          <linearGradient id={`${art}-gold`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3e5ab" />
            <stop offset="100%" stopColor="#c9a227" />
          </linearGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#${art}-bg)`} />
        <circle cx="28" cy="30" r="3" fill="#fff" opacity="0.9" />
        <circle cx="170" cy="40" r="2.4" fill="#fff" opacity="0.85" />
        <circle cx="150" cy="170" r="2" fill="#d4af37" opacity="0.7" />
        <path
          d="M168 18c6 4 8 12 4 18"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          opacity="0.5"
        />
        {shape(art)}
      </svg>
    </div>
  );
}

function shape(art: string) {
  switch (art) {
    case "microwave":
      return (
        <>
          <rect x="40" y="55" width="120" height="90" rx="10" fill="#fff" />
          <rect x="50" y="68" width="72" height="50" rx="6" fill="#f4d4dc" />
          <rect x="130" y="68" width="20" height="64" rx="4" fill="#f8e6b0" />
          <circle cx="140" cy="84" r="5" fill="#c9a227" />
          <circle cx="140" cy="102" r="5" fill="#e8a0bf" />
        </>
      );
    case "smoothie":
      return (
        <>
          <path d="M80 70h40l8 70H72z" fill="#fff" />
          <path d="M84 78h32l6 40H78z" fill="#f4a7b9" />
          <rect x="88" y="148" width="24" height="10" rx="3" fill="#d4af37" />
          <ellipse cx="100" cy="68" rx="22" ry="8" fill="#fff8f0" />
          <path d="M92 50c8 10 16 10 24 0" fill="none" stroke="#c9a227" strokeWidth="3" />
        </>
      );
    case "blender":
      return (
        <>
          <path d="M70 50h60l10 70H60z" fill="#fff" />
          <path d="M76 58h48l7 40H69z" fill="#e8c4d0" />
          <rect x="72" y="122" width="56" height="28" rx="8" fill="#d4af37" />
          <rect x="92" y="40" width="16" height="14" rx="3" fill="#c9a227" />
        </>
      );
    case "toaster":
      return (
        <>
          <rect x="45" y="80" width="110" height="60" rx="14" fill="#fff" />
          <rect x="58" y="92" width="36" height="12" rx="3" fill="#f4a7b9" />
          <rect x="106" y="92" width="36" height="12" rx="3" fill="#f4a7b9" />
          <circle cx="138" cy="122" r="6" fill="#d4af37" />
          <rect x="70" y="68" width="16" height="16" rx="2" fill="#f8e6b0" />
          <rect x="114" y="68" width="16" height="16" rx="2" fill="#f8e6b0" />
        </>
      );
    case "kettle":
      return (
        <>
          <ellipse cx="100" cy="150" rx="36" ry="10" fill="#f4d4dc" />
          <path d="M70 90c0-28 60-28 60 0v50H70z" fill="#fff" />
          <path d="M130 100c22 4 22 34 0 38" fill="none" stroke="#d4af37" strokeWidth="6" />
          <rect x="92" y="68" width="16" height="18" rx="4" fill="#c9a227" />
        </>
      );
    case "mixer":
      return (
        <>
          <rect x="58" y="130" width="90" height="18" rx="8" fill="#d4af37" />
          <path d="M78 70h20v60H78z" fill="#fff" />
          <path d="M78 70h54c4 18-10 28-28 30" fill="#f4a7b9" />
          <ellipse cx="128" cy="118" rx="16" ry="22" fill="#fff8f0" stroke="#e8a0bf" />
        </>
      );
    case "vacuum":
      return (
        <>
          <rect x="92" y="40" width="14" height="90" rx="7" fill="#d4af37" />
          <circle cx="78" cy="140" r="28" fill="#fff" />
          <circle cx="78" cy="140" r="14" fill="#f4a7b9" />
          <rect x="100" y="148" width="50" height="12" rx="6" fill="#c9a227" />
        </>
      );
    case "pots":
      return (
        <>
          <ellipse cx="100" cy="150" rx="50" ry="14" fill="#f4d4dc" />
          <path d="M60 90h80v55H60z" fill="#fff" />
          <path d="M52 100h16M132 100h16" stroke="#d4af37" strokeWidth="6" />
          <ellipse cx="100" cy="90" rx="40" ry="10" fill="#f8e6b0" />
        </>
      );
    case "pans":
      return (
        <>
          <ellipse cx="88" cy="110" rx="48" ry="16" fill="#fff" />
          <ellipse cx="88" cy="104" rx="40" ry="12" fill="#f4a7b9" />
          <path d="M128 104h48" stroke="#d4af37" strokeWidth="8" strokeLinecap="round" />
        </>
      );
    case "plates":
      return (
        <>
          <ellipse cx="100" cy="108" rx="58" ry="22" fill="#fff" />
          <ellipse cx="100" cy="108" rx="36" ry="12" fill="#fce4ec" />
          <ellipse cx="100" cy="108" rx="16" ry="6" fill="#f8e6b0" />
        </>
      );
    case "bowls":
      return (
        <>
          <path d="M55 90h90c-4 40-86 40-90 0z" fill="#fff" />
          <path d="M62 90h76c-4 28-72 28-76 0z" fill="#f4d4dc" />
          <ellipse cx="100" cy="90" rx="45" ry="10" fill="#fff8f0" />
        </>
      );
    case "glasses":
      return (
        <>
          <path d="M70 55h24l-6 70H76z" fill="#fff" opacity="0.95" />
          <path d="M106 55h24l-6 70h-12z" fill="#f8e6b0" opacity="0.95" />
          <rect x="74" y="128" width="16" height="8" fill="#d4af37" />
          <rect x="110" y="128" width="16" height="8" fill="#d4af37" />
        </>
      );
    case "cups":
      return (
        <>
          <path d="M70 80h50v50H70z" fill="#fff" />
          <path d="M120 92c18 2 18 28 0 32" fill="none" stroke="#d4af37" strokeWidth="6" />
          <ellipse cx="95" cy="80" rx="25" ry="8" fill="#f4a7b9" />
        </>
      );
    case "cutlery":
      return (
        <>
          <rect x="70" y="50" width="8" height="100" rx="4" fill="#d4af37" />
          <rect x="96" y="50" width="8" height="100" rx="4" fill="#c9a227" />
          <rect x="122" y="50" width="8" height="100" rx="4" fill="#d4af37" />
          <ellipse cx="74" cy="58" rx="10" ry="16" fill="#fff" />
          <path d="M122 50l12 18-12 8z" fill="#fff" />
        </>
      );
    case "tray":
      return (
        <>
          <ellipse cx="100" cy="120" rx="70" ry="28" fill="#d4af37" />
          <ellipse cx="100" cy="116" rx="58" ry="20" fill="#fff8f0" />
          <rect x="36" y="110" width="10" height="16" rx="4" fill="#c9a227" />
          <rect x="154" y="110" width="10" height="16" rx="4" fill="#c9a227" />
        </>
      );
    case "salad":
      return (
        <>
          <path d="M50 100h100c-6 44-94 44-100 0z" fill="#fff" />
          <circle cx="88" cy="108" r="10" fill="#f4a7b9" />
          <circle cx="110" cy="112" r="8" fill="#e8c4d0" />
          <circle cx="100" cy="98" r="7" fill="#f8e6b0" />
        </>
      );
    case "jars":
      return (
        <>
          <rect x="48" y="70" width="28" height="70" rx="6" fill="#fff" />
          <rect x="86" y="62" width="28" height="78" rx="6" fill="#fce4ec" />
          <rect x="124" y="74" width="28" height="66" rx="6" fill="#fff8f0" />
          <rect x="52" y="62" width="20" height="12" rx="3" fill="#d4af37" />
          <rect x="90" y="54" width="20" height="12" rx="3" fill="#d4af37" />
          <rect x="128" y="66" width="20" height="12" rx="3" fill="#d4af37" />
        </>
      );
    case "spices":
      return (
        <>
          <rect x="55" y="80" width="90" height="50" rx="8" fill="#fff" />
          <rect x="64" y="90" width="16" height="30" rx="3" fill="#f4a7b9" />
          <rect x="92" y="90" width="16" height="30" rx="3" fill="#d4af37" />
          <rect x="120" y="90" width="16" height="30" rx="3" fill="#e8c4d0" />
        </>
      );
    case "airpods":
      return (
        <>
          <rect x="62" y="70" width="76" height="70" rx="18" fill="#fff" />
          <rect x="78" y="86" width="20" height="38" rx="10" fill="#f4d4dc" />
          <rect x="102" y="86" width="20" height="38" rx="10" fill="#f4d4dc" />
          <circle cx="100" cy="78" r="4" fill="#d4af37" />
        </>
      );
    default:
      return <circle cx="100" cy="100" r="40" fill="#fff" />;
  }
}
