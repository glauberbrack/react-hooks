import useRequest from "./hooks/useRequest";
import "./App.css";

function App() {
  const { data } = useRequest(`https://api.github.com/users/glauberbrack`);
  console.log(data);
  return (
    <div
      className="app"
      style={{ paddingTop: 20, display: "flex", flexDirection: "column" }}
    >
      <h4>Get user data (Verify console)</h4>
    </div>
  );
}

export default App;
