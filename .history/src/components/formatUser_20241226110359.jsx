import React from "react";

const FormatUser = () => {
  const user = { name: "John", age: 30, isAdmin: true };

  const formatUser = (user) => {
    return `Name: ${user.name}, Age: ${user.age}, Admin: ${
      user.isAdmin ? "Yes" : "No"
    }`;
  };

  return (
    <div className="p-4 bg-blue-100 rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-blue-600">User Information</h2>
      <p className="text-gray-800">{formatUser(user)}</p>
    </div>
  );
};

export default FormatUser;
