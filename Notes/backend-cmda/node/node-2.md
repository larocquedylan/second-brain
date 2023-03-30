# Servers

Basic example

    let http = require('http'); // require (load) a module (code package)

    http.createServer(onrequest).listen(8080);
    // create a web server
    // handles each request
    // listen on port 8080

    function onRequest(req, res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1> Hello world</h1> \n');
    };
    // handle each request by responding with "Hello World"
