import { useState } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");

  return (
    <div
      className="app"
      style={{ padding: 20, display: "flex", flexDirection: "column" }}
    >
      <h4>useDeffered</h4>
      <input
        style={{ width: 200 }}
        onChange={(event) => setInput(event.target.value)}
      />
      <List input={input} />
    </div>
  );
}

export default App;
