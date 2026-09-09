export default function DeveloperNote() {
  return (
    <section
      id="developer-note"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="developer-note-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="developer-note-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          개발자의 한마디
        </h2>
        <blockquote className="card-glow mt-8 rounded-2xl border border-accent/30 bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            저는 전재산을 SpaceX에 투자하였습니다. 저는 SpaceX를 무조건 신뢰하며
            거대한 기업이 될거라고 믿습니다.
          </p>
          <footer className="mt-5 text-sm text-muted">
            — 제작자 주도진 (@Mmfxbow)
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
