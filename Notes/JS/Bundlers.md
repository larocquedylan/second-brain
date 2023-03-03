# Module Bundlers

Lets think of programmers as an author. We spend all this time crafting thoughts or creating the idea. And, we think we are ready to compile and release this thing. But it is currently a massive blob of code. It works, but it is incredibly unrefined. The core nugget is there, but we need to organize it. We need to make it more readable. We need to make it more accessible. We need to make it more modular.

You can think of module bundlers as the spine that bounds a novel together. Where the pages represent modules. Each chapter in the book is perhaps exploring different character arch, or playing with some other idea that is useful in the broader context of the book but still should sit on its own for brevity or design reasons.

The spine of the book is ultimately what bounds these pages together and thus allows the book in itself to encapsulate and idea or an experience. The spine is what allows the book to be read and understood as a whole.

Module bundlers are the same. A bundler is what allows developers to organize their code into modules and then bundle them together into a single file that can be loaded into the browser. The bundler is what allows the developer to encapsulate their code and then expose it to the rest of the application.

Keeping on with this metaphor, one of the nice things about book is that they come with a table of contents. In similar fashion, a module bundler creates a thing called the, Dependency Graph which is in charge of keeping track of source file dependencies as well as third party dependencies. This is incredibly helpful in navigating our development process as it allows us to see the relationship between our components and the components that they depend on. A good table of contents are very helpful in navigating a book. It allows the reader to see the relationship between the chapters.

Our module bundler does a similar thing.

The bundler must first enter in our (hopefully) main file and recursively traverse (read) our code. It will first look for any `import` or `require` statements and then follow the path to the file that is being imported. It then looks at the `imports` and `exports` in those files! It continues to do this until it has traversed the entire dependency graph. This is called dependency resolution. At each point assigning a unique id to each module or a chapter in our book.

This is key in order to ensure our book flows smoothly. We don't want to have (unintentional) conflicting stories in our book. We don't want to have a chapter that is about a character that we haven't met yet! We also want to make sure the information we are giving the reader should be given.

In our program, we need to have a dependency order! This makes sure that we are getting the functions we need when the browser is asking for them! We also need to make sure function's don't have the same name, and we don't want imports that aren't being used because it slows us down!

After our program is created, and the dependency graph (table of contents) has been formed, we then bundle (manufacture the physical book). This where we load our program into one file, or complete the book before shipping.

This is where we can minify our code, and optimize it for production. This is where we can also add in polyfills for older browsers.

so how do we use a module bundler? Well, we need to install one. There are a few options out there, but the most popular ones are:

- [Webpack](https://webpack.js.org/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Parcel](https://parceljs.org/)
- [Browserify](http://browserify.org/)
- [FuseBox](https://fuse-box.org/)
- [Vite.js](https://vitejs.dev/)

## module history

Why do we have different module formats?

- [CommonJS](https://nodejs.org/api/modules.html)
- [AMD](https://requirejs.org/docs/whyamd.html)
- [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

In the beginning we had script tags to our html. Just adding more and more scripts. Then we had them in the window namespace. This isn't very maintainable, you needed to minify all the scripts, so wasn't a module format.Then came require js. Then came common js. Then came AMD - Asynchronous Module Definition.Then came ESM - ECMAScript Modules. Which is importing and exporting modules.

This is what we use in the browser. This is what we use in vite. We dont need to compile it away. We can but don't need to. This can do tree shaking. Which is about removing unused code. ESM is async by default meaning that before we require a file, we need to wait for it to load. This is a good thing because it means that we don't have to worry about the order of our imports. And that we can do async operations here. Which is beneficial because, when we are in node it is all done on the server which is very fast, but on the browser it can take some time as we are doing http requests, so having async operations (formally had to be synchronous) allows us to insert code to tell the browser to do other things while we wait for the http request to finish. This is exciting because it means that we can do things like loading bars, and other things that make our application feel more responsive.

In browsers, ESM is the only thing. But in node, we need to define if we are in common js or esm. We do this in the manifold (package.json). We tell the server that the file is either type "module" or "commonjs". Alternatively, we can name files .mjs or .cjs. This is the same as the .js extension, but it tells the server what type of file it is.

When we are in type module, it means that every file that is a sibling or a child of that component is also a module unless .cjs.

So using ESM is an opt-in. You can either opt-in a single file by changing from .js to .mjs, which is the same as .js extension, but it tells our server what type of file it is. Or you can opt-in an entire directory by adding a package.json with "type": "module".

When we are in type module, it means that every file that is a sibling or a child of that component is also a module unless prefixed with .cjs extension.

## using modules in the browser

We can use modules in the browser by using the script tag. We can use the type="module" attribute to tell the browser that this is a module. We can also use the nomodule attribute to tell the browser that this is not a module. This is useful for older browsers that don't support modules.

The browser needs to know that is a module versus a script. This is because the browser needs to know that it needs to wait for the module to load before it can run the script. This is because the module might be using a function that is defined in the script. So the browser needs to wait for the module to load before it can run the script.

## using modules in node

We can use modules in node by using the require function. We can also use the import keyword. This is because node supports both common js and esm.

## code splitting

Code splitting is a technique that allows us to split our code into multiple bundles that can be loaded on demand or in paralell. This is useful because it allows us to reduce the size of our initial bundle and thus improve the time to interactive of our application. It also allows us to only load the code that is needed for a given view or route.

## tree shaking

Tree shaking is a technique that allows us to remove unused code from our bundle. This is useful because it allows us to reduce the size of our bundle and thus improve the time to interactive of our application. It also allows us to only load the code that is needed for a given view or route.

## hot module replacement

Hot module replacement is a technique that allows us to update modules in our application without having to reload the entire page. This is useful because it allows us to reduce the time it takes to see our changes. It also allows us to preserve the state of our application.
