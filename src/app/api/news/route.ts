import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  sourceUrl: string | null;
  publishedAt: string | null;
  favicon: string;
};

function decodeHtml(s: string) {
  return s
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(s: string) {
  return decodeHtml(s)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function pickSource(title: string, sourceTag: string | null) {
  if (sourceTag) return sourceTag.trim();
  const m = title.match(/\s[-–—]\s([^–—-]+)$/);
  return m ? m[1].trim() : "뉴스";
}

function cleanTitle(title: string, source: string) {
  const t = title.trim();
  const suffix = ` - ${source}`;
  if (t.endsWith(suffix)) return t.slice(0, -suffix.length).trim();
  return t.replace(/\s[-–—]\s[^–—-]+$/, "").trim();
}

function hostnameFromUrl(url: string | null) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function parseItems(xml: string): NewsItem[] {
  const items: NewsItem[] = [];
  const blocks = xml.split(/<item>/i).slice(1);
  for (const block of blocks) {
    const chunk = block.split(/<\/item>/i)[0] ?? "";
    const title = stripTags(
      (chunk.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "",
    );
    const link = stripTags(
      (chunk.match(/<link[^>]*>([\s\S]*?)<\/link>/i) || [])[1] || "",
    );
    const pubDate = stripTags(
      (chunk.match(/<pubDate[^>]*>([\s\S]*?)<\/pubDate>/i) || [])[1] || "",
    );
    const sourceTag =
      stripTags(
        (chunk.match(/<source[^>]*>([\s\S]*?)<\/source>/i) || [])[1] || "",
      ) || null;
    const sourceUrlMatch = chunk.match(/<source[^>]*url="([^"]+)"/i);
    const sourceUrl = sourceUrlMatch ? sourceUrlMatch[1] : null;
    const description = stripTags(
      (chunk.match(/<description[^>]*>([\s\S]*?)<\/description>/i) ||
        [])[1] || "",
    );

    if (!title) continue;
    const source = pickSource(title, sourceTag);
    const clean = cleanTitle(title, source);
    const host = hostnameFromUrl(sourceUrl);
    // Prefer a short on-page blurb: description often repeats title+source
    let summary = description
      .replace(clean, "")
      .replace(source, "")
      .replace(/\s+/g, " ")
      .trim();
    if (!summary || summary.length < 12) {
      summary = clean;
    }
    if (summary.length > 180) summary = `${summary.slice(0, 177)}…`;

    items.push({
      id: link || `${clean}-${pubDate}`,
      title: clean,
      summary,
      source,
      sourceUrl,
      publishedAt: pubDate || null,
      favicon: host
        ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=64`
        : `https://www.google.com/s2/favicons?domain=news.google.com&sz=64`,
    });
  }
  return items;
}

export async function GET() {
  try {
    const feeds = [
      "https://news.google.com/rss/search?q=SpaceX+OR+Starlink+OR+SPCX&hl=ko&gl=KR&ceid=KR:ko",
      "https://news.google.com/rss/search?q=SpaceX+OR+Starlink&hl=en-US&gl=US&ceid=US:en",
    ];

    const xmls = await Promise.all(
      feeds.map(async (url) => {
        const res = await fetch(url, {
          headers: { "User-Agent": "Mozilla/5.0 spacex-fan-guide" },
          cache: "no-store",
        });
        if (!res.ok) return "";
        return res.text();
      }),
    );

    const seen = new Set<string>();
    const merged: NewsItem[] = [];
    for (const xml of xmls) {
      if (!xml) continue;
      for (const item of parseItems(xml)) {
        const key = item.title.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        merged.push(item);
      }
    }

    // Prefer fresher items; keep top 8
    merged.sort((a, b) => {
      const ta = a.publishedAt ? Date.parse(a.publishedAt) : 0;
      const tb = b.publishedAt ? Date.parse(b.publishedAt) : 0;
      return tb - ta;
    });

    return NextResponse.json({
      updatedAt: new Date().toISOString(),
      items: merged.slice(0, 8),
    });
  } catch {
    return NextResponse.json(
      { error: "news_unavailable", items: [] },
      { status: 502 },
    );
  }
}
