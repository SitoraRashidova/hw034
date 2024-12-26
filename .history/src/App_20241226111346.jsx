import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState({ name: "", role: "" });
  const [arrInput, setArrInput] = useState("");
  const [fibNum, setFibNum] = useState(0);
  const [txt, setTxt] = useState("");
  const [maxArrInput, setMaxArrInput] = useState("");
  const [modArrInput, setModArrInput] = useState("");

  const [res, setRes] = useState(() => {
    const r = localStorage.getItem("res");
    if (r) {
      return JSON.parse(r);
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem("res", JSON.stringify(res));
  }, [res]);

  const saveUser = () => {
    let output = user.name + " (" + (user.role === "admin" ? "Admin" : "User") + ")";
    setRes((prev) => ({ ...prev, user: output }));
  };

  const reverse = () => {
    let a = arrInput.split(",").map((x) => x.trim());
    let r = a.reverse();
    setRes((p) => ({ ...p, rev: r }));
  };

  const fib = () => {
    let n = parseInt(fibNum);
    let arr = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
      arr.push(a);
      let temp = a + b;
      a = b;
      b = temp;
    }
    setRes((p) => ({ ...p, fib: arr }));
  };

  const countWords = () => {
    let words = txt.trim().split(/\s+/).length;
    setRes((p) => ({ ...p, wc: words }));
  };

  const findMax = () => {
    let nums = maxArrInput.split(",").map((x) => parseFloat(x));
    let maxVal = Math.max(...nums);
    setRes((p) => ({ ...p, max: maxVal }));
  };

  const modifyArray = () => {
    let arr = modArrInput.split(",").map((x) =>
      isNaN(x) ? x.trim().toLowerCase() : parseInt(x) + 3
    );
    setRes((p) => ({ ...p, modified: arr }));
  };

  return (
    <div>
      <h1>React Masalalar</h1>
      <div>
        <h3>User Info</h3>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
        <button onClick={saveUser}>Save</button>
        <p>{res.user}</p>
      </div>

      {/* Reverse */}
      <div>
        <h3>Reverse Array</h3>
        <input
          type="text"
          placeholder="array values"
          onChange={(e) => setArrInput(e.target.value)}
        />
        <button onClick={reverse}>Reverse</button>
        <p>{JSON.stringify(res.rev)}</p>
      </div>

      {/* Fibonacci */}
      <div>
        <h3>Fibonacci</h3>
        <input
          type="number"
          placeholder="count"
          onChange={(e) => setFibNum(e.target.value)}
        />
        <button onClick={fib}>Generate</button>
        <p>{JSON.stringify(res.fib)}</p>
      </div>

      {/* Word Count */}
      <div>
        <h3>Word Count</h3>
        <textarea
          placeholder="Type here"
          onChange={(e) => setTxt(e.target.value)}
        ></textarea>
        <button onClick={countWords}>Count</button>
        <p>{res.wc}</p>
      </div>

      {/* Find Max */}
      <div>
        <h3>Find Max</h3>
        <input
          type="text"
          placeholder="numbers"
          onChange={(e) => setMaxArrInput(e.target.value)}
        />
        <button onClick={findMax}>Find</button>
        <p>{res.max}</p>
      </div>
      {/* Modify Array */}
      <div>
        <h3>Modify Array</h3>
        <input
          type="text"
          placeholder="array values"
          onChange={(e) => setModArrInput(e.target.value)}
        />
        <button onClick={modifyArray}>Modify</button>
        <p>{JSON.stringify(res.modified)}</p>
      </div>
    </div>
  );
}

export default App;
