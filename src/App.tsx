import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  function incrementCounter() {
    const newValue = counter + 1;
    setCounter(newValue);
    console.log(counter);
  }
  return (
    <div className="App">
      Hi, there!
      <p>Counter: {counter}</p>
      <button onClick={incrementCounter}>Increase counter!</button>
    </div>
  );
}

export default App;
