const items = [
  {
    title: "Starlink",
    badge: "SpaceX",
    lead: "SpaceX가 운용하는 저궤도(LEO) 위성 인터넷 서비스입니다. 수많은 소형 위성을 지구 저궤도에 배치해, 지상 기지국이 닿기 어려운 지역까지 광대역 통신을 제공하는 것이 핵심 목표입니다.",
    points: [
      "위성망: 수천 기 규모의 위성 성단을 저궤도에 운영하며, Falcon 9 등으로 정기적으로 위성을 보충·확장합니다.",
      "이용 형태: 가정·기업용 접시형 안테나(키트)뿐 아니라, 선박·항공기·원격지·이동형(로밍) 등 다양한 환경용 상품이 알려져 있습니다.",
      "Direct-to-Cell: 일부 지역·통신사 파트너와 함께, 일반 휴대폰이 위성에 직접 연결되는 방향의 서비스도 단계적으로 소개되어 왔습니다.",
      "SpaceX와의 관계: 설계·발사·운용까지 SpaceX 로켓·인프라와 한 몸처럼 움직입니다. 로켓 사업과 함께 SpaceX의 대표 사업축으로 자주 언급됩니다.",
      "참고: 커버리지·속도·요금·가용성은 국가·시기·요금제에 따라 크게 달라지므로, 최신은 Starlink 공식 안내를 확인하세요.",
    ],
  },
  {
    title: "xAI / SpaceXAI",
    badge: "AI · 관련 법인",
    lead: "엘론 머스크가 2023년경 공개한 AI 벤처 xAI에서 출발한 조직·브랜드입니다. 대규모 언어모델과 생성 AI, 대규모 연산(컴퓨팅) 인프라를 중심으로 합니다. SpaceX와 창업자가 같고, 이후 자본·조직 측면에서 SpaceX와 더 가깝게 묶였다는 보도가 이어졌습니다(시점에 따라 ‘별도 회사’에서 ‘SpaceX 산하 AI 조직/브랜드’로 설명이 달라질 수 있음).",
    points: [
      "출발: ‘최대한 진실을 추구하는 AI’를 내세우며 연구·제품 조직을 꾸렸고, 주력 제품군이 Grok 계열입니다.",
      "인프라: 대규모 GPU 클러스터(일명 Colossus 등으로 보도된 시설)에서 학습·추론을 돌리는 것이 특징으로 알려졌습니다.",
      "플랫폼 연결: 소셜 네트워크 X(구 Twitter)와의 연동·인수·통합 이야기가 함께 다루어지며, 배포 채널·데이터·구독과 맞물려 설명되는 경우가 많습니다.",
      "SpaceX와의 관계: 로켓·Starlink와는 사업 성격이 다르지만, 같은 창업자 생태계에 있고, 보도에 따르면 이후 SpaceX와의 결합·SpaceXAI 등 브랜드/조직 재편 이야기도 나왔습니다. 정확한 법인 구조는 공시·공식 발표를 기준으로 하세요.",
      "이 사이트 고지: 비공식 정리이며 xAI/SpaceXAI·SpaceX를 대변하지 않습니다.",
    ],
  },
  {
    title: "Grok",
    badge: "AI 어시스턴트",
    lead: "xAI(및 이후 연결된 AI 조직/브랜드)의 대표 대화형 AI입니다. 채팅·검색·추론뿐 아니라, 버전·제품에 따라 이미지·음성·코딩·에이전트형 기능이 더해진 형태로 소개되어 왔습니다. SpaceX 로켓 제품 그 자체는 아닙니다.",
    points: [
      "무엇을 하나: 질문에 답하고, 글을 쓰고, 자료를 요약하며, 실시간 검색·인용을 강조하는 어시스턴트로 알려져 있습니다.",
      "어디서 쓰나: X 앱/웹의 구독 혜택, 전용 앱·웹, 개발자 API 등 여러 경로로 제공된다는 설명이 일반적입니다.",
      "모델 계열: Grok-1 공개 가중치 이야기부터 Grok-1.5, Grok-2, Grok-3 등 후속 모델·멀티모달(이미지 등) 확장이 보도·공식 채널에서 언급되어 왔습니다.",
      "부가 제품: 이미지/영상 생성, 보이스, 코딩·에이전트 워크플로(예: Grok Build로 소개된 계열) 등 ‘Grok’ 이름 아래 기능이 넓어지는 추세입니다.",
      "한계·주의: 생성 AI는 틀린 답을 할 수 있고, 정책·안전·논쟁 이슈도 있어 왔습니다. 중요한 결정은 공식 문서·1차 자료를 확인하세요. 이 사이트는 Grok과 무관합니다.",
    ],
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
        <p className="mt-3 max-w-3xl text-muted">
          로켓만큼 비중 있게, 관련 서비스·AI 생태계를 정리했습니다. 수치는 시점마다
          바뀌므로 의도적으로 세밀한 숫자를 적지 않았고, 법인·브랜드 관계는 공개
          보도 기준의 고수준 요약입니다. 이 사이트는 공식 대변이 아닙니다.
        </p>

        <div className="mt-10 space-y-6">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-glow rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-semibold text-white sm:text-2xl">
                  {item.title}
                </h3>
                <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {item.badge}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                {item.lead}
              </p>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
