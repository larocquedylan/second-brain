# How to create a User Interface with Javascript Need a place to append you

JavaScript DOM elements

    <div id='root'></div>

Get access to that element with the document API

    const rootElement = document.getElementById('root')

Create our out element

    const element = document.createElement('div')

add some content to that element

    element.textContent = 'Hello World'

append that element to the root element

    rootElement.appendChild(element)

## full script

    <body>
        <div id="root"> </div>
        <script type="text/javascript">
            const rootElement = document.getElementById('root')
            const element = document.createElement('div')
            element.textContent = "Hello World"
            element.className = "container"
            rootElement.appendChild(element)
        </script>
    </body>
