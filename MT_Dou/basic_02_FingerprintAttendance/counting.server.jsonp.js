//与数据库建立连接
var  mysql       =  require('mysql');
var  connection  =  mysql.createConnection({  
  host     :   'crm.daohangma.com',
    user     :   'nodeDev',
    password :   'nodeDev',
    database :   'nodeDev'
}); 
connection.connect(); 

//从数据库当中获取数据
function fetchData(callback) {
  // 查询数据
  connection.query('select * from lateCount',  function (error,  results,  fields)  {  
    if  (error)  throw  error;  
    callback(results);
  }); 

}

//启动服务器
var http = require("http");
http.createServer((req, res) => {
  
  // 从数据库当中取数据（异步过程）
  fetchData(function(data) {
    data = JSON.stringify(data);
    res.writeHead(200, {
      'Content-Type': "text/plain",
      "Date": "Mon,27 Feb 2016 12:50:43 GMT"
    })
    res.end("callback(" + data + ")");
  })

}).listen("888");