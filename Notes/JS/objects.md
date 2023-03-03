# Objects in JS

Values in JavaScript fall into two categories:

- Primitives
- Objects

Primitive values include:

- strings
- numbers
- booleans
- undefined
- null

Object values (everything else in JS):

- Math
- Date
- JSON
- document
- window
- Objects you create
  - array
  - function
  - strings
- primitives too:
  - numbers
  - strings
  - booleans

## Arrays

Arrays and functions may seem like different things from an object but are fundamentally the same for JS.

Arrays are a collection of values with an index while objects are a collection of properties. Despite the difference in syntax used to handle the two types, underneath an array is just a special type of object. It is an object that uses index's to access a particular property instead of a key.

Because an array is an object, you can use object methods on them. For instance, you can use .length, or .push() and many other tools.

    let flavours = ["vanilla", "chocolate", "strawberry];

    flavours.store = "Rain or Shine"

    console.log(flavours.length); // 3

    for (let prop in flavours){
        console.log("🚀 ~ file: index.js:127 ~ prop:", prop)
        console.log("🚀 ~ file: index.js:127 ~ flavours:", flavours)
    }

    output:
    3
    🚀 ~ file: index.js:127 ~ prop: 0
    🚀 ~ file: index.js:127 ~ flavours: [ 'vanilla', 'chocolate', 'strawberry', store: 'Rain or Shine' ]
    🚀 ~ file: index.js:127 ~ prop: 1
    🚀 ~ file: index.js:127 ~ flavours: [ 'vanilla', 'chocolate', 'strawberry', store: 'Rain or Shine' ]
    🚀 ~ file: index.js:127 ~ prop: 2
    🚀 ~ file: index.js:127 ~ flavours: [ 'vanilla', 'chocolate', 'strawberry', store: 'Rain or Shine' ]
    🚀 ~ file: index.js:127 ~ prop: store
    🚀 ~ file: index.js:127 ~ flavours: [ 'vanilla', 'chocolate', 'strawberry', store: 'Rain or Shine' ]

    console.log(flavours); // [ 'vanilla', 'chocolate', 'strawberry', store: 'Rain or Shine' ]
    console.log(flavours.length); // 3

As we can see, an array is simply an object but layers on the ability to look at values with the index. As well, the various array methods in JS.

## Functions

Functions also seem to be completely different from objects on the face of it. But upon a closer look they are a special kind of functions. Functions are first-class citizens which basically means they can be treated like any other value such as a strings, number, or objects. They can be assigned to variables, passed as arguments to other functions, and returned from functions. _This is because functions are objects in javascript_.

They have properties and methods, just like any other object. For example, every function in JavaScript has a name property and a length property, and it can have custom properties and methods added to it.

Functions can also be used as constructors to create objects. When a function is called with the new keyword, it creates a new object and sets this to the new object. The function can then add properties and methods to the new object and return it. This is the basis of object-oriented programming in JavaScript. Functions that are used as constructors are called constructor functions, and they are used to create instances of objects.

    class Dog {
        constructor(name, breed, weight) {
            this.name = name;
            this.breed = breed;
            this.weight = weight;
        }
    }

    class ShowDog extends Dog {
        constructor(name, breed, weight, handler) {
            super(name, breed, weight);
            this.handler = handler;
        }
    }

    const fido = new ShowDog("Fido", "Mixed", 38, "Bob");
    console.log("🚀 ~ file: index.js:150 ~ fido:", fido);
    // 🚀 ~ file: index.js:150 ~ fido: ShowDog { name: 'Fido', breed: 'Mixed', weight: 38, handler: 'Bob' }
