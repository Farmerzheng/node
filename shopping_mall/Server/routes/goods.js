let express = require("express");
let router = express.Router();

let mongoose = require("mongoose");


// 获取操作数据库的商品列表模型
let Good = require("../model/goods");

// 获取用户模型
let User = require("../model/user");



// 链接数据库

// mongoose以非授权的方式启动
// mongoose.connect("mongodb://127.00.0.1:27017/my_db")

// mongoose以授权的方式启动
// 如果 mongo 里用 db.createUser( { user: “zhangsan”, pwd: "123456", roles: [ "root" ] } )  创建用户的话
// moogoose 这样 connect 

mongoose.connect("mongodb://zhangsan:123456@127.0.0.1:27017/my_db?authSource=admin");

// 监听是否链接成功
// 链接成功
mongoose.connection.on("connected", function() {
        console.log("mongodb connected success");
        response();
    })
    // 链接失败
mongoose.connection.on("error", function() {
        console.log("mongodb connected fail");
    })
    // 断开链接
mongoose.connection.on("disconnected", function() {
    console.log("mongodb connected disconnected");
})

function response() {

    //查询商品列表数据
    query_goods();

    // 加入购物车
    add_cart();
}

function query_goods() {

    router.get("/", function(req, res, next) {

        // 在控制台打印req,看看前端传过来的参数在哪里？
        // console.log(req);  {page: "1", perPage: "4"}

        // let params = req.query;

        let page = parseInt(req.query.page);
        let perPage = parseInt(req.query.perPage);
        let sort = parseInt(req.query.sort);
        let level = parseInt(req.query.level);

        let $gt = 0;
        let $lt = 0;
        switch (parseInt(level)) {
            case 0:
                $gt = 0;
                $lt = Infinity;
                break;
            case 1:
                $gt = 0;
                $lt = 100;
                break;
            case 2:
                $gt = 100;
                $lt = 500;
                break;
            case 3:
                $gt = 500;
                $lt = 1000;
                break;
            case 4:
                $gt = 1000;
                $lt = 5000;
                break;
        }

        let param = {
            salePrice: {
                $gte: $gt,
                $lte: $lt
            }
        }


        Good.find(param)
            .sort({ 'salePrice': sort }) //1 是升序 -1是降序
            .limit(perPage)
            .skip((page - 1) * perPage)
            .exec(function(err, doc) {
                //输入以下网址进行查询 http://localhost:3000/goods/?page=1&perPage=4&sort=1
                // console.log(doc)

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

function add_cart() {
    // 定义二级路由
    router.post('/addCart', function(req, res, next) {

        // 获取前台传过来的 userId 和 productId

        // 获取post请求的参数
        // post 请求的参数在body中
        let userId = req.body.params.userId;

        let productId = req.body.params.productId;



        // 在数据库users集合中查找userId 对应的用户
        let findUserPromise = new Promise((resolve, reject) => {
            if (userId) {
                User.findOne({ "userId": userId })
                    .exec(function(err, userDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else {
                            resolve(userDoc)
                        }
                    })
            }
        });

        findUserPromise
            .then(function(userDoc) {
                // 在Goods模型中通过productId找到对应的商品模型
                return new Promise((resolve, reject) => {
                    Good.findOne({ 'productId': productId }, function(err, goodDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else if (goodDoc) {
                            let data = {
                                goodDoc: goodDoc,
                                userDoc: userDoc
                            }
                            resolve(data)
                        }
                    })
                });

            })
            .then((data) => {
                // 将商品模型插入用户模型的cartList列表

                let haveGoodDocBoolean = false;

                //  判断用户模型的cartList列表有没有商品模型
                for (let i = 0; i < data.userDoc.cartList.length; i++) {
                    // console.log(data.userDoc.cartList[i])
                    // console.log(data.userDoc.cartList[i].productId)
                    if (data.userDoc.cartList[i].productId == productId) {
                        haveGoodDocBoolean = true;
                        // 有
                        // cartList列表的商品数量自增
                        // console.log(data.userDoc.cartList[i].productNum)
                        // console.log(parseInt(data.userDoc.cartList[i].productNum) + 1)

                        data.userDoc.cartList[i].productNum = parseInt(data.userDoc.cartList[i].productNum) + 1;

                    }
                }

                // 如果cartList列表有此商品模型，直接返回
                if (!haveGoodDocBoolean) {
                    addGoodDocToUserDocCartList();
                }

                function addGoodDocToUserDocCartList() {
                    // 假设商品数量是1
                    data.goodDoc._doc.productNum = 1;

                    // 假设商品被选中
                    data.goodDoc._doc.checked = 1;

                    // 往用户模型的cartList数组中插入选中的商品模型
                    data.userDoc.cartList.push(data.goodDoc);

                }

                // 保存插入的商品模型模型
                data.userDoc.save(function(err, doc) {
                    if (err) {

                        res.json({
                            status: "1",
                            error: err.message
                        })
                    } else {
                        // 将插入成功的信息返回给前端
                        res.json({
                            status: "0",
                            message: '插入成功',
                            result: ''
                        })
                    }
                })


            })
    })
}

module.exports = router;