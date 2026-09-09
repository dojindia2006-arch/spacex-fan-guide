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
          아래는 공식·공공 성격의 외부 링크와, 이 사이트 개발자 계정입니다.
          투자·증권·중개 사이트는 포함하지 않습니다.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-glow flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition hover:text-accent"
              >
                <span className="font-semibold text-white group-hover:text-accent">
                  {link.name}
                </span>
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
