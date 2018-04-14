/*
查询数据所有数据
可以使用 find() 来查找数据, find() 可以返回匹配条件的所有数据。 如果未指定条件，find() 返回集合中的所有数据。

*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var demo = db.db("demo");
    demo.collection("site"). find({}).toArray(function(err, result) { 
       // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});