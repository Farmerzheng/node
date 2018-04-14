/*
  执行 mongo，进入 mongodb 命令行模式

  查看数据库 : show dbs 

  进入某个数据库 ： use <db name>
  
  显示当前数据库中的集合 ：show collections  

*/

//引入mongodb模块
var MongoClient = require('mongodb').MongoClient;

//数据库的链接网址 
var url_test = 'mongodb://localhost:27017/';

//链接到数据库 
MongoClient.connect(url_test, function(err, db) {
  if (err) throw err;

  // 创建demo数据库
  var demo = db.db("demo");
  console.log('demo数据库已创建');

  // 创建集合
  demo.createCollection('site', function(err, res) {
    if (err) throw err;
    console.log("site集合创建成功!");

    // 关闭数据库
    db.close();
  });
});
