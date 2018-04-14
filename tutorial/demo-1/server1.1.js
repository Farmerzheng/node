var http = require("http");
var util = require('util');

var user = {
  name: 'Tom',
  age: 12
};

http.createServer(function(req, res) {
  //console.log('req: ', util.inspect(req.url));
  res.writeHead(200, {"Content-Type": "application/json"});
  res.write(JSON.stringify(user));
  res.end();
}).listen(8888);
