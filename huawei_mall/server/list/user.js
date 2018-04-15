let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let db = require("../plugin/db.js");
let picm = require("../plugin/db.js");
let md5 = require("js-md5");
let jwt = require("../plugin/jwt.js");
let serverMsg = require("../plugin/serverMsg.js");
let randomsum = require("../plugin/random.js")

exports.sendphone = function(req, res) {
    if (req.query.phone == "") {
        serverMsg.errHandler(res, -24);
    } else {
        db.findOne("regList", {
            phone: req.query.phone / 1
        }, function(err, checkphone) {
            if (err) {
                serverMsg.errHandler(res, -2);
            } else {
                let chacknum = randomsum.getRandomSum();
                if (checkphone) {
                    let checktime = Date.now() - checkphone.addTime;
                    if (checktime > 10000) {
                        db.updateOneById("regList", checkphone._id, {
                            $set: {
                                regNum: chacknum,
                                addTime: Date.now()
                            }
                        }, function(err, upinfo) {
                            if (err) {
                                serverMsg.errHandler(res, -9);
                            } else {
                                res.send({
                                    code: 0,
                                    msg: "更新验证码成功,验证码为:" + chacknum
                                });
                            }
                        })
                    } else {
                        res.send({
                            code: -1,
                            msg: "您还需要" + parseInt((10000 - checktime) / 1000) + "秒才能重新获取验证码"
                        });
                    }

                } else {
                    db.insertOne("regList", {
                        phone: req.query.phone / 1,
                        regNum: chacknum,
                        addTime: Date.now()
                    }, function(err, results) {
                        if (err) {
                            serverMsg.errHandler(res, -1);
                        } else {
                            res.send({
                                code: 0,
                                msg: "获取验证码成功:验证码为:" + chacknum
                            });
                        }
                    });

                }
            }
        })
    }

}
exports.subregnum = function(req, res) {
    if (req.query.regnum == "") {
        serverMsg.errHandler(res, -25);
    } else {
        db.findOne("regList", {
            phone: req.query.phone / 1
        }, function(err, reginfo) {
            if (err) {
                serverMsg.errHandler(res, -2);
            } else {
                if (reginfo) {
                    if (Date.now() - reginfo > 10000) {
                        serverMsg.errHandler(res, -15);
                    } else {
                        if (req.query.regnum == reginfo.regNum) {
                            db.findOne("userList", {
                                phone: req.query.phone / 1
                            }, function(err, userinfo) {
                                if (err) {
                                    serverMsg.errHandler(res, -2);
                                } else {
                                    if (userinfo) {
                                        serverMsg.errHandler(res, -3);
                                    } else {
                                        db.insertOne("userList", {
                                            userName: reginfo.phone.toString(),
                                            phone: reginfo.phone,
                                            passWord: md5(req.query.phone),
                                            goldNum: 0,
                                            goldSum: 0,
                                            regTime: Date.now()
                                        }, function(err, results) {
                                            if (err) {
                                                serverMsg.errHandler(res, -1);
                                            } else {
                                                serverMsg.errHandler(res, 0)
                                            }
                                        });
                                    }
                                }
                            })
                        } else {
                            serverMsg.errHandler(res, -13);
                        }
                    }
                } else {
                    serverMsg.errHandler(res, -12)
                }
            }
        })
    }
}
exports.getUserList = function(req, res) {
    db.find("userList", {
        sort: {
            regTime: -1
        }
    }, function(err, userlist) {
        if (err) {
            serverMsg.errHandler(res, -2);
        } else {
            res.send({
                code: 0,
                msg: "查询成功!",
                userlist: userlist
            });
        }
    });
}
exports.deluser = function(req, res) {
    db.findOneById("userList", req.query.userid, function(err, userinfo) {
        if (err) {
            serverMsg.errHandler(res, -2);
        } else {
            if (userinfo) {
                db.deleteOneById("userList", req.query.userid, function(err, results) {
                    if (err) {
                        serverMsg.errHandler(res, -11);
                    } else {
                        db.findOneById("adminList", req.query.adminid, function(err, admininfo) {
                            if (err) {
                                serverMsg.errHandler(res, -2);
                            } else {
                                if (admininfo) {
                                    db.insertOne("adminLog", {
                                        adminId: admininfo._id,
                                        adminName: admininfo.adminName,
                                        loginfo: "管理员:[" + admininfo.adminName + "]" + serverMsg.adminType[3] + "[" + userinfo.userName + "]"
                                    }, function(err, results) {
                                        if (err) {
                                            serverMsg.errHandler(res, -1);
                                        } else {
                                            serverMsg.errHandler(res, 0);
                                        }
                                    })
                                } else {
                                    serverMsg.errHandler(res, 0);
                                }
                            }
                        })
                    }
                })
            } else {
                serverMsg.errHandler(res, -8);
            }
        }
    })

}
exports.setgold = function(req, res) {
    if (req.body.userid == "") {
        serverMsg.errHandler(res, -5);
    } else {
        db.findOneById("userList", req.body.userid, function(err, userinfo) {
            if (err) {
                serverMsg.errHandler(res, -2);
            } else {
                if (userinfo) {
                    let goldnum = req.body.num / 1;
                    let goldsum = req.body.num / 1;
                    if (req.body.goldtype / 1 == 0) {
                        goldnum *= -1;
                        goldsum = 0;
                    }
                    userinfo.goldNum += goldnum;
                    if (userinfo.goldNum < 0) {
                        serverMsg.errHandler(res, -18);
                    } else {
                        db.updateOneById("userList", req.body.userid, {
                            $inc: {
                                goldNum: goldnum,
                                goldSum: goldsum
                            }
                        }, function(err, results) {
                            if (err) {
                                serverMsg.errHandler(res, -9);
                            } else {
                                db.insertOne("userLog", {
                                    userId: userinfo._id,
                                    userName: userinfo.userName,
                                    loginfo: "用户:[" + userinfo.userName + "]" + serverMsg.adminType[4] + goldnum,
                                    addTime: Date.now()
                                }, function(err, results) {
                                    if (err) {
                                        serverMsg.errHandler(res, -1);
                                    } else {
                                        serverMsg.errHandler(res, 0);
                                    }
                                })
                            }
                        });
                    }
                } else {
                    serverMsg.errHandler(res, -8);
                }
            }
        })
    }
}
exports.userlog = function(req, res) {
    db.find("userLog", {
        sort: {
            addTime: -1
        }
    }, function(err, results) {
        if (err) {
            serverMsg.errHandler(res, -2);
        } else {
            res.send({
                code: 0,
                msg: "查找成功",
                userlog: results
            });
        }
    });
}
exports.userlogin = function(req, res) {
    if (req.query.username == "") {
        serverMsg.errHandler(res, -5);
    } else if (req.query.password == "") {
        serverMsg.errHandler(res, -6);
    } else {
        db.findOne("userList", {
            userName: req.query.username
        }, function(err, userinfo) {
            if (err) {
                serverMsg.errHandler(res, -2);
            } else {
                if (userinfo) {
                    if (userinfo.passWord == md5(req.query.password)) {
                        res.send({
                            code: 0,
                            msg: "登录成功",
                            userId: userinfo._id,
                            userName: userinfo.userName,
                            token: jwt.setToken({
                                userId: userinfo._id,
                            })
                        });
                    } else {
                        serverMsg.errHandler(res, -7);
                    }

                } else {
                    serverMsg.errHandler(res, -8)
                }
            }
        })
    }
}