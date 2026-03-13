# 앱 개발자를 위한 CS 커리큘럼

> 문법책부터 시작하지 않는다 — 앱을 만들고, 문제를 만나고, 그 해법으로 CS를 배운다

**개발자리 Leeo**의 Top-Down CS 커리큘럼 사이트입니다.

🔗 **라이브 사이트**: https://m1zz.github.io/cs-curriculum-repo/

---

## 구성

```
.
├── index.html              # 메인 페이지
├── assets/
│   ├── style.css           # 스타일시트
│   ├── data.js             # 커리큘럼 데이터 (8 Stages, 28 Chapters, 200+ Topics)
│   └── app.js              # UI 로직 (검색, 아코디언, 스크롤 등)
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions 자동 배포
```

## 커리큘럼 구조

| Stage | 문제 상황 | 배우는 CS |
|-------|-----------|-----------|
| 🛠 S1 | 화면에 뭔가를 띄우고 싶다 | SwiftUI, 상태 관리, Swift 기초 |
| 🐢 S2 | 앱이 느리다 | 자료구조, 알고리즘, Big-O |
| 🍝 S3 | 코드가 스파게티가 됐다 | OOP, SOLID, 디자인 패턴, 아키텍처 |
| 💀 S4 | 앱이 죽는다 | ARC, 메모리 관리, 에러 처리 |
| 🌐 S5 | 서버 데이터가 필요하다 | HTTP, URLSession, Codable, DB, 보안 |
| 🧊 S6 | UI가 버벅이고 멈춘다 | 동시성, 렌더링 최적화, Combine |
| 🧪 S7 | 내 코드가 맞는지 모르겠다 | 테스팅, TDD, CI/CD, 수익화 |
| 🔭 S8 | 더 깊이 알고 싶다 | 컴퓨터구조, OS, 컴파일러, 수학 |

---

## GitHub Pages 배포 방법

### 1단계: 레포지토리 생성

```bash
# GitHub에서 새 레포지토리 생성 후
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
```

### 2단계: 파일 복사 & 푸시

```bash
# 이 폴더의 파일을 모두 복사한 후
git add .
git commit -m "feat: iOS CS 커리큘럼 사이트 초기 배포"
git push origin main
```

### 3단계: GitHub Pages 활성화

1. GitHub 레포지토리 → **Settings** → **Pages**
2. **Source**: `GitHub Actions` 선택
3. 저장 후 약 1~2분 대기
4. `https://<username>.github.io/<repo-name>/` 접속 확인

> **첫 배포 후**: `main` 브랜치에 push할 때마다 자동으로 배포됩니다.

---

## 로컬 개발

별도 빌드 과정 없이 HTML 파일을 직접 열면 됩니다:

```bash
# VS Code Live Server 사용
open index.html

# 또는 Python 간단 서버
python3 -m http.server 8080
# → http://localhost:8080
```

---

## 데이터 수정

`assets/data.js`의 `STAGES` 배열을 수정하면 커리큘럼 내용을 바꿀 수 있습니다.

```js
// 새 토픽 추가 예시
{ name: '새로운 토픽', sub: '한줄 설명', details: ['세부 항목 1', '세부 항목 2'] }
```

---

## 링크

- 유튜브: [개발자리](https://www.youtube.com/@개발자리)
- 블로그: [LeeoNote](https://m1zz.github.io/LeeoNote)
- 인프런 강의: [개발자리 iOS 강의](https://www.inflearn.com)
