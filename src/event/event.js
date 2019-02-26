var event = require("events");
// 创建 eventEmitter 对象
var eventEmitter = new event.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected(){
    console.log("连接成功")

    //触发data_received事件
    eventEmitter.emit("data_received")
}

//绑定连接事件
eventEmitter.on('connection',connectHandler)

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
    console.log("数据接收成功")
})

//触发事件
eventEmitter.emit('connection')

console.log("执行完成")