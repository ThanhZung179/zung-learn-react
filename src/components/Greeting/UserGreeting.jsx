import React from "react";

export default function UserGreeting({ text, name, handleLogout, className }) {
  return (
    <>
      <p>
        {text} {name}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
