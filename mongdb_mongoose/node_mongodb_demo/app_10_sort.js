/*
排序
排序 使用 sort() 方法，该方法接受一个参数，规定是升序(1)还是降序(-1)。
*/

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var demo = db.db("demo");
    var mysort = { age: 1 };
    demo.collection("site").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
       /* 
       result:
	    [ { _id: 5acccf7a937de14556c86a4f, name: 'zhangsan1' },
		  { _id: 5acccf7a937de14556c86a50, name: 'zhangsan2' },
		  { _id: 5acccf7a937de14556c86a51, name: 'zhangsan3' },
		  { _id: 5acccf7a937de14556c86a52, name: 'zhangsan4' },
		  { _id: 5acccf7a937de14556c86a53, name: 'zhangsan5' },
		  { _id: 5acccf7a937de14556c86a54, name: 'zhangsan6' },
		  { _id: 5acccf7a937de14556c86a55, name: 'zhangsan7' },
		  { _id: 5acccf7a937de14556c86a56, name: 'zhangsan8' },
		  { _id: 5acccf7a937de14556c86a57, name: 'zhangsan9' },
		  { _id: 5acccb6819a9b80d545f2dd8, name: 'zhangsan', age: 10 },
		  { _id: 5acccb6c71f91d38e48595a5, name: 'zhangsan', age: 10 },
		  { _id: 5accc91dfaf5762654d05ab1, name: 'wangwu', age: 12 },
		  { _id: 5acccb6819a9b80d545f2dda, name: 'wangwu', age: 12 },
		  { _id: 5acccb6c71f91d38e48595a7, name: 'wangwu', age: 12 } 
		]
       */
        db.close();
    });
});