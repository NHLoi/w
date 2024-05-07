var path = require ('path')

var chaFolde = path.dirname(__dirname)
//Hàm path.dirname() được sử dụng để lấy đường dẫn thư mục cha của đường dẫn được cung cấp. 
//Trong trường hợp này, __dirname biểu thị đường dẫn tuyệt đối của thư mục chứa mã nguồn,
 //và path.dirname(__dirname) trả về đường dẫn thư mục cha của nó.
console.log(chaFolde)