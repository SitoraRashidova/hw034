import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormatUser from "./components/formatUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormatUser />
    </>
  );
}

export default App;
