"use strict";
const jsTypes = [
    'string',
    'number',
    'boolean',
    'object',
    'undefined',
    'function',
    'symbol',
    'bigint',
];
const tsTypes = ['any', 'unknown', 'never', 'enum', 'tuple'];
const book = 'Oliver Twitst';
let anotherBook = 'Dune';
let anotherVal;
let uninitializedValue;
uninitializedValue = 10;
uninitializedValue = 'hello';
let numbers = [1, 2, 3, 4, 5];
let emptyArray = [];
let emptyArray2 = [];
let mixedArray = ['hello', 10, 'world', 20];
let loopNumArray = numbers.forEach((num) => num.toExponential(2));
let address = ['street', 10];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let selectedSize = Size.Small;
let selectedSize2 = 1;
console.log(selectedSize, selectedSize2);
const hasHobbies = true;
//# sourceMappingURL=fundamentals.js.map