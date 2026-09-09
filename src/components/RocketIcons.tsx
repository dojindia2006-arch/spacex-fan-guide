type IconProps = { className?: string };

export function Falcon9Icon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 120" className={className} aria-hidden="true" fill="none">
      <rect x="26" y="8" width="12" height="70" rx="2" fill="#38bdf8" opacity="0.85" />
      <polygon points="32,2 40,12 24,12" fill="#7dd3fc" />
      <rect x="24" y="78" width="16" height="8" rx="1" fill="#0ea5e9" />
      <path d="M24 86 L20 108 L28 96 L32 112 L36 96 L44 108 L40 86 Z" fill="#f97316" opacity="0.9" />
      <circle cx="32" cy="30" r="2" fill="#0f172a" />
      <circle cx="32" cy="50" r="2" fill="#0f172a" />
    </svg>
  );
}

export function FalconHeavyIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 80 120" className={className} aria-hidden="true" fill="none">
      <rect x="10" y="20" width="10" height="60" rx="1.5" fill="#38bdf8" opacity="0.7" />
      <rect x="34" y="8" width="12" height="72" rx="2" fill="#38bdf8" opacity="0.9" />
      <rect x="60" y="20" width="10" height="60" rx="1.5" fill="#38bdf8" opacity="0.7" />
      <polygon points="40,2 48,12 32,12" fill="#7dd3fc" />
      <path d="M10 80 L6 100 L14 90 L15 104 L16 90 L24 100 L20 80 Z" fill="#f97316" opacity="0.8" />
      <path d="M34 80 L30 100 L38 90 L40 108 L42 90 L50 100 L46 80 Z" fill="#f97316" opacity="0.9" />
      <path d="M60 80 L56 100 L64 90 L65 104 L66 90 L74 100 L70 80 Z" fill="#f97316" opacity="0.8" />
    </svg>
  );
}

export function StarshipIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 120" className={className} aria-hidden="true" fill="none">
      <ellipse cx="32" cy="18" rx="10" ry="14" fill="#e2e8f0" opacity="0.9" />
      <rect x="22" y="28" width="20" height="55" rx="4" fill="#cbd5e1" opacity="0.85" />
      <path d="M18 78 L22 83 L42 83 L46 78 L42 88 L22 88 Z" fill="#94a3b8" />
      <path d="M22 88 L18 112 L26 100 L32 116 L38 100 L46 112 L42 88 Z" fill="#f97316" opacity="0.9" />
      <rect x="26" y="40" width="12" height="6" rx="1" fill="#0ea5e9" opacity="0.6" />
      <rect x="26" y="52" width="12" height="6" rx="1" fill="#0ea5e9" opacity="0.6" />
    </svg>
  );
}

export function DragonIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 80" className={className} aria-hidden="true" fill="none">
      <ellipse cx="32" cy="28" rx="18" ry="22" fill="#38bdf8" opacity="0.75" />
      <ellipse cx="32" cy="22" rx="10" ry="8" fill="#0f172a" opacity="0.5" />
      <path d="M16 42 L20 58 L44 58 L48 42 Z" fill="#0ea5e9" opacity="0.8" />
      <rect x="24" y="58" width="16" height="6" rx="1" fill="#64748b" />
      <circle cx="32" cy="20" r="4" fill="#7dd3fc" opacity="0.5" />
    </svg>
  );
}

export function ReuseIcon({ className = "h-16 w-16" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <path
        d="M48 20 A20 20 0 1 0 48 44"
        stroke="#38bdf8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <polygon points="48,12 56,22 44,22" fill="#38bdf8" />
      <rect x="26" y="22" width="8" height="28" rx="1.5" fill="#7dd3fc" opacity="0.85" />
      <polygon points="30,16 35,24 25,24" fill="#e2e8f0" />
    </svg>
  );
}
