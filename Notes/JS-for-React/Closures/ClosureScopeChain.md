# Closure Scope Chain

Every closure has three scopes

- Local scope

- Parent scope (block, function, or module), and it's parents scope

- all the way to the Global scope

The most grandparent function is itself a nested function.

    const x = 1

    function sum(a){
        return function(b){
            return function(c){
                return function(d){
                    return a + b + c + d + x
                }
            }
        }
    }

    console.log(sum(1)(2)(3)(4)) ; // 11

The most inner child has access to the globally scope variable a=1.

We can also store each step in function by naming each step if we want to access them later

    const e = 10;
    function sum(a) {
        return function sum2(b) {
            return function sum3(c) {
                return function sum4(d) {
                    // local scope
                    return a + b + c + d + e;
                };
            };
        };
    }

    const sum2 = sum(1);
    const sum3 = sum2(2);
    const sum4 = sum3(3);
    const result = sum4(4);
    console.log(result); // 20

    // another way to call this function would be:
    const addOne = sum(1);
    const result = addOne(2)(3)(4); // equivalent to sum(1)(2)(3)(4)

Here we cannot actually console.log(sum2, sum3, sum4). Or rather, we can but the return value would simply the child functions nested within them. We need to need to compute the result value first in order to return the total sum. We need to call each individual function before we can get the total sum.

## Currying

This is an example of currying

Currying is a tool in functional programming. You take a function that takes multiple arugments and break them into a series of functions that each take a single argument.

### Why is Currying useful?

Example without Currying

    let dogs = [
        { name: 'kawhi', element: 'water'}
        { name: 'JJ', element: 'fire'}
        { name: 'Lucky', element: 'air'}
        { name: 'Colonel', element: 'time'}
    ]

    let hasElement = (element, obj) => obj.element === element;

    let timeDogs = dogs.filter(x => hasElement(('time), x));

    console.log(timeDogs);

- This has a `dogs` array of objects. Each object has a `name` and `element` property.

- `hasElement` is an arrow function that takes an `element` and an `obj` as arugments and checks if the `obj`element === to the `element` passed. It returns true if it does.

- `timeDogs` filters out the `timeDog` from the `dogs` array. `Filter` take a call back function that takes every item from the `dogs` array and checks it with the `hasElement` and pass it the `x` object. This will return a true or false as well.

### How to do it with Currying?

    function filterByKey(key){
        return function(value){
            return function(obj){
                return obj[key] === value;
            }
        }
    }

    const filterByElement = filterByKey('element');
    const timeDogs = dogs.filter(filterByElement('time'));

This isn't really a great usecase in my opinion and makes the program more verbose and harder to read imo but it illustrates how to do currying.

- `filterByKey('element')` returns a new function that takes a value parameter and returns a new function

- `filterByElement('time')` invokes the `function(value)` with 'time' as the value. This returns another function which takes an `obj` as a parameter and returns a boolean.

- This is then passed as a callback function to `filter` method of the `dogs` array. In this case, each object in the `dogs` array is the individually the `obj` that we filter. It returns true or false based on if `obj[key]` === `value` i.e. dogs['element'] === 'time' .

## More practical Example of Currying

    function createElement(tag) {
            return function(props) {
                const element = document.createElement(tag);
                for (const [key, value] of Object.entries(props)){
                        element.setAttributes(key, value);
                }
                return element;
            };
    }

    const createDiv = createElement('div');
    const createButton = createElement('button');

    const button = createButton({ id: 'my-button', class: 'btn', textContent : 'click me' });
    document.body.appendChild(button);

    const container = createDiv({ id: 'container', class: 'container' });
    const header = createDiv({ class: 'header' });
    const title = createDiv({ class: 'title', textContent: 'my App' });

    header.appendChild(title);
    container.appendChild(header);
    document.body.appendChild(container);

So he we define a `createElement` function that takes a `tag` as argument to define the type of element it should create.

This returns a new function that takes `props` as an arugment. Thus the curries function takes the props and adds them as attributes to the element we created in part one of the function.

So we created special version of `createElement` function for `div` and `button`, which we can then use to props as the attribute for the element.

This is super dope actually and a very composable way to manipulating the DOM.

## How that would look in React??

    import React from 'react';

    function createElement(tag) {
        return function(props, children) {
            return React.createElement(tag, props, children);
        };
    }

    const createDiv = createElement('div');
    const createButton = createElement('button');

    function App() {
        const button = createButton({ id: 'my-button', className: 'btn' }, 'Click me!');

        const title = createDiv({ className: 'title' }, 'My App');
        const header = createDiv({ className: 'header' }, title);

        const container = createDiv({ id: 'container', className: 'container' }, header);

        return (
            <div>
            {button}
            {container}
            </div>
        );
    }

    export default App;

## Why is this helpful?

### Code reuse and composition

Currying allows you to create specialized versions of a function without modifying its original implementation. You can create new functions by partially applying arguments to existing functions, which can be useful in a variety of situations.

### Partial application and default arguments

By currying a function, you can provide some of the arguments upfront and create a new function that only takes the remaining arguments. This can be useful for creating functions with default arguments, or for creating higher-order functions that take callbacks.

### Improved readability and maintainability

Currying can make code more readable and maintainable by breaking down complex functions into smaller, more manageable pieces. By creating functions that each take a single argument, you can make your code more modular and easier to reason about.
