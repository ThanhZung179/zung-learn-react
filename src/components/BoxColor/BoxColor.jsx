import React, { useState } from "react";

const BoxColor = () => {
  const colors = {
    red: "red",
    gold: "gold",
    aqua: "aqua",
    purple: "purple",
  };

  const [activeColor, setActiveColor] = useState(null);

  const handleBlockClick = (color) => {
    setActiveColor((prevColor) => (prevColor === color ? null : color));
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: 10,
      }}
    >
      {Object.entries(colors).map(([key, value]) => (
        <div
          key={key}
          style={{
            backgroundColor: activeColor
              ? activeColor === key
                ? value
                : colors[activeColor]
              : value,
            width: 100,
            height: 100,
            cursor: "pointer",
          }}
          onClick={() => handleBlockClick(key)}
        >
          <span className="inside-box">{key}</span>
        </div>
      ))}
    </div>
  );
};

export default BoxColor;