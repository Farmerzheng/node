
var fs = require('fs');// file system
var util = require('util'); // utility

var util = require('../lib/myModule'); // utility
fs.readFile('hello.json', function(err, data) {
  if (err) {
    console.warn('Failed to read file: ' + err.toString());
    return;
  }
  var user = JSON.parse(data);
  console.log('File content: \n' + util.inspect(user));
  console.log('Hello World, ' + user.name + "!");
});
