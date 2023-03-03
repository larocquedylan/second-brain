# React

## What is React?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM, and so creating React applications usually requires the use of additional libraries for state management and routing. Redux and React Router are respective examples of such libraries.

## functional components

A function that returns a react element (JSX)

    function SayHello(){
        return <h1>Hello</h1>
    }

    function App(){
        return (
            <div>
                <SayHello />
            </div>
        );
    }
