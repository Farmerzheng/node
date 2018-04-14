var http = require("http");
var util = require('util');
var MongoClient = require('mongodb').MongoClient;

// Connection URL
var url = 'mongodb://www.hdingdang.com:27017/demo';

function connectMongo(url, callback) {
  MongoClient.connect(url, function(err, db) {
    callback(err, db);
  });
}

var findDocuments = function(db, callback) {
  // Get the collection first.
  var collection = db.collection('users');
  // Find some documents.
  collection.find({}).toArray(function(err, results) {
    callback(err, results);
  });
};

var updateDocument = function(db, callback) {
  var collection = db.collection('users');
  //collection.update({name:'tom'}, );
};

// Server starts here:
http.createServer(function(req, res) {
  console.log('req: ', util.inspect(req.url));

  connectMongo(url, function(err, db) {
    if (err) {
      res.writeHead(501, {"Content-Type": "text/plain"});
      res.write(err.toString());
      res.end();
      return;
    }
    findDocuments(db, function(err, results) {
      if (err) {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write('Not found');
        res.end();
        return;
      }
      for (var i = 0; i < results.length; i++) {
        delete results[i]._id;
      }
      res.writeHead(200, {"Content-Type": "application/json"});
      res.write(JSON.stringify(results));
      res.end();
    });
  });
}).listen(8888);
