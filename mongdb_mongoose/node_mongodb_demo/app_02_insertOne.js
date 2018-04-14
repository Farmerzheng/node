/*
插入一条数据
*/

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;

  var demo = db.db("demo");

  var data = { name: "zhangsan", age: 18 };

  demo.collection("site").insertOne(data, function(err, res) {

    if (err) throw err;

    // 在某个数据库下查询数据：db.集合名.find()

    console.log('{ name: "zhangsan", age: 18 }插入成功');

    db.close();
  });
});