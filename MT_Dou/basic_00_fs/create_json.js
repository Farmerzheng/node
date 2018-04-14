var myFileSystem = require('fs');
// console.log(myFileSystem);
myFileSystem.writeFile('message.txt', 'Hello Node.js', (err) => {
  if (err) throw err;
  console.log('writing finished');
});
console.log("writing started");