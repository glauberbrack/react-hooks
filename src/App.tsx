import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState<number>(0);

  function incrementCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  useEffect(() => {
    // Renders when component mount
    console.log("Component Did Mount");
  }, [counter]);

  useEffect(() => {
    // Renders when component will unmount
    return () => {
      console.log("Component will unmont");
    };
  }, []);

  return (
    <div className="App" style={{ paddingTop: 20 }}>
      <p style={{ fontWeight: 600 }}>Get input value using useRef</p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p>Counter: {counter}</p>
        <button
          style={{ height: 25, marginLeft: 10 }}
          onClick={incrementCounter}
        >
          Increment Value
        </button>
      </div>
    </div>
  );
}

export default App;
