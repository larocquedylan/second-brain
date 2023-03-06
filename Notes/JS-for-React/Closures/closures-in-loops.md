# Common mistake - var

index.html

    <p id="help">Helpful notes will appear here</p>
    <p>Email: <input type="text" id="email" name="email" /></p>
    <p>Name: <input type="text" id="name" name="name" /></p>
    <p>Age: <input type="text" id="age" name="age" /></p>

index.js

    function showHelp(help) {
        document.getElementById("help").textContent = help;
    }

    function setupHelp() {
        var helpText = [
            { id: "email", help: "Your email address" },
            { id: "name", help: "Your full name" },
            { id: "age", help: "Your age (you must be over 16)" },
        ];

        for (var i = 0; i < helpText.length; i++) {
            var item = helpText[i];
            document.getElementById(item.id).onfocus = function () {
                showHelp(item.help);
            };
        }
    }

     setupHelp();

The issue here is that `item` variable is delcared with a `var` keyword. `var`function-scoped meaning it is accessible in the entire function it is declared in, including nest loops.

Remember execution context. When `setHelp()` is executed, a new execution context is created for the function. Within this execution context, a variable `helpText` is defined to hold the objects.

Once the `for` loop is executed and the variable `item` is delcared on each iteration. Because we are using a `var` which is function-scoped, this will continually update itself until the iteration is complete, which leaves the `item` = 'you must 16'. As opposed to a `let` which is block-scoped meaning that is only accessible inside of its own execution context. So on each iteration a new `item` is created, which means the `onfocus` will capture the correct one instead of the last one.

## Alternative

### use let or const

    function showHelp(help) {
        document.getElementById("help").textContent = help;
    }

    function setupHelp() {
        const helpText = [
            { id: "email", help: "Your email address" },
            { id: "name", help: "Your full name" },
            { id: "age", help: "Your age (you must be over 16)" },
        ];

        for (let i = 0; i < helpText.length; i++) {
            const item = helpText[i];
            document.getElementById(item.id).onfocus = () => {
                showHelp(item.help);
            };
        }
    }

    setupHelp();

We just explained why this works above.

### use a For Each

    function showHelp(help) {
    document.getElementById("help").textContent = help;
    }

    function setupHelp() {
    var helpText = [
        { id: "email", help: "Your email address" },
        { id: "name", help: "Your full name" },
        { id: "age", help: "Your age (you must be over 16)" },
    ];

    helpText.forEach(function (text) {
        document.getElementById(text.id).onfocus = function () {
        showHelp(text.help);
        };
    });
    }

    setupHelp();
