import React, { useState } from 'react';

const CounterPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Counter Page</h1>
      <h2>{count}</h2>
      <div>
        <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
        <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
        <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

const styles = {
  button: {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default CounterPage;
