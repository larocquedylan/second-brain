# Closure

## Why are they important?

Closures are an important feature of JavaScript because they allow functions to "remember" the variables and values that were present in their parents (lexical environment) scope when they were created. In other words, closures allow a function to access variables in its outer function scope even after the outer function has returned because of the scope chain.

## What does this enable?

This can be useful for creating private variables and methods, or for creating functions that need to access a specific context or set of variables even after the parent function has returned. It can reference variables inside of other functions easily.

But most importantly, closures also make it possible to create higher-order functions, which are functions that operate on other functions. For example, a higher-order function might take a function as an argument or return a function as its result. By using closures, higher-order functions can capture and preserve the state of their input functions and use them to perform complex operations.

    function makeFunc() {
        const name = "dylan";
        function displayName() {
            console.log(name);
        }
        return displayName;
    }

    const myFunc = makeFunc();
    myFunc(); // dylan

Here, `makeFunc()` creates a variable name with the value "dylan". It also defines a function `displayName()` which console logs "dylan". `makeFunc()`actually returns `displayName()` before executing `displayName()`.

We then define `myFunc = makeFunc()` which means it is the return value of `makeFunc()` (i.e. `displayName()`). We can now access the name "dylan" from outside of the function even after `makeFunc()` has returned.

We have created a closure that 'remembers' the value of `name` and allows us to use it later.

## What else?

    function makeAdder(x) {
        return function (y) {
            return x + y;
        };
    }

    const add5 = makeAdder(5);
    const add10 = makeAdder(10);

    console.log(add5(2)); // 7
    console.log(add10(2)); // 12

Remember, we can capture the state of the parent function when invoking the child. Here, when we define `add5` we are able to remember that `makeAdder` stores the argument as `x` and returns a new function that takes the parameter `y` and that one returns the value of `x+y`.

This is called 'currying' amd allows us to create higher order function that can modify the behaviour of the input function. This creates more flexible and reusable programs.

Flexible in that we keep the scope cleaner and organized. We can break down function into several ones and allows for more understandable logic instead of having 5 inputs. This makes it usable in different parts of the program instead of having a verbose function. Here is an example of how we can extend it.

    function makeAdder(x) {
        return function (y) {
            return x + y;
        };
    }

    const add5 = makeAdder(5);
    const add10 = makeAdder(10);

    function addNumbers(numbers, adder) {
        return numbers.map(adder);
    }

    const numbers = [1, 2, 3, 4, 5];
    const add5 = makeAdder(5);

    const numbersPlus5 = addNumbers(numbers, add5);

    console.log(numbersPlus5); // [6, 7, 8, 9, 10]
