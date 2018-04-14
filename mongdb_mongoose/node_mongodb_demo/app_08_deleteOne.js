// 删除一条数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var demo = db.db("demo");
  var whereStr = { name: 'zhangsan0' }; // 删除条件
  demo.collection("site").deleteOne(whereStr, function(err, obj) {
    if (err) throw err;
    console.log("{name:'lalala'}文档删除成功");
    db.close();
  });
});