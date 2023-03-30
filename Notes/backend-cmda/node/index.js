const path = require('path');

const path1 = '/foo/bar';
const path2 = 'baz/qux';

const joinedPath = path.join(path1, path2);
// console.log(joinedPath);

// const resolvedPath = path.resolve(path1, path2);
// console.log(resolvedPath);

const normailzedPath = path.normalize(joinedPath);
// console.log(normailzedPath);
// console.log(joinedPath);

const relativePath = '../bar/baz';
const resolvedPath = path.resolve(__dirname, relativePath);
console.log(resolvedPath);
