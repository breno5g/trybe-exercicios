import React, { useEffect, useState } from 'react';

export function Canvas() {
  const [pixels, setPixels] = useState([]);
  const [ableToDraw, setAbleTodraw] = useState(false);
  const [color, setColor] = useState('#111111');

  function handleChangeColor(param) {
    setColor(param);
  }

  function generateCanvas() {
    const pixel = [];
    for (let i = 0; i < 7 ** 2; i++) {
      pixel.push(<div key={Math.random()} className="pixel"></div>);
    }
    setPixels([...pixels, ...pixel]);
  }

  useEffect(() => {
    generateCanvas();
  }, []);

  window.addEventListener('mousedown', () => {
    setAbleTodraw(true);
  });

  window.addEventListener('mouseup', () => {
    setAbleTodraw(false);
  });

  return (
    <>
      <div
        className="canvas"
        onMouseOver={(e) => {
          if (ableToDraw) {
            e.target.style.backgroundColor = color;
          }
        }}
      >
        {pixels.map((pixel) => pixel)}
      </div>
      <input
        type="text"
        onChange={({ target }) => handleChangeColor(target.value)}
      />
      {}
    </>
  );
}
