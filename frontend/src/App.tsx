import { useEffect, useState } from 'react'
import './App.css'
import aPicture from './assets/hilo.jpg';

function App() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("Hello...");

  useEffect(() => {
    const apiServer = "http://localhost:4000";
    fetch(`${apiServer}/init`).then((res) => res.json()).then((data) => {
      console.log("Value", data);
      setCount(data.val);
    });
  }, []);

  const getGreeting = () => {
    const apiServer = "http://localhost:4000";
    fetch(`${apiServer}/users/toto`).then((res) => res.json()).then((data) => {
      console.log("Greeting", data);
      setGreeting(data.greeting);
    });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <img src={aPicture} width="400px" alt="Hilo" />
      <div className="card">
        <h3>Get value from backend</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card">
        <h3>Get value from backend</h3>
        <button onClick={getGreeting}>
          {greeting}
        </button>
      </div>
    </>
  )
}

export default App
