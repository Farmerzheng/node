
var http = require("http");

var worker = http.createServer(function(request, response) {
  console.log('Hello! ' + new Date());

  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hello World");
  response.end();
});

worker.listen(8881);



