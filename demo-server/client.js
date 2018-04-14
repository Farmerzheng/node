
// node作为客户端
// 通过http模块调用第三方接口
let http = require('http')

let util = require('util')

http.get("http://www.imooc.com/u/card", function (res) {

    let data = '';
   
   // 将接收的数据累加
    res.on('data', function (chunk) {
        data += chunk;
    });
   // 监听什么时候接收完
    res.on('end', function () {

        let result = JSON.parse(data);

        console.log("result:"+util.inspect(result))

    })
});
