# How to create a UI with React

TDLR; To create a UI with react. We need to add React (creating elements) and ReactDom (render elements to the page) to the page.

We can get react using unpkg.com and add it to our html file.

    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>

With React and ReactDOM we can create react elements, and use react dom to render them on the page.
This works similar to the way we create elements with the document API. But, instead of creating the element and then giving it properties. We add the properties to the element upon creation. We can add the content of the element as a property called `children`.

We add the properties by passing an object as the second argument to `React.createElement()`. The properties we add to the object will be added to the element as attributes.

Text content is added to the element by adding a property called `children` to the object we pass to `React.createElement()`. The value of the `children` property will be the text content of the element.

    // React.createElement(elementType, {props}, ...children)
    const element = React.createElement('div', {
        children: 'Hello World',
        className: 'container'
    })
    console.log(element) // props -> $$typeof: symbol(react.element)
    ReactDOM.render(element, rootElement)

We can also provide the children as the third argument to `React.createElement()` instead of as a property on the object.

    const element = React.createElement('div', {className: 'container'}, 'Hello World')
    ReactDOM.render(element, rootElement)

Functionally, these are the same thing.

We can also add additional children props. This is useful when we want to add multiple children to an element. We can do this by adding additional arguments to `React.createElement()`. As well, we can add an additional `React.createElement()` in the object.

    React.createElement('div', {className: 'container'}, 'Hello World', 'Hello World')
    ReactDOM.render(element, rootElement)

    const element = React.createElement('div', {
        children: React.createElement('span', null, 'hello', 'world'),
        className: 'container'
    })
    ReactDOM.render(element, rootElement)

## full html

    <body>
        <div id="root"> </div>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
        <script type="text/javascript">
            const rootElement = document.getElementById('root')
            const element = React.createElement('div', {className: 'container'}, 'Hello World')
            ReactDOM.render(element, rootElement)
        </script>
    </body>
