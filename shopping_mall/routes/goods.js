let express = require("express");
let router = express.Router();

let mongoose = require("mongoose");
let Goods = require("../model/goods");

// 链接数据库

// mongoose以非授权的方式启动
// mongoose.connect("mongodb://127.00.0.1:27017/my_db");
let options = {
        db: { native_parser: true },
        server: { poolSize: 5 },
        replset: { rs_name: 'myReplicaSetName' },
        user: 'zhangsan',
        pass: '123456'
    }
    // mongoose以授权的方式启动

mongoose.connect("mongodb://127.00.0.1:27017/my_db", options);

// 监听是否链接成功
// 链接成功
mongoose.connection.on("connected", function() {
        console.log("mongodb connected success");
    })
    // 链接失败
mongoose.connection.on("error", function() {
        console.log("mongodb connected fail");
    })
    // 断开链接
mongoose.connection.on("disconnected", function() {
    console.log("mongodb connected disconnected");
})

router.get("/", function(req, res, next) {
    Goods.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: "1",
                error: err.message
            })
        } else {
            res.json({
                status: "0",
                msg: "",
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    })
})
module.exports = router;