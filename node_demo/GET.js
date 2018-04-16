/**
 * Created by wangzheng on 2016/8/5.
 */
var http=require("http");
var url=require("url");
var util=require("util");
http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"text/plain"});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
