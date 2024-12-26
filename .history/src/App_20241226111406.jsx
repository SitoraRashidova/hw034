import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({ name: "", role: "" });
  const [arrInput, setArrInput] = useState("");
  const [fibNum, setFibNum] = useState(0);
  const [txt, setTxt] = useState("");
  const [maxArrInput, setMaxArrInput] = useState("");
  const [modArrInput, setModArrInput] = useState("");

  const [res, setRes] = useState(() => {
    const saved = localStorage.getItem("res");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("res", JSON.stringify(res));
  }, [res]);

  const saveUser = () => {
    const result =
      user.name +
      " (" +
      (user.role === "admin" ? "Admin" : "Regular User") +
      ")";
    setRes((prev) => ({ ...prev, user: result }));
  };

  const reverseArray = () => {
    const arr = arrInput.split(",").map((item) => item.trim());
    setRes((prev) => ({ ...prev, reverse: arr.reverse() }));
  };

  const fibonacciSeries = () => {
    const n = parseInt(fibNum, 10);
    const fib = [];
    let a = 0,
      b = 1;
    for (let i = 0; i < n; i++) {
      fib.push(a);
      const temp = a + b;
      a = b;
      b = temp;
    }
    setRes((prev) => ({ ...prev, fibonacci: fib }));
  };

  const countWords = () => {
    const words = txt.trim().split(/\s+/).length;
    setRes((prev) => ({ ...prev, wordCount: words }));
  };

  const findMaxValue = () => {
    const nums = maxArrInput.split(",").map((num) => parseFloat(num));
    setRes((prev) => ({ ...prev, max: Math.max(...nums) }));
  };

  const modifyArray = () => {
    const modified = modArrInput
      .split(",")
      .map((item) =>
        isNaN(item) ? item.trim().toUpperCase() : parseInt(item, 10) + 2
      );
    setRes((prev) => ({ ...prev, modifiedArray: modified }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "teal" }}>React App with LocalStorage</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>User Management</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="Enter role"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={saveUser} style={{ padding: "5px 10px" }}>
          Save User
        </button>
        <p>Result: {res.user}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Reverse Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,2,3)"
          value={arrInput}
          onChange={(e) => setArrInput(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={reverseArray} style={{ padding: "5px 10px" }}>
          Reverse
        </button>
        <p>Result: {JSON.stringify(res.reverse)}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Fibonacci Series</h2>
        <input
          type="number"
          placeholder="Enter count"
          value={fibNum}
          onChange={(e) => setFibNum(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={fibonacciSeries} style={{ padding: "5px 10px" }}>
          Generate
        </button>
        <p>Result: {JSON.stringify(res.fibonacci)}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Word Count</h2>
        <textarea
          placeholder="Enter text here"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          style={{
            display: "block",
            width: "300px",
            marginBottom: "10px",
            padding: "5px",
          }}
        ></textarea>
        <button onClick={countWords} style={{ padding: "5px 10px" }}>
          Count Words
        </button>
        <p>Result: {res.wordCount}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Find Max Value</h2>
        <input
          type="text"
          placeholder="Enter numbers (e.g., 1,2,3)"
          value={maxArrInput}
          onChange={(e) => setMaxArrInput(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={findMaxValue} style={{ padding: "5px 10px" }}>
          Find Max
        </button>
        <p>Result: {res.max}</p>
      </div>

      <div>
        <h2>Modify Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,a,3)"
          value={modArrInput}
          onChange={(e) => setModArrInput(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={modifyArray} style={{ padding: "5px 10px" }}>
          Modify
        </button>
        <p>Result: {JSON.stringify(res.modifiedArray)}</p>
      </div>
    </div>
  );
}

export default App;
