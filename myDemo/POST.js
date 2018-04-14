/**
 * Created by wangzheng on 2016/8/5.
 */

    //引入模块
var http = require('http');
var querystring = require('querystring');
var util = require('util');

//创建服务器，监听requset请求
http.createServer(function(req, res) {
    var post = '';
    req.on('data', function(chunk){
        post += chunk;
    });
    req.on('end', function() {
        post = querystring.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);
