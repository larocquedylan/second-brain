import { useState } from 'react';

// function Counter() {
// function Counter({ count }) {
function Counter({ count, setCount }) {
  //   const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    // setCount(count + 1)
    // needs to finish the function and the call stack before it rerenders
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
