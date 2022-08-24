import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = useCallback(() => {
    console.log("call useCallback");
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <div className="App" style={{ paddingTop: 20 }}>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Result: {counter}</p>
    </div>
  );
}

export default App;
