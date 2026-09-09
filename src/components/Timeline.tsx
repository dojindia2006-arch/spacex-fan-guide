const milestones = [
  {
    year: "2002",
    title: "회사 설립",
    desc: "엘론 머스크가 SpaceX를 설립. 우주 수송 비용 절감과 화성 탐사를 장기 목표로 제시했습니다.",
  },
  {
    year: "2008",
    title: "Falcon 1 궤도 진입",
    desc: "민간 자금으로 개발된 액체 연료 로켓이 궤도에 오른 사례로 자주 언급됩니다.",
  },
  {
    year: "2012",
    title: "Dragon, ISS 도킹",
    desc: "Dragon 우주선이 국제우주정거장에 도킹하며 민간 화물 수송의 이정표를 남겼습니다.",
  },
  {
    year: "2015",
    title: "1단 부스터 착륙 성공",
    desc: "궤도 발사 후 1단을 지상에 착륙·회수하는 데 성공해 재사용 로켓 시대를 열었습니다.",
  },
  {
    year: "2020",
    title: "유인 Crew Dragon",
    desc: "Crew Dragon으로 승무원을 ISS에 수송하며, 미국 영토에서 유인 궤도 발사가 재개된 계기가 되었습니다.",
  },
  {
    year: "2020s",
    title: "Starship 개발·시험",
    desc: "완전 재사용을 목표로 한 Starship·Super Heavy 시스템의 시험 비행과 개발이 이어지고 있습니다.",
  },
  {
    year: "2026",
    title: "나스닥 상장 (SPCX)",
    desc: "2026년 6월 Class A 보통주가 나스닥에 SPCX 티커로 상장되었습니다.",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="timeline-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="timeline-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          주요 이정표
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          언론·공식 발표 등으로 널리 알려진 공개 이정표입니다. 정확한 날짜·횟수는
          공식 자료를 기준으로 해 주세요.
        </p>

        <ol className="relative mt-10 space-y-0 border-l border-accent/30 pl-6 sm:pl-8">
          {milestones.map((m) => (
            <li key={m.year + m.title} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[1.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[2.1rem]"
                aria-hidden="true"
              />
              <time className="text-sm font-semibold text-accent">{m.year}</time>
              <h3 className="mt-1 text-lg font-semibold text-white">{m.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{m.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
