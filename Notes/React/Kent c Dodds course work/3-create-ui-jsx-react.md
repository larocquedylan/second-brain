# How to create UI with JSX and React

JSX allows us to write HMTL like markdown that will be compiled into React elements.

    <body>
        <div id="root"> </div>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script type="text/javascript">
            const rootElement = document.getElementById('root')
            const element = <div className="container"> hello world </div>
            ReactDOM.render(element, rootElement)
        </script>
    </body>

If we only wrote this, we get an error in our console saying there was an unexpected token. This is because the browser doesn't recognize JSX. So we need a JSX compiler. So we need to add babel to our project.

    <body>
      <div id="root"></div>
      <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
      <script type="text/babel">
        const rootElement = document.getElementById('root')
        const element = <div className="container">Hello World</div>
        ReactDOM.render(element, rootElement)
      </script>
    </body>

Create-React-App uses [babel](https://babeljs.io/)to compile the JSX and [webpack](https://webpack.js.org/) to bundle the code.

CRA is good for learning how to use react. But, it isn't a tool to help us understand react really.

### The recommended tool chain is:

- package manager [npm](https://www.npmjs.com/)

- bundler [webpack](https://webpack.js.org/)

- compiler [babel](https://babeljs.io/)

### Building sites with react:

- building server-rendered websites with [Next.js](https://nextjs.org/)

- building static content with [Gatsby](https://www.gatsbyjs.org/)
