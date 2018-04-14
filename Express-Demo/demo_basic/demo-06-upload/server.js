let express = require('express');
let app = express();
let fs = require("fs");

let bodyParser = require('body-parser');

/* Express默认并不处理HTTP请求体中的数据，对于普通请求体(JSON、二进制、字符串)数据，可以使用body-parser中间件。而文件上传(multipart/form-data请求)，可以基于请求流处理，也可以使用formidable模块或Multer中间件。

Multer是Express官方推出的，用于multipart/form-data请求数据处理的中间件。它基于busboy构建，可以高效的处理文件上传，但并不处理multipart/form-data之外的用户请求。
*/
let multer = require('multer');
let upload = multer({ dest: '/upload/' });

app.use(bodyParser.urlencoded({ extended: false }));

app.use(upload.array('image'));

app.get('/index.html', function(req, res) {
  res.sendFile(__dirname + "/" + "index.html");
})

app.post('/file_upload', function(req, res) {



     console.log(req.files[0]);  // 上传的文件信息

     var des_file = __dirname + "/upload/" + req.files[0].originalname;

     fs.readFile( req.files[0].path, function (err, data) {

          fs.writeFile(des_file, data, function (err) {
            
           if( err ){
                console.log( err );
           }else{
                 response = {
                     message:'File uploaded successfully', 
                     filename:req.files[0].originalname
                };
            }
            // console.log( response );
            res.end( JSON.stringify( response ) );
         });
     });



})

var server = app.listen(8081, function() {

  /*
    var host = server.address().address
    var port = server.address().port
    */

  console.log("应用实例，访问地址为 http://localhost:8081/index.html");

})