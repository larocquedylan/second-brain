# Path

    const URL = require('url').URL

    let url = new URL('http://example.com/foo.jpg?bar=baz')

    console.log(url)
    //=> URL {
    href: 'http://example.com/foo.jpg?bar=baz',
    origin: 'http://example.com',
    protocol: 'http:',
    username: '',
    password: '',
    host: 'example.com',
    hostname: 'example.com',
    port: '',
    pathname: '/foo.jpg',
    search: '?bar=baz',
    searchParams: URLSearchParams { 'bar' => 'baz' },
    hash: '' }

the path module is a core module that provides utilities for working with file and directory paths. It allows you to manipulate file paths to ensure they are correct and consistent across different platforms.

Here is an example of how you might use the path module to join and normalize two file paths:

    const path = require('path');

    const path1 = '/foo/bar';
    const path2 = 'baz/qux';

    const joinedPath = path.join(path1, path2);
    const normalizedPath = path.normalize(joinedPath);

    console.log(normalizedPath); // '/foo/bar/baz/qux'

Extracting info using path

    const path = require('path');

    const filePath = '/foo/bar/baz.txt';

    const dirName = path.dirname(filePath);
    const baseName = path.basename(filePath);
    const extName = path.extname(filePath);

    console.log(dirName); // '/foo/bar'
    console.log(baseName); // 'baz.txt'
    console.log(extName); // '.txt'

we require the path core module and define a file path filePath. We then use the path.dirname(), path.basename(), and path.extname() methods to extract information about the file path. The directory name, base name, and file extension are then logged to the console.

## path.dirname()

The path.dirname() method is used to extract the directory path from a file path.

    const path = require('path');
    const filePath = '/foo/bar/baz.txt';
    const dirName = path.dirname(filePath);
    console.log(dirName); // '/foo/bar'

We might use this to extract the directory path from a file name without a path

    const path = require('path');
    const fileName = 'baz.txt';
    const dirName = path.dirname(fileName);
    console.log(dirName); // '.'

## path.resolve()

    const path = require('path');
    const relativePath = '../bar/baz';
    const resolvedPath = path.resolve(__dirname, relativePath);
    console.log(resolvedPath); // '/Users/john/project/bar/baz'

We define a relative path relativePath. We then use the \_\_dirname global variable to specify the directory to resolve the relative path against.

## path.extname()

    const path = require('path');
    const filePath = '/foo/bar/baz.txt';
    const extName = path.extname(filePath);
    console.log(extName); // '.txt'

## path.sep()

    let path = require('path')
    'foo/bar/baz'.split(path.sep) // ['foo', 'bar', 'baz']

## path.relative()

    let path = require('path')
    path.relative(
    '~/backend/example.js',
    '~/backend/lib/index.js'
    )
    // '../lib/index.js'
