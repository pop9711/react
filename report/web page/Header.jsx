import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>🤖 GPT 웹 도우미</h1>
      <p style={{ fontSize: '1rem', color: '#6b7280', marginTop: '0.5rem' }}>
        무엇이든 물어보세요. GPT가 도와줄게요!
      </p>
    </header>
  );
}

export default Header;