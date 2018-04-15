var mongodb = require("mongodb");
var mongodbClient = mongodb.MongoClient;
var CONN_STR = "mongodb://127.0.0.1:27017/vmall";

function _connet(callback) {
	mongodbClient.connect(CONN_STR, function(err, client) {
		if(err) {
			return;
		}
		callback(client.db('vmall'));
	})
}
/*插入一条记录
 * collection 集合
 * obj 插入的内容（对象）
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.insertOne = function(collection, obj, callback) {
	_connet(function(db) {
		db.collection(collection).insertOne(obj, function(err, results) {
			callback(err, results);
		})
	})
}
/*插入多条记录
 * collection 集合
 * obj 插入的内容（对象）
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.insertMany = function(collection, obj, callback) {
	_connet(function(db) {
		db.collection(collection).insertMany(obj, function(err, results) {
			callback(err, results);
		})
	})
}
/*根据条件查找一条记录
 * collection 集合
 * objWhere 查找的条件
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.findOne = function(collection, objWhere, callback) {
	_connet(function(db) {
		db.collection(collection).findOne(objWhere, function(err, results) {
			callback(err, results);
		})
	})
}
/**
 * 根据ID查找指定集合的数据
 */
exports.findOneById = function(collection, id, callback) {
	_connet(function(db) {
		db.collection(collection).findOne({
			_id: mongodb.ObjectID(id)
		}, function(err, results) {
			callback(err, results);
		})
	})
}
/*
 * 根据条件查找数据
 * collection指定的集合
 * obj:
 *     where 条件
 *     limit  文档显示的条数
 *     skip   跳过多少条
 *     sort  排序
 * callback 返回的结果*/
exports.find = function(collection, obj, callback) {
	if(obj.where == undefined)
		obj.where = {};
	if(obj.sort == undefined)
		obj.sort = {};
	if(obj.limit == undefined)
		obj.limit = 0;
	if(obj.skip == undefined)
		obj.skip = 0;
	_connet(function(db) {
		db.collection(collection)
			.find(obj.where)
			.sort(obj.sort)
			.skip(obj.skip)
			.limit(obj.limit)
			.toArray(function(err, results) {
				callback(err, results);
			})
	})
}
/*根据条件查找记录条数
 * collection 集合
 * objWhere 查找的条件
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.count = function(collection, objWhere, callback) {
	_connet(function(db) {
		db.collection(collection).count(objWhere).then(function(count) {
			callback(count);
		})
	})
}
/*根据条件更新一条数据
 * collection 集合
 * strObj 查找的条件
 * upObj  更改的内容
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.updateOne = function(collection, strObj, upObj, callback) {
	_connet(function(db) {
		db.collection(collection).updateOne(strObj, upObj, function(err, results) {
			callback(err, results);
		})
	})
}
exports.update = function(collection, strObj, upObj, callback) {
	_connet(function(db) {
		db.collection(collection).updateMany(strObj, upObj, function(err, results) {
			// db.close();
			callback(err, results);
		})
	})
}
/*根据条件更新一条数据
 * collection 集合
 * id 查找的ID
 * upObj  更改的内容
 * callback是一个回调函数，负责将结果返回给调用方*/
exports.updateOneById = function(collection, id, upObj, callback) {
	_connet(function(db) {
		db.collection(collection).updateOne({
			_id: mongodb.ObjectID(id)
		}, upObj, function(err, results) {
			callback(err, results);
		})
	})
}
exports.deleteOneById = function(collection, id, callback) {
	_connet(function(db) {
		db.collection(collection).deleteOne({
			_id: mongodb.ObjectID(id)
		}, function(err, results) {
			callback(err, results);
		})
	})
}