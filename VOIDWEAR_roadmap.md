# VOIDWEAR — 개발 로드맵

---

## Phase 1. 기초 세팅 (1~2일)

### 1-1. 프로젝트 폴더 구조 세팅
```
voidwear/
├── index.html
├── category.html
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css      ← 컬러, 폰트 변수
│   │   ├── common.css         ← 공통 스타일
│   │   ├── header.css
│   │   ├── footer.css
│   │   ├── main.css
│   │   ├── category.css
│   │   └── responsive.css     ← 모바일 미디어쿼리
│   ├── js/
│   │   ├── common.js
│   │   ├── main.js
│   │   └── category.js
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── category/
│   │   ├── sub/
│   │   └── mobile/
│   ├── fonts/                 ← Pretendard woff2-subset
│   └── icons/                 ← SVG 아이콘
```

### 1-2. CSS Variables 정의 (variables.css)
```css
:root {
  /* Colors */
  --color-primary:      #1A1A1A;   /* Charcoal Black */
  --color-secondary:    #D4FF00;   /* Lime Yellow — 포인트 */
  --color-bg:           #F5F5F0;   /* Off White */
  --color-text:         #2C2C2C;   /* Deep Gray */
  --color-accent:       #8C8C8C;   /* Medium Gray */

  /* Typography */
  --font-headline:      'Bebas Neue', sans-serif;
  --font-body:          'Pretendard', sans-serif;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 120px;

  /* Breakpoint */
  --bp-mobile: 768px;
}
```

### 1-3. 폰트 로드
- [ ] Pretendard woff2-subset → `/assets/fonts/` 폴더에 복사
- [ ] Bebas Neue → Google Fonts CDN 링크 추가
- [ ] `@font-face` 설정 완료

---

## Phase 2. 공통 컴포넌트 (2~3일)

### 2-1. Header
- [ ] 상단 바 (연도 텍스트 "2026" + 우측 My Page / My Like / Shopping Bag / Login)
- [ ] 로고 (VOIDWEAR) — Bebas Neue
- [ ] GNB 메뉴 8개 (OUTER / TOP / BOTTOM / DRESS / ACC / SHOES / SALE / NEW)
- [ ] 검색 아이콘 클릭 시 검색창 토글
- [ ] 마우스 호버 시 드롭다운 서브메뉴 (5열 × 6행)

### 2-2. Footer
- [ ] 브랜드명, 슬로건
- [ ] 메뉴 링크 (고객센터, 이용약관, 개인정보처리방침)
- [ ] SNS 링크 (Instagram, X)
- [ ] 하단 카피라이트

### 2-3. 공통 JS
- [ ] 헤더 스크롤 시 배경색 전환 효과
- [ ] 드롭다운 메뉴 열림/닫힘
- [ ] 검색창 토글

---

## Phase 3. 메인 페이지 (3~4일)

### 3-1. Hero Section (3단 분할 배너)
- [ ] 3열 그리드 레이아웃
- [ ] 각 섹션에 이미지 + 텍스트 오버레이
- [ ] 호버 시 이미지 확대 효과 (scale transform)
- [ ] 텍스트: NEW ARRIVALS / 2026 S/S COLLECTION / UNISEX ESSENTIALS

### 3-2. 스크롤 상품 섹션
- [ ] 카테고리 타이틀 2개 (OUTER / TOPS)
- [ ] 각 타이틀 아래 상품 카드 2개씩 (썸네일 + 상품명 + 할인율 + 가격)
- [ ] 가격 컬러: Cloud Dancer (#F4F0EB) 포인트 적용
- [ ] 좌측 대형 이미지 + 텍스트 섹션

---

## Phase 4. 서브 페이지 (3~4일)

### 4-1. 카테고리 탭 (BTN1~BTN9)
- [ ] 탭 클릭 시 활성화 스타일 (Cloud Dancer 배경)
- [ ] JS로 탭 전환 기능

### 4-2. 상품 상세 레이아웃
- [ ] 좌측: 대표 이미지 + PHOTO / TEXT 오버레이
- [ ] 우측: TITLE + 상품 리스트 (썸네일 + 상품명 + 설명 + 할인율 + 가격)

### 4-3. 상품 그리드
- [ ] 4열 그리드
- [ ] 상품 카드 (이미지 + 이름 + 할인율 + 가격)
- [ ] more > 버튼
- [ ] 호버 시 이미지 오버레이 효과

---

## Phase 5. 반응형 (모바일) (2~3일)

### 5-1. 레이아웃 전환 (768px 이하)
- [ ] GNB 메뉴 → 하단 네비게이션 바로 전환
  - Home / Category / Search / Like / My Page
- [ ] Hero 배너 → 1열 슬라이더로 전환
- [ ] 상품 그리드 → 2열로 전환

### 5-2. 모바일 메뉴 (카테고리 탭)
- [ ] 메뉴 클릭 시 아코디언 방식 서브메뉴 열림
  - MENU1~MENU4 각각 sub title 1~5
- [ ] 상단 AD 배너 (썸네일 + AD title + shortcut 링크)

### 5-3. 모바일 JS
- [ ] 터치 슬라이더 (Hero 배너)
- [ ] 아코디언 메뉴 toggle
- [ ] 하단 네비게이션 active 상태 관리

---

## Phase 6. QA & 마무리 (1~2일)

- [ ] 크로스 브라우저 확인 (Chrome / Safari / Edge)
- [ ] 모바일 실기기 테스트
- [ ] 이미지 최적화 (webp 변환 권장)
- [ ] 폰트 로딩 최적화 (font-display: swap)
- [ ] 접근성 체크 (alt 텍스트, aria-label)
- [ ] 최종 코드 정리 & 주석 정리

---

## 전체 일정 요약

| Phase | 내용 | 예상 기간 |
|-------|------|----------|
| Phase 1 | 기초 세팅 | 1~2일 |
| Phase 2 | 공통 컴포넌트 | 2~3일 |
| Phase 3 | 메인 페이지 | 3~4일 |
| Phase 4 | 서브 페이지 | 3~4일 |
| Phase 5 | 반응형 모바일 | 2~3일 |
| Phase 6 | QA & 마무리 | 1~2일 |
| **합계** | | **약 12~18일** |

---

## 참고 사이트

| 사이트 | URL | 참고 포인트 |
|--------|-----|-------------|
| 무신사 | musinsa.com | 카테고리 구조, 상품 필터 UX |
| 29CM | 29cm.co.kr | 비주얼 레이아웃, 색감 |
| Supreme | supremenewyork.com | 헤더/메인 임팩트 |
| SSENSE | ssense.com | 타이포그래피, 여백 |
