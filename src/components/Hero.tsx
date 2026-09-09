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
