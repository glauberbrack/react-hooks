import { useState, useTransition } from "react";
import List from "./components/List";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  function updateFilterHandler(value: string) {
    startTransition(() => {
      setInput(value);
    });
  }

  return (
    <div
      className="app"
      style={{ padding: 20, display: "flex", flexDirection: "column" }}
    >
      <h4>useTransition</h4>

      <input
        style={{ width: 200 }}
        onChange={(event) => updateFilterHandler(event.target.value)}
      />
      {isPending && <p>Updating List...</p>}
      <List input={input} />
    </div>
  );
}

export default App;
