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
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://spacex-fan-guide.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
  description:
    "SpaceX·Starlink와 관련 생태계(xAI, Grok)를 한국어로 정리한 비공식 팬 주도진의 정보 페이지입니다. SpaceX/테슬라/xAI와 무관합니다.",
  keywords: [
    "SpaceX",
    "스페이스엑스",
    "Falcon 9",
    "Starship",
    "재사용 로켓",
    "비공식",
    "한국어",
    "SPCX",
  ],
  authors: [{ name: "주도진" }],
  robots: { index: true, follow: true },
  verification: {
    google: "b3bB6M_B91b27mtI9tdsvK7YwdbH2eWoQlQKPMIfWoo",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "SpaceX 팬 가이드",
    title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
    description:
      "SpaceX·Starlink·xAI·Grok을 한국어로 정리한 비공식 팬 주도진의 정보 페이지.",
  },
  twitter: {
    card: "summary",
    title: "SpaceX 팬 가이드 | 비공식 한국어 소개",
    description:
      "SpaceX를 한국어로 한눈에. 비공식 팬 주도진의 정보 페이지입니다.",
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
