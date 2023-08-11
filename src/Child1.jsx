/* eslint-disable react/state-in-constructor */
import React, { Component, PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare'; // ES6

// 4 Stages of lifecycle method
// 1. Mounting

// -> Constructor
// -> GetDerivedStateFromProps
// -> render
// -> ComponentDidMount

// 2. Updating
// -> GetDerivedStateFromProps
// -> shouldComponentUpdate
// -> render
// -> getSnapshotBeforeUpdate
// -> ComponentDidUpdate

// -> GetDerivedStateFromProps
// 3. Unmounting
// -> componentWillUnmount

// 4. Error

export default class Child1 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      product: {},
    };
    this.increment = this.increment.bind(this);
    // API
  }

  static getDerivedStateFromProps(props, state) {
    console.log(document.getElementById('heading'));
    return {
      greet: `Hello ${props.name}`,
    };
  }

  //   Call Only once
  async componentDidMount() {
    try {
      throw new Error('something went wr0ng....');
      const productsRes = await fetch('https://fakestoreapi.com/products/1');
      const productsJSON = await productsRes.json();
      this.setState({ product: productsJSON });
      console.log(productsJSON);
      document.addEventListener('copy', () => {
        console.log('Coppied');
      });
    } catch (error) {
      console.log('something went wrong');
    }
    document.getElementById('heading').style.color = 'red';
    // console.log();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshop) {
    console.log('snapshop', snapshop);
    // first;
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  increment() {
    this.setState((state) => ({ count: state.count + 1 }));
  }

  decrement = () => {
    this.setState((state) => ({ count: state.count - 1 }));
  };

  render() {
    console.log('Hello Child1');
    const { count, greet, product } = this.state;
    return (
      <div>
        <h1 id="heading">{greet}</h1>
        <details>
          <summary>{product.title}</summary>
          <p>{product.description}</p>
        </details>
        <button type="button" onClick={this.increment}>
          +
        </button>
        {count}
        <button type="button" onClick={this.decrement}>
          -
        </button>
      </div>
    );
  }
}
