# Practical example with React

    import React from 'react';
    import styled from 'styled-components';

    const Button = styled.button`
        background-color: ${props => props.primary ? 'blue' : 'gray'};
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
    `;

    function App() {
    return (
        <div>
            <Button>Default Button</Button>
            <Button primary>Primary Button</Button>
        </div>
    );
    }

    export default App;

In this example, we're using styled components to create a Button component that accepts a primary prop. The Button component is defined using a tagged template literal, which allows us to use expressions within the template string to create dynamic styles.

In the Button component, we're using the ${props => props.primary ? 'blue' : 'gray'} expression within the template string to conditionally set the background color of the button based on the value of the primary prop. If primary is truthy, the background color is set to blue, otherwise it's set to gray.

We're then rendering two instances of the Button component within the App component, one with the primary prop and one without. The result is two buttons with different background colors, demonstrating how we can use tagged template literals to create reusable, dynamic styled components in React.
