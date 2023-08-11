/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

const bgColor = 'red';
const color = 'white';

// let count = 0;

class Child1 extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: 5 });
          }}
        >
          +
        </button>
        {this.state.count}
        <button
          type="button"
          onClick={() => {
            // count = count - 1;
            // console.log(count);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

const Child2 = () => {
  return <h1>Hello Child 2</h1>;
};

// FUnction component
function App(props) {
  return (
    <>
      <p>Lorem ipsum dolor sit amet.</p>
      <input type="checkbox" />
      <Child1 />
      <Child2 />
    </>
  );
}

export default App;
