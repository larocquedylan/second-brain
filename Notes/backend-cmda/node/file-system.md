# File-System (fs)

The fs module is a core module that provides an API for working with the file system. It allows you to perform various operations on files and directories, such as reading and writing files, creating and deleting directories, and querying file system information.

## reading contents

    const fs = require('fs');

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });

## write contents

    const fs = require('fs');

    fs.writeFile('file.txt', 'Hello, world!', 'utf8', (err) => {
        if (err) throw err;
        console.log('File saved!');
    });

## querying directories

    const fs = require('fs');

    fs.mkdir('mydir', (err) => {
        if (err) throw err;
        console.log('Directory created!');
    });

## fs.readdir()

    const fs = require('fs')
    fs.readdir('docs', onreaddir)
    function onreaddir(err, files) {
        if (err) throw err
        console.log('Files: ', files)
    }
    // Files: ['readme.md', …]

## fs.readfile()

    const fs = require('fs')
    fs.readFile('/etc/passwd', onreadfile)
    function onreadfile(err, data) {
        if (err) throw err
        console.log('Data: ', data)
    }
    // Data: <Buffer 23 23 0a 23 20 55 73 65 72 20 44 … >

## fs.writefile()

    const fs = require('fs')
    fs.writeFile('message.txt', 'Hello', onwritefile)
    function onwritefile(err) {
        if (err) throw err
        console.log('Saved!')
    }
    // Saved!

## fs.unlink()

    const fs = require('fs')
    fs.unlink('readme.md', onunlink)
    function onunlink(err) {
        if (err) throw err
        console.log('Removed!')
    }
    // Removed!

## fs.rename()

    const fs = require('fs')
    fs.rename('index.js', 'lib/index.js', onrename)
    function onrename(err) {
        if (err) throw err
        console.log('Moved!')
    }
    // Moved!

## fs.copyfile()

    const fs = require('fs')
    fs.copyFile('index.js', 'lib/index.js', oncopyfile)
    function oncopyfile(err) {
        if (err) throw err
        console.log('Copied!')
    }
    // Copied!

## fs.createReadStream()

    const fs = require('fs')
    const http = require('http')
    http.createServer(onrequest).listen(8000)
    function onrequest(req, res) {
        fs.createReadStream('data.txt').pipe(res)
    }

## fs.createWriteStream

    const fs = require('fs')
    const stream = fs.createWriteStream('message.txt')
    stream.write('Hello ')
    setTimeout(tick, 1000)
    function tick() {
        stream.end('Node.js\n')
    }
