import LaunchVisual from "./LaunchVisual";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28"
      aria-labelledby="hero-heading"
    >
      <LaunchVisual />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent backdrop-blur-sm sm:text-sm">
          비공식 · 팬 주도진의 정보 사이트
        </p>
        <h1
          id="hero-heading"
          className="glow-text text-3xl font-bold tracking-tight text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.75)] sm:text-5xl"
        >
          SpaceX를 한눈에
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)] sm:text-lg">
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
