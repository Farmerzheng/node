let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let db = require("../plugin/db.js");
let picm = require("../plugin/picM.js");
let md5 = require("js-md5");
let jwt = require("../plugin/jwt.js");
let serverMsg = require("../plugin/serverMsg.js");
let fs = require("fs");
let mongodb = require("mongodb");

exports.additem = function(req, res) {
	picm.addPic(req, "itemPic", function(picinfo) {
		if(picinfo.code == 0) {
			db.insertOne("itemList", {
				itemName: picinfo.params.itemName,
				itemPrice: picinfo.params.itemPrice / 1,
				itemInfo: picinfo.params.itemInfo,
				itemType: picinfo.params.itemType / 1,
				itemPic: picinfo.newName,
				addTime: Date.now()
			}, function(err, results) {
				if(err) {
					serverMsg.errHandler(res, -1);
				} else {
					serverMsg.errHandler(res, 0);
				}
			})
		} else {
			serverMsg.errHandler(res, -1);
		}
	})
}
exports.getitem = function(req, res) {
	let where = {};
	if(req.query.type / 1 != -1) {
		where.itemType = req.query.type / 1
	}
	if(req.query.keyword != "") {
		where.itemName = new RegExp(req.query.keyword)
	}
	let pageindex = req.query.pageindex < 0 ? 1 : req.query.pageindex;
	db.count("itemList", where, function(count) {
		let pagesum = Math.ceil(count / 5);
		db.find("itemList", {
			where: where,
			sort: {
				addTime: -1
			},
			limit: 5,
			skip: (pageindex - 1) * 5,
		}, function(err, results) {
			if(err) {
				serverMsg.errHandler(res, -2);
			} else {
				res.send({
					code: 0,
					msg: "获取成功",
					itemlist: results,
					typelist: serverMsg.itemType,
					pagesum: pagesum < 0 ? 1 : pagesum,
					pageindex: pageindex,
					itemtype: req.query.type
				});
			}
		});
	});

}
exports.delitem = function(req, res) {
	db.findOneById("itemList", req.query.itemid, function(err, iteminfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			if(iteminfo) {
				db.deleteOneById("itemList", req.query.itemid, function(err, results) {
					if(err) {
						serverMsg.errHandler(res, -11);
					} else {
						fs.unlink("./upload/" + iteminfo.itemPic, function(err) {
							if(err) {
								serverMsg.errHandler(res, -11);
							} else {
								db.insertOne("itemLog", {
									adminId: req.query.adminid,
									adminName: req.query.adminname,
									loginfo: "管理员:[" + req.query.adminname + "]" + serverMsg.adminType[6] + "[" + iteminfo.itemName + "]",
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
				})
			} else {
				serverMsg.errHandler(res, -8);
			}
		}
	})
}
exports.itemlog = function(req, res) {
	db.find("itemLog", {
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
				itemlog: results
			});
		}
	});
}
exports.getitems = function(req, res) {
	db.find("itemList", {
		where: {
			itemType: req.query.type / 1,
		},
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
				itemlist: results,
				type: req.query.type / 1
			});
		}
	});
}
exports.getsingleitem = function(req, res) {
	db.findOneById("itemList", req.query.itemid, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "获取成功",
				singleitemlist: results
			});
		}
	})
}
exports.setcart = function(req, res) {
	db.findOneById("itemList", req.body.itemid, function(err, iteminfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			if(iteminfo) {
				db.findOne("cartList", {
					itemId: mongodb.ObjectId(req.body.itemid),
					isSub: 1
				}, function(err, cartinfo) {
					if(err) {
						serverMsg.errHandler(res, -2);
					} else {
						if(cartinfo) {
							db.updateOneById("cartList", cartinfo._id, {
								$inc: {
									itemNum: 1
								}
							}, function(err, results) {
								if(err) {
									serverMsg.errHandler(res, -9);
								} else {
									serverMsg.errHandler(res, 0);
								}
							})
						} else {
							db.insertOne("cartList", {
								userId: req.body.userid,
								userName: req.body.username,
								itemId: iteminfo._id,
								itemName: iteminfo.itemName,
								itemPrice: iteminfo.itemPrice,
								itemPic: iteminfo.itemPic,
								itemNum: 1,
								isCheck: 1,
								isSub: 1,
								addTime: Date.now()
							}, function(err, results) {
								if(err) {
									serverMsg.errHandler(res, -1);
								} else {
									serverMsg.errHandler(res, 0);
								}
							})
						}
					}
				});
			} else {
				serverMsg.errHandler(res, -22);
			}
		}
	})
}
exports.getcart = function(req, res) {
	db.find("cartList", {
		where: {
			userId: req.query.userid,
			isSub: 1
		}
	}, function(err, cartinfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			res.send({
				code: 0,
				msg: "查询成功",
				cartlist: cartinfo
			});
		}
	});
}
exports.addandless = function(req, res) {
	let obj = {
		$inc: {
			itemNum: 1
		}
	};
	if(req.query.type == 0) {
		obj = {
			$inc: {
				itemNum: -1
			}
		}
	}
	db.updateOneById("cartList", req.query.itemid, obj, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -9);
		} else {
			db.findOneById("cartList", req.query.itemid, function(err, carts) {
				if(err) {
					serverMsg.errHandler(res, -2);
				} else {
					if(carts.itemNum < 1) {
						db.deleteOneById("cartList", req.query.itemid, function(err, results) {
							if(err) {
								serverMsg.errHandler(res, -11);
							} else {
								serverMsg.errHandler(res, 0);
							}
						})
					} else {
						serverMsg.errHandler(res, 0);
					}
				}
			});

		}
	})
}
exports.itemcheck = function(req, res) {
	db.findOneById("cartList", req.query.itemid, function(err, iteminfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			let obj = {
				$set: {
					isCheck: 0
				}
			};
			if(iteminfo.isCheck == 0) {
				obj = {
					$set: {
						isCheck: 1
					}
				}
			}
			db.updateOneById("cartList", req.query.itemid, obj, function(err, results) {
				if(err) {
					serverMsg.errHandler(res, -9);
				} else {
					serverMsg.errHandler(res, 0);
				}
			});
		}
	})
}
exports.allcheck = function(req, res) {
	let obj = {};
	if(req.query.type == "0") {
		obj = {
			$set: {
				isCheck: 1
			}
		}
	} else {
		obj = {
			$set: {
				isCheck: 0
			}
		}
	}
	db.update("cartList", {
		userId: req.query.userid,
		isSub: 1
	}, obj, function(err, results) {
		if(err) {
			serverMsg.errHandler(res, -9);
		} else {
			serverMsg.errHandler(res, 0);
		}
	})
}
exports.subcart = function(req, res) {
	db.findOneById("userList", req.query.userid, function(err, userinfo) {
		if(err) {
			serverMsg.errHandler(res, -2);
		} else {
			if(userinfo) {
				let allnum = 0;
				db.find("cartList", {
					userId: req.query.userid,
					isCheck: 1,
					isSub: 1
				}, function(err, cartinfo) {
					if(err) {
						serverMsg.errHandler(res, -2);
					} else {
						for(let i = 0; i < cartinfo.length; i++) {
							allnum += cartinfo[i].itemPrice * cartinfo[i].itemNum;
						}
						if(userinfo.goldNum < allnum) {
							serverMsg.errHandler(res, -23);
						} else {
							db.updateOneById("userList", req.query.userid, {
								$inc: {
									goldNum: allnum * -1
								}
							}, function(err, results) {
								if(err) {
									serverMsg.errHandler(res, -9);
								} else {
									db.update("cartList", {
										userId: req.query.userid,
										isCheck: 1,
										isSub: 1
									}, {
										$set: {
											isSub: 2
										}
									}, function(err, results) {
										if(err) {
											serverMsg.errHandler(res, -9);
										} else {
											db.insertOne("userLog", {
												userId: req.query.userid,
												userName: req.query.username,
												loginfo: "用户:[" + req.query.username + "]" + serverMsg.adminType[7] + allnum,
												addTime: Date.now()
											}, function(err, results) {
												if(err) {
													serverMsg.errHandler(res, -1);
												} else {
													serverMsg.errHandler(res, 0);
												}
											});
										}
									});
								}
							})
						}
					}
				})
			} else {
				serverMsg.errHandler(res, -8);
			}
		}
	});
}