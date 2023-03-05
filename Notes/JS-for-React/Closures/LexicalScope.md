# Lexical Scope

## How is Scope determined in JS?

The scope of a variable or function is determined by its execution context.

## What is the Execution Context?

An execution context includes 3 key things; the argument(s) passed to the code block, the variables or functions defined within the current code block, and a reference to the lexical environment (variables and functions) outside of the code block.

## When is a new Execution Context created?

A new execution context is created in JavaScript whenever the program enters a new block of code. This can happen in several situations, including:

- When the program starts running, an initial global execution context is created.

- When a function is called, a new execution context is created for that function.

- When a block of code is entered, such as a for loop or if statement, a new execution context is created for that block

## What is the Lexical Environment?

The lexical environment refers to the set of variables and functions that are available in a particular section of code, based on where they were defined in the code. Each execution context in JavaScript creates a new lexical environment and, therefore, a new scope. Each execution context has a reference to its parent lexical environment, which points to its memory allocation.

## What is the Scope Chain?

When a function or variable is referenced in a code block, JS first searches the local variables and function defined inside of its execution context (think children). If it cannot find it here, it then looks in the lexical environment it was defined in (think parent). If it cannot find it here, it will search the outer environment of that one, and so on until reaching the global scope.

This process of searching for variables or functions referenced is called the scope chain. This chain is created by nesting of code blocks in our program.

## How does the scope chain enable Closures?

When a function is defined, it has access to its parent's environment when the parent was defined including the variables and parameters in the state at that time. This ability to access and manipulate the parents environment even after it has returned, is called a closure. So the scope chain is kind of the vehicle that allows for closures to work. These concepts are closely related.

### example 1

    function init() {
        let name = "dylan"; // local variable
        function displayName() {
            // displayName() forms the closure
            console.log(name);
             // accessing parent variable when its no in the local scope
         }
        displayName();
    }
    init();

### exmaple #2

    function two(){
            let a;
            console.log(a)
    }

    function three(){
        let a = 2;
        console.log(a);
        two();
    }

    let a = 1;
    console.log(a);
    one();

    // output -> 1 2 undefined

### example #3

    function two(){
        console.log(a);
    }

    function one(){
        let a=2;
        console.log(a);
        two();
    }

    let a=1;
    console.log(a);
    one();

    // output -> 1 2 1
