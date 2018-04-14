var express = require('express');
var cookieParser = require('cookie-parser');
var util = require('util');
 
var app = express();

app.use(cookieParser());
 
app.get('/index.html', function(req, res) {
    
  res.sendFile(__dirname + "/" + "index.html");
  console.log("cookies: " + util.inspect(req.cookies));
     
});
 
app.listen(8080,function() {

  /*
    var host = server.address().address
    var port = server.address().port
    */

  console.log("应用实例，访问地址为 http://localhost:8080/index.html");

});