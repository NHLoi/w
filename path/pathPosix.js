const path = require('path');

const windowsPath = 'C:\\Users\\user\\Documents\\file.txt' // dinh nghia duong dan tep tin chua chuan hoa
const posixPath = path.posix.normalize(windowsPath);

console.log(posixPath);
// Kết quả: C:/Users/user/Documents/file.txt