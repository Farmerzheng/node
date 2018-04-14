var express = require('express');
var app = express();
/*
在HTTP请求中，POST、PUT和PATCH三种请求方法中包含请求体，
Node.js 原生HTTP模块中，请求体要基于流的方式接收和解析。
body-parser是一个HTTP请求体解析中间件，
使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，
Express框架中就是使用这个模块做为请求体解析中间件。

   1.1 原生环境中的解析
   1.2 使用body-parser解析请求体
      1.2.1 bodyParser.json() - 解析JSON格式
      1.2.2 bodyParser.raw() - 解析二进制格式
      1.2.3 bodyParser.text() - 解析文本格式
      1.2.4 bodyParser.urlencoded() - 解析文本格式
*/
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 解析 application/json
// app.use(bodyParser.json());

// 解析 application/x-www-form-urlencoded
app.use(urlencodedParser);

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/process_post', urlencodedParser, function(req, res) {

  // 输出 JSON 格式
  var response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server = app.listen(8081, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://localhost:8081/index.html")
  console.log("应用实例，访问地址为 http://localhost:8081/process_post")


})