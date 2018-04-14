var http = require("http");
var url = require("url");

function startServer(route, handle) {

  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(handle, pathname, response);
  }
  var server = http.createServer(onRequest);
  server.listen(8888);
  // console.log("server has started;请打开localhost:8888测试服务器是否开启");
}

exports.startServer = startServer;