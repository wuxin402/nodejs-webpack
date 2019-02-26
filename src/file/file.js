var fs = require("fs");

fs.stat("https://www.baidu.com",function(err,stats) {
    console.log("是否为socket连接",stats.isSocket());
})