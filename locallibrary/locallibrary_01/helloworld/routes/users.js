/*首先加载express，通过express获取到router对象。
使用router对象指定路由的方法和路径。
由于在app.js已经指定 /users 到本文件，
因此当浏览器请求/user时，
会执行下面的回调函数。
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
