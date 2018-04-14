var http = require('http');
var url = require('url');
// util 模块主要用于支持 Node.js 内部 API 的需求
var util = require('util');

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  // url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。
  // util.inspect() 方法返回 object 的字符串表示，主要用于调试

  res.end(util.inspect(url.parse(req.url, true)));

}).listen(3000);

console.log('在浏览器中输入 http://localhost:3000/user?name=zhangsan&age=18  进行测试');