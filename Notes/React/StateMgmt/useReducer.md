# useReducer

Another way to store state in connection witha component just like useState

Reducer functions in general, looking at the reduce method on an array

    const numbers = [10,20,30];

    let total = 0;
    for (const n of numbers){
        total += n
    }
    total; // 60

Reducer function does a similar thing but with added power here is a basic example

    const number = [10,20,30];

    // numbers.reduce((currentvalue, nindex ) => currentv + nindex, initial value);
    numbers.reduce((cv, n) => cv + n, 0); // 60

How to use it in state management?

    const [ state, dispatch ] = useReducer((state, action) => {

    })
