# Destructuring Assignment - Array

Destructuring is the ability to unpack objects (or arrays) and assign the individual properties or elements to their own bindings. This is helpful for making code more readable.

## Arrays

Below we are breaking the array into individual variables representing each element in the array. instead of looking for the value 5 in `numbers[2]`, we can destructure it and assign that to `c` as follows

    const numbers = [1, 3, 5, 7];
    const [a, b, c, d] = numbers;

    console.log(a); // 1
    console.log(b); // 3
    console.log(c); // 5
    console.log(d); // 7

### what if we to skip one?

    const numbers = [1, 3, 5, 7];
    const [a,, b, d] = numbers;

    console.log(a); // 1
    console.log(b); // b is not defined
    console.log(c); // 5
    console.log(d); // 7

### What if we want the rest of the array?

    const letters = ['a', 'b', 'c', 'd', 'e', 'f']

    const [a,, c, ...rest] = letters;
    console.log(a); // 'a'
    console.log(b); // b is undefined
    console.log(c); // 'c'
    console.log(rest); // [ 'd', 'e', 'f']
    console.log(...rest); // 'd', 'e', 'f'

Notice if we `console.log(...rest)` it returns a string instead of the array... but with simply rest, it returns an array

### Combine Arrays

    const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
    const numbers = [1, 3, 5, 7];

    const combined = [...letters, ...numbers];
    console.log(combined);
    // ['a', 'b', 'c', 'd', 'e', 'f','1', '3', '5', '7' ]

    // better to do but still
    const combinedArr = letters.concat(numbers);

### Creating arrays

    const operations = (a, b) => {
        return [a+b, a*b];
    }

    let array = operations(5, 10);
    console.log(array); // [15, 50]

    let [sum, multiply] = operations(5, 10);
    console.log(sum); // 15
    console.log(multiply); // 50

### Passing default values

    const operations = (a, b) => {
        return [a+b, a*b];
    }

    let [sum, multiply, divison = 'n/a'] = operations(5, 10);
    clg(sum); // 15
    clg(multiply); // 50
    clg(division); // 'n/a'

But if we have an operation for division defined, then it will use that operation.

    const operations = (a, b) => {
        return [a+b, a*b, 1/b];
    }

    let [sum, multiply, divison = 'n/a'] = operations(5, 10);
    clg(sum); // 15
    clg(multiply); // 50
    clg(division); // 0.5
