# Arrow Function Expression

## TDLR

Arrow functions are a shorter syntax for writing function expressions. They are also called fat arrow functions. They are useful for making programs more concise, they have different variations and syntax, as well as some specific limitations.

They are anonymous functions, we cannot name them. We CAN store them in a variable if we want to call them again later.

They are particularly useful when you can make a nice one liner with an implicit return, you don't need curly braces, you don't need a return statement. So they are great as callback functions when passing a function as an arugment to an array method or something of this sort. Or, for promise chaining.

## Syntax

If we are processing a few different things within our function's body, then we need to introduce the braces. As well, we need to explicitly state what our return value is. JS won't guess.

    () => expression
    () => {
        statements
        return value
    }

    // A function with no arguments requires parentheses:
    () => console.log("Hello");

    arg => expression // don't need parentheses for a single argument
    (arg) => expression
    (arg) => {
        statements
    }

    (arg1, arg2, ...argN) => expression
    (arg1, arg2, ...argN) => {
        statements
        return value
    }

    // The function is executed immediately:
    (() => console.log("Hello"))();

## Comparison to regular functions

    const square = x => x*x; || const squareWithParantheses = (x) => x*x;
    // :=
    function square(x){
        return x*x;
    }

    let sum = (a, b) => a + b;
    // :=
    function sum(a, b) {
      return a + b;
    }

    let get5 = () => 5;
    // :=
    function get5() {
      return 5;
    }

On `square` notice we don't have a `return` statement or `{}`, this demonstrates a nice feature of arrow functions. If we only one expression, JS interprets this expression as the implicit return statement and so we can omit the `{}` and `return`. Furthermore, because we only have one arugment we don't need to introduce `()` around around our paramter definition. We can have parentheses, this simply a stylistic option, but they aren't required.

On `sum` because we are taking two parameters, so we do need the `()` around them. Yet again, no need for `{}` or `return` because we only have one expression returned.

Note on `get5`, we don't pass any arugments to the function, if we don't pass arguments we NEED to include the empty `()`.

### summary of comparison

- We essentially swap the `function` keyword for `=>`
- passing <1 arugments: need empty parenthese
- passing =1 argument: don't need parentheses
- passing > 1 arugments: need parentheses
- only return one expression, don't need to include `return` or `{}`

### All these functions return the same value

    function one(num){
        return num % 2 === 0;
    }

    const two = function(num) {
        return num % 2 === 0;
    }

    const three = (num) => {
         return num % 2 === 0;
    }

    const four = num => {
        return num % 2 === 0;
    }

    const five = num => num % 2 === 0;

    const six = num => (
        num % 2 === 0;
    )

`one` and `two` are regular function expressions
`three`is an arrow function with parentheses around the parameter
`four` is an arrow function without parens around the paramter
`five` is a one liner implicit return
`six` is an implicit return where we use parenthese instead of curly braces. I'll explain below

## Implicit return

These parentheses allow us to write a single expression that will automatically be returned. So we don't need the `return` keyword. The rule is, you need to be returning a single expression to have the implict return using `()`, so it cannot have any keywords. Most of the time you would omit the `()` for the implicit return. Unless, for instance, you are returning an object literal.

    const makeCard = () => {name: 'abc', age='123' }

    // JS will not like this because it sees the left `{` and interprets this as the function body. So here we can use the parentheses to notify that it is a sinlge expression and this is the implicit return.

    const makeCard = () => ({name: 'abc', age='123' })

This becomes useful in React because perhaps we are using an array method and the return in a component. Which is technically only a single expression but will have multiple attrbutes in it so it wouldn't look nice on one line. We can put a parenthese around it and JS/React will know it is one expression. For instance:

    <ul>
        user.map(() => (
            <Profile
                name='abc'
                age='123'
            >
        ))
    </ul>

We could also put curly braces around this and explicity call the `return`

    user.map(()=> {
        return <Profile
                        name='abc'
                        age='123'
                    >
    })

## Arrow Function in a call back

Let say we using array methods to filter a list of customers or something. In our methods we use callback functions to define what the arguments will do. Presumably, we won't be using these functions again, so we define anonymous function for them.

    const invoices = [
        {client: 'dylan', amount: 10, hasPaid: false},
        {client: 'tyson', amount: 100, hasPaid: true},
        {client: 'tanya', amount: 1, hasPaid: false}
    ];

    const stillOwed = invoices
        .filter(function (invoice) {
            return !invoice.hasPaid;
        })
        .reduce(function (accumulator, invoice) {
            return accumulator + invoice.amount;
        }, 0)

This is the perfect place for arrow functions. We will never use these functions again. Here we can use define the function in much less writing and a more terse way that keeps our program cleaner.

    const invoices = [
        {client: 'dylan', amount: 10, hasPaid: false},
        {client: 'tyson', amount: 100, hasPaid: true},
        {client: 'tanya', amount: 1, hasPaid: false}
    ];

    const stillOwed = invoices
        .filter(invoice => !invoice.hasPaid)
        .reduce((total, invoice) => total + invoice.amount, 0)

### we can use rest parameters in arrow functions

    let sum = (...args) => {
      let sum = 0;
      for (let arg of args) sum += arg;
      return sum;
    };

    alert( sum(1) ); // 1
    alert( sum(1, 2) ); // 3
    alert( sum(1, 2, 3) ); // 6

### we can use default parameters in arrow functions

    let sum = (a = 1, b = 2) => a + b;
    alert( sum() ); // 3
    alert( sum(5) ); // 7
    alert( sum(5, 10) ); // 15

### We can destrcture arrays and object

    let destructure = ({a , b} = {1 , 2}) => expression
    let another =([a, b] = [10, 20]) => expression

### Async

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });

    let result = await promise; // wait until the promise resolves (*)

    alert(result); // "done!"

    let async (param) => expression
    let async (param) => {
        statements
    }

### Can be used as a callback

    function(a, b, callback){
        callback(a + b);
    }

    (a, b, callback) => callback(a + b);

## When can we not have a return statement?

## When
