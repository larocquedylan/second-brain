# State

In programming, for a component to be “stateful” means that it “remembers” (or saves) preceding events or user actions.

State is basically data that changes over time. Time always complicates things. We need to be able to predict what the state will be in the future.

## Server Cache vs. UI State

They are not the same thing.

The server cache is a temporary storage of data (in the client) that is used to speed up the loading of a page. We do not want to hit the server every time we want to load a page.

UI State is only useful for controlling the interactive parts of our UI. This is not used for caching user data. For example, if we are in the middle of filling out a form, we do not want to lose the data we have already entered. Or, other components like (isModal open)

## State vs. Props

State is data that changes over time. Props are data that is passed down from a parent component to a child component.

## useState

useState is a hook that allows you to add state to function components. Hooks are functions that let you “hook into” React. Because useState is a function, ithas a return value. The return value is an array with two values. The first value is the current state, and the second value is a function that allows you to update the state. We need to do this in order to tell the DOM to re-render.

    function App() {
      const [count, setCount] = useState(0);
      const increment = () => setCount(c = c + 1);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={increment}> {count} </button>
        </div>
      );
    }

## Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components.
Hooks don’t work inside classes — they let you use React without classes.
Hooks are what REACT is. React is a literally a state management library. It is a library for managing state.Arguments are the common interface between functions and components.
