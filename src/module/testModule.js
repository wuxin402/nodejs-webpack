var hello = require("./helloworld");
hello.world();

var Hello = require("./hello");
hello = new Hello();
hello.setName('BYVoid'); 
hello.sayHello(); 

// 模块接口的唯一变化是使用 module.exports = Hello 代替了exports.world = function(){}。
//  在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports。

// exports 和 module.exports 的使用
// 如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。

// 原生模块和文件模块的区别?