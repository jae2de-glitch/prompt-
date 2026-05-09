# Prompt Architect v2.0 - README

전문적인 비즈니스 프롬프트 관리 및 생성 도구입니다. 100여 개의 엄선된 직무별 프롬프트 라이브러리와 Gemini AI 기반의 프롬프트 강화 기능을 제공합니다.

## 🚀 주요 기능

- **AI 프롬프트 강화 (Enhancer)**: 단순한 아이디어를 입력하면 Gemini AI가 전문적인 비즈니스 프롬프트 구조로 변환합니다.
- **100선 프롬프트 라이브러리**: 10가지 카테고리(보고서, 마케팅, IT, 인사 등)별로 최적화된 프롬프트 큐레이션.
- **Bento Grid 디자인**: 직관적이고 현대적인 대시보드 인터페이스.
- **다국어 지원**: 한국어 및 영어 모드 전환 가능.
- **원클릭 복사**: 모든 프롬프트를 즉시 복사하여 업무에 활용 가능.

## 🛠 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4 (Bento 디자인 시스템)
- **AI**: Google Gemini AI (@google/genai)
- **Animation**: Framer Motion (motion/react)
- **Icons**: Lucide React

## 📦 설치 및 실행

1. **의존성 설치**:
   ```bash
   npm install
   ```

2. **환경 변수 설정**:
   `.env` 파일에 Gemini API 키를 설정합니다.
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

3. **개발 서버 실행**:
   ```bash
   npm run dev
   ```

## 📁 프로젝트 구조

- `src/App.tsx`: 메인 애플리케이션 로직 및 UI 레이아웃.
- `src/constants.ts`: 프롬프트 데이터(100선) 및 다국어 번역 텍스트.
- `src/types.ts`: TypeScript 인터페이스 정의.
- `src/index.css`: Tailwind CSS 설정 및 커스텀 Bento 스타일.
- `metadata.json`: 애플리케이션 메타데이터.

## 🔀 유지보수 가이드

- **프롬프트 추가**: `src/constants.ts`의 `PROMPTS` 배열에 새로운 객체를 추가하세요.
- **언어 추가**: `src/constants.ts`의 `TRANSLATIONS` 객체에 새로운 언어 코드를 추가하고 텍스트를 번역하세요.
- **스타일 변경**: `src/index.css`의 `@theme` 섹션에서 색상 및 폰트 변수를 수정하세요.

---
© 2024 AI PROMPT ENGINE • BUILT FOR PRODUCTIVITY
