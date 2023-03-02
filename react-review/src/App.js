import './App.css'; 
// import SayHello from './components/SayHello';
import Hello from './components/Hello';
import Props from './components/Props';
import Counter from './components/Counter';
import ApiCall from './components/ApiCall';
import Greeting from './components/Greeting';
import { useState } from 'react';

function App() {
const [count, setCount] = useState(0);
// let count = 0;

// let increment = () => {
//   count++;
//   console.log(count);
// }

// let decrement = () => {
//   count--;
//   console.log(count);
// }

  return (
    <div className="App">

      {/* <Hello name="Tyson" /> 
      <Props /> */}

      {/* why we need state */}
      {/* <h1>Count: {count}</h1>
      <button onClick={increment}>Increment </button>
      <button onClick={decrement}>Decrement </button> */}

      {/* basic state example */}
      {/* <Counter /> */}

      {/* Two different components get their own state */}
      {/* <Counter /> */}

      {/* Passing props to a component */}
      {/* <Counter count={10} />
      <Counter />  */}

      {/* const [count, setCount] = useState(0); */}
       {/* <Counter count={count} setCount={setCount} /> 
      <Counter count={count} setCount={setCount} /> */}


      {/* <Greeting /> */}


      {/* more real world example */}
      <ApiCall />

    </div>
  );
}


export default App;



// function Hello(props){
//   return <h1>Hello {props.name}!</h1>;
// }





// Hello.defaultProps = {
//   name: "user"
// }



// by defining this function outside of the App function React will not re-render the function which makes it more efficient. If we define in the function body before return statement, React will re-render the function every time the App function is called.

// this function is hoisted to the top of the file
// function SayHello() {
//   return <h1>Hello World!</h1>;
// } 