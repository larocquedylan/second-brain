// js types
const jsTypes: string[] = [
  'string',
  'number',
  'boolean',
  'object',
  'undefined',
  'function',
  'symbol',
  'bigint',
];
// additional types with ts
const tsTypes: string[] = ['any', 'unknown', 'never', 'enum', 'tuple'];

// STRING TYPE
const book: string = 'Oliver Twitst';
let anotherBook = 'Dune'; // because we initialize the variable with a value, we don't need to specify the type
let anotherVal: string; // this variable is of type string, we can't assign a number to it

// ANY TYPE
let uninitializedValue; // this variable is of type any, we can do this cos we didn't initialize it with a value
uninitializedValue = 10;
uninitializedValue = 'hello'; // this is valid, but we lose the benefits of typescript if we use the 'any' type

// ARRAY TYPE
// let hobbies: string[] = ['cooking', 'sports', 50]; // this shows an error because we can't assign a number to a string array
let numbers = [1, 2, 3, 4, 5]; // without the type annotation the compiler infers the type of the array as number[], hover over variable to see this
let emptyArray = []; // this is an array of type any, we can assign any type to it
let emptyArray2: boolean[] = []; // this is an array of type boolean, we can only assign boolean values to it
let mixedArray: (string | number)[] = ['hello', 10, 'world', 20]; // this is a union type, we can have a string or a number in the array

let loopNumArray = numbers.forEach((num) => num.toExponential(2)); // when writing out the function, once you get to num. you'll see the methods available to the number type and this is because the compiler infers the type of the array as number[]

// TUPLE TYPE
// a tuple is an array with a fixed number of elements, each element has a specific type
// as a general rule of thumb, you shouldn't have more than 2 values in tuple, it can have more but it's not recommended
let address: [string, number] = ['street', 10]; // this is a valid tuple
//let address2: [string, number] = [10, 'street']; // this is an invalid tuple, the order of the types is important
// let address3: [string, number] = ['street', 10, 'city']; // this is an invalid tuple, the number of elements is important

// again, very nice trick is that because of intellisense, you can see the methods available to the type of the value but typing the variable name and then a dot and a drop down will appear, it's a nice way to see what methods are available to the type of the value you're working with i.e. address[0]. to see the methods available to the string type and address[1]. to see the methods available to the number type

// ENUM TYPE
// const small = 1;
// const medium = 2;
// const large = 3;
// this is a bad way of doing things, we can use an enum instead
// an enum is a way of giving more friendly names to sets of numeric values
enum Size {
  Small = 1, // 1
  Medium, // 2
  Large, // 3
}
let selectedSize: Size = Size.Small; // this is a valid enum
let selectedSize2: Size = 1; // this is also a valid enum, the compiler will convert the number to the enum value
console.log(selectedSize, selectedSize2); // 1 1

// by defining enum with a const we can get less verbose code in the compiled code file
const enum Size2 {
  Small = 1, // 1
  Medium, // 2
  Large, // 3
}
let selectedSize3: Size2 = Size2.Small; // this is a valid enum
console.log(selectedSize3); // `

// by default, the first value in the enum is 0, the second is 1 and so on
// we can also set the values of the enum

const hasHobbies: boolean = true;
