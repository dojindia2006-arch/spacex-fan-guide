import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/SPCX?interval=1m&range=1d",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          Accept: "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "quote_unavailable", status: res.status },
        { status: 502 },
      );
    }

    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    if (!meta?.regularMarketPrice) {
      return NextResponse.json({ error: "parse_failed" }, { status: 502 });
    }

    return NextResponse.json({
      symbol: meta.symbol ?? "SPCX",
      name: meta.longName ?? meta.shortName ?? "SpaceX",
      price: meta.regularMarketPrice,
      changePercent: meta.regularMarketChangePercent ?? null,
      currency: meta.currency ?? "USD",
      exchange: meta.fullExchangeName ?? meta.exchangeName ?? "NASDAQ",
      dayHigh: meta.regularMarketDayHigh ?? null,
      dayLow: meta.regularMarketDayLow ?? null,
      previousClose: meta.chartPreviousClose ?? null,
      marketTime: meta.regularMarketTime ?? null,
      source: "Yahoo Finance (delayed/near-real-time)",
      fetchedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "fetch_failed" }, { status: 502 });
  }
}
