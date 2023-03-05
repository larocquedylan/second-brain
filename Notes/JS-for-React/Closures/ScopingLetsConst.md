# Scope with Let and Const

With ES6, functions are not block scoped.

Before ES6, Let and Const were not a thing and variables were defined with Var.

Var allowed for function-scope and global-scope which would get hairy sometimes. I don't really know because I wasn't around and IDK if going down that rabbit hole is worth it.

But basic exmaple here:

    if (Math.random() > 0.5) {
        var x = 1;
    } else {
        var x = 2;
    }
    console.log(x); // this won't return an error which i guess is weird for some programmers

Now with let and const, this doesn't happen.

    if (Math.random() > 0.5) {
        const x = 1;
    } else {
        const x = 2;
    }
    console.log(x); // ReferenceError: x is not defined

With let and const, variables are scoped to their code block.
