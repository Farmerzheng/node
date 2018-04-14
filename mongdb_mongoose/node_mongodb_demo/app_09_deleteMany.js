// 删除多条数据
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var demo = db.db("demo");

    var whereStr = { age:11 };  // 查询条件

    demo.collection("site").deleteMany(whereStr, function(err, obj) {
        if (err) throw err;
        // obj.result.n 删除的条目数
        console.log(obj.result.n + " 条文档被删除");
        db.close();
    });
});