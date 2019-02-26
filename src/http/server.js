var http = require("http")
http.createServer(function(request,response) {
    response.writeHead(200,{'Context-Type':'text/plain'})
    response.end("hello world\n")
}).listen(8080)
console.log("server runnint at localhost:8080")