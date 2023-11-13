import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <p>Таймер: {timer} секунд</p>
    </div>
  );
}

export default App;