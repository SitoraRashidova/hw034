import React from "react";

const ReverseArray = () => {
  const reverseArray = (arr) => {
    return [...arr].reverse();
  };

  const array = [1, 2, 3];
  return <div>Reversed Array: {JSON.stringify(reverseArray(array))}</div>;
};

export default ReverseArray;
