import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import GenerateBoxes from "./components/GenerateBoxes/GenerateBoxes";
import BoxColor from "./components/BoxColor/BoxColor";

function App() {
  return (
    <>
      <Greeting />
      <br />
      <hr />
      <GenerateBoxes />
      <br />
      <hr />
      <BoxColor></BoxColor>
    </>
  );
}

export default App;
