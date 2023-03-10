# Destructuring Assignment

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment ]

## Arrays

    const [a, b] = array;

This assigns the first and second elements of array to variables a and b, respectively.

    const [a, , b] = array;

This assigns the first and third elements of array to variables a and b, respectively. The second element is ignored.

    const [a = aDefault, b] = array;

This assigns the first element of array to variable a, and the second element to variable b. If the first element is undefined or null, aDefault is used as the default value for a.

    const [a, b, ...rest] = array;

This assigns the first two elements of array to variables a and b, respectively, and the remaining elements to an array called rest.

    const [a, , b, ...rest] = array;

This assigns the first and third elements of array to variables a and b, respectively, and the remaining elements to an array called rest. The second element is ignored.

const [a, b, ...{ pop, push }] = array;: This assigns the first two elements of array to variables a and b, respectively, and creates two variables pop and push by destructuring the Array.prototype object. The pop variable references the Array.prototype.pop() method, and the push variable references the Array.prototype.push() method.

    const [a, b, ...[c, d]] = array;

This assigns the first two elements of array to variables a and b, respectively, and creates an array [c, d] containing the remaining elements of array. If there are fewer than two remaining elements, c and d will be undefined.

    let a, b, a1, b1, c, d, rest, pop, push;
    [a, b] = array;
    [a, , b] = array;
    [a = aDefault, b] = array;
    [a, b, ...rest] = array;
    [a, , b, ...rest] = array;
    [a, b, ...{ pop, push }] = array;
    [a, b, ...[c, d]] = array;

You define a, b, etc, by simply declare let or const that variable. This will create a binding for it and leave it undefined. Which you can then change with destructuring to update the value.

## Objects

    const { a, b } = obj;

This assigns the values of the a and b properties of the obj object to variables named a and b, respectively.

    const { a: a1, b: b1 } = obj;

This assigns the values of the a and b properties of the obj object to variables named a1 and b1, respectively.

    const { a: a1 = aDefault, b = bDefault } = obj;

This assigns the value of the a property of the obj object to a variable named a1, with a default value of aDefault if the a property is undefined. It also assigns the value of the b property of the obj object to a variable named b, with a default value of bDefault if the b property is undefined.

    const { a, b, ...rest } = obj;

This assigns the values of the a and b properties of the obj object to variables named a and b, respectively, and assigns all other properties of the obj object to an object called rest.

    const { a: a1, b: b1, ...rest } = obj;

This assigns the values of the a and b properties of the obj object to variables named a1 and b1, respectively, and assigns all other properties of the obj object to an object called rest.

    const { [key]: a } = obj;

This assigns the value of the property with the key specified by the key variable of the obj object to a variable named a. The key variable is evaluated as an expression to determine the property key.

    let a, b, a1, b1, c, d, rest, pop, push;
    ({ a, b } = obj); // brackets are required
    ({ a: a1, b: b1 } = obj);
    ({ a: a1 = aDefault, b = bDefault } = obj);
    ({ a, b, ...rest } = obj);
    ({ a: a1, b: b1, ...rest } = obj);

As with Arrays, you can declare an undefined value and update the existing binding with destructuring. But, you need to declare `()` around the whole expression if you aren't using `let` or `const`

We need the grouping parentheses because `{}` on the left-side of an equation signals a code block for JS.

These are calling `binding` pattern and `assignment` pattern respectively.

## Binding and Assignment Pattern

    const obj = { a: 1, b: { c: 2 } };
    const {
    a,
    b: { c: d },
    } = obj;

    console.log(a); // 1
    console.log(b); // referenceError not defined
    console.log(c); // referenceError not defined
    console.log(d); // 2

In binding patterns, the pattern starts with a declaration keyword (`var`, `let`, or `const`). Then, each individual property must either be bound to a variable or further destructured.

    const obj = { a: 1, b: { c: 2 } };
    const { a } = obj; // a is constant
    let {
    b: { c: d },
    } = obj; // d is re-assignable

In this example, we have to destructure twice. `a` is read-only as it was defined with `const` and cannot be reassigned. But we defined `d` with `let` so it can be.

### Why is this valid?

    const numbers = [];
    const obj = { a: 1, b: 2 };
    ({ a: numbers[0], b: numbers[1] } = obj);

### But this isn't?

    const numbers = [];
    const obj = { a: 1, b: 2 };
    const { a: numbers[0], b: numbers[1] } = obj;

because of the syntax rules of destructuring assignment in JavaScript.

In the first, the object destructuring assignment is wrapped in parentheses, which allows us to perform destructuring assignment on an existing array (numbers), instead of creating new variables. This syntax allows us to assign the values of the `a` and `b` properties of the `obj` object to the first and second elements of the numbers array, respectively. Since we are not creating new variables with this syntax, we can reuse the existing numbers array.

In the second, the syntax is not valid because we are attempting to use the array destructuring syntax to assign property values from an object. The array destructuring syntax only allows us to create new variables and not assign values to existing array elements.

To assign values to existing array elements, we need to use the object destructuring syntax wrapped in parentheses, as shown in the first code snippet.
