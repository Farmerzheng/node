var express = require('express');

// express()方法是express模块导出的顶层方法。
// express()用来创建一个Express对象。

// app对象一般用来表示Express程序。通过调用Express模块导出的顶层的express()方法来创建它
// app 对象具有以下的方法：

// 1、路由HTTP请求
// 2、配置中间件
// 3、渲染HTML视图
// 4、注册模板引擎

var app = express();


/*
 app.METHOD(path, callback [, callback ...])
 处理一个HTTP请求，METHOD是这个请求的HTTP方法，比如GET，PUT，POST等等，例如app.get()，app.post()，app.put()等等
 */
app.get('/', function(req, res) {
  res.send('Hello World');
})

// 绑定程序监听端口到指定的主机和端口号
var server = app.listen(8081);

console.log("应用实例，访问地址为 http://localhost:8081")