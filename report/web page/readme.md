
# 🤖 GPT Web – OpenAI 기반 질문 응답 웹페이지

OpenAI API를 활용해 사용자의 질문에 답변을 생성해주는 React 기반 웹앱입니다.  
Writely(뤼튼) 스타일로 깔끔한 UI를 적용했으며, 개인 테스트/포트폴리오용으로도 적합합니다.

---

## 📸 데모 화면
> GPT에게 질문하고 바로 답변을 받는 미니멀한 UI ✨  
> 깔끔한 에디터 + 카드형 답변 출력

---

## 🛠 기술 스택

- **Frontend**: React, JSX, useState, fetch
- **API**: OpenAI GPT-3.5 API
- **스타일링**: CSS (Pretendard, 뤼튼 스타일), Flexbox
- **환경변수**: `.env` 기반 API Key 관리

---

## 📁 폴더 구조

```
gpt-web/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── QuestionInput.jsx
│   │   └── AnswerDisplay.jsx
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
└── package.json
```

---

## 🚀 실행 방법

```bash
git clone https://github.com/yourusername/gpt-web.git
cd gpt-web
npm install
```

### `.env` 파일 생성 (루트에)

```env
REACT_APP_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

> `REACT_APP_` 접두사 필수!  
> OpenAI [API Key 생성하기](https://platform.openai.com/account/api-keys)

```bash
npm start
```

---

## 🧠 주요 기능

| 기능 | 설명 |
|------|------|
| ✅ 질문 입력 | 사용자 입력 textarea 제공 |
| ✅ GPT 응답 출력 | OpenAI API 응답 받아서 출력 |
| ✅ 상태 관리 | useState로 질문, 답변, 로딩 상태 관리 |
| ✅ 컴포넌트 분리 | `Header`, `QuestionInput`, `AnswerDisplay` |

---

## 💄 UI 디자인 (뤼튼 스타일)

- 깔끔한 white box UI
- Pretendard 폰트 적용
- 부드러운 여백 + 버튼 반응
- 타이핑 친화적 textarea

---

## ❗ 예외 처리

```js
if (!res.ok) {
  setAnswer(`❌ 오류 발생: ${data.error?.message}`);
}
```

- 유효하지 않은 키
- 쿼터 초과
- 모델 오류
- 네트워크 장애

---

## 🔐 보안 주의사항

- API Key는 `.env`에만 보관하세요.
- 절대 GitHub에 올리지 마세요 (`.gitignore` 확인).
- 사용량/결제는 [OpenAI 대시보드](https://platform.openai.com/account/usage) 확인.

---

## 📌 향후 개선 아이디어

- [ ] 채팅 형태의 UI
- [ ] 답변 복사 버튼
- [ ] GPT-4 모델 선택
- [ ] 다크 모드
- [ ] 대화 저장 기능 (localStorage or DB)

---

## 👨‍💻 만든 사람

| 이름 | 링크 |
|------|------|
| 당신의 이름 | [GitHub Profile](https://github.com/yourusername) |
| 만든 이유 | 공부/포트폴리오/개인 사용 등 |

---

## 📎 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.  
자유롭게 사용, 수정, 확장 가능하지만 OpenAI API 사용에 대한 비용은 본인 부담입니다.
