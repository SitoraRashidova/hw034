import React from "react";

const FormatUser = () => {
  const formatUser = (user) => {
    return `Name: ${user.name}, Age: ${user.age}, Admin: ${
      user.isAdmin ? "Yes" : "No"
    }`;
  };

  const user = { name: "Alice", age: 25, isAdmin: false };

  return (
    <div className="p-4 bg-blue-50 rounded-md shadow-md">
      <h2 className="text-lg font-bold text-blue-600 mb-2">
        Formatted User Data
      </h2>
      <p className="text-gray-700">{formatUser(user)}</p>
    </div>
  );
};

export default FormatUser;
