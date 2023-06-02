import React, { useState } from "react";

const GenerateBoxes = () => {
  const [number, setNumber] = useState(0);
  const [boxes, setBoxes] = useState(null);

  let res = [];

  if (boxes > 0) {
    for (let i = 1; i <= boxes; i++) {
      res.push(i);
    }
  } else {
    res = [];
  }

  function handleClick() {
    setBoxes(number);
  }

  function handelValueChange(e) {
    setNumber(e.target.value);
  }

  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor;
  }

  return (
    <>
      <p>Number of boxes:</p>
      <input type="number" value={number} onChange={handelValueChange} />
      <button onClick={handleClick}>Generate</button>
      <br />
      <br />
      {res.length > 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {res.map((box) => {
            const color = generateRandomColor();
            return (
              <div
                key={box}
                style={{
                  height: 120,
                  width: 140,
                  background: color,
                  textAlign: "center",
                  margin: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div style={{ color: "white" }}>Box #{box} </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No Box </div>
      )}
    </>
  );
};

export default GenerateBoxes;
