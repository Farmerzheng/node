//创建服务器，完成前端文件数据的存储

//引入formidable模块　　
var formidable = require('formidable');　

//引入文件操作模块　　
var fs = require('fs');　　
//步骤1：引入http模块　　
var http = require('http');　　


　 //定义函数完成文件的上传
　　
function load_file(req, res) {　　

  //创建form表单数据的解析对象
  var form = new formidable.IncomingForm();

  //设置文件上传之后在服务器端存储的路径  　　
  form.uploadDir = "./img";　　

  //设置文件上传之后是否保存文件后缀，默认是不保存  　　
  form.keepExtensions = true;　　
  // form.maxFieldSize = 2*1024*1024;

  //开始文件上传  　　
  form.parse(req, function(error, fields, files) {　　
    if (error) {　　
      var message = { err: 1, msg: "文件解析失败" };　　
    }　　
    var message = { err: 0, path: "http://localhost:8080/" + files.file.path };　
    　//向前端返回json数据
    　　
    res.write(JSON.stringify(message));　　
    res.end();　　
  });　　
}

//步骤2:创建服务器　　
var server = http.createServer(function(req, res) {

  　
  res.writeHead(200, {
    "Content-type": "text/json;charset=utf-8",
    "Access-Control-Allow-Origin": "http://localhost:63342"
  });　　
  if (req.method == "POST") {　　
    //说明本次请求是用来进行文件上传
    　　
    load_file(req, res);　　
  } else {　
    //说明本次请求是为了向前端返回图片数据
    　　
    var path = "." + req.url;　　
    //创建一个读取流    　　
    var readStream = fs.createReadStream(path);　
    //管道流    　　
    readStream.pipe(res);　　
  }　　
});

//步骤3:设置监听的端口号　　
server.listen(8080);