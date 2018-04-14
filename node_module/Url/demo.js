"use strict"
const http = require("http");
const url = require("url");
const util = require("util")

let count = 0;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain;charset=utf-8")

  //此回调会在有任何用户请求时触发
  res.write(`你是第${count++}个发送请求的用户`);

  // End 方法使 Web 服务器停止处理脚本并返回当前结果
  res.end(util.inspect(url.parse(req.url)));

})

server.listen("2008", "127.0.0.1", (error) => {
  if (error) throw error;
  console.log("服务器已经运行，请打开浏览器输入127.0.0.1：2008访问")
})