import { useState } from "react";

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
