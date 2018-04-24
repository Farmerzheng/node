let express = require("express");
let router = express.Router();

let mongoose = require("mongoose");
// 判断模型名是否是加s，如果是直接返回模型名；否则进行复数转化正则匹配；
let Good = require("../model/goods");

// 链接数据库

// mongoose以非授权的方式启动
// mongoose.connect("mongodb://127.00.0.1:27017/my_db");

// mongoose以授权的方式启动
// 如果 mongo 里用 db.createUser( { user: “zhangsan”, pwd: "123456", roles: [ "root" ] } )  创建用户的话
// moogoose 这样 connect 

mongoose.connect("mongodb://zhangsan:123456@127.0.0.1:27017/my_db?authSource=admin");

// 监听是否链接成功
// 链接成功
mongoose.connection.on("connected", function() {
        console.log("mongodb connected success");
        responseQuery();
    })
    // 链接失败
mongoose.connection.on("error", function() {
        console.log("mongodb connected fail");
    })
    // 断开链接
mongoose.connection.on("disconnected", function() {
    console.log("mongodb connected disconnected");
})

function responseQuery() {
    router.get("/", function(req, res, next) {

        // 在控制台打印req,看看前端传过来的参数在哪里？
        // console.log(req);  {page: "1", perPage: "4"}

        let params = req.query;

        // 根据前台传过来的参数在数据库拿数据



        Good.find({}, function(err, doc) {
            if (err) {
                res.json({
                    status: "1",
                    error: err.message
                })
            } else {
                res.json({
                    status: "0",
                    msg: "成功了",
                    result: {
                        count: doc.length,
                        list: doc
                    }
                })
            }
        })
    })
}


module.exports = router;