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
    const roleDisplay = user.role === "admin" ? "Admin" : "User";
    setRes((prev) => ({ ...prev, user: `${user.name} (${roleDisplay})` }));
  };

  const reverseArray = () => {
    const arr = arrInput.split(",").map((item) => item.trim());
    setRes((prev) => ({ ...prev, reverse: arr.reverse() }));
  };

  const fibonacciSeries = () => {
    const n = parseInt(fibNum, 10);
    const fib = Array.from({ length: n }, (_, i) =>
      i < 2 ? i : res.fibonacci[i - 1] + res.fibonacci[i - 2]
    );
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
    <div className="p-6 bg-gray-100 font-sans">
      <h1 className="text-2xl font-bold text-center text-green-500 mb-6">
        React Masalalar
      </h1>
<h2>Localga saqlanadi</h2>
      <div className="bg-white p-4 rounded shadow mb-4">
        <h2 className="text-lg font-semibold text-blue-600 mb-2">
          User Management
        </h2>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Enter name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            className="border p-2 rounded mr-2"
          />
          <input
            type="text"
            placeholder="Enter role"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="border p-2 rounded mr-2"
          />
          <button
            onClick={saveUser}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Save User
          </button>
        </div>
        <p className="text-gray-700">Result: {res.user}</p>
      </div>

      <InputSection
        title="Reverse Array"
        placeholder="Enter array (e.g., 1,2,3)"
        value={arrInput}
        setValue={setArrInput}
        onAction={reverseArray}
        result={res.reverse}
      />

      <InputSection
        title="Fibonacci Series"
        placeholder="Enter count"
        value={fibNum}
        setValue={setFibNum}
        onAction={fibonacciSeries}
        result={res.fibonacci}
      />

      <InputSection
        title="Word Count"
        placeholder="Enter text"
        value={txt}
        setValue={setTxt}
        onAction={countWords}
        result={res.wordCount}
        isTextArea
      />

      <InputSection
        title="Find Max Value"
        placeholder="Enter numbers (e.g., 1,2,3)"
        value={maxArrInput}
        setValue={setMaxArrInput}
        onAction={findMaxValue}
        result={res.max}
      />

      <InputSection
        title="Modify Array"
        placeholder="Enter array (e.g., 1,a,3)"
        value={modArrInput}
        setValue={setModArrInput}
        onAction={modifyArray}
        result={res.modifiedArray}
      />
    </div>
  );
}

const InputSection = ({
  title,
  placeholder,
  value,
  setValue,
  onAction,
  result,
  isTextArea = false,
}) => (
  <div className="bg-white p-4 rounded shadow mb-4">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
    {isTextArea ? (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border p-2 rounded mb-2"
      />
    ) : (
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
    )}
    <button
      onClick={onAction}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Submit
    </button>
    <p className="text-gray-700 mt-2">Result: {JSON.stringify(result)}</p>
  </div>
);

export default App;
