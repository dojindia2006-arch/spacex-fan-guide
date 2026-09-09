"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string | null;
  publishedAt: string | null;
  favicon: string;
};

function formatKst(isoOrRss: string) {
  const d = new Date(isoOrRss);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export default function NewsFeed() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/news", { cache: "no-store" });
        if (!res.ok) throw new Error("bad");
        const data = await res.json();
        if (cancelled) return;
        setItems(data.items || []);
        setUpdatedAt(data.updatedAt || null);
        setError(null);
      } catch {
        if (!cancelled) setError("뉴스를 불러오지 못했습니다.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="news"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="news-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2
              id="news-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              오늘의 관련 뉴스
            </h2>
            <p className="mt-3 max-w-2xl text-muted">
              SpaceX·Starlink·SPCX 관련 소식을 사이트에서 바로 요약해 보여줍니다.
            </p>
          </div>
          {updatedAt && (
            <p className="text-xs text-muted">갱신 {formatKst(updatedAt)} (KST)</p>
          )}
        </div>

        <div className="mt-8 space-y-4">
          {loading && (
            <p className="text-sm text-muted">뉴스 불러오는 중…</p>
          )}
          {error && !loading && (
            <p className="text-sm text-rose-300">{error}</p>
          )}
          {!loading &&
            !error &&
            items.map((item) => (
              <article
                key={item.id}
                className="card-glow rounded-2xl border border-border bg-card p-5 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.favicon}
                    alt=""
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] rounded-sm bg-white/90"
                  />
                  <span className="text-sm font-medium text-accent">
                    {item.source}
                  </span>
                  {item.publishedAt && (
                    <span className="text-xs text-muted">
                      · {formatKst(item.publishedAt)}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 text-base font-semibold text-white sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
              </article>
            ))}
          {!loading && !error && items.length === 0 && (
            <p className="text-sm text-muted">표시할 뉴스가 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
}
