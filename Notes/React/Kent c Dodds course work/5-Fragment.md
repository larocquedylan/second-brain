# How to render multiple elements

TLDR; React can only render a single element. So we use `<React.Fragment>` to do so. The shorthand is `<>` and `</>`. Fragments declared explicitly must have a `key = {value}` attribute.

## With React.createElement

    const element1 = React.createElement('span', null, 'hello')
    const element2 = React.createElement('span', null, 'World')
    const element = React.createElement(React.fragment, null, element1, ' ', element2)
    ReactDOM.render(element, document.getElementById('root'))

But again, no one wants to use `React.createElement()` directly. So, we can use JSX instead.

## With JSX

    const element = (
        <React.Fragment>
            <span>hello</span> <span> world</span>
        </React.Fragment>
    )
    ReactDom.render(element, document.getElementById('root'))

    // babel output:
    const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "hello"), " ", /*#__PURE__*/React.createElement("span", null, " world"));
    ReactDom.render(element, document.getElementById('root'));

This is incredibly common and as such, we use the shorthand that I was introduced to `<>` and `</>`.

    const element = (
        <>
            <span> hello </span> <span> world </span>
        </>
    )
    ReactDom.render(element, document.getElementById('root'))

## Note

Note... As I was going through the lecture for these notes was looking at the react docs and noticed that `ReactDOM.render()` is actually deprecated. When I checked on my create-react-app projects, I confirmed that it is deprecated.

Instead it is now `React.createRoot(domNode, options?)`. Where the domNode is the DOM element we want to render to. The options are options for the react root. `React.createRoot()` returns an object with two methods for mounting and unmounting the app.

We then use the `render()` method on the object returned by `React.createRoot()` to render the app. The `render()` method takes a single argument, which is the element we want to render.

    const root = React.createRoot(document.getElementById('root'))
    root.render(<App />)
