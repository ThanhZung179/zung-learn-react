import React from "react";

export default function UserGreeting({ text, name, handleLogout}) {
  return (
    <>
      <p>
        {text} {name}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
