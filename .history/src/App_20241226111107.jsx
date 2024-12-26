import React, { useState, useEffect } from "react";

const App = () => {
  const [userData, setUserData] = useState({ name: "", role: "" });
  const [arrayInput, setArrayInput] = useState("");
  const [fibonacciCount, setFibonacciCount] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [maxArrayInput, setMaxArrayInput] = useState("");
  const [modifyArrayInput, setModifyArrayInput] = useState("");

  const [results, setResults] = useState(() => {
    const savedResults = localStorage.getItem("results");
    return savedResults ? JSON.parse(savedResults) : {};
  });

  useEffect(() => {
    localStorage.setItem("results", JSON.stringify(results));
  }, [results]);

  // Functions
  const userManagement = () => {
    const result = `${userData.name} (${
      userData.role === "admin" ? "Administrator" : "User"
    })`;
    setResults((prev) => ({ ...prev, userManagement: result }));
  };

  const reverseArray = () => {
    const arr = arrayInput.split(",").map((item) => item.trim());
    const result = [...arr].reverse();
    setResults((prev) => ({ ...prev, reverseArray: result }));
  };

  const fibonacci = () => {
    const n = parseInt(fibonacciCount, 10);
    const result = [];
    for (let i = 0, a = 0, b = 1; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    setResults((prev) => ({ ...prev, fibonacci: result }));
  };

  const wordCount = () => {
    const result = textInput.trim().split(/\s+/).length;
    setResults((prev) => ({ ...prev, wordCount: result }));
  };

  const findMax = () => {
    const arr = maxArrayInput.split(",").map(Number);
    const result = arr.length === 0 ? null : Math.max(...arr);
    setResults((prev) => ({ ...prev, maxValue: result }));
  };

  const modifyArray = () => {
    const arr = modifyArrayInput
      .split(",")
      .map((item) =>
        isNaN(item) ? item.trim().toUpperCase() : parseInt(item, 10) + 2
      );
    setResults((prev) => ({ ...prev, modifiedArray: arr }));
  };

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-2xl font-bold">React App with LocalStorage</h1>
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">1. User Management</h2>
        <input
          type="text"
          placeholder="Name"
          className="p-2 border rounded"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role (e.g., admin/user)"
          className="p-2 border rounded"
          value={userData.role}
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={userManagement}
        >
          Save User
        </button>
        <p>Result: {results.userManagement}</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">2. Reverse Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,2,3)"
          className="p-2 border rounded"
          value={arrayInput}
          onChange={(e) => setArrayInput(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={reverseArray}
        >
          Reverse Array
        </button>
        <p>Result: {JSON.stringify(results.reverseArray)}</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">3. Fibonacci</h2>
        <input
          type="number"
          placeholder="Enter count"
          className="p-2 border rounded"
          value={fibonacciCount}
          onChange={(e) => setFibonacciCount(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={fibonacci}
        >
          Generate Fibonacci
        </button>
        <p>Result: {JSON.stringify(results.fibonacci)}</p>
      </div>
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">4. Word Count</h2>
        <textarea
          placeholder="Enter text"
          className="p-2 border rounded w-full"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={wordCount}
        >
          Count Words
        </button>
        <p>Result: {results.wordCount}</p>
      </div>

      {/* 5. Max Value */}
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">5. Max Value</h2>
        <input
          type="text"
          placeholder="Enter numbers (e.g., 1,2,3)"
          className="p-2 border rounded"
          value={maxArrayInput}
          onChange={(e) => setMaxArrayInput(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={findMax}
        >
          Find Max
        </button>
        <p>Result: {results.maxValue}</p>
      </div>

      {/* 6. Modify Array */}
      <div className="p-4 bg-white shadow-md rounded-md space-y-4">
        <h2 className="text-lg font-semibold">6. Modify Array</h2>
        <input
          type="text"
          placeholder="Enter array (e.g., 1,a,3)"
          className="p-2 border rounded"
          value={modifyArrayInput}
          onChange={(e) => setModifyArrayInput(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={modifyArray}
        >
          Modify Array
        </button>
        <p>Result: {JSON.stringify(results.modifiedArray)}</p>
      </div>
    </div>
  );
};

export default App;
