# Template literals

Template literals are a new feature in JavaScript that were introduced in ECMAScript 6 (ES6). They provide a way to create strings that can contain embedded expressions, which can make working with strings in JavaScript more powerful and flexible.

- We can also create multi-line strings with template literals with using escape characters.

- But can use escape characters within template literals

  - `"\t"` is tab escape character and `"\n"` is newline escape character

Here is what that looks likes:

    let x = 1;
    const log = console.log;

    let string1 = `This is a string with a variable ${x}`;
    log(string1); // "This is a string with a variable 1"

    // escape character

    let string2 = `"\t" is tab escape character and "\n" is newline escape character`;
    log(string2); " " is tab escape character and "
    " is newline escape character"

    let string3 = `"\\t" is tab escape character and "\\n" is newline escape character`;
    log(string3); "\t" is tab escape character and "\n" is newline escape character"

    // string interpolation

    let string4 = `This string is evaluating x + 1 here: ${x+1}`;
    log(string4); // "This string is evaluating x + 1 here: 2"
