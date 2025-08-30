# 🚀 포트폴리오 웹사이트

## ✨ 주요 기능

- 📊 **GitHub 통계**: 저장소 수, 팔로워, 사용 언어 통계
- 🚀 **프로젝트 목록**: GitHub 저장소 자동 동기화
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 화면
- 🔄 **실시간 업데이트**: GitHub API를 통한 자동 데이터 동기화
- 💼 **이력서 용도**: 회사 지원 시 제출 가능한 포트폴리오

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **API**: GitHub REST API
- **Deployment**: Vercel (권장)

## 🚀 시작하기

### 1. 프로젝트 클론

```bash
git clone <repository-url>
cd portforlio-web
```

### 2. 패키지 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. GitHub Personal Access Token 발급

1. GitHub에서 [Personal Access Token 생성](https://github.com/settings/tokens)
2. 다음 권한을 선택:
   - `repo` (전체)
   - `user` (전체)

### 4. 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가:

```bash
# GitHub Personal Access Token
GITHUB_TOKEN=your_github_personal_access_token_here
```

**⚠️ 중요**:

- `.env.local` 파일은 절대 Git에 커밋하지 마세요
- `env.example` 파일을 참고하세요

### 5. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

[http://localhost:3000](http://localhost:3000)에서 포트폴리오를 확인할 수 있습니다.

## 📁 프로젝트 구조

```
portforlio-web/
├── src/
│   ├── app/
│   │   ├── api/github/          # GitHub API 라우트
│   │   │   ├── user/route.ts    # 사용자 정보 API
│   │   │   └── repos/route.ts   # 저장소 목록 API
│   │   ├── globals.css          # 전역 스타일
│   │   ├── layout.tsx           # 레이아웃 컴포넌트
│   │   └── page.tsx             # 메인 포트폴리오 페이지
│   └── components/
│       ├── GitHubStats.tsx      # GitHub 통계 컴포넌트
│       └── ProjectList.tsx      # 프로젝트 목록 컴포넌트
├── public/                      # 정적 파일
├── env.example                  # 환경 변수 예시
└── README.md
```

## 🎨 커스터마이징

### 스타일 수정

- `src/app/globals.css`에서 전역 스타일 수정
- Tailwind CSS 클래스로 컴포넌트 스타일링

### 컴포넌트 수정

- `GitHubStats.tsx`: 통계 정보 표시 방식 변경
- `ProjectList.tsx`: 프로젝트 카드 레이아웃 변경
- `page.tsx`: 전체 페이지 레이아웃 수정

### API 확장

- `src/app/api/github/` 폴더에 새로운 API 엔드포인트 추가
- GitHub API의 다른 정보도 활용 가능

## 🌐 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 환경 변수 `GITHUB_TOKEN` 설정
4. 자동 배포 완료
