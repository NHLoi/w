const path = require('path');

// Tạo một đối tượng path
const pathObject = {
  root: '/ignored',
  dir: '/home/user/documents',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
};

// Sử dụng path.format để chuyển đối tượng path thành đường dẫn
const formattedPath = path.format(pathObject);

// In đường dẫn đã định dạng ra console
console.log(formattedPath);
