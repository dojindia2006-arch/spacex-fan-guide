export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm leading-relaxed text-muted">
          비공식 팬 사이트이며 SpaceX/테슬라와 무관함. 투자 권유·금융 조언이 아님.
        </p>
        <p className="mt-3 text-center text-xs text-muted/70">
          © {new Date().getFullYear()} SpaceX 팬 가이드 · 비공식 정보 사이트
        </p>
      </div>
    </footer>
  );
}
