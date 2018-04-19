/*
  用 js 编写的 运行在 node 软件上的服务器文件
*/

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

app.get('/process_get', function(req, res) {

  // 输出 JSON 格式
  var response = {
    "comment": req.query.comment
  };
  console.log(response);
  // if (req.url !== "/favicon.ico") {
  //   res.writeHead(200, { "Content-Type": "text/plain", "Access-Control-Allow-Origin": "http://localhost" });
  // }
  res.send("response");
})

var server = app.listen(8081, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://localhost:8081/index.html")

})