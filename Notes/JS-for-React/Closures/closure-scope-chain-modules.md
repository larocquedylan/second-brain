# Closure Scope Chain in Modules

myModule.js

    let x = 5;
    export const getX = () => x;
    export const setX = (val) => {
        x = val;
    };

Our module exports `getX()` and `setX()` which have the variable `x` in the closure of their module. `x` is not directly accesible in other modules, but it can be read and written with other functions.

index.js

    import { getX, setX } from "./my-module.js"

    console.log(getX()); // 5

    setX(6);
    console.log(getX()); // 6

These closures can be imported values too. If these values are changed in the original module, the imported ones will change as well. This is called a 'live binding'

myModule.js

    export let x = 1;
    export const setX = (val) => {
        x = val;
    };

closureCreator.js

    import { x } from "./myModule.js";

    export const getX = () => x;

index.js

    import { getX } from "./closureCreator.js"
    import { setX } from "./myModule.js"

    console.log(getX()); // 1

    setX(2);
    console.log(getX()); // 2

## More Practical example

Suppose we have a web app that does a GET request from an API and displays it in a table. We want to be able to allow users to sort the columns as they please, and so we want to keep track of the sorting state across different parts of our program.

One way to acheive this is to define a module that exports a closure containing the current sorting state. This closure can then be used by other modules to read and update the sorting state while keeping it private to the module that defines it.

sorting.js

    let currentSortColumn = null;
    let currentSortDirection = null;

    export const getSortingState = () => ({
        column: currentSortColumn,
        direction: currentSortDirection,
    });

    export const setSortingState = (column, direction) => {
        currentSortColumn = column;
        currentSortDirection = direction;
    };

Here, two variables `currentSortColumn` and `currentSortDirection` are private to the module. We then export special versions of the functions `getSortingState` and `setSortingState` that allow other modules to read and update the variables.

table.js

    import { getSortingState } from "./sorting.js";
    import { fetchData } from "./api.js";

    export const renderTable = async () => {
        const { column, direction } = getSortingState();
        const data = await fetchData();
        // sort data by column and direction
        // render table
    };

We import the `getSortingState` from sorting.js to read the state. We import `fetchData` from api.js to display the data in the `renderTable` function.

sortMenu.js

    import { getSortingState, setSortingState } from "./sorting.js";

    export const renderSortMenu = () => {
        const { column, direction } = getSortingState();
        // render sort menu UI
        // attach event listener to update sorting state on user input
        const updateSortingState = (column, direction) => {
            setSortingState(column, direction);
            // trigger table re-render
        };
    };

We import both `getSortingState` and `setSortingState` from sorting.js. We use `getSortingState` to read the current sorting state and render the UI of the sort menu accordingly. We also use `setSortingState` to update the sorting state when the user interacts with the menu.

By using closures we can keep the sorting state encapsulted and keep the sorting from leaking into other parts of our program. No other parts of our codebase can directly modify the state. This is a safety concern.

It also allows for easy updates without affecting much else in the program.
