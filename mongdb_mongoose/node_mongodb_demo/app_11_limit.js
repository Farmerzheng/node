/*
查询分页
如果要设置指定的返回条数可以使用 limit() 方法，该方法只接受一个参数，指定了返回的条数。
*/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var demo = db.db("demo");
    demo.collection("site").find().limit(2).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        /*
         result:
         [ 
	         { _id: 5accc91dfaf5762654d05ab1, name: 'wangwu', age: 12 },
	         { _id: 5acccb6819a9b80d545f2dd8, name: 'zhangsan', age: 10 }
         ]

        */
        db.close();
  });
});