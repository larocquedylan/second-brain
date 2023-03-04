# Advantages of JSX

TLDR; JSX is a syntax extension to JavaScript. It allows us to write HTML like markup in our JavaScript files. JSX is not required to use React, but it makes React a lot easier to read. We can interpolate values inside `{}` by putting any expression inside them and have them passed to the React create element API `React.createElement`. We also see that we can spread props `{...props}` and those will be combined with other props passed as attributes to the element.

We can use variables and expressions in JSX. Anything you put in the curly brackets `{}` will be evaluated as JavaScript. Babel compiles JSX down Javascript. I am showing the babel output to see closer what is happening under the hood but this isn't super key to practically using JSX. But is good context to understand.

    const children = 'hello world'
    const element = <div className="container">{children}</div>

    // babel output:
    const children = 'hello world';
    const element = /*#__PURE__*/React.createElement("div",
        {className: "container"}
    , children);

We can also add the className this way

    const children = 'hello world'
    const myClassName = 'container'
    const element = <div className={myClassName}>{children}</div>

    // babel output:
    const children = 'hello world';
    const myClassName = 'container';
    const element = /*#__PURE__*/React.createElement("div", {
      className: myClassName
    }, children);

When we use `{}` we basically tell babel "leave this alone and don't try to compile it". So we can use any valid JavaScript expression in there.

    const myChildren = "hello"
    const worldChild = "world"
    const element = <div className="container">{myChildren} {worldChild}</div>

    // babel output:
    const myChildren = "hello";
    const worldChild = "world";
    const element = /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, myChildren, " ", worldChild);

If we want we can add another element inside of our JSX element.

    const myClassName = "container"
    const element = (
        <div className={myClassName}>
            <span>hello</span>
            <strong>world</strong>
        </div>
    )

    // babel output:
    const myClassName = "container";
    const element = /*#__PURE__*/React.createElement("div", {
      className: myClassName
    }, /*#__PURE__*/React.createElement("span", null, "hello"), /*#__PURE__*/React.createElement("strong", null, "world"));

Something to remember from the previous lesson, children and className are properties. So we can actually pass them inside of the element as attributes. And because we are using JSX we can actually make the tag self closing if we like.

    const myClassName = "container"
    const myChildren = "hello world"
    const element = <div className={myClassName} children={myChildren} />

    // babel output:
    const myClassName = "container";
    const myChildren = "hello world";
    const element = /*#__PURE__*/React.createElement("div", {
      className: myClassName,
      children: myChildren
    });

With the spread operator `{...}` we can spread the properties into a single object. This is useful when we want to pass a bunch of properties into an element.

    const myClassName = "container"
    const myChildren = "hello world"
    const props = {myClassName, myChildren}
    const element = <div {...props} />

    // babel output:
    const myClassName = "container";
    const myChildren = "hello world";
    const props = {
      myClassName,
      myChildren
    };
    const element = /*#__PURE__*/React.createElement("div", props);

JSX makes react very expressive and customizable with multiple properties. For instance a style prop, or an id. Babel will use the `_extends()` helper (which is basically `Object.assign()`), to combine the props we provide (id="app-root") in the element with the props we are spreading (props={myClassName, myChildren}) into a single combined object. Which, remember, is being passed to the second argument of `React.createElement()`.

    const myClassName = "container"
    const myChildren = "hello world"
    const props = {myClassName, myChildren}
    const element = <div id="app-root" {...props} />

Because the way `Object.assign()` works we can override properties we are spreading. The properties we are spreading in the object will be overridden by the properties we are passing in the element. Note that whatever comes last will override the previous properties in the event of a conflict.

    const myClassName = "container"
    const myChildren = "hello world"
    const props = {myClassName, myChildren}
    const element = <div id="app-root" {...props} className="not-container" />

    // babel output:
    function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    const myClassName = "container";
    const myChildren = "hello world";
    const props = {
      myClassName,
      myChildren
    };
    const element = /*#__PURE__*/React.createElement("div", _extends({
      id: "app-root"
    }, props, {
      className: "not-container"
    }));

## Summary HTML

    <body>
        <div id="root"> </div>
        <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
          <script type="text/babel">
            const rootElement = Document.getElementById('root')
            const myClassName = "container"
            const myChildren = "hello world"
            const props = {myClassName, myChildren}
            const element = <div id="app-root" {...props} className="not-container" />
            ReactDOM.render(element, rootElement)
        </script>
    </body>

    // babel output:
    function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement("div", {
      id: "root"
    }, " "), /*#__PURE__*/React.createElement("script", {
      src: "https://unpkg.com/react@16.12.0/umd/react.development.js"
    }), /*#__PURE__*/React.createElement("script", {
      src: "https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"
    }), /*#__PURE__*/React.createElement("script", {
      src: "https://unpkg.com/@babel/standalone@7.8.3/babel.js"
    }), /*#__PURE__*/React.createElement("script", {
      type: "text/babel"
    }, "const rootElement = Document.getElementById('root') const myClassName = \"container\" const myChildren = \"hello world\" const props = ", (myClassName, myChildren), "const element = ", /*#__PURE__*/React.createElement("div", _extends({
      id: "app-root"
    }, props, {
      className: "not-container"
    })), "ReactDOM.render(element, rootElement)"));
