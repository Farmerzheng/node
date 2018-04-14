/**
 * Created by wangzheng on 2016/7/24.
 */
// 引入模块
var http=require('http');
//创建服务器
http.createServer(function(req,res){
    console.log(req.url);
    // 响应头
    res.writeHead(200,{'Content-Type':'text/html'});
    //响应内容
    res.write('<h1>Node.js</h1>');
    //结束响应并发送
    res.end('<p>视频地址PCAT</p>');
    //监听端口
}).listen(3000);
console.log('HTTP server is listening at port 3000');
