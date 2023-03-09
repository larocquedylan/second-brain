# Destructure Assignment - Objects

## Objects

Destructuring Objects is where things become cool, particularly in React. Instead of passing the entire `props` object to child components, you can destructure it and pass more specific properties. This means you don't have to the information as a `props.info` and it can simply be `info.

Notice we do use the appropriate `{}` when destructuring an object vs. `[]` for an array.

### Basic

    const person = {
        name: 'dylan',
        'age': 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    const {name, age} = person;
    clg(name); // 'dylan'
    clg(age); // 111

### Renaming in Destructuring & Rest operator

    const person = {
        name: 'dylan',
        'age': 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    const { name: firstName, ...rest} = person;
    clg(name); // undefined
    clg(firstName); // "dylan"
    clg(rest); // {age: 111, address: {city: 'babylon', planet: 'earth'}}

### Default values

    const person = {
        'age': 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    const {name: firstName = 'tyson', age} = person;
    clg(firstName); // tyson

### Nested Destructure

    const person = {
        name: 'dylan',
        'age': 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    const {name: firstName, address : { city} } = person
    clg(city); // 'babylon'

### Combining objects with Rest

    const personI = {
        name: 'dylan',
        age: 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    const personIi = {
        age: 222,
        faveFood: 'apple',
    }

    const combinedPerson = {...personI, ...personIi};
    clg(combinedPerson); //
    // {name: 'dylan', age: 222, address: {city: 'babylon', planet: 'earth'}, faveFood: 'apple'}

Here, there is an `age` for both erpson objects, in the `combinedPerson` object, the second one in the destructuring overrides the first one.

### Destructring in a function

    const person = {
        'age': 111,
        address: {
            city: 'babylon',
            planet: 'earth'
        }
    }

    function printPerson({name, age}){
            clg(`hello, my name is ${name}, I am ${age} years old);
    }

    printPerson(person); // "hello, my name is dylan, I am 111 years old"
