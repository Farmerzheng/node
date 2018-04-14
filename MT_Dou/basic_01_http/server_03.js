var fs = require("fs");
var content = fs.readFileSync("1.html", "UTF-8");
var http = require("http");
http.createServer((req, res) => {
  console.log(req);
  res.writeHead(200, {
    'Content-Type': "text/html",
    "Date": "Mon,27 Feb 2016 12:50:43 GMT"
  })
  res.end(content)
}).listen("2008")