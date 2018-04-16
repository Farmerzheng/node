/**
 * Created by wangzheng on 2016/7/25.
 */
//module.js  
var name;
module.exports.setName = function(thyName) {
    name = thyName;
};
module.exports.sayHello = function() {
    console.log('Hello ' + name);
};
