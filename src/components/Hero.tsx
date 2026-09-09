export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      {/* deep night sky layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="launch-sky" />
        <div className="launch-stars launch-stars--a" />
        <div className="launch-stars launch-stars--b" />
        <div className="launch-horizon" />
      </div>

      {/* cinematic rocket stage */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="launch-stage">
          {/* exhaust glow bloom */}
          <div className="launch-bloom" />
          {/* smoke columns */}
          <div className="launch-smoke launch-smoke--1" />
          <div className="launch-smoke launch-smoke--2" />
          <div className="launch-smoke launch-smoke--3" />

          <div className="launch-rocket-wrap">
            <svg
              className="launch-rocket"
              viewBox="0 0 200 520"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fuselage" x1="100" y1="20" x2="100" y2="360" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ffffff" />
                  <stop offset="0.35" stopColor="#e2e8f0" />
                  <stop offset="1" stopColor="#64748b" />
                </linearGradient>
                <linearGradient id="finGrad" x1="40" y1="280" x2="100" y2="360" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0ea5e9" />
                  <stop offset="1" stopColor="#0369a1" />
                </linearGradient>
                <linearGradient id="plumeCore" x1="100" y1="360" x2="100" y2="520" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff7ed" />
                  <stop offset="0.2" stopColor="#fde68a" />
                  <stop offset="0.45" stopColor="#fb923c" />
                  <stop offset="0.75" stopColor="#ef4444" />
                  <stop offset="1" stopColor="#7f1d1d" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="plumeOuter" x1="100" y1="360" x2="100" y2="520" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fdba74" stopOpacity="0.9" />
                  <stop offset="0.5" stopColor="#ea580c" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#431407" stopOpacity="0" />
                </linearGradient>
                <filter id="softGlow" x="-50%" y="-20%" width="200%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* outer plume */}
              <g className="plume-outer" filter="url(#softGlow)">
                <path d="M55 370 Q100 520 145 370" fill="url(#plumeOuter)" />
                <path d="M40 375 Q100 540 160 375" fill="url(#plumeOuter)" opacity="0.55" />
              </g>
              {/* core plume */}
              <g className="plume-core">
                <path d="M72 365 Q100 500 128 365" fill="url(#plumeCore)" />
                <path d="M82 365 Q100 470 118 365" fill="#fffbeb" opacity="0.85" />
              </g>
              {/* ember sparks */}
              <g className="plume-sparks" stroke="#fde68a" strokeWidth="2" strokeLinecap="round">
                <line x1="88" y1="420" x2="84" y2="455" />
                <line x1="112" y1="430" x2="118" y2="470" />
                <line x1="100" y1="440" x2="100" y2="495" />
                <line x1="76" y1="405" x2="68" y2="435" />
                <line x1="124" y1="410" x2="134" y2="445" />
              </g>

              {/* grid fins hint */}
              <rect x="58" y="210" width="14" height="28" rx="2" fill="#94a3b8" opacity="0.85" />
              <rect x="128" y="210" width="14" height="28" rx="2" fill="#94a3b8" opacity="0.85" />

              {/* landing legs / fins */}
              <path d="M48 300 L78 270 L78 340 Z" fill="url(#finGrad)" />
              <path d="M152 300 L122 270 L122 340 Z" fill="url(#finGrad)" />
              <path d="M70 320 L90 300 L90 355 Z" fill="#38bdf8" opacity="0.7" />
              <path d="M130 320 L110 300 L110 355 Z" fill="#38bdf8" opacity="0.7" />

              {/* engines */}
              <ellipse cx="85" cy="358" rx="14" ry="8" fill="#1e293b" />
              <ellipse cx="115" cy="358" rx="14" ry="8" fill="#1e293b" />
              <ellipse cx="100" cy="360" rx="16" ry="9" fill="#0f172a" />
              <ellipse cx="85" cy="356" rx="8" ry="4" fill="#f97316" className="engine-glow" />
              <ellipse cx="115" cy="356" rx="8" ry="4" fill="#f97316" className="engine-glow" />
              <ellipse cx="100" cy="358" rx="9" ry="4" fill="#fde68a" className="engine-glow" />

              {/* fuselage */}
              <path
                d="M100 18
                   C78 55 70 120 68 200
                   L68 340
                   Q100 355 132 340
                   L132 200
                   C130 120 122 55 100 18 Z"
                fill="url(#fuselage)"
              />
              {/* stripe */}
              <path d="M72 250 H128" stroke="#0ea5e9" strokeWidth="6" opacity="0.85" />
              <path d="M74 265 H126" stroke="#e2e8f0" strokeWidth="3" opacity="0.5" />

              {/* windows */}
              <ellipse cx="100" cy="110" rx="16" ry="20" fill="#0c4a6e" stroke="#bae6fd" strokeWidth="3" />
              <ellipse cx="100" cy="110" rx="8" ry="10" fill="#38bdf8" opacity="0.55" />

              {/* nose highlight */}
              <path d="M100 18 C92 40 88 70 86 100" stroke="#fff" strokeWidth="3" opacity="0.45" />
            </svg>
          </div>

          {/* ground shockwave ring */}
          <div className="launch-shock" />
          <div className="launch-shock launch-shock--2" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm sm:text-sm">
          비공식 · 팬 주도진의 정보 사이트
        </p>
        <h1
          id="hero-heading"
          className="glow-text text-3xl font-bold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.65)] sm:text-5xl"
        >
          SpaceX를 한눈에
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] sm:text-lg">
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
            className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-accent/50 hover:text-accent"
          >
            Starlink · xAI · Grok
          </a>
          <a
            href="#faq"
            className="rounded-full border border-border bg-background/40 px-6 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition hover:border-accent/50 hover:text-accent"
          >
            FAQ · 오해 바로잡기
          </a>
        </div>
      </div>
    </section>
  );
}
