import React, { useState } from "react";

const App = () => {
  const userManagement = (user) => {
    return `${user.name} (${user.role === "admin" ? "Administrator" : "User"})`;
  };

  const reverseArray = (arr) => [...arr].reverse();

  const fibonacci = (n) => {
    const result = [];
    for (let i = 0, a = 0, b = 1; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  };

  const wordCount = (text) => {
    return text.trim().split(/\s+/).length;
  };

  const findMax = (arr) => (arr.length === 0 ? null : Math.max(...arr));

  // 6. Modify Array Values
  const modifyArray = (arr) =>
    arr.map((item) =>
      typeof item === "number" ? item + 2 : item.toUpperCase()
    );

  // Demo purposes
  const demoArray = [1, 2, 3];
  const demoStringArray = ["a", "b"];

  return (
    <div className="p-8 space-y-8 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-2xl font-bold">React Functions with Tailwind CSS</h1>

      {/* User Management */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">1. User Management</h2>
        <p>{userManagement({ name: "Alice", role: "admin" })}</p>
      </div>

      {/* Reverse Array */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">2. Reverse Array</h2>
        <p>Original: {JSON.stringify(demoArray)}</p>
        <p>Reversed: {JSON.stringify(reverseArray(demoArray))}</p>
      </div>

      {/* Fibonacci */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">3. Fibonacci Sequence</h2>
        <p>{JSON.stringify(fibonacci(5))}</p>
      </div>

      {/* Word Count */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">4. Word Count</h2>
        <p>Word Count: {wordCount("This is a sample text")}</p>
      </div>

      {/* Max Value */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">5. Max Value</h2>
        <p>Max Value: {findMax(demoArray)}</p>
      </div>

      {/* Modify Array */}
      <div className="p-4 bg-white shadow-md rounded-md">
        <h2 className="text-lg font-semibold">6. Modify Array Values</h2>
        <p>Original: {JSON.stringify(demoArray)}</p>
        <p>Modified: {JSON.stringify(modifyArray(demoArray))}</p>
        <p>Original Strings: {JSON.stringify(demoStringArray)}</p>
        <p>Modified Strings: {JSON.stringify(modifyArray(demoStringArray))}</p>
      </div>
    </div>
  );
};

export default App;
