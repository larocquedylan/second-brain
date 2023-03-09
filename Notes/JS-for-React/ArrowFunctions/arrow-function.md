# Arrow Function Expression

Arrow functions are a new way to write functions in JavaScript. They are a shorter syntax for writing function expressions. They are also called fat arrow functions.

    let sum = (a, b) => a + b;
    function sum(a, b) {
      return a + b;
    }

    let get5 = () => 5;
    function get5() {
      return 5;
    }

    let divide (a, b)) => a / b;
    function divide(a, b) {
      return a / b;
    }

## syntax

    () => expression
    () => {
        statements
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
    }

    // The function is executed immediately:
    (() => console.log("Hello"))();

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

### Simplify funcction calls

    function(a){
        return a + 1;
    }

    (a) => {
        return a + 1;
    }

    (a) => a + 1;

    a => a + 1;

### Params aren't needed

    function(a + b){
        return a + b;
    }

    () => {
        return a + b;
    }

    () => a + b;

### Can assign them to a name

    let sum = () => a + b;

### Can be used as a callback

    function(a, b, callback){
        callback(a + b);
    }

    (a, b, callback) => callback(a + b);
