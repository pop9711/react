import React from 'react';

const QuestionInput = ({ question, setQuestion, onSubmit, loading }) => {
  return (
    <div className="input-section">
      <textarea
        placeholder="질문을 입력하세요..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={onSubmit} disabled={loading}>
        {loading ? '생성 중...' : '질문하기'}
      </button>
    </div>
  );
};

export default QuestionInput;