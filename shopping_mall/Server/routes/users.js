var express = require("express");
var router = express.Router();

// 获取用户模型
let User = require("../model/user");

/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

// 用户校验接口
router.post("/checkLogin", function(req, res, next) {
    // 判断用户是否登录
    if (req.cookies.userName) {
        res.json({
            status: "0",
            msg: "用户已经登录",
            result: {
                userName: req.cookies.userName
            }
        });
    } else {
        res.json({
            status: "1",
            msg: "用户未登录",
            result: "用户未登录"
        });
    }
});

// 登录接口
router.post("/login", function(req, res, next) {
    // console.log(req)
    let param = {
        userName: req.body.params.username,
        userPwd: req.body.params.password
    };
    let findUserPromist = new Promise((resolve, reject) => {
        User.findOne(param, function(err, doc) {
            if (doc == null) {
                res.json({
                    status: "1",
                    msg: "用户名不存在"
                });
            } else {
                // 向前端发送cookie
                res.cookie("userId", doc.userId, {
                    path: "/",
                    maxAge: 1000 * 60 * 60 * 60 //cookie在前端的存储时间
                });
                res.cookie("userName", doc.userName, {
                    path: "/",
                    maxAge: 1000 * 60 * 60 * 60 //cookie在前端的存储时间
                });

                // 返回前端用户名信息
                res.json({
                    status: "0",
                    msg: "登录成功",
                    result: {
                        userName: doc.userName
                    }
                });
            }
        });
    });
});

// 退出接口
router.post("/logout", function(req, res, next) {
    // 将浏览器端的cookie清空
    res.cookie("userId", "", {
        path: "/",
        maxAge: -1
    });
    res.cookie("userName", "", {
        path: "/",
        maxAge: -1
    });
    //返回浏览器端退出成功信息
    res.json({
        status: "0",
        msg: "退出成功",
        result: "退出成功"
    });
});

// 查询当前用户购物车数据
router.get("/cart", function(req, res, next) {
    // 查找数据库中的购物车列表信息
    let param = { userId: req.cookies.userId };

    User.findOne(param, function(err, doc) {
        // console.log(err, doc)
        if (doc) {
            res.json({
                status: "0",
                msg: "成功",
                result: doc.cartList
            });
        } else {
            res.json({
                status: "1",
                msg: "失败",
                result: "失败"
            });
        }
    });
});

// 删除当前用户购物车中的某件商品
router.get("/delete", function(req, res, next) {
    let userId = req.cookies.userId;
    let productId = req.query.productId;

    User.update({ userId: userId }, { $pull: { cartList: { productId: productId } } },
        function(err, doc) {
            if (doc) {
                res.json({
                    status: 0,
                    msg: "删除成功",
                    result: "删除成功"
                });
            } else {
                res.json({
                    status: 1,
                    msg: "删除失败",
                    result: "删除失败"
                });
            }
        }
    );
});

// 更改用户购物车中的商品数量
router.get("/editCartList", function(req, res, next) {
    let userId = req.cookies.userId;
    let productId = req.query.productId;
    let productNum = req.query.productNum;
    let checked = req.query.checked;

    User.update({
            userId: userId,
            "cartList.productId": productId
        }, {
            "cartList.$.productNum": productNum, //更新子文档
            "cartList.$.checked": checked
        },
        function(err, doc) {
            if (doc) {
                res.json({
                    status: "0",
                    msg: "更新成功",
                    result: "更新成功"
                });
            } else {
                res.json({
                    status: "1",
                    msg: "更新失败",
                    result: "更新失败"
                });
            }
        }
    );
});

// 购物车全选功能接口
router.get("/checkAll", function(req, res, next) {
    let userId = req.cookies.userId;
    let checkAllFlag = req.query.checkAllFlag == "true" ? "1" : "0";

    User.findOne({ userId: userId }, function(err, doc) {
        if (doc) {
            // 找到对应用户
            doc.cartList.forEach(function(item) {
                item.checked = checkAllFlag;
            });

            doc.save(function(err, doc) {
                if (doc) {
                    res.json({
                        status: "0",
                        msg: "全选成功",
                        result: "全选成功"
                    });
                }
            });
        } else {
            res.json({
                status: "1",
                msg: "全选失败",
                result: "全选失败"
            });
        }
    });
});

// 用户地址接口
router.get("/address", function(req, res, next) {
    let userId = req.cookies.userId;

    User.findOne({ userId: userId }, function(err, doc) {
        if (doc) {
            res.json({
                status: "0",
                msg: "成功",
                result: doc.addressList
            });
        } else {
            res.json({
                status: "1",
                msg: "失败",
                result: '失败'
            });
        }
    });
});

// 设置默认地址接口
router.post('/setDefaultAddress', function(req, res, next) {

    let userId = req.cookies.userId;
    let addressId = req.body.params.addressId;

    let findUserPromise = new Promise((resolve, reject) => {

        User.findOne({ userId: userId }, function(err, doc) {
            if (doc) {
                resolve(doc)
            } else {
                res.json({
                    status: "1",
                    msg: "失败",
                    result: '失败'
                });
            }
        })
    })

    findUserPromise.then(function(doc) {
        // 找到用户后，设置用户的默认地址

        //得到用户地址列表
        let addressList = doc.addressList;
        addressList.forEach(function(item) {
                // 清空所有的默认地址
                item.isDefault = false;

                // 判断用户设置的那个地址是默认地址
                if (item.addressId == addressId) {
                    item.isDefault = true;
                }
            })
            // 保存对数据库的更改
        doc.save(function(err, doc) {
            if (doc) {
                res.json({
                    status: "0",
                    msg: "默认地址设置成功",
                    result: '默认地址设置成功'
                });
            } else {
                res.json({
                    status: "1",
                    msg: "默认地址设置失败",
                    result: '默认地址设置失败'
                });
            }
        })
    })


})
module.exports = router;