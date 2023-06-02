import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import GenerateBoxes from "./components/GenerateBoxes/GenerateBoxes";


function App() {
  return (
    <>
    <Greeting/>
    <br/>
    <hr/>
    <GenerateBoxes/>
    </>
  );
}

export default App;
