var http = require('http');
var url = require('url');
var util = require('util');
 
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;   

/*  
   params的内容  
    Url {
		  protocol: null,
		  slashes: null,
		  auth: null,
		  host: null,
		  port: null,
		  hostname: null,
		  hash: null,
		  search: '?name=zhangsan&age=18',
		  query: { name: 'zhangsan', age: '18' },
		  pathname: '/user',
		  path: '/user?name=zhangsan&age=18',
		  href: '/user?name=zhangsan&age=18' 
        }
*/


    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.age);
    res.end();
 
}).listen(3000);

console.log('在浏览器中输入 http://localhost:3000/user?name=zhangsan&age=18  进行测试');