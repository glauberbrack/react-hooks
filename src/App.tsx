import { useReducer } from "react";
import "./App.css";

type ActionsTypes = "SUM" | "SUB" | "MULT";

function counterReducer(state: number, action: { type: ActionsTypes }) {
  const actions = {
    SUM: state + 1,
    SUB: state - 1,
    MULT: state * 10,
  };

  return actions[action.type];
}

function App() {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);

  return (
    <div className="App" style={{ paddingTop: 20 }}>
      <button onClick={() => dispatchCounter({ type: "SUM" })}>
        Increment 1
      </button>
      <button onClick={() => dispatchCounter({ type: "SUB" })}>
        Decrement 1
      </button>
      <button onClick={() => dispatchCounter({ type: "MULT" })}>
        Multiple by 10
      </button>
      <p>Result: {counter}</p>
    </div>
  );
}

export default App;
