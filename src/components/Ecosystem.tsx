const items = [
  {
    title: "Starlink",
    badge: "SpaceX",
    desc: "SpaceX의 위성 인터넷 서비스입니다. 저궤도 위성망으로 지상·해상·항공 등에 광대역 통신을 제공하는 것을 목표로 합니다. 발사·위성 운용은 SpaceX 로켓·인프라와 밀접합니다.",
  },
  {
    title: "xAI",
    badge: "별도 회사",
    desc: "엘론 머스크가 설립한 AI 회사로, SpaceX와는 별도 법인입니다. 우주·로켓 사업과 직접 동일하지는 않지만, 같은 창업자 맥락에서 자주 함께 이야기됩니다.",
  },
  {
    title: "Grok",
    badge: "xAI",
    desc: "xAI의 AI 어시스턴트(대화형 모델)입니다. X(구 Twitter) 등과 연동·배포되는 경우가 있으며, SpaceX 제품은 아닙니다. 이 사이트와 Grok·xAI는 공식 관계가 없습니다.",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="ecosystem-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="ecosystem-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Starlink · xAI · Grok
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          로켓 밖의 관련 서비스·생태계를 고수준으로만 정리했습니다. xAI·Grok은
          SpaceX와 별도 회사이며, 이 사이트는 어떤 제품도 공식 대변하지 않습니다.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="card-glow rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <span className="shrink-0 rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-xs text-accent">
                  {item.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
