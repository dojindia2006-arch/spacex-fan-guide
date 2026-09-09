const companies = [
  {
    name: "Tesla",
    href: "https://www.tesla.com",
    label: "전기차·에너지",
    Logo: TeslaMark,
  },
  {
    name: "NVIDIA",
    href: "https://www.nvidia.com",
    label: "AI·GPU 컴퓨팅",
    Logo: NvidiaMark,
  },
  {
    name: "Anthropic",
    href: "https://www.anthropic.com",
    label: "AI 연구·Claude",
    Logo: AnthropicMark,
  },
  {
    name: "X",
    href: "https://x.com",
    label: "소셜·실시간 정보",
    Logo: XMark,
  },
  {
    name: "OpenAI",
    href: "https://openai.com",
    label: "AI 연구·ChatGPT",
    Logo: OpenAIMark,
  },
  {
    name: "Google",
    href: "https://www.google.com",
    label: "검색·클라우드·AI",
    Logo: GoogleMark,
  },
];

const links = [
  {
    name: "SpaceX 공식 웹사이트",
    href: "https://www.spacex.com",
    desc: "로켓·미션·업데이트의 1차 출처",
  },
  {
    name: "NASA",
    href: "https://www.nasa.gov",
    desc: "ISS·유인·과학 미션 관련 공식 정보",
  },
  {
    name: "SpaceX X(Twitter)",
    href: "https://x.com/SpaceX",
    desc: "공식 계정 발표·발사 중계 안내",
  },
  {
    name: "웹페이지 개발자 · @Mmfxbow",
    href: "https://x.com/Mmfxbow",
    desc: "이 사이트 제작자 주도진의 X(Twitter)",
  },
];

function TeslaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M8 18h48c-8 4-16 8-24 26C24 26 16 22 8 18Z"
        fill="currentColor"
      />
      <path d="M30 22h4v28h-4z" fill="currentColor" />
    </svg>
  );
}

function NvidiaMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M10 40c10-18 22-26 42-28-12 10-20 22-22 40-8-6-14-10-20-12Z"
        fill="currentColor"
      />
      <circle cx="44" cy="20" r="4" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

function AnthropicMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M18 48 L32 12 L46 48 Z" fill="none" stroke="currentColor" strokeWidth="5" />
      <path d="M24 36h16" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}

function XMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M14 14h12l10 14 12-14h12L38 34l14 16H40L28 34 14 50H2l16-18L2 14h12z"
        fill="currentColor"
      />
    </svg>
  );
}

function OpenAIMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(-60 32 32)" />
      <ellipse cx="32" cy="32" rx="20" ry="8" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path d="M32 12a20 20 0 1 0 0 40c10 0 16-4 20-10l-8-6c-2 3-6 6-12 6a12 12 0 1 1 0-24c3 0 6 1 8 3l6-6C42 13 37 12 32 12Z" fill="currentColor" />
    </svg>
  );
}

export default function LearnMore() {
  return (
    <section
      id="learn-more"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="learn-more-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="learn-more-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          더 알아보기
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          우주·AI·전기차 등 이야기에서 자주 함께 언급되는 관련 기업과, 공식·공공
          성격의 외부 링크입니다.
        </p>

        <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-accent">
          관련 기업
        </h3>
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {companies.map(({ name, href, label, Logo }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center transition hover:border-accent/40"
              >
                <Logo className="h-10 w-10 text-white" />
                <span className="text-sm font-semibold text-white">{name}</span>
                <span className="text-[11px] leading-snug text-muted">{label}</span>
              </a>
            </li>
          ))}
        </ul>

        <h3 className="mt-12 text-sm font-semibold uppercase tracking-wide text-accent">
          바로가기
        </h3>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition hover:text-accent"
              >
                <span className="font-semibold text-white">{link.name}</span>
                <span className="mt-2 text-sm text-muted">{link.desc}</span>
                <span className="mt-4 text-xs text-accent">새 탭에서 열기 →</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
