import React from "react";

const Example = () => {
  interface User {
    name: string;
    age: number;
    isAdmin: boolean;
  }

  function formatUser(user: User): string {
    return `Name: ${user.name}, Age: ${user.age}, Admin: ${
      user.isAdmin ? "Yes" : "No"
    }`;
  }

  // Example usage:
  const user: User = { name: "John", age: 30, isAdmin: true };
  console.log(formatUser(user));

  return <div>Example</div>;
};

export default Example;
