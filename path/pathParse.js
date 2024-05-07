const path = require('path');

const filePath = '/home/user/documents/file.txt';

const parsedPath = path.parse(filePath);
console.log(parsedPath);
// Kết quả:
// {
//   root: '/',
//   dir: '/home/user/documents',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file'
// }