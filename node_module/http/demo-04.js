 var http = require('http');

 var querystring = require('querystring');

 var firstPage = function(res) {
   res.writeHead(200, { 'Content-Type': 'text/html' });
   var html = '<html><body>' +
     '<form action="/login" method="post">' +
     'name:<input type="text" name="name"> </br>' +
     'password:<input type="password" name="pwd"></br>' +
     '<input type="submit" value="login">' +
     '</form>' +
     '</body></html>';
   res.end(html);
 }

 var server = http.createServer(function(req, res) {
   if (req.url == '/') {
     return firstPage(res);
   }
   if (req.url == '/login') {
     if (req.method != 'POST') {
       return;
     }
     return login(req, res)
   }
 }).listen(3000, "127.0.0.1");

 var login = function(req, res) {
   var info = '';
   req.addListener('data', function(chunk) {
       info += chunk;
     })
     .addListener('end', function() {
       info = querystring.parse(info);
       if (info.name == 'a' && info.pwd == '1') {
         res.end('login success ' + info.name);
       } else {
         res.end('login failed ' + info.name);
       }
     })
 }

 console.log('Server running at http://127.0.0.1:3000/');