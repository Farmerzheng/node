/*
 插入多条数据:insertMany
*/

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;

  var demo = db.db("demo");

  var data = [
    { name: 'zhangsan', age: 10 },
    { name: 'lisi', age: 11 },
    { name: 'wangwu', age: 12 }
  ];;

  demo.collection("site").insertMany(data, function(err, res) {

    if (err) throw err;

    // 在某个数据库下查询数据：db.集合名.find()

    console.log("插入成功 ");

    db.close();
  });
});