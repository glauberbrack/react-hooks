import { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);
  const counter = useRef<number>(0);

  function logValue() {
    // This will log our component reference
    // console.log(ref);

    const value = ref.current?.value;
    console.log("input value", value);
  }

  function incrementCounter() {
    counter.current = counter.current + 1;
    console.log("counter", counter.current);
  }

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
        <p>Email:</p>
        <input
          id="email"
          style={{ height: 20, marginLeft: 10 }}
          type="text"
          ref={ref}
        />
        <button style={{ height: 25, marginLeft: 10 }} onClick={logValue}>
          Log value
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p style={{ fontWeight: 600 }}>
          Increment value only in application (it will not render on frontend)
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p>Counter:</p>
          <button
            style={{ height: 25, marginLeft: 10 }}
            onClick={incrementCounter}
          >
            Increment value
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
