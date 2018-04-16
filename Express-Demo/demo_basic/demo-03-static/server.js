var express = require('express');
var app = express();

// app.use([path,], function [, function...])
// 挂载中间件方法到路径上。如果路径未指定，那么默认为"/"。
// 在一个路径上挂载一个中间件之后，每当请求的路径的前缀部分匹配了这个路由路径，那么这个中间件就会被执行。 由于默认的路径为/，中间件挂载如果没有指定路径，那么对于每个请求，这个中间件都会被执行。


// app.use(express.static(__dirname + '/public'))是将所有请求，先交给express.static(__dirname + '/public')来处理一下

// express.static(root, [options])是Express中唯一的内建中间件。它以server-static模块为基础开发，负责托管 Express 应用内的静态资源。 参数root为静态资源的所在的根目录。 参数options是可选的


//将静态文件目录设置为项目根目录+/public
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
    res.send('Hello World');
})


var server = app.listen(8081, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log("在浏览器中打开 http://127.0.0.1:8081/images/1.jpg")

})