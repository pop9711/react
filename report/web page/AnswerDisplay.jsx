import React from 'react';

const AnswerDisplay = ({ answer, loading }) => {
  return (
    <div className="answer-section">
      {loading ? <p>GPT가 생각 중이에요...</p> : <p>{answer}</p>}
    </div>
  );
};

export default AnswerDisplay;