import React from "react";

const ReverseArray = () => {
  const reverseArray = (arr) => [...arr].reverse();

  const array = [1, 2, 3];
  return (
    <div className="p-4 bg-green-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-green-600">Reversed Array</h2>
      <p className="text-gray-800">Original: {JSON.stringify(array)}</p>
      <p className="text-gray-800">
        Reversed: {JSON.stringify(reverseArray(array))}
      </p>
    </div>
  );
};

export default ReverseArray;
