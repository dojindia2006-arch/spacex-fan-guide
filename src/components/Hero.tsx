export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <svg className="h-full w-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="earthGlow" cx="50%" cy="100%" r="60%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" />
              <stop offset="70%" stopColor="#030712" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="420" rx="380" ry="120" fill="url(#earthGlow)" />
          <circle cx="120" cy="80" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="280" cy="40" r="1" fill="#fff" opacity="0.6" />
          <circle cx="520" cy="90" r="1.2" fill="#fff" opacity="0.7" />
          <circle cx="680" cy="50" r="1" fill="#fff" opacity="0.5" />
          <circle cx="200" cy="160" r="1" fill="#fff" opacity="0.4" />
          <circle cx="600" cy="140" r="1.5" fill="#fff" opacity="0.6" />
        </svg>
      </div>

      {/* Animated rocket — decorative SVG, not official branding */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="rocket-flight">
          <svg
            className="rocket-ship h-16 w-16 sm:h-20 sm:w-20"
            viewBox="0 0 64 64"
            fill="none"
          >
            <defs>
              <linearGradient id="bodyGrad" x1="32" y1="4" x2="32" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f8fafc" />
                <stop offset="1" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="flameGrad" x1="32" y1="48" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fde68a" />
                <stop offset="0.45" stopColor="#f97316" />
                <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* exhaust plume */}
            <g className="rocket-flame">
              <path d="M26 48 Q32 64 38 48" fill="url(#flameGrad)" opacity="0.95" />
              <path d="M28 48 Q32 58 36 48" fill="#fef08a" opacity="0.8" />
            </g>
            {/* fins */}
            <path d="M20 40 L26 34 L26 46 Z" fill="#38bdf8" opacity="0.9" />
            <path d="M44 40 L38 34 L38 46 Z" fill="#38bdf8" opacity="0.9" />
            {/* body */}
            <path
              d="M32 6 C26 14 24 28 24 40 L40 40 C40 28 38 14 32 6 Z"
              fill="url(#bodyGrad)"
            />
            {/* window */}
            <circle cx="32" cy="22" r="4" fill="#0ea5e9" stroke="#e0f2fe" strokeWidth="1.2" />
            {/* nose highlight */}
            <path d="M32 6 C30 10 29 14 28.5 18" stroke="#fff" strokeWidth="1" opacity="0.5" />
          </svg>
          <div className="rocket-trail" />
        </div>
        <div className="rocket-flight rocket-flight--delay">
          <svg
            className="rocket-ship h-10 w-10 opacity-70"
            viewBox="0 0 64 64"
            fill="none"
          >
            <defs>
              <linearGradient id="bodyGrad2" x1="32" y1="4" x2="32" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e2e8f0" />
                <stop offset="1" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="flameGrad2" x1="32" y1="48" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fde68a" />
                <stop offset="0.5" stopColor="#fb923c" />
                <stop offset="1" stopColor="#ef4444" stopOpacity="0" />
              </linearGradient>
            </defs>
            <g className="rocket-flame">
              <path d="M26 48 Q32 64 38 48" fill="url(#flameGrad2)" />
            </g>
            <path d="M20 40 L26 34 L26 46 Z" fill="#7dd3fc" />
            <path d="M44 40 L38 34 L38 46 Z" fill="#7dd3fc" />
            <path
              d="M32 6 C26 14 24 28 24 40 L40 40 C40 28 38 14 32 6 Z"
              fill="url(#bodyGrad2)"
            />
            <circle cx="32" cy="22" r="3.5" fill="#38bdf8" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent sm:text-sm">
          비공식 · 팬 주도진의 정보 사이트
        </p>
        <h1
          id="hero-heading"
          className="glow-text text-3xl font-bold tracking-tight text-white sm:text-5xl"
        >
          SpaceX를 한눈에
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          SpaceX(Space Exploration Technologies Corp.)는 재사용 로켓과 우주 수송을
          목표로 하는 미국 민간 우주 기업입니다. 이 사이트는 공식 자료와 공개적으로
          알려진 내용을 바탕으로, 한국어로 쉽게 정리한{" "}
          <strong className="font-medium text-foreground">
            비공식 팬 주도진의 정보 페이지
          </strong>
          입니다. Starlink·관련 생태계(xAI, Grok 등)도 함께 소개합니다.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#rockets"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
          >
            주요 로켓 보기
          </a>
          <a
            href="#ecosystem"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            Starlink · xAI · Grok
          </a>
          <a
            href="#faq"
            className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
          >
            FAQ · 오해 바로잡기
          </a>
        </div>
      </div>
    </section>
  );
}
