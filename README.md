# 🧠 Git 컨벤션 가이드

깃 브랜치 구조, PR 작성 규칙, 커밋 메시지 규칙을 정리한 문서입니다.  

## 📂 브랜치 구조

```plaintext
main                ← 실제 운영 중인 배포용 브랜치
└─ dev              ← 개발 통합 브랜치
    └─ feat/기능명
    └─ fix/버그명
    └─ refactor/리팩토링명
    └─ docs/문서작업

-주요 브랜치-

feat/	    새로운 기능 개발
fix/	    버그 수정
refactor/	코드 리팩토링
docs/	    문서 작업 (README 등)
chore/	    설정, 패키지 등 기타 작업
test/	    테스트 코드 관련 작업
style/	    코드 스타일 수정 (포맷팅 등)
ci/	    CI/CD 관련 작업
hotfix/	    긴급 수정 작업
```

## 🔐 브랜치 머지 조건
- Github Actions CI 통과 필수
- test 코드 작성 필수
- lint 통과
- 최소 1인의 리뷰 승인 후 merge

## ✅ Pull Request(PR) 컨벤션
### PR 제목 예시
```
[type](scope): <Title>


-예-

feat(chat): 메시지 전송 기능 구현
fix(button): 클릭 이벤트 오류 수정
```

## 💬 커밋 메시지 컨벤션
```plaintext
<type>(scope): <subject>


-주요 타입(type)-

feat	    새로운 기능 추가
fix	        버그 수정
docs	    문서 작업
style	    포맷 변경, 세미콜론, 띄어쓰기 등
refactor	리팩토링 (동작 변화 없이 구조 개선)
test    	테스트 코드 추가/수정
chore	    설정 파일, 빌드 작업 등
ci	CI/CD   설정 변경


-예시-

feat(chat): 채팅 입력창 구현
fix(login): 로그인 실패 시 메시지 표시 오류 수정
docs(readme): 프로젝트 실행 방법 추가
refactor(button): 버튼 컴포넌트 리팩토링
test(form): 로그인 폼 유효성 테스트 추가
```
