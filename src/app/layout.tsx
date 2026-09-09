import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://dojindia2006-arch.github.io/spacex-fan-guide";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
  description:
    "SpaceX 로켓·미션·이정표를 한국어로 쉽게 정리한 비공식 팬·정보 사이트입니다. SpaceX/테슬라와 무관하며 투자 권유가 아닙니다.",
  keywords: [
    "SpaceX",
    "스페이스엑스",
    "Falcon 9",
    "Starship",
    "재사용 로켓",
    "비공식",
    "한국어",
  ],
  authors: [{ name: "SpaceX 팬 가이드" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "SpaceX 팬 가이드",
    title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
    description:
      "SpaceX 로켓·미션·이정표를 한국어로 쉽게 정리한 비공식 팬·정보 사이트. 투자 권유 아님.",
  },
  twitter: {
    card: "summary",
    title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
    description:
      "SpaceX를 한국어로 한눈에. 비공식 팬 사이트이며 투자 권유가 아닙니다.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="starfield flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
