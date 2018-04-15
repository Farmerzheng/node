let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let db = require("../plugin/db.js");
let md5 = require("js-md5");
let jwt = require("../plugin/jwt.js");
let serverMsg = require("../plugin/serverMsg.js");

exports.adminlogin = function(req, res) {
	console.log(req.query)
	if(req.query.adminname == "") {
		serverMsg.errHandler(res, -5);
	} else if(req.query.password == "") {
		serverMsg.errHandler(res, -7);
	} else {
		db.findOne("adminList", {
			adminName: req.query.adminname
		}, function(err, admininfo) {
			if(err) {
				serverMsg.errHandler(res, -2);
			} else {
				if(!admininfo) {
					serverMsg.errHandler(res, -8);
				} else {
					if(admininfo.passWord == md5(req.query.password)) {
						db.insertOne("adminLog", {
							adminId: admininfo._id,
							adminName: admininfo.adminName,
							loginfo: "管理员:[" + admininfo.adminName + "]" + serverMsg.adminType[0],
							addTime: Date.now()
						}, function(err, results) {
							if(err) {
								serverMsg.errHandler(res, -1);
							} else {
								res.send({
									code: 0,
									msg: "登录成功",
									adminId: admininfo._id,
									adminName: admininfo.adminName,
									token: jwt.setToken({
										adminId: admininfo._id
									})
								});
							}
						})

					} else {
						serverMsg.errHandler(res, -7);
					}
				}
			}
		});
	}
}
exports.addAdmin = function(req, res) {
	let token = jwt.getToken(req.headers.authorization);
	if(token.code == 0) {
		if(req.body.adminname == "") {
			serverMsg.errHandler(res, -5);
		} else if(req.body.password1 == "") {
			serverMsg.errHandler(res, -6);
		} else if(req.body.password1 != req.body.password2) {
			serverMsg.errHandler(res, -4);
		} else {
			db.count("adminList", {
				adminName: req.body.adminname
			}, function(count) {
				if(count) {
					serverMsg.errHandler(res, -3)
				} else {
					db.insertOne("adminList", {
						adminName: req.body.adminname,
						passWord: md5(req.body.password1),
						addTime: Date.now()
					}, function(err, results) {
						if(err) {
							serverMsg.errHandler(res, -1);
						} else {
							serverMsg.errHandler(res, 0);
						}
					})
				}
			});
		}
	} else {
		res.send({
			code: token.code,
			msg: token.msg
		});
	}
};
exports.adminList = function(req, res) {
	db.find("adminList", {
		sort: {
			addTime: -1
		}
	}, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "获取成功",
				adminList: results
			});
		}
	});
};
exports.adminLog = function(req, res) {
	db.find("adminLog", {
		sort: {
			addTime: -1
		}
	}, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "获取成功",
				adminLog: results
			});
		}
	});
};
exports.changePwd = function(req, res) {
	let token = jwt.getToken(req.headers.authorization);
	if(token.code == 0) {
		if(req.body.password1 == "") {
			serverMsg.errHandler(res, -6);
		} else if(req.body.password1 != req.body.password2) {
			serverMsg.errHandler(res, -4);
		} else {
			db.findOneById("adminList", req.body.adminId, function(err, admininfo) {
				if(err) {
					serverMsg.errHandler(res, -2);
				} else {
					if(!admininfo) {
						serverMsg.errHandler(res, -8)
					} else {
						db.updateOneById("adminList", req.body.adminId, {
							$set: {
								passWord: md5(req.body.password1)
							}
						}, function(err, results) {
							if(err) {
								serverMsg.errHandler(res, -9);
							} else {
								db.insertOne("adminLog", {
									adminId: admininfo._id,
									adminName: admininfo.adminName,
									loginfo: "管理员:[" + admininfo.adminName + "]" + serverMsg.adminType[1],
									addTime: Date.now()
								}, function(err, results) {
									if(err) {
										serverMsg.errHandler(res, -1);
									} else {
										serverMsg.errHandler(res, 0);
									}
								})
							}
						})
					}

				}
			});
		}
	} else {
		res.send({
			code: token.code,
			msg: token.msg
		});
	}
}

exports.deladmin = function(req, res) {
	db.findOneById("adminList", req.query.adminid, function(err, admininfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			db.deleteOneById("adminList", req.query.adminid, function(err, results) {
				if(err) {
					serverMsg.errHandler(res, -11);
				} else {
					db.insertOne("adminLog", {
						adminId: admininfo._id,
						adminName: admininfo.adminName,
						loginfo: "管理员:[" + admininfo.adminName + "]" + serverMsg.adminType[2] + "[" + admininfo.adminName + "]",
						addTime: Date.now()
					}, function(err, results) {
						if(err) {
							serverMsg.errHandler(res, -1);
						} else {
							serverMsg.errHandler(res, 0);
						}
					})
				}
			})

		}
	})
}