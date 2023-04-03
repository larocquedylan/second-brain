# Fix Stale Closures

## what?

A stale closure is where a function or callback function is referencing a value in the outer scope of a closure that isn't updated.

Closures capture the current execution context/scope/state when invoked. If one of the values used in the function is in the outer scope of the function and there is no reference to the changing of state for this value, it will become outdated.

## how?

Stale closures typically pop up with `useState` and `useEffect`. Using asynchronous operations on components that have changing state and props.

## where?

Stale closures can be recognized when a callback or a function within a component consistently references outdated value of state or props, despite the actual values changing, you will run into this when using async operations.

## Example 1

    function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(count + 1); // May reference stale value of `count`
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>{count}</div>;
    }

The dependency array is empty and thus the useEffect will only run on mount. At the initial mount, the `interval` function "closes over" the value of count at the initial execution context which is 0. So this will continue to set the count to 0+1 for each interval.

On initial render of the component the `useState` sets `count` = 0. At this point, our `interval` function "closes over" the `count` value at 0.

After the first interval, it reruns itself taking the count and adding 1. But, nothing has reset the execution context of our interval function as it is in the `useEffect` and thus is rerendered. So the `count` isn't updating within the `useEffect` even if the state variable is changing the in the outer react scope of the `useEffect`.

### fix: update dependecy array

    function Counter() {
        const [count, setCount] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCount(count + 1);
            }, 1000)
        }, [count])

        return () => clearInterval(interval)
    }

By simply adding the `count` as a dependency React knows to will rerun the `useEffect` when the `count` value is updated. This isn't a great use for `useEffect` as we should really only use it when trying to synchronize our app's state with the external state of the world if we are using external things. Contrived example but just to demonstrate how to make sure the count value referenced isn't out of date.

### fix: dispatch function update

function Counter(){
const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevState) => prevState + 1 )
        }, 1000);

        return () => clearInterval(interval)
    }, []);

}

Here, we pass an functional update. Basically, we compute the new state based on the previousState by passing the previous state as an argument. This ensures React always uses the most recent state value because it doesn't rely on any variables frmo the closure.

Why does this work? React maintains a queue for state updates. When you call a state update function (i.e. setCount) React enqueues the update rather than applying it immediately. It does this because it can do multiple updates in batches for performance.

So React processes the queue in a specific order, one by one. When React encounters a functional update, it passes the current state value to the update function. This currentState value is always the latest because React has its queue. So when react see the functional update, the new state is based on the provided value. Since our function has the currentState (or most up to date), it doesn't rely on the values in the surrounding lexical environment (i.e. stale or out of date values in the closure)

### fix: useRef

    function Counter() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    useEffect(() => {
        countRef.current = count; // Update the ref with the latest value
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
        setCount(countRef.current + 1); // Use the ref value instead of `count` directly
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>{count}</div>;

}

This is one is redundant in the example and introduces more complexity. But `useRefs` can be a tool. Use it with caution generally cos it complexity it introduces.

It is useful when we don't want unnecessary updates or rerenders. So values that change frequently but shouldn't rerender the whole app.
