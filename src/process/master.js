const fs = require("fs");
const child_process = require("child_process");
for (var i = 0;i < 3;i++) {
    var workerProcess = child_process.exec('node support.js '+i,function (error,stdout,stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    })
    workerProcess.on('exit', function (code) {
        console.log('子进程已退出，退出码 '+code);
    });
}

for(var j=0; j<3; j++) {
    var workerProcess = child_process.spawn('node', ['support.js', j]);
  
    workerProcess.stdout.on('data', function (data) {
       console.log('stdout: ' + data);
    });
  
    workerProcess.stderr.on('data', function (data) {
       console.log('stderr: ' + data);
    });
  
    workerProcess.on('close', function (code) {
       console.log('子进程已退出，退出码 '+code);
    });
 }

 for(var k=0; k<3; k++) {
    var worker_process = child_process.fork("support.js", [k]);    
  
    worker_process.on('close', function (code) {
       console.log('子进程已退出，退出码 ' + code);
    });
 }