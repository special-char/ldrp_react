import React from 'react';

const bgColor = 'red';
const color = 'white';

function App() {
  return (
    <>
      <h1
        style={{
          backgroundColor: bgColor,
          color,
        }}
        className="box"
      >
        Hello Yagnesh
      </h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </>
  );
}

export default App;
