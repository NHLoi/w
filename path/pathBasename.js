const path = require('path');

const filePath = '/home/user/documents/file.txt';
//Dòng này tạo ra một biến (filePath) chứa đường dẫn đầy đủ của tệp tin.
const fileName = path.basename(filePath);

console.log(fileName);