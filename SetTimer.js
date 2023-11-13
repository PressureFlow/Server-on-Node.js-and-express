
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={handleClick}>Увеличить на 5</button>
    </div>
  );
}

export default App;