import React, { Component } from 'react';

export default class Child3 extends Component {
  moueMove = () => {
    console.log('Mouse move');
  };

  componentDidMount() {
    // document.addEventListener('mousemove', this.moueMove);
    // this.timer = setInterval(() => {
    //   console.log('interval');
    // }, 1000);
  }

  componentWillUnmount() {
    // document.removeEventListener('mousemove', this.moueMove);
    // clearInterval(this.timer);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    console.log('Hello child3');
    throw new Error('Something went wrong...');
    return <div>Child3</div>;
  }
}
