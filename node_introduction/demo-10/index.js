//引入的是server.js里面的exports模块
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// 将一系列请求处理程序通过一个对象来传递，并且需要使用松耦合的方式将这个对象注入到route()函数中
var handle = {};

handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.startServer(router.route,handle);