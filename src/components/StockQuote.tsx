"use client";

import { useCallback, useEffect, useState } from "react";

type Quote = {
  symbol: string;
  name: string;
  price: number;
  changePercent: number | null;
  currency: string;
  exchange: string;
  dayHigh: number | null;
  dayLow: number | null;
  previousClose: number | null;
  marketTime: number | null;
  source: string;
  fetchedAt: string;
};

function formatUsd(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

function formatSeoulTime(isoOrUnix: string | number) {
  const d =
    typeof isoOrUnix === "number" ? new Date(isoOrUnix * 1000) : new Date(isoOrUnix);
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

export default function StockQuote() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/quote", { cache: "no-store" });
      if (!res.ok) throw new Error("bad_status");
      const data = (await res.json()) as Quote;
      setQuote(data);
      setError(null);
    } catch {
      setError("시세를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const id = window.setInterval(load, 60_000);
    return () => window.clearInterval(id);
  }, [load]);

  const up =
    quote?.changePercent != null ? quote.changePercent >= 0 : null;

  return (
    <section
      id="stock"
      className="border-t border-border px-4 py-16 sm:px-6 sm:py-20"
      aria-labelledby="stock-heading"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="stock-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          SPCX 시세
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          나스닥에 상장된 SpaceX(<span className="text-foreground">SPCX</span>)의
          최근 시세입니다. 투자 권유가 아니며, 매매·중개 링크는 제공하지 않습니다.
        </p>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
          {loading && !quote ? (
            <p className="text-sm text-muted">시세 불러오는 중…</p>
          ) : error && !quote ? (
            <p className="text-sm text-red-300">{error}</p>
          ) : quote ? (
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm text-muted">
                  {quote.exchange} · {quote.symbol}
                </p>
                <p className="mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  {formatUsd(quote.price)}
                </p>
                {quote.changePercent != null && (
                  <p
                    className={`mt-2 text-lg font-semibold ${
                      up ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {up ? "+" : ""}
                    {quote.changePercent.toFixed(2)}%
                    <span className="ml-2 text-sm font-normal text-muted">
                      (전일 대비)
                    </span>
                  </p>
                )}
              </div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:text-right">
                {quote.dayLow != null && quote.dayHigh != null && (
                  <>
                    <dt className="text-muted">당일 범위</dt>
                    <dd className="text-foreground">
                      {formatUsd(quote.dayLow)} – {formatUsd(quote.dayHigh)}
                    </dd>
                  </>
                )}
                {quote.previousClose != null && (
                  <>
                    <dt className="text-muted">이전 종가</dt>
                    <dd className="text-foreground">
                      {formatUsd(quote.previousClose)}
                    </dd>
                  </>
                )}
                <dt className="text-muted">갱신</dt>
                <dd className="text-foreground">
                  {formatSeoulTime(quote.fetchedAt)} (KST)
                </dd>
              </dl>
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-4">
            <button
              type="button"
              onClick={() => {
                setLoading(true);
                load();
              }}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-foreground transition hover:border-accent/50 hover:text-accent"
            >
              새로고침
            </button>
            <p className="text-xs leading-relaxed text-muted/80">
              참고용 시세이며 지연될 수 있습니다. 투자·매매 결정은 스스로의 판단으로
              하세요. 출처: {quote?.source ?? "시세 API"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
