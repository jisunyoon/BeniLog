# SavorLog

## 🧾 프로젝트 소개
**SavorLog**는 카드 혜택 / 적금 / 소비 기록을 한 곳에서 관리할 수 있는  
개인 금융 기록 웹 서비스입니다.  
가볍고 빠른 UX를 기반으로 소비 데이터를 정리하고 인사이트를 제공합니다.

---

## 🚨 해결하고자 하는 문제
- 카드/적금 혜택이 흩어져 있어 기억하기 어렵다  
- 소비 기록은 있지만 혜택과 연결해 관리하기 어렵다  
- 기존 금융 앱은 무겁고 복잡하다  
- 핵심 기능만 빠르게 확인 가능한 “가벼운 개인 금융 웹” 필요

---

## 🎯 제공 가치
| 기능 | 설명 |
| --- | --- |
| 소비 기록 CRUD | 소비 내역을 빠르고 명확하게 정리 |
| 카드 혜택 저장 | 주요 혜택을 한눈에 확인 |
| 적금 정보 관리 | 목표 기반 자산 관리 제공 |
| 월별 인사이트 | 소비·혜택·적금 패턴 확인 |

---

## 🎨 컬러 팔레트
- **Primary:** `#6C5DD3`  
- **Primary Light:** `#A9A4F6`  
- **Primary Dark:** `#4B3DBD`  
- **Background:** `#FFFFFF`  
- **Surface:** `#F9F9F9`  
- **Border:** `#E0E0E0`  
- **Text Primary:** `#111111`  
- **Text Secondary:** `#666666`  
- **Accent:** `#FF6B6B`

---

## 🔤 폰트
- 제목: **Pretendard SemiBold / SUIT Bold**  
- 본문: **Pretendard Regular**  
- 숫자: **Inter / Roboto Mono**

---

## 📦 컴포넌트 스타일 가이드
- Border-radius: **16px**  
- Padding: **16px / 20px / 24px**  
- 그림자: `0 4px 16px rgba(0,0,0,0.05)`  
- 아이콘: **24px** (라인 아이콘)

---

## 🗂 페이지 구조 (와이어프레임 기준)

### 1️⃣ 로그인 페이지
- 이메일 / 비밀번호 입력  
- 로그인 버튼  
- 회원가입 링크  

### 2️⃣ 대시보드
- 이번 달 소비 총액  
- 적금 현황  
- 카드 혜택 카운터  
- 최근 소비 리스트  

### 3️⃣ 소비 상세 페이지
- 금액 / 카테고리 / 메모  
- 혜택 여부  
- 수정 / 삭제 버튼  

### 4️⃣ 소비 작성 모달
- 금액 입력  
- 카테고리 선택  
- 카드 선택  
- 메모  
- 저장 버튼  

### 5️⃣ 카드 및 적금 관리
- 카드 리스트  
- 적금 리스트  
- 추가 / 수정 / 삭제  

### 6️⃣ 마이페이지
- 닉네임 변경  
- 프로필 이미지 변경  
- 데이터 초기화  

---

## 🛠 기술 스택

### Front-End
- React  
- TypeScript  
- Vite

### Styling
- Emotion  

### State
- Zustand  

### Package Manager
- pnpm  

### Infra
- Vercel  

### Code Quality
- ESLint  
- Prettier  

### 기타 사용 라이브러리
- Axios  
- Dayjs  
- Lodash-es  
- clsx 또는 cn  
- Vite Absolute Path Alias (`@/*`)

---

## 🚀 설치 및 실행

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
