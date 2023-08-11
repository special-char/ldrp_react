/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// FUnction component
function App(props) {
  return (
    <>
      <p>Lorem ipsum dolor sit amet.</p>
      <Child1 />
      <Child2 />
    </>
  );
}

export default App;
