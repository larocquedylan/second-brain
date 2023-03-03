# Arrays

Arrays are a collection of values. They are ordered and can be accessed by index. Arrays are zero-indexed, meaning the first element is at index 0.

## Creating Arrays

Use bracket notation to create arrays.

    const arr = []; // recommended
    const arr = [1, 2, 3]; // [1, 2, 3]

We can use constructor notation but this isn't recommended because it can be confusing and is not as flexible. For instance, by passing one value to the constructor, instead of getting an array of length one with the index = value passed, the constructor instead creates an empty array (elements = undefined) of length = to the value you pass.

    // constructor notation
    const arr = new Array(); // not recommended
    const arr = new Array(1, 2, 3); // [1, 2, 3]

    // constructor notation with one value
    const arr1 = new Array(2); // [undefined, undefined]
    arr1.fill(0); // [0, 0]

The constructor notation is also not as performant because Node's Virtual Machine Module (VM) needs more time to parse the code and figure out what you're trying to do. The literal (bracket notation) is simple and knows we want an array. A more detailed explanation can be found here, it shows performance for the various ways: https://stackoverflow.com/questions/7375120/why-is-arr-faster-than-arr-new-array

This is the another way to create an array but is bad form, but still interesting to know. I repeat, bad form! Don't do this!
Note, in the below example, we are using the .fill() method to fill the array with a value. The syntax is as follows array.fill(value, start, end). This is a method that is only available on arrays. If we were to use this method on a string, we would get an error.

    // constructor notation with one value
    const arr = new Array(); // []
    arr.length = 4; // [undefined, undefined, undefined, undefined]
    arr.fill(7); // [7, 7, 7, 7]
    arr.fill(2,1); // [0, 2, 2, 2] // put value 2 at index 1 and beyond
    arr.fill(4, 1, 3); // [7, 4, 4, 2] // put value 7 at index 1 and 2

We generally only use the length property to find out, you guessed it, the length of an array. This can be helpful when debugging. As well as, when iterating through an array to know where to stop or start.

    const arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    } // 1, 2, 3

We can also use the length property to add/remove elements in an array but this isn't good. Instead, .push() method to add elements to the end of an a, .pop() method to remove elements from the end of an a, .unshift() method to add elements to the beginning of an a, .shift() method to remove elements from the beginning of an array.

    // bad way to add/remove elements using length property
    const arr = [1, 2, 3];
    arr.length = 2; // [1, 2]
    arr.length = 4; // [1, 2, undefined, undefined] so the elemments are really deleted not just hidden

    // good way to add/remove elements
    arr.push(4); // [1, 2, 3, 4]
    arr.pop(); // [1, 2, 3]
    arr.unshift(0); // [0, 1, 2, 3]
    arr.shift(); // [1, 2, 3]

## Checking if an Array

We can use the Array.isArray() method to check if a value is an array. This is useful when we are working with functions that can take in an array or a single value. We can use this method to check if the value is an array and if it is, we can iterate through it. If it is not, we can just use the value.

    const arr = [1, 2, 3];
    Array.isArray(arr); // true

    const arr1 = 1;
    Array.isArray(arr1); // false

We can also use the instanceof operator to check if a value is an array. This is useful when we are working with classes. We can use this method to check if the value is an array and if it is, we can iterate through it. If it is not, we can just use the value.

    const arr = [1, 2, 3];
    arr instanceof Array; // true

    const arr1 = 1;
    arr1 instanceof Array; // false

## Accessing/Editing Elements

We can use brackets to access elements in an array. We can also use bracket notation to edit elements in an array.

    const arr = [1, 2, 3];
    arr[0]; // 1
    arr[0] = 10; // [10, 2, 3]

There some useful array methods for doing similar things.

### arr.indexOf(value)

will return the index of the first occurence of the value in the array, if the value is not in the array, it returns -1

    const arr = [1, 2, 3];
    arr.indexOf(3); // 2

    const arr1 = [1, 2, 3, 3];
    arr1.indexOf(3); // 2 - only returns the index of the first occurence
    arr1.lastIndexOf(3); // 3 - returns the index of the last occurence

    arr.indexOf(7); // -1

### arr.includes(value)

**Boolean** returns true if the value is in the array, false if it is not

    const arr = [1, 2, 3];
    arr.includes(1); // true
    arr.includes(4); // false

arr.find(callback) returns the first element in the array that satisfies the callback function, if no element satisfies the callback function, it returns undefined

    const arr = [1, 2, 3];
    arr.find((element) => element > 2); // 3

### arr.push(value) / arr.pop(value)

adds the value to the end of the array and returns the new length of the array

    const arr = [1, 2, 3];
    arr.push(4); // [1, 2, 3, 4]
    arr.push(5, 6); // [1, 2, 3, 4, 5, 6]

    const arr1 = [1, 2, 3];
    arr1.pop(); // [1, 2]
    console.log(arr1.pop()); // 2

    arr1.pop(); // [1]
    arr1.pop(); // []
    arr1.pop(); // [] - won't through an error if the array is empty just continues to return an empty array
    console.log(arr1.pop()); // undefined

### arr.unshift(value) / arr.shift(value)

Using unshift and shift is not as performant as push and pop. This is because push and pop are O(1) operations, while unshift and shift are O(n) operations. arr.push(4) is the essentially the same as arr[arr.length] = 4. This process is much faster than
arr.unshift(4), because it has to move all values to the right by one index, which requires iterating. Same can be said for .shift() versus .pop() However, if you need to add or remove elements from the beginning of an array, then unshift and shift are the way to go.

    const arr = [1, 2, 3];
    arr.unshift(0); // [0, 1, 2, 3]

    const arr1 = [1, 2, 3];
    arr1.shift(); // [2, 3]
    console.log(arr1.shift()); // 1

shifting is the same as popping.
**Note:** arr.shift() and arr.pop() returns the value that was removed from the array
**Note:** arr.shift() and arr.pop() return undefined if the array is empty
**Note:** arr.unshift() and arr.push() return the new length of the array
**Note:** arr.unshift() and arr.push() can take multiple arguments

## Deleting / Replacing Elements

### arr.splice(start, deleteCount

    const arr = [1, 2, 3];
    arr.splice(1, 2); // [1]

    // deleteCount is optional, if not provided, it will delete all elements from start to the end of the array
    const arr1 = [1, 2, 3];
    arr1.splice(1); // [1]

    const arr2 = [1, 2, 3];
    arr2.splice(0, 2, 'hello'); // ['hello', 3]

    // can add multiple values
    const arr3 = [1, 2, 3];
    arr3.splice(0, 2, 'hello', 'world'); // ['hello', 'world', 3]

    // if the index we are starting at doesn't exist, it will remove all and add the values we specified
    const arr4 = [1, 2, 3];
    arr4.splice(0, 3, 'hello', 'world'); // ['hello', 'world']

    // we can also extend the array by having a deleteCount smaller than the number of values we are adding
    const arr5 = [1, 2, 3];
    arr5.splice(0, 1, 'hello', 'world'); // ['hello', 'world', 2, 3]

    // we can also add elements to the middle of the array
    const arr6 = [1, 2, 3];
    arr6.splice(1, 0, 'hello', 'world'); // [1, 'hello', 'world', 2, 3]

### arr.slice(start, end)

Similar to substring method for strings but for arrays. Returns a new array with the elements from start to end. The **end** index is **not** included but **start** **is**. If **end** is not provided, it will return all elements from **start** to the end of the array.This method doesn't mutate the original and will return a new array. This is useful when we want to copy an array. We can also use the spread operator to copy an array which is the preferred method because it more readable and performant spread - spread operator is O(n) and slice is O(n\^2).

    const arr = [1, 2, 3];
    const newArray = arr.slice(); // [1, 2, 3] - start and end index are not provided, it will return a copy of the original array

    const newArray1 = arr.slice(1,3); // [2, 3] - end index is not included
    const newArray2 = arr.slice(1,2); // [2] - end index is not included
    const newArray2 = arr.slice(1); // [2, 3] - end index is not provided, it will return all elements from start to the end of the array

    const newArray3 = arr.slice(-1); // [3] - if the start index is negative, it will start from the end of the array
    const newArray4 = arr.slice(-2); // [2, 3] - if the start index is negative, it will start from the end of the array

    console.log(arr) // [1, 2, 3] - original array is not mutated

### arr.concat(value)

Just like splice/slice, it combines arrays to form a new one, it doesn't mutate.

    const arr = [1, 2, 3];
    const newArray = arr.concat(['hello', 'world']); // [1, 2, 3, 'hello', 'world']

    console.log(arr); // [1, 2, 3] - original array is not mutated
    console.log(newArray); // [1, 2, 3, 'hello', 'world']

### arr.reverse()

This method is 'in place' so it mutates the original array. It will reverse the order of the elements in the array.

    const arr = [1, 2, 3];
    arr.reverse(); // [3, 2, 1]

### arr.join(separator)

This method will return a string with the elements of the array separated by the separator. If no separator is provided, it will return a string with the elements separated by commas.

    const arr = [1, 2, 3];
    arr.join(); // '1,2,3'

    const arr1 = [1, 2, 3];
    arr1.join(', '); // '1, 2, 3' -- if we are joining it is good to add a space after the comma

    const arr2 = [1, 2, 3];
    arr2.join('-'); // '1-2-3'

## Iterating over arrays

### for loop

    const arr = [1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

        // 1
        // 2
        // 3

### for...of

We don't get access to the index of the element, we only get the value. So if need the index, don't use this method. But you can still create an index variable and increment it inside the loop.

    const arr = [1, 2, 3];

    for (const value of arr) {
    console.log(value);
    }
        // 1
        // 2
        // 3

### .forEach(value, index, array, this)

    const arr = [1, 2, 3];

    arr.forEach(function(value) => {
        console.log(value);
    });

        // 1
        // 2
        // 3

    const arr1 = [1, 2, 3];

    arr1.forEach(function(value, index) => {
        console.log(value, index);
    });

        // 1 0
        // 2 1
        // 3 2

    const arr2 = [1, 2, 3];

    arr2.forEach(function(value, index, array) => {
        console.log(value, index, array);
    });

        // 1 0 [1, 2, 3]
        // 2 1 [1, 2, 3]
        // 3 2 [1, 2, 3]

    // using this keyword, we don't really use the this keyword too often, it would make sense in this case to define the object inside the callback function

    const arr3 = [1, 2, 3];

    arr3.forEach(function(value, index, array){
        console.log(value, index, this);
    }, {name: 'hello'});

        // 1 0 {name: 'hello'}
        // 2 1 {name: 'hello'}
        // 3 2 {name: 'hello'}

### .map(value, index, array, this, ...)

This one creates a new array with the results of calling a function for every array element. It doesn't mutate the original array. It is important to note that the callback function is called with 3 arguments: the value, the index, and the array. The **this** keyword is optional and can be used to pass an object that will be used as **this** inside the callback function. The **this** keyword is not used often, but it can be useful in some cases.

**note** that we define with (value, index, array) and JS knows this order. But we can call theses arguments whatever we want, it doesn't matter.

    const arr = [1, 2, 3];

    const newArray = arr.map(function(x) => {
        return x * 2;
    });
    console.log(newArray); // [2, 4, 6]

    const arr1 = [1, 2, 3];

    const newArray1 = arr1.map(function(a, b, c) => {
        console.log(array);
        return a + b + this.value;
    }, {value: 10});

    console.log(newArray1);
    // [1, 2, 3]
    // [1, 2, 3]
    // [1, 2, 3]
    // [11, 13, 15]

### .filter(value, index, array, this, ...)

This one creates a new array with all elements that pass the test implemented by the provided function. It doesn't mutate the original array.

    const arr = [1, 2, 3];

    const filtered = arr.filter(function(value) => {
        return value > 2;
    });

    console.log(filtered); // [3]

    const arr1 = [1, 2, 3];

    const filtered = arr1.filter(function(value, index, array) => {
        return value > this.value;
    }, {value: 1});

    console.log(filtered); // [2, 3]

### .find(value, index, array, this, ...) / findIndex array.findIndex(value, index, array, this, ...)

This returns the value of the first element in the array that passes the test. It returns undefined if no element passes the test. .findIndex() returns the index of the first element in the array that passes the test. It returns -1 if no element passes the test.

    const arr = [1, 2, 3];

    const found = arr.find(function(value) => {
        return value > this.value;
    }, {value: 1});

    console.log(found); // 2 - it returns the first element that passes the test

    const arr1 = [1, 2, 3];

    const foundIndex = arr1.findIndex(function(value) => {
        return value > this.value;
    }, {value: 1});

    console.log(foundIndex); // 2 - it returns the index of the first element that passes the test

## .every(value, index, array, this, ...) / .some(value, index, array, this, ...)

.every() is a boolean, it returns true if all elements pass the test. .some() is a boolean, it returns true if at least one element passes the test.

    const arr = [1, 2, 3];

    const every = arr.every(function(value) => {
        return value > this.value;
    }, {value: 1});

    console.log(every); // false - it returns true if all elements pass the test

    const arr1 = [1, 2, 3];

    const some = arr1.some(function(value) => {
        return value > this.value;
    }, {value: 1});

    console.log(some); // true - it returns true if at least one element passes the test

## .reduce(accumulator, currentValue, currentIndex, array, this, ...)

This callback function we pass works a bit different than the others. It takes an accumulator which will be the single returned value of the previous iteration and the currentValue which is the current element being processed in the array. The currentIndex is optional and is the index of the current element being processed in the array.

    const arr = [1, 2, 3];

    const sum = arr.reduce(function(accumulator, currentValue) => {
        return accumulator + currentValue ; // this will give us the total sum of the array
    }, 0); // 0 is the initial value of the accumulator

    console.log(sum); // 6

    const arr1 = [1, 2, 3];

    const sum1 = arr1.reduce(function(accumulator, currentValue) => {
        console.log('here');
        return accumulator + currentValue ;
    }); // if we don't pass the initial value of the accumulator, it will take the first element of the array as the initial value

    // here
    // here
    // [1, 2, 3]
    // 6

### reduceRight(acc, curr, index, array, this, ...)

This one works the same as .reduce() but it starts from the end of the array.

    const arr = [1, 2, 3];

    const difference = arr.reduceRight(function(accumulator, currentValue) => {
        return accumulator - currentValue ; // this will give us the total sum of the array
    }, 0); // 0 is the initial value of the accumulator

    console.log(difference ); // -6

    const arr1 = [1, 2, 3];

    const difference1 = arr1.reduceRight(function(accumulator, currentValue) => {
        return accumulator - currentValue ;
    }); // if we don't pass the initial value of the accumulator, it will take the first element of the array as the initial value

    console.log(difference1); // 0 - it takes the first element of the array as the initial value (i.e. 3) subtracts the currentValue which is 2 and then subtracts the currentValue which is 1 = 0

## Sorting arrays

### .sort()

This has a built in sorting algorithm that sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    const arr = [5, 7, 3, 0];
    arr.sort(); // [0, 3, 5, 7] - ascending order

    const arr1 = [a, y, m, l];
    arr1.sort(); // [a, l, m, y] - alphabetical order

But we can also define our own sorting rules by passing a compare function. The compare function should return a negative, zero, or positive value, depending on the arguments, like: a - b, 0, a + b. If the result is negative, a is sorted before b. If the result is positive, b is sorted before a. If the result is 0 no changes are done with the sort order of the two values.

    function compare(firstNum, secondNum) {
        if (firstNum < secondNum) {
            return -1; // put firstNum before secondNum
        }
        if (firstNum > secondNum) {
            return 1; // put secondNum before firstNum
        }
        return 0; // leave firstNum and secondNum unchanged with respect to each other
    }

    OR

    const compare = (firstNum, secondNum) => {
        return firstNum - secondNum; // ascending order
    }

    OR

    const compare = (firstNum, secondNum) => {
        return secondNum - firstNum; // descending order
    }

    OR

    const compare = (firstNum, secondNum) => {
        return 0; // no changes are done with the sort order of the two values
    }

    const arr = [5, 7, 3, 0];

    arr.sort(function(a, b) => {
        return b - a; // descending order
    }); // [7, 5, 3, 0]

We can define our own rules, for instance we want 3 to always come first

    const arr = [5, 7, 3, 0];

    arr.sort(function(firstNum, secondNum) => {
        if (firstNum === 3) {
            return -1;
        }
        if (secondNum === 3) {
            return 1;
        }
        return firstNum - secondNum;
    }); // [3, 0, 5, 7]

## notes on performance

**Note:** arr.unshift() and arr.push() are not as performant as arr.splice()
**Note:** arr.unshift() and arr.push() are not as performant as arr.copyWithin()
**Note:** arr.unshift() and arr.push() are not as performant as arr.fill()
**Note:** arr.unshift() and arr.push() are not as performant as arr.concat()
**Note:** arr.unshift() and arr.push() are not as performant as arr.reverse()
**Note:** arr.unshift() and arr.push() are not as performant as arr.sort()
**Note:** arr.unshift() and arr.push() are not as performant as arr.filter()
**Note:** arr.unshift() and arr.push() are not as performant as arr.map()
**Note:** arr.unshift() and arr.push() are not as performant as arr.reduce()
**Note:** arr.unshift() and arr.push() are not as performant as arr.reduceRight()
**Note:** arr.unshift() and arr.push() are not as performant as arr.every()
**Note:** arr.unshift() and arr.push() are not as performant as arr.some()
**Note:** arr.unshift() and arr.push() are not as performant as arr.forEach()
**Note:** arr.unshift() and arr.push() are not as performant as arr.entries()
**Note:** arr.unshift() and arr.push() are not as performant as arr.keys()
**Note:** arr.unshift() and arr.push() are not as performant as arr.values()
