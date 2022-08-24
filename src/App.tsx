import { useState, useMemo } from "react";
import "./App.css";

function Component(props: { title: string | number }) {
  return <h1>{props.title}</h1>;
}

function App() {
  const [title, setTitle] = useState<string>("");

  const result = useMemo(() => {
    console.log("call useMemo");
    return 123456789 * 123456789;
  }, []);

  return (
    <div className="App" style={{ paddingTop: 20 }}>
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
      <Component title={title} />
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
