// 更新一条数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;

  var demo = db.db("demo");

  var whereStr = { name: 'zhangsan' }; // 查询条件

  var updateStr = { $set: { name: "lalala" } };//更新内容

  demo.collection("site").updateOne(whereStr, updateStr, function(err, res) {
    if (err) throw err;
    console.log("文档更新成功");
    db.close();
  });
});