# How to validate prop types

React has a built in package that allows for run time prop validation. This is good for testing and catching bugs, as well as for good documentation. It needs to be installed with `npm install prop-types`.

To add support for prop validation, we use `.propTypes` method on the component. This is a property of the component and is a type object. The keys of the object are the prop names and the values are the prop types. The prop types are functions that return a boolean.

## without package

We must create the validation object ourselves. We can do this by creating a function that returns a boolean. We can then use this function as the value for the prop type.

    <body>
        <div id=root"> </div>
        <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
        <script type="text/babel">
            const rootElement = document.getElementById('root')

            function sayHello({firstName, lastName}){
                return (
                    <div>
                        Hello {firstName} {lastName}
                    </div>
                )
            }

            SayHello.propTypes = {
                // key for the prop we want to validate
                // function(value, key, componentName, location, propFullName)

                firstName(props, propName, componentName){
                    if (typeof props[propName] !== 'string'){
                        return new Error(`component ${componentName} expects a string for ${propName} but you passed a ${typeof props[propName]}`)
                    }
                }

            const element = <SayHello firstName={false} />

            ReactDOM.render(element, rootElement)
        </script>
    </body>

We could also break this into separate functions like such

    const propTypes = {
        string(props, propName, componentName){
            if (typeof props[propName] !== 'string'){
                return new Error(`component ${componentName} expects a string for ${propName} but you passed a ${typeof props[propName]}`)
            }
        }
    }

    SayHello.propTypes = {
        firstName: propTypes.string,
        lastName: propTypes.string
    }

## with package

With the package we no longer need to create the validation object ourselves. We can just import the package. But, with this package, because propTypes are not required, it will only validate for the first one by default. This is a simple fix as we simple add a property `.isRequired` to the end of the prop type.

    <body>
        <div id="root">
        <script src="https://unpkg.com/react@16.12.0/umd/react.production.min.js"></script>
        <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
        <script src="https://unpkg.com/prop-types@15.6.1/prop-types.js"></script>
        const rootElement = document.getElementById('root')

        function sayHello({firstName, lastName}){
            return (
                <div>
                    Hello {firstName} {lastName}
                </div>
            )
        }

        SayHello.propTypes = {
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired
        }

        const element = <SayHello firstName={false} />

        ReactDOM.render(element, rootElement)
    </body>

By adding this package and validating our prop types, we slow down our site and impact performance. If change react and reactDOM tp production, the error is no longer thrown and that is because in production prop types are not applied.

But, we can take it a step further by adding a babel plugin to remove the prop types from our production build. (https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)- many toolkits/libraries install and use this by default.
