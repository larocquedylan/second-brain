# Inline Evaluation

This where this stuff actually becomes very practical and interesting.

    let firstName = "Lebron";
    let lastName = "James";
    let fullName = `The name is ${lastName}. ${firstName} ${lastName}.`;
    console.log(fullName); // The name is James. Lebron James.

That alone is kind interesting but the fun part is when we introduce arrow functions. We can do some really cool stuff with arrow functions and template literals.

    let name = [
        { first: "Lebron", last: "James"},
        {first: "Scottie", last:"Barnes"},
        {first: "Michael", last:"Jordan"}
    ];

    let fullName(name) => ` <li> The name is ${name.last}. ${name.first} ${name.last}. </li>`;

    let listNames = name.map(name => fullName(name));
    console.log(listNames);

    // [ '<li> The name is James. Lebron James. </li>',
    // '<li> The name is Barnes. Scottie Barnes. </li>',
    // '<li> The name is Jordan. Michael Jordan. </li>' ]

So we could make an array of lists and then map over them to create a list of names. This is a very simple example but it shows how powerful template literals can be.

    let name = [
        { first: "Lebron", last: "James"},
        {first: "Scottie", last:"Barnes"},
        {first: "Michael", last:"Jordan"}
    ];

    let listOfGoats = `<ul className="goats"> ${name.map(name => `<li className={goat${name.last}}> The name is ${name.last}. ${name.first} ${name.last}. </li>`).join('')} </ul>`;
    console.log(listOfGoats);

    // <ul className="goats">
    //  <li className={goatJames}> The name is James. Lebron James. </li>
    //  <li className={goatBarnes}> The name is Barnes. Scottie Barnes. </li>
    //   <li className={goatJordan}> The name is Jordan. Michael Jordan. </li>
    //</ul>

We could even filter the list. This is a very simple example but it shows how powerful template literals can be.

    let name = [
        { first: "Lebron", last: "James"},
        {first: "Scottie", last:"Barnes"},
        {first: "Michael", last:"Jordan"}
    ];

    let mountRushmore = name.filter(name => name.last.length > 7)
    .map(name => `<li className=${name.list}> The name is ${name.last}. ${name.first} ${name.last}. </li>`)
    .join('');

    let goatList = `<ul className="goats"> ${mountRushmore} </ul>`;

    console.log(goatList);

### note:

Js fiddle is giving me a weird answer - this might be incomplete but it is a good example of how powerful template literals can be.
