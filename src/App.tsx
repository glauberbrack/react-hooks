import { useRef } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  function onFocus() {
    ref.current?.focus();
  }
  return (
    <div
      className="app"
      style={{ paddingTop: 20, display: "flex", flexDirection: "column" }}
    >
      <p>Input Ref and Imperative Handler</p>
      <Input ref={ref} />
      <button onClick={onFocus}>On Focus (Verify Console)</button>
    </div>
  );
}

export default App;
