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
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ color: "#4CAF50", textAlign: "center" }}>
        React App with LocalStorage
      </h1>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "15px",
          marginBottom: "20px",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ color: "#007BFF" }}>User Management</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          style={{
            marginRight: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          placeholder="Enter role"
          value={user.role}
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          style={{
            marginRight: "10px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={saveUser}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "5px 10px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Save User
        </button>
        <p style={{ color: "#555" }}>Result: {res.user}</p>
      </div>

      <div style={{ ...commonBoxStyle }}>
        <h2 style={{ color: "#FF5722" }}>Reverse Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,2,3)"
          value={arrInput}
          onChange={(e) => setArrInput(e.target.value)}
          style={commonInputStyle}
        />
        <button onClick={reverseArray} style={commonButtonStyle}>
          Reverse
        </button>
        <p style={{ color: "#555" }}>Result: {JSON.stringify(res.reverse)}</p>
      </div>

      <div style={{ ...commonBoxStyle }}>
        <h2 style={{ color: "#673AB7" }}>Fibonacci Series</h2>
        <input
          type="number"
          placeholder="Enter count"
          value={fibNum}
          onChange={(e) => setFibNum(e.target.value)}
          style={commonInputStyle}
        />
        <button onClick={fibonacciSeries} style={commonButtonStyle}>
          Generate
        </button>
        <p style={{ color: "#555" }}>Result: {JSON.stringify(res.fibonacci)}</p>
      </div>

      <div style={{ ...commonBoxStyle }}>
        <h2 style={{ color: "#3F51B5" }}>Word Count</h2>
        <textarea
          placeholder="Enter text here"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          style={{
            ...commonInputStyle,
            width: "100%",
            height: "60px",
          }}
        ></textarea>
        <button onClick={countWords} style={commonButtonStyle}>
          Count Words
        </button>
        <p style={{ color: "#555" }}>Result: {res.wordCount}</p>
      </div>

      <div style={{ ...commonBoxStyle }}>
        <h2 style={{ color: "#009688" }}>Find Max Value</h2>
        <input
          type="text"
          placeholder="Enter numbers (e.g., 1,2,3)"
          value={maxArrInput}
          onChange={(e) => setMaxArrInput(e.target.value)}
          style={commonInputStyle}
        />
        <button onClick={findMaxValue} style={commonButtonStyle}>
          Find Max
        </button>
        <p style={{ color: "#555" }}>Result: {res.max}</p>
      </div>

      <div style={{ ...commonBoxStyle }}>
        <h2 style={{ color: "#E91E63" }}>Modify Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,a,3)"
          value={modArrInput}
          onChange={(e) => setModArrInput(e.target.value)}
          style={commonInputStyle}
        />
        <button onClick={modifyArray} style={commonButtonStyle}>
          Modify
        </button>
        <p style={{ color: "#555" }}>
          Result: {JSON.stringify(res.modifiedArray)}
        </p>
      </div>
    </div>
  );
}

const commonBoxStyle = {
  backgroundColor: "#fff",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const commonInputStyle = {
  marginRight: "10px",
  padding: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

const commonButtonStyle = {
  backgroundColor: "#2196F3",
  color: "white",
  border: "none",
  padding: "5px 10px",
  borderRadius: "4px",
  cursor: "pointer",
};

export default App;
