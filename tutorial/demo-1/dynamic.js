
const vm = require('vm');
const fs = require('fs');
const util = require('util');

var sandbox = {
  count: 2,
  name: 'cat',
  console: console,
};

function getSource(file, cb) {
  fs.readFile(file, function(err, data) {
    cb(err, data);
  });
}

function runOnce() {
  getSource('template.js', function(err, data) {
    if (!err && data) {
      var context = new vm.createContext(sandbox);
      var script = new vm.Script(data.toString(), sandbox);
console.log('code: %s', data.toString());
      script.runInContext(context);
//console.log('result: %s', util.inspect(sandbox));
console.log(' getCount: ', sandbox.getCount());
sandbox.print();
    }
  });
}

setInterval(runOnce, 3000);
