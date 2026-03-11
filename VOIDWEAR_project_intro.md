# VOIDWEAR — 프로젝트 소개서

---

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **쇼핑몰 이름** | VOIDWEAR |
| **슬로건** | *Wear the silence.* |
| **카테고리** | 스트리트 / 유니섹스 의류 쇼핑몰 |
| **타겟** | 20–30대 남녀 공용 |
| **플랫폼** | 웹 (반응형 포함 — PC / Mobile) |

---

## 2. 브랜드 아이덴티티

### 컬러 팔레트

| 역할 | 이름 | HEX |
|------|------|-----|
| Primary (메인) | Charcoal Black | `#1A1A1A` |
| **Secondary (포인트)** | **Lime Yellow** | **`#D4FF00`** |
| Background | Off White | `#F5F5F0` |
| Text | Deep Gray | `#2C2C2C` |
| Accent | Medium Gray | `#8C8C8C` |

> 스트리트 감성의 고대비 조합 — 차콜 블랙 베이스에 라임 옐로우 포인트

### 타이포그래피

| 역할 | 폰트 | 출처 |
|------|------|------|
| 헤드라인 (영문) | Bebas Neue | Google Fonts |
| 본문 / UI (한글+영문) | Pretendard | jsdelivr CDN |

```css
/* CDN 적용 */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
```

---

## 3. 페이지 구성

### 3-1. 메인 페이지 (index.html)
- **Header** : 로고(VOIDWEAR) + 메뉴 8개 + 검색 아이콘
- **Hero Section** : 3단 분할 풀스크린 배너 (FIRST / SECOND / THIRD PHOTO)
- **Sub Section** : 스크롤 시 카테고리 타이틀 + 상품 카드 4개씩 노출
- **Footer** : 브랜드 정보, 링크, SNS

### 3-2. 서브 페이지 (category.html)
- 상단 카테고리 탭 필터 (BTN1~BTN9)
- 좌측 : 대표 이미지 + 텍스트
- 우측 : TITLE + 상품 리스트 (썸네일 + 할인율 + 가격)
- 하단 : 상품 그리드 (4열 × 2행+)

### 3-3. 모바일 (반응형)
- 하단 네비게이션 바 (Home / Category / Search / Like / My Page)
- 슬라이더 형태 Hero Banner
- 메뉴 펼침 시 아코디언 방식 서브메뉴

---

## 4. 이미지 파일명 규칙

### 메인 페이지 배너
| 위치 | 파일명 | 권장 사이즈 |
|------|--------|-------------|
| Hero 1번 (FIRST) | `hero_01.jpg` | 800×900px |
| Hero 2번 (SECOND) | `hero_02.jpg` | 800×900px |
| Hero 3번 (THIRD) | `hero_03.jpg` | 800×900px |
| 서브 배너 (좌측 대형) | `sub_banner_01.jpg` | 600×800px |

### 카테고리 / 상품 이미지
| 위치 | 파일명 규칙 | 예시 |
|------|-------------|------|
| 상품 썸네일 | `product_[번호].jpg` | `product_01.jpg` |
| 카테고리 대표 이미지 | `category_[이름].jpg` | `category_outer.jpg` |
| 서브페이지 좌측 대표 | `sub_feature_[번호].jpg` | `sub_feature_01.jpg` |
| 모바일 슬라이더 | `mobile_slide_[번호].jpg` | `mobile_slide_01.jpg` |

### 폴더 구조
```
/assets
  /images
    /hero        → hero_01.jpg ~ hero_03.jpg
    /products    → product_01.jpg ~ product_12.jpg
    /category    → category_outer.jpg 등
    /sub         → sub_banner_01.jpg, sub_feature_01.jpg
    /mobile      → mobile_slide_01.jpg ~ mobile_slide_03.jpg
  /fonts         → Pretendard woff2-subset 파일
  /icons         → 검색, 장바구니, 하트 등 SVG
```

---

## 5. 기술 스택

| 항목 | 선택 |
|------|------|
| HTML | HTML5 시맨틱 마크업 |
| CSS | CSS3 + CSS Variables + Flexbox/Grid |
| JS | Vanilla JS (jQuery 선택사항) |
| 반응형 | Media Query (Breakpoint: 768px) |
| 폰트 | Pretendard CDN + Bebas Neue (Google Fonts) |

---

## 6. 브랜드 카피 & 텍스트

| 위치 | 텍스트 |
|------|--------|
| 로고 | VOIDWEAR |
| 슬로건 | Wear the silence. |
| Hero 1 | NEW ARRIVALS |
| Hero 2 | 2026 S/S COLLECTION |
| Hero 3 | UNISEX ESSENTIALS |
| 서브 타이틀 1 | OUTER |
| 서브 타이틀 2 | TOPS |
| 메뉴 | OUTER / TOP / BOTTOM / DRESS / ACC / SHOES / SALE / NEW |
