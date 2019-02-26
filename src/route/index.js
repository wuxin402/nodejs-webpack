var server = require("./testRoute");
var router = require("./route");
 
server.start(router.route);