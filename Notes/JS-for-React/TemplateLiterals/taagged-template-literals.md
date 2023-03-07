# Tagged Template Strings

Tagged template strings are a way to evaluate template literals with a function.

    const log = console.log;
    let x = 1;
    let y = 2;
    let a = `This is x ${x}} and y ${y}`;
    log(a); // "This is x 1 and y 2"

    function f(strings){
        return strings;
    }

    let b = f`This is x ${x}} and y ${y}`;

    log(b); // ["This is x ", " and y ", ""]

We simply put our function name before the template literals and our function will be invoked with our strings as the arugment. What this function will do is break up our template literals into an array of strings. It will chunk up string and return only the strings.

Note that strings being the name of the argument is arbitrary.

## What happens to the values?

Well the values are not passed to the function. But we can access them.

    const log = console.log;
    let x = 1;
    let y = 2;

    function f(strings, one, two, three){
        return one + ' ' + two;
    }

    let b = f`this is x ${x} and y ${y} and ${x+y}`;
    log(b); // 1 2

### Accessing with the Rest operator

If we wanted all of them we could do this concatention thing too, but the rest operator (...) makes this much easier. See my notes about the rest operator.

    const log = console.log;
    let x = 1;
    let y = 2;

    function f(strings, ...expressions){
        return expressions;
    }

    let b = f`this is x ${x} and y ${y} and ${x+y}`;
    log(b); // [1, 2, 3]

So we actually have two different arrays. One with the strings and one with the values. Again, the expressions name for the arugments is arbitrary.

Note that string array will always have a length of one more than the expression array. This is because the string array will have the string before the first expression and the string after the last expression. Even if it is an empty string.

    const log = console.log;
    let x = 1;
    let y = 2;

    function f(strings, ...expressions){
        return strings;
    }

    let b = f`this is x ${x}  y ${y}  ${x+y}`;
    log(b); // ["this is x ", "  y ", "  ", ""]

### What if we want to use both the strings and expressions?

    const log = console.log;
    let x = 1;
    let y = 2;

    function f(strings, ...expressions){
        return expressions.reduce((accumulator, expressionValue, indexNumber) => {
            return accumulator + expressionValue*2 + strings[indexNumber + 1];
        }, strings[0]);
    }

    let b = f`this is x ${x}  y ${y}  ${x+y}`;
    log(b);

This is a bit of a mouthful but it demonstrates that we have an opportuntity to do something. Remember expressions array is one less than the strings array. So we need to add one to the indexNumber to access the strings array. `strings[0]` means we start at the first string and accumulate from there.

We are using the reduce method to iterate over the expressions array. We are using the indexNumber to access the strings array.

We are using the accumulator to build up the string that we will return.

It is the same string as last time but we are able to get in the middle of it and manipulate the values of the expression.
