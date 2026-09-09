const faqs = [
  {
    q: "이 사이트는 SpaceX 공식인가요?",
    a: "아니요. 이 사이트는 비공식 팬·정보 사이트이며, SpaceX·Tesla 또는 관련 임직원과 아무런 제휴·후원 관계가 없습니다.",
  },
  {
    q: "SpaceX 주식을 살 수 있나요?",
    a: "SpaceX는 일반적으로 비상장(비공개) 회사로 알려져 있습니다. 이 사이트는 투자·매매를 권유하지 않으며, 증권·중개 링크도 제공하지 않습니다. 투자 결정은 스스로의 판단과 전문가 상담에 따라 주세요.",
  },
  {
    q: "여기에 적힌 발사 횟수·재무 수치가 정확한가요?",
    a: "의도적으로 세밀한 수치를 적지 않았습니다. 발사 실적·재무 정보는 시점에 따라 달라지므로, 최신 정보는 SpaceX 공식 사이트와 신뢰할 수 있는 보도를 확인하세요.",
  },
  {
    q: "Tesla 주식으로 SpaceX에 투자하는 것과 같나요?",
    a: "Tesla와 SpaceX는 별도 법인입니다. Tesla 주식을 보유한다고 해서 SpaceX 지분을 직접 갖는 것은 아닙니다. 이 사이트는 어떤 증권 매수도 권하지 않습니다.",
  },
  {
    q: "정보를 어디에 근거하나요?",
    a: "SpaceX 공식 웹사이트와 널리 알려진 공개 사실 위주로 고수준 요약을 제공합니다. 오류가 있으면 공식 자료를 우선하세요.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="faq-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          FAQ
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          자주 생기는 오해를 미리 정리했습니다.
        </p>

        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-border bg-card open:border-accent/40"
            >
              <summary className="cursor-pointer list-none px-5 py-4 font-medium text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3">
                  <span>{item.q}</span>
                  <span
                    className="mt-0.5 shrink-0 text-accent transition group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
