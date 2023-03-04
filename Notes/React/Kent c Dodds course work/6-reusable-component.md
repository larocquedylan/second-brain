# Components

So let's say we want to two of those for whatever reason. We can do that by creating a component.

    const message = <div className="message"> hello <div>
    const element = (
        <div className="container">
            {message}
            {message}
        </div>
    )

what if want to have the message be different. We need to parameterize the message, so in javascript we do that by creating a function. We will accept an object we call props.

    const message = (props) => <div className="message"> {props.msg} <div>
    const element = (
        <div className="container">
            {message({msg: 'hello'})}
            {message({msg: 'goodbye'})}
        </div>
    )

But, we don't like the way this looks. The advantage of JSX is that it looks like HTML and we can use the declarative nature of it to our advantage. So let's try.

    const message = (props) => <div className="message"> {props.msg} <div>
    const element = (
        <div className="container">
            {message({msg: 'hello'})}
            {message({msg: 'goodbye'})}

            <message>what</message>
        </div>
    )

This actually works! But we do get a warning sign in the console "The tag <message> is unrecognized in the browser. If you meant to render a React component, start its name with an uppercase letter." If we checked out the 'Elements' tab in developer tools to see the compiled version of our code, we would see that react actually created

    // compiled output
    var message = function message(props) {
        return React.createElement("div", {
            className: "message"
        }, props.msg, React.createElement("div", null));
    };

    var element = React.createElement("div", {
        className: "container"
    }, message({
        msg: 'hello'
    }), message({
        msg: 'goodbye'
    }), React.createElement("message", null, "what"));

As you can see Babel compiled <message> as a string "message". We don't want to have a DOM element that is the message element, we want to use the `message` function to create a DOM element so we need to capitalize.

    const Message = (props) => <div className="message"> {props.msg} <div>
    const element = (
        <div className="container">
            {Message({msg: 'hello'})}
            {Message({msg: 'goodbye'})}
            <Message>what</Message>
        </div>
    )

    // compiled output:
    var element = React.createElement("div", {
        className: "container"
    }, message({
        msg: 'hello'
    }), message({
        msg: 'goodbye'
    }), React.createElement(Message, null, "what"));

If we console log the div and the component we can see the difference in type. The div is a string and the component is a function.

    console.log(<div>hello world</div>);

    $$typeof: Symbol(react.element)key: null
    props:
        children : "hello world"
        [[Prototype]]: Object
    ref: null
    type: "div"

    console.log(<Message> Hello World </Message>);

    $$typeof: Symbol(react.element)
    key: null
    props:
        children: " Hello World "
        [[Prototype]]: Object
    ref: null
    type: ƒ Message(_ref)
        length: 1
        name: "Message"
        prototype:
            constructor: ƒ Message(_ref)
            length: 1
            name: "Message"
            prototype: {constructor: ƒ}
        arguments: (...)
        caller: (...)
        [[FunctionLocation]]: Inline Babel script:2
        [[Prototype]]: ƒ ()
        [[Scopes]]: Scopes[1]
        [[Prototype]]: Object

## final HTML

    <body>
        <div id=root"> </div>
        <script src="https://unpkg.com/react@16.12.0/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js"></script>
        <script type="text/babel">
            const Message = (props) => <div className="message"> {props.msg} <div>
            const element = (
                <div className="container">
                    <Message> Hello
                        <Message msg="Goodbye" />
                        <span> we can nest it too </span>
                    </Message>
                </div>
            )
            ReactDOM.render(element, document.getElementById('root'))
        </script>
    </body>
