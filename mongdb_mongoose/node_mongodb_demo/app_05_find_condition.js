// 查询指定条件数据数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var demo = db.db("demo");
  var whereStr = { name: 'zhangsan' }; // 查询条件
  demo.collection("site").find(whereStr).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});