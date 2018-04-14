var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var findDocuments = function(db, callback) {
  // Get the collection first.
  var collection = db.collection('users');
  // Find some documents.
  collection.find({name:'tom'}).toArray(function(err, results) {
    callback(err, results);
  });
};

// Connection URL
var url = 'mongodb://www.hdingdang.com:27017/demo';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  findDocuments(db, function(err, results) {
    if (err) {
      console.warn('Failed to find docs: ' + err.toString());
      return;
    }
    console.log('Found: ' + results.length);
    console.dir(results);
    db.close();
  });
});
 