import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>안녕하세요! </h1>
      <div style={styles.card}>
       
        <h2 style={styles.name}>최원호</h2>
        <p style={styles.major}>경성대학교 소프트웨어학과</p>
        <p style={styles.text}>React 개발자를 꿈꾸는 대학생입니다.</p>
      </div>
      <footer style={styles.footer}>
        email : pop9711@gmail.com
        github : https://github.com/pop9711@
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    color: '#2563eb',
    marginBottom: '1.5rem',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    width: '300px',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  major: {
    color: '#4b5563',
    margin: '0.5rem 0',
  },
  text: {
    color: '#6b7280',
  },
  footer: {
    marginTop: '2rem',
    fontSize: '0.875rem',
    color: '#9ca3af',
  },
};

export default App;