import React from "react";

const FormatUser = () => {
  const user = { name: "John", age: 30, isAdmin: true };

  const formatUser = (user) => {
    return `Name: ${user.name}, Age: ${user.age}, Admin: ${
      user.isAdmin ? "Yes" : "No"
    }`;
  };

  return <div>{formatUser(user)}</div>;
};

export default FormatUser;
