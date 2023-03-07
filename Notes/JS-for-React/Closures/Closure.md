# Closure

## What is a Closure?

A closure is a function that has access to variables and functions outside of its local or current execution context, but within its lexical environment.

    const numbers = [1, 2, 3]
    const b = 2;
    const useClosures = numbers.map(i => i *b ) // [2, 4, 6]

`numbers.map(i => i * b)` is a function. But i and b are defined outside of the function. This is a closure!

## Why are Closures important?

Closures are key to recognize because functions are able to "remember" the variables, functions and the state of their surrounding environment (i.e. lexical enivronment) when the closure was created even after the outer function has returned.

In other words, closures capture the 'state' of the program. This is the key to sharing data between parts of our program and thus what allows us to do event-driven stuff, async stuff, and ultimately make our pages interactive in web development.

### Private method

This can be useful for creating private variables and methods, or for creating functions that need to access a specific context or set of variables.

    let x  = 1;

    function parent() {
        let value = 2;

        const child = () => {
            console.log(x += 5);
            console.log(value +=1);
        }

        <!-- return child(); --> // we don't execute the function
        return child;
    }

    const result = parent(); // 1 2
    console.log(result) // () => { clg(x+=5); clg(value +=1);}
    <!-- console log the result and it returns the function  -->

    result(); // 6 3
    result(); // 11 4

    console.log(x); // 11
    console.log(value); // reference error

We don't call `child` into action, we store the function in `result` instead. Now we can call `child` and still access `value` while outside of the `parent` where it is local. So we have effectively created a private method where only `result`can access the value.

More so, when we call `result()` again, it increments! So it not only has access to the global scope but also the private scope. And if we console log both variables, `x` stays incremented, while the `value` is unaccessible.

### IIFE

    const credits = ((num) => {
        let credits = num;
        console.log(`Initial credits: ${credits}`);

        return () => {
            credits -= 1;
            if (credits > 0) {
                console.log(`you have ${credits} credits remaining`)
            } else {
                console.log('you don't have anymore credits')
            }
        }
    })(3); // initial credits: 3

    credits(); // you have 2 credits remaining
    credits(); // you have 1 credits remaining
    credits(); // you don't have anymore credits

We immediately invoke our `credits` with `num` right after we define it.

Our anonomyous function defined in the return statement has closure over the private`credits` variable within the credits function. This credits variable cannot be accessed in the global scope - the only way to access it is through our anonoymous function. Which decrements everytime.

### High-Order Function

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

This is is a simple example of 'currying' which allows us to create higher order function that can modify the behaviour of the input function.

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

### Event Listen

    function createButton() {
        const button = document.createElement("button");
        button.textContent = "Click me!";
        button.addEventListener("click", function() {
            console.log("Button clicked!");
        });
        document.body.appendChild(button);
    }

    createButton();

We have created a function `createButton()` that defines some variables and another function within it. The event listener fuction creates 'closure' that remembers the state of `createButton` even after it is executed. By introducing a call back function, we can still access variables and function outside of the call backs i.e. the button.
