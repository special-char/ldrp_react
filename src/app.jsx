import React from 'react';
import Todo from './Todo';

function App() {
  return <Todo />;
}

export default App;

// /* eslint-disable react/prefer-stateless-function */
// import React, { Component } from 'react';
// import Child1 from './Child1';
// import Child2 from './Child2';
// import Child3 from './Child3';

// // Child1.getDerivedStateFromProps = (props) => {
// //   return {
// //     greet: `Hello ${props.name}`,
// //   };
// // };

// // FUnction component
// class App extends Component {
//   state = {
//     name: 'Yagnesh',
//     count: 0,
//   };

//   static getDerivedStateFromError(error) {
//     return {
//       error: error,
//     };
//   }

//   componentDidCatch(error, info) {
//     console.log('info', info.componentStack);
//   }

//   render() {
//     const { name, count, error } = this.state;

//     if (error) {
//       return <h1>{error.message}</h1>;
//     }
//     // if(count >= 5) {
//     //   throw new Error("something")
//     // }

//     return (
//       <>
//         <p>Lorem ipsum dolor sit amet.</p>
//         <p>{name}</p>
//         <p>{`Count ${count}`}</p>
//         <Child1 name={name} />
//         <Child2 />
//         {count < 5 && <Child3 />}

//         <button type="button" onClick={() => this.setState({ name: 'virat' })}>
//           Change Name
//         </button>

//         <button type="button" onClick={() => this.setState({ count: 5 })}>
//           Change Count
//         </button>
//       </>
//     );
//   }
// }

// export default App;
