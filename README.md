# 🦷 테스트 치과 포트폴리오

프리랜서 웹개발자 포트폴리오용 치과 홈페이지입니다. 

## 🌟 주요 특징

- **모던한 디자인**: 깔끔하고 전문적인 치과 전용 UI/UX
- **완전 반응형**: 모바일, 태블릿, 데스크톱 모든 디바이스 최적화
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 효과
- **예약 시스템**: 4단계 예약 프로세스 (진료과목 → 의료진 → 날짜/시간 → 개인정보)
- **진료과목 상세페이지**: 임플란트, 교정, 일반치료 등 상세 정보 제공
- **SEO 최적화**: 검색엔진 최적화 완료
- **플로팅 사이드바**: 전화, 카톡, 네이버예약, 온라인상담 버튼

## 🛠️ 기술 스택

- **Frontend**: Next.js 13 (App Router), TypeScript
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Calendar**: React Calendar
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 페이지 구성

### 메인 페이지 (`/`)
- 히어로 섹션
- 주요 통계
- 진료과목 미리보기
- 의료진 소개
- 예약 문의 폼
- 플로팅 사이드바

### 예약 페이지 (`/reservation`)
- 4단계 예약 프로세스
- 진료과목 선택
- 의료진 선택
- 날짜/시간 선택 (React Calendar)
- 개인정보 입력

### 진료과목 페이지 (`/services`)
- 6개 주요 진료과목 소개
- 각 진료과목별 상세 링크

### 진료과목 상세 (`/services/[id]`)
- 임플란트 상세페이지 예시
- 치료 과정, 장점, FAQ
- 실적 통계
- 예약 CTA

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📦 설치된 패키지

```json
{
  "dependencies": {
    "next": "latest",
    "react": "latest", 
    "react-dom": "latest",
    "typescript": "latest",
    "tailwindcss": "latest",
    "framer-motion": "latest",
    "react-calendar": "latest",
    "lucide-react": "latest"
  }
}
```

## 🎨 디자인 특징

- **컬러 팔레트**: Teal/Cyan 계열 (신뢰감, 깔끔함)
- **타이포그래피**: 모던한 sans-serif 폰트
- **레이아웃**: 카드 기반 디자인
- **애니메이션**: 
  - 페이지 로드 시 순차적 페이드인
  - 스크롤 시 요소별 애니메이션
  - 호버 시 부드러운 트랜지션
  - 버튼 클릭 시 스케일 효과

## 📱 반응형 디자인

### 모바일 (< 768px)
- 햄버거 메뉴
- 세로 배치 레이아웃
- 간소화된 프로그레스바
- 터치 최적화된 버튼 크기

### 태블릿 (768px - 1024px)
- 2열 그리드 레이아웃
- 적절한 패딩/마진

### 데스크톱 (> 1024px)
- 3열 그리드 레이아웃
- 플로팅 사이드바 표시
- 풀 네비게이션 메뉴

## 🔧 주요 컴포넌트

### 애니메이션 설정
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

### 반응형 그리드
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### 플로팅 사이드바
```jsx
<motion.div className="hidden lg:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
```

## 🎯 SEO 최적화

- 메타 태그 설정
- 구조화된 데이터
- 시맨틱 HTML
- 빠른 로딩 속도
- 모바일 친화적

## 🌐 배포

Vercel을 통해 자동 배포됩니다:

1. GitHub에 푸시
2. Vercel에서 자동 빌드 및 배포
3. HTTPS 자동 적용
4. CDN 자동 적용

## 📞 포트폴리오 문의

이 포트폴리오를 통해 실제 프로젝트 의뢰를 원하시면 연락 바랍니다!

**전문 분야:**
- 병원/치과 홈페이지
- 법무법인/세무사 사무소 웹사이트  
- 지역 비즈니스 홈페이지
- SEO 최적화
- 반응형 웹 디자인

---

⭐ **Star를 눌러주시면 더 좋은 포트폴리오 제작에 도움이 됩니다!**