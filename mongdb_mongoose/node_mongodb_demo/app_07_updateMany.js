// 更新多条数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var demo = db.db("demo");

    var whereStr = {"name":'zhangsan'};  // 查询条件

    var updateStr = {$set: { "age" : 1000 }};

    demo.collection("site").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
         console.log(res.result.nModified + " 条文档被更新");
        db.close();
    });
});