# Node In Depth

- process

## process

process.cwd() // prints current working directory i.e. filepath

    const process = require('process');
    console.log("Current working directory: ",
    process.cwd());

    try {
        // Change working directory
        process.chdir('../');
        console.log("Working directory after changing" + " directory: ", process.cwd());
    } catch (err) {
        // printing error if occurs
        console.error("error occurred while changing" + " directory: ", err);
    }

### process.exit()

process.exit() is a method used to terminate the current node.js process. When the method is called, it will immediately stop the execution of the program and exit the process.

This is commonly used to handle errors or unexpected behaviour in our programs. For exmaple, if the application encounters an error it can't recover from, you can put this in the catch boundary.

    try {
    // Some code that might throw an error
    } catch (error) {
    console.error(error);
    process.exit(1); // Exit with error code 1
    }

Here, if an error is thrown in the catch block, it will log the error and exit the process.

Another exmaple, would be exiting the process if someone enters something wrong in a CLI interface. Like so...

    const args = process.argv.slice(2);
    if(args.legnth === 0){
        console.log('please provide a command');
        process.exit(1); // exit with error code 1
    }

    const command = args[0];
    if(command !== 'start' && command !== 'stop){
        console.error('invalid command');
        process.exit(1); // exist with error code 1
    }

Here, we check if command is empty or invalid, we throw an error code and exit the process if so.

### process.env

    index.js:
    console.log(process.env)

    [backend] $ node index.js
    { LANG: 'en_GB.UTF-8',
    USER: 'tilde',
    PWD: '/Users/tilde/backend',
    HOME: '/Users/tilde',
    TERM_PROGRAM: 'Apple_Terminal',

process.env is an object that contains all of the environment variables available to the current process. Environment variables are key-value pairs that can be set by the operating system or by the user, and are used to provide configuration or other information to running applications.

One common use case for process.env is to store configuration values for your application, such as database credentials or API keys. Here is an example of how you might use process.env to store a database URL:

    const dbUrl = process.env.DATABASE_URL;

Here we are accessing the value of an environment variable called "DATABASE_URL" using process.env. This allows us to store sensitive information outside of our codebase, and makes it easier to change config values without modifying code.

Another common use case for process.env is to provide different behavior based on the environment the application is running in. For example, you might want to use a different database URL when running your application locally versus in production. Here is an example of how you might use process.env to determine the current environment:

    const environment = process.env.NODE_ENV || "development";

    if (environment === "production") {
    // Use production configuration...
    } else {
    // Use development configuration...
    }

In this example, we are accessing an environment variable called "NODE_ENV" using process.env. If the variable is not set (i.e. process.env.NODE_ENV is undefined), we default to a development environment. This allows us to easily switch between different configurations based on where the application is running.

### process.argv

    index.js:
    console.log(Got: ' + process.argv)

    node:
    [backend] $ node index.js one two
    Got: [ '/usr/bin/node',
    '/Users/tilde/backend/index.js',
    'one',
    'two' ]

process.argv is an array that contains the command-line arguments passed to the current process. When you run a Node.js program from the command line, any arguments provided after the filename will be passed to the process as elements of the process.argv array.

One common use case for process.argv is to create a command-line interface for your application. You can use process.argv to parse and validate the command-line arguments passed to your program, and then take the appropriate action based on the arguments.

    const args = process.argv.slice(2);

    if (args.length !== 3) {
    console.error("Usage: node calculator.js <operand> <operator> <operand>");
    process.exit(1); // Exit with error code 1
    }

    const [operand1, operator, operand2] = args;

    let result;

    switch (operator) {
    case "+":
        result = Number(operand1) + Number(operand2);
        break;
    case "-":
        result = Number(operand1) - Number(operand2);
        break;
    case "*":
        result = Number(operand1) * Number(operand2);
        break;
    case "/":
        result = Number(operand1) / Number(operand2);
        break;
    default:
        console.error(`Invalid operator: ${operator}`);
        process.exit(1); // Exit with error code 1
    }

    console.log(`Result: ${result}`);

In this example, we are using process.argv to get the command-line arguments passed to the program. We validate that exactly three arguments were passed, and then use destructuring assignment to assign them to variables.

We then use a switch statement to perform the appropriate arithmetic operation based on the operator argument, and print the result to the console.

Another use case for process.argv is to pass configuration values to your program from the command line. For example, you might want to specify a different port number for your server to listen on. Here is an example of how you might use process.argv to pass a port number to your server:

    const port = process.argv[2] || 3000;
    // Start the server on the specified port.

In this example, we are getting the first argument passed to the program using process.argv[2]. If no argument is provided, we default to port 3000. This allows us to easily change the port number without modifying code.

### process.stdin

    index.js:
    var fs = require('fs')
    var write = fs.createWriteStream

    process.stdin
    .pipe(write('out.txt'))

    node:
    $ echo "Hello" > in.txt
    $ node index.js < in.txt
    $ cat out.txt
    Hello

process.stdin is a Readable stream that represents the standard input of the current process. This stream allows you to read data from the terminal or console.

One common use case for process.stdin is to create command-line interfaces or interactive applications that prompt the user for input. You can use process.stdin to read input from the user and then take the appropriate action based on the input.

    const readline = require('readline');

    const randomNumber = Math.floor(Math.random() * 10) + 1;

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question('Guess a number between 1 and 10: ', (answer) => {
    const guess = parseInt(answer);

    if (isNaN(guess)) {
        console.error('Invalid input');
        process.exit(1); // Exit with error code 1
    }

    if (guess === randomNumber) {
        console.log('You guessed the number!');
    } else {
        console.log(`Sorry, the number was ${randomNumber}`);
    }

    rl.close();
    });

In this example, we are using process.stdin to read input from the user. We create a Readline interface using the readline module, and use the question method to prompt the user for input.

We then parse the user's input as an integer using parseInt, and compare it to a randomly generated number between 1 and 10. We print the appropriate message to the console based on the user's guess, and then close the Readline interface using rl.close().

Another use case for process.stdin is to pipe data from another stream into your program. For example, you might have a script that processes data from a file, and you want to be able to pipe the contents of the file into the script using the command line. Here is an example of how you might use process.stdin to read data from a piped stream:

    process.stdin.on('data', (chunk) => {
    // Process the chunk of data...
    });

    process.stdin.on('end', () => {
    // Finished processing data
    });

Here, we are listening for the data and end events on process.stdin. Whenever new data is available on the stream, the data event will be emitted with a chunk of data. We can then process the data in the callback function.

When there is no more data available on the stream (i.e. the end of the file has been reached), the end event will be emitted. We can then perform any final processing needed.

process.stdin is a Readable stream in Node.js that represents the standard input of the current process. It can be used to create command-line interfaces or interactive applications that prompt the user for input, or to read data from a piped stream.

### process.stout

    index.js:
    const fs = require('fs')
    const read = fs.createReadStream

    read('in.txt')
    .pipe(process.stdout)

    node:
    $ echo "Hello" > in.txt
    $ node index.js
    Hello

process.stdout is a Writable stream that represents the standard output of the current process. This stream allows you to write data to the terminal or console.

One common use case for process.stdout is to print messages or information to the console. You can use process.stdout.write() to write data to the standard output stream.

    process.stdout.write('Hello, world!\n');

Another use case for process.stdout is to format output or display data in a tabular format. You can use process.stdout.write() to write formatted text to the console.

Here is an example of how we might use process.stdout to display data in a tabular format:

    const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'San Francisco' }
    ];

    process.stdout.write('Name\tAge\tCity\n');

    data.forEach((item) => {
    process.stdout.write(`${item.name}\t${item.age}\t${item.city}\n`);
    });

In this example, we are using process.stdout.write() to display data in a tabular format. We first write the column headers to the console using a tab-separated string. We then iterate over each item in the data array and write each property value to the console using a tab-separated string.

### process.stderr

    index.js:
    process.stderr.write('An error!')
    process.stdin.pipe(process.stdout)

    node:
    $ echo "Hello" > in.txt
    $ node index.js < in.txt > out.txt
    An error!
    $ cat out.txt
    Hello

process.stderr is a Writable stream that represents the standard error output of the current process. This stream allows you to write error messages or other important information to the console.

One common use case for process.stderr is to print error messages or other information to the console when an error occurs. You can use process.stderr.write() to write data to the standard error output stream.

    process.stderr.write('An error occurred!\n');

we are using process.stderr.write() to write the string "An error occurred!" to the standard error output stream. The \n at the end of the string is a newline character, which adds a line break after the message.

Another use case for process.stderr is to log important information or warnings to the console. You can use process.stderr.write() to write messages to the console that are not necessarily errors, but should still be given attention.

Here is an example of how you might use process.stderr to log a warning message to the console:

    process.stderr.write('Warning: This operation could cause data loss.\n');

we are using process.stderr.write() to write the string "Warning: This operation could cause data loss." to the standard error output stream. This message is not necessarily an error, but it is important information that should be given attention.

process.stderr is a Writable stream in Node.js that represents the standard error output of the current process. It can be used to print error messages or other important information to the console, log warnings or other important messages to the console, and more.

## Using process in an express server?

The usage of process.stdin, process.stdout, and process.stderr in an Express server may not be as common as in other types of Node.js applications. This is because an Express server typically interacts with clients through HTTP requests and responses, rather than through the standard input and output streams.

In an Express server, you might still use process.stdout or process.stderr to log messages or errors to the console for debugging purposes, but it's less common to use process.stdin for reading input from the user or other streams.

## Whats the difderence between process.cwd and \_\_dirname?

process.cwd() returns the current working directory i.e. the directory in which we invoked the `node` command

`__dirname` returns the directory name of the directory container the JS source code file.
