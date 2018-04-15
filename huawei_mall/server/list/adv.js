let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let db = require("../plugin/db.js");
let picm = require("../plugin/picM.js");
let md5 = require("js-md5");
let jwt = require("../plugin/jwt.js");
let serverMsg = require("../plugin/serverMsg.js");
let fs = require("fs");

exports.addadv = function(req, res) {
	picm.addPic(req, "advPic", function(picresults) {
		if(picresults.code == 0) {
			db.insertOne("advList", {
				advName: picresults.params.advName,
				advLink: picresults.params.advLink,
				advType: picresults.params.advType,
				advPic: picresults.newName,
				addTime: Date.now()
			}, function(err, results) {
				if(err) {
					serverMsg.errHandler(res, -21);
				} else {
					db.insertOne("advLog", {
						adminId: picresults.params.adminId,
						adminName: picresults.params.adminName,
						loginfo: "管理员:[" + picresults.params.adminName + "]" + serverMsg.adminType[5] + ":[" + picresults.params.advName + "]",
						addTime: Date.now()
					}, function(err, results) {
						if(err) {
							serverMsg.errHandler(res, -21);
						} else {
							serverMsg.errHandler(res, 0);
						}
					})
				}
			})
		} else {
			serverMsg.errHandler(res, -21);
		}
	})
}
exports.getadv = function(req, res) {
	db.find("advList", {
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
				advlist: results,
				advtype: serverMsg.advType
			})
		}
	})
}
exports.getadvtype = function(req, res) {
	let where = {};
	if(req.query.type / 1 != -1) {
		where = {
			advType: req.query.type
		}
	}
	db.find("advList", {
		where: where,
		sort: {
			addTime: -1
		},
		limit: req.query.num / 1
	}, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "获取成功",
				advlist: results,
				advtype: serverMsg.advType,
				types: req.query.type
			})
		}
	})
}
exports.getadvlog = function(req, res) {
	db.find("advLog", {
		sort: {
			addTime: -1
		}
	}, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "查找成功",
				advlog: results
			});
		}
	});
}
exports.deladv = function(req, res) {
	db.findOneById("advList", req.query.advid, function(err, advinfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			if(advinfo) {
				db.deleteOneById("advList", req.query.advid, function(err, results) {
					if(err) {
						serverMsg.errHandler(res, -11);
					} else {
						fs.unlink("./upload/" + advinfo.advPic, function(err) {
							if(err) {
								serverMsg.errHandler(res, -11);
							} else {
								db.insertOne("adminLog", {
									adminId: req.query.adminid,
									adminName: req.query.adminname,
									loginfo: "管理员:[" + req.query.adminname + "]删除广告[" + advinfo.advName + "]",
									addTime: Date.now()
								}, function(err, results) {
									if(err) {
										serverMsg.errHandler(res, -11);
									} else {
										serverMsg.errHandler(res, 0);
									}
								})
							}
						});

					}
				})

			} else {
				serverMsg.errHandler(res, -8);
			}
		}
	})
}