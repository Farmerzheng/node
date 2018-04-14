var http = require("http");
http.createServer((req,res)=>{
 res.writeHead(200,{
 	'Content-Type':"text/plain",
 	"Date":"Mon,27 Feb 2016 12:50:43 GMT"
 })
 res.end("abcd")
}).listen("2008")