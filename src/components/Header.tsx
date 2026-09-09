export default function Header() {
  const links = [
    { href: "#hero", label: "소개" },
    { href: "#stock", label: "시세" },
    { href: "#rockets", label: "로켓·미션" },
    { href: "#ecosystem", label: "생태계" },
    { href: "#timeline", label: "타임라인" },
    { href: "#faq", label: "FAQ" },
    { href: "#learn-more", label: "더 알아보기" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#hero" className="flex items-center gap-2 font-semibold tracking-tight text-foreground">
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="h-7 w-7 text-accent"
            fill="none"
          >
            <path
              d="M16 2 L18 14 L28 16 L18 18 L16 30 L14 18 L4 16 L14 14 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
          <span className="text-sm sm:text-base">SpaceX 팬 가이드</span>
        </a>
        <nav aria-label="주요 메뉴" className="hidden gap-5 text-sm text-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
