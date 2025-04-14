import React, { useState } from 'react';
import Header from './components/Header';
import QuestionInput from './components/QuestionInput';
import AnswerDisplay from './components/AnswerDisplay';
import './styles.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) return;
    setLoading(true);
    setAnswer('');

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
      }),
    });

    const data = await res.json();
    console.log("🔍 OpenAI 응답 데이터:", data);

    if (!res.ok) {
      console.error("❌ OpenAI 에러:", data);
      setAnswer(`❌ 오류 발생: ${data.error?.message || '알 수 없는 오류'}`);
      setLoading(false);
      return;
    }

    setAnswer(data.choices?.[0]?.message?.content || '답변을 불러오지 못했습니다.');
    setLoading(false);
  };

  // ✅ 여기서 컴포넌트 JSX를 리턴
  return (
    <div className="container">
      <Header />
      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        onSubmit={askQuestion}
        loading={loading}
      />
      <AnswerDisplay answer={answer} loading={loading} />
    </div>
  );
}

export default App;