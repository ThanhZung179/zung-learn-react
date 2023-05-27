import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";
import { useState } from "react";
import React from "react";

export default function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogIn() {
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      {isLoggedIn ? (
        <UserGreeting
          text="Welcome to"
          name="Tony"
          handleLogout={handleLogout}
        />
      ) : (
        <GuestGreeting text="Please sign up" handleLogIn={handleLogIn} />
      )}
    </>
  );
}
