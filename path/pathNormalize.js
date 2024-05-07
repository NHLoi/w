const path = require('path');

const normalizedPath = path.normalize('/home/user/../user/documents/./file.txt');
console.log(normalizedPath);
