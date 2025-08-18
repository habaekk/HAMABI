# 🚀 Hamabi - AI 채팅 애플리케이션

**Hamabi**는 Next.js와 TypeScript로 구축된 현대적인 AI 채팅 애플리케이션입니다. 사용자 친화적인 인터페이스와 다양한 AI 서비스를 통해 풍부한 대화 경험을 제공합니다.

## ✨ 주요 기능

- 🤖 **AI 채팅**: LLM 기반 지능형 대화 시스템
- 💬 **채팅 히스토리**: 대화 내용 저장 및 관리
- 🏆 **업적 시스템**: 사용자 활동에 따른 업적 획득
- 📊 **사용자 통계**: 채팅 활동 및 성과 추적
- 🌤️ **날씨 정보**: 실시간 날씨 데이터 제공
- 🔮 **운세 서비스**: AI 기반 운세 분석
- ⚙️ **설정 관리**: 개인화된 사용자 설정
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험

## 🛠️ 기술 스택

### Frontend
- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안전성과 개발자 경험 향상
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Shadcn/ui** - 재사용 가능한 UI 컴포넌트

### Testing
- **Jest** - 단위 테스트 프레임워크
- **React Testing Library** - React 컴포넌트 테스트
- **Storybook** - 컴포넌트 개발 및 문서화

### Development Tools
- **ESLint** - 코드 품질 및 일관성 유지
- **PostCSS** - CSS 전처리 및 최적화

## 🚀 시작하기

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

1. **저장소 클론**
```bash
git clone https://github.com/your-username/hamabi.git
cd hamabi
```

2. **의존성 설치**
```bash
npm install
# 또는
yarn install
```

3. **개발 서버 실행**
```bash
npm run dev
# 또는
yarn dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 린트 검사
npm run lint

# 테스트 실행
npm test
```

## 📁 프로젝트 구조

```
hamabi/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API 엔드포인트
│   ├── chat/              # 채팅 페이지
│   ├── user/              # 사용자 프로필 페이지
│   ├── fortune/           # 운세 페이지
│   └── archive/           # 아카이브 페이지
├── components/             # 재사용 가능한 컴포넌트
│   ├── chat/              # 채팅 관련 컴포넌트
│   ├── ui/                # 공통 UI 컴포넌트
│   └── Layout/            # 레이아웃 컴포넌트
├── types/                  # TypeScript 타입 정의
├── __tests__/             # 테스트 파일
└── public/                # 정적 자산
```

## 🧪 테스트

프로젝트는 포괄적인 테스트 커버리지를 제공합니다:

- **단위 테스트**: 개별 컴포넌트 및 함수 테스트
- **통합 테스트**: 컴포넌트 간 상호작용 테스트
- **E2E 테스트**: 사용자 시나리오 기반 테스트

```bash
# 모든 테스트 실행
npm test

# 테스트 커버리지 확인
npm run test:coverage

# Storybook 실행
npm run storybook
```

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면 다음 가이드를 참고해주세요:

### 개발 워크플로우

1. **브랜치 생성**
```bash
git checkout -b feat/새로운기능
# 또는
git checkout -b fix/버그수정
```

2. **변경사항 커밋**
```bash
git add .
git commit -m "feat(chat): 새로운 채팅 기능 구현"
```

3. **Pull Request 생성**
   - 명확한 제목과 설명 작성
   - 관련 이슈 링크 포함
   - 테스트 코드 작성 확인

### 커밋 메시지 컨벤션

```
<type>(scope): <subject>

예시:
feat(chat): 메시지 전송 기능 구현
fix(button): 클릭 이벤트 오류 수정
docs(readme): 프로젝트 설명 추가
refactor(component): 컴포넌트 구조 개선
```

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해주세요.

---

**Hamabi**와 함께 AI 채팅의 새로운 경험을 만들어보세요! 🚀
