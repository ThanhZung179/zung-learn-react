import React, { useState } from 'react';

const BoxColor = () => {

  const [blockColor, setBlockColor] = useState(null)

  const colors = [red, gold, purle, aqua]

  const handleClick = (color) => {
    blockColor===color?setBlockColor(null):setBlockColor(color)
  }



  return (
    <div>
      <div
      style={{
        backgroundColor: 'red',
        width:200,
        height: 200,  
      }}></div>

    </div>
  );
};

export default BoxColor;