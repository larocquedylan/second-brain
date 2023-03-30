# Buffer

The Buffer class is a built-in class that provides a way to handle binary data. It is a global class and does not require any require() statement to use.

    const buf = Buffer.from('hello', 'utf8');
    console.log(buf); // <Buffer 68 65 6c 6c 6f>

You can make a buffer obkect with a specified length:

    const buf = Buffer.alloc(5);
    console.log(buf); // <Buffer 00 00 00 00 00>

You can manipulate Buffer objects using various methods, such as buf.slice(), buf.copy(), and buf.toString(). Here is an example of how you might use the buf.slice() method to create a new Buffer object from a portion of an existing Buffer object:

    const buf1 = Buffer.from('hello world', 'utf8');
    const buf2 = buf1.slice(6, 11);

    console.log(buf2.toString()); // 'world'

Buffer class in Node.js provides a way to handle binary data. You can create Buffer objects with specified lengths or from strings encoded in various formats, and manipulate them using various methods

    const buf = Buffer.from([0x74, 0xc3, 0xa9, 0x73, 0x74])

    const utf8 = buf.toString('utf8')
    const ascii = buf.toString('ascii')

    console.log(buf) // <Buffer 74 c3 a9 73 74>
    console.log(utf8) // 'tést'
    console.log(ascii) // 'tC)st'
