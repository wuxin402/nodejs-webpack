var fs = require("fs")
var data = fs.readFileSync("E:/test.txt")
console.log("读取文件完毕")
console.log("读取的内容为:"+data)