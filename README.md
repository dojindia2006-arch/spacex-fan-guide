# 주도진의 SpaceX 정보사이트 (비공식)

SpaceX 로켓·미션·이정표를 한국어로 정리한 **비공식** 팬·정보 사이트입니다.


- 저장소: https://github.com/dojindia2006-arch/spacex-fan-guide
- 기술: Next.js (App Router) · TypeScript · Tailwind CSS · 정적보내기(`output: 'export'`)

## 로컬 실행

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 을 엽니다.

```bash
npm run build   # 정적 파일을 `out/` 에 생성
```

## 배포 (추천: Vercel — 무료)

정적보내기가 설정되어 있어 GitHub Pages·Vercel 모두 가능합니다. **가장 간단한 무료 방법**은 Vercel입니다.

1. [https://vercel.com](https://vercel.com) 에 GitHub 계정으로 로그인
2. **Add New Project** → `dojindia2006-arch/spacex-fan-guide` 저장소 선택
3. Framework Preset: Next.js (기본값) → **Deploy**
4. 배포가 끝나면 `*.vercel.app` 주소로 공개됩니다

환경 변수(선택): `NEXT_PUBLIC_SITE_URL` 에 실제 사이트 URL을 넣으면 OG·canonical 이 맞춰집니다.

### GitHub Pages (대안)

`npm run build` 결과물인 `out/` 폴더를 Pages에 올리면 됩니다.

1. 저장소 **Settings → Pages** 에서 Source를 GitHub Actions 또는 `gh-pages` 브랜치로 설정
2. 프로젝트 경로가 `https://<user>.github.io/spacex-fan-guide/` 형태라면 `next.config.ts` 에 다음을 추가한 뒤 다시 빌드하세요:

```ts
basePath: "/spacex-fan-guide",
assetPrefix: "/spacex-fan-guide",
```

3. `out/` 내용을 Pages에 게시

루트 도메인(Vercel 등)에서는 `basePath` 를 넣지 않는 것이 맞습니다.

## 구성

| 섹션 | 내용 |
|------|------|
| Hero | SpaceX 소개 |
| 주요 로켓/미션 | Falcon 9, Heavy, Starship, ISS, 재사용 |
| 타임라인 | 공개 이정표 |
| FAQ | 비상장·비공식 등 오해 방지 |
| 더 알아보기 | spacex.com 등 공식 외부 링크만 |

그래픽은 CSS/SVG만 사용하며, SpaceX 저작권 사진은 포함하지 않습니다.

## 라이선스·고지

이 저장소의 코드는 학습·팬 사이트 용도입니다. SpaceX·Tesla 상표·브랜딩은 각 권리자에게 있습니다. 본 사이트는 공식 사이트가 아닙니다.
