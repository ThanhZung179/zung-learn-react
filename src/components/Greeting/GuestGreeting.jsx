import React from "react";

export default function GuestGreeting ({text, handleLogIn}){
    return (
        <>
            <div>{text}</div>
            <button onClick={handleLogIn}>Login</button>  
        </>
    );
}