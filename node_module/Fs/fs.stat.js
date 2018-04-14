var fs=require("fs");
fs.stat("../myDemo/01.js",function(error,stats){
console.log(error);
console.log(stats);
})