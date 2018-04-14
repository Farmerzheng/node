var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
/*	Express 应用默认使用的是 pug 模板，
views文件里面是所有的视图模板。
在router文件里, 使用Response.render()指定要加载的模板和传递给模板的一些参数。
下面的/routes/index.js文件里的示例：*/
  res.render('index', { title: 'Express' });
});

module.exports = router;
