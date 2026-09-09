import {
  Falcon9Icon,
  FalconHeavyIcon,
  StarshipIcon,
  DragonIcon,
  ReuseIcon,
} from "./RocketIcons";

const items = [
  {
    title: "Falcon 9",
    desc: "2단 로켓으로, 위성·화물·유인 우주선 발사에 널리 쓰입니다. 1단 부스터를 회수·재사용하는 것이 특징입니다.",
    Icon: Falcon9Icon,
  },
  {
    title: "Falcon Heavy",
    desc: "Falcon 9 부스터 세 기를 결합한 대형 로켓으로, 더 무거운 탑재체를 고궤도·심우주로 보내는 데 활용됩니다.",
    Icon: FalconHeavyIcon,
  },
  {
    title: "Starship",
    desc: "차세대 완전 재사용을 목표로 개발 중인 초대형 우주선·로켓 시스템입니다. 달·화성 등 심우주 임무를 염두에 두고 있습니다.",
    Icon: StarshipIcon,
  },
  {
    title: "ISS 화물·승무원",
    desc: "Dragon 우주선은 국제우주정거장(ISS)에 화물과 승무원을 수송합니다. NASA 등과의 계약을 통해 임무를 수행해 왔습니다.",
    Icon: DragonIcon,
  },
  {
    title: "재사용 로켓",
    desc: "발사 후 1단을 착륙·회수해 다시 쓰는 방식으로, 발사 비용과 주기를 개선하는 핵심 전략으로 알려져 있습니다.",
    Icon: ReuseIcon,
  },
];

export default function Rockets() {
  return (
    <section
      id="rockets"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="rockets-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="rockets-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          주요 로켓·미션
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          공개적으로 알려진 SpaceX의 대표 로켓과 미션 유형을 간단히 소개합니다.
          세부 수치·일정은 공식 발표를 확인해 주세요.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, desc, Icon }) => (
            <li
              key={title}
              className="card-glow rounded-2xl border border-border bg-card p-6 transition"
            >
              <div className="mb-4 flex h-20 items-end justify-center">
                <Icon className="h-20 w-auto" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
