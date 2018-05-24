var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/goods');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* app.use 加载用于处理http请求的middleware（中间件），当一个请求来的时候，会依次被这些 middlewares处理。
 
app.use还可以向express中注册自定义函数

app.use(function(req,res,next){
    console.log("111");
    next();
});

注册自定义函数要写在下面这句的前面

app.use(app.router);

是因为路由后或请求静态资源后，一次请求响应的生命周期实质上已经结束，加在这后面进行请求处理，没有任何意义。

在express内部，有一个函数的数组，

每来一个请求，express内部就会执行这个数组中的对应这个请求的函数

在这个函数数组里，每个函数的签名应该像下面那样：

function(req,res){//...}
但是，实际上是：

function(req,res，next){//...}
这个next，是指下一个函数

如果不写next(),那么后面再注册的函数就不会执行
*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 配置请求的静态资源路径
app.use(express.static(path.join(__dirname, 'public')));

// 登录拦截
app.use(function(req, res, next) {
    console.log(req)
    if (req.cookies.userId ||
        req.path == '/goods' ||
        req.originalUrl.indexOf('/login') != -1 ||
        req.originalUrl.indexOf('/logout') != -1) {

        //浏览器端cookies中有用户ID，说明已经登录，不需要拦截

        // 用户访问商品列表不需要拦截

        // 用户登录也不要拦截
        next()

    } else {
        res.json({
            status: '10001',
            msg: ' 当前未登录',
            result: '当前未登录'
        })
    }

})




/*app.use(path,callback)中的callback既可以是router对象又可以是函数
app.get(path,callback)中的callback只能是函数

app.get(app.post、app.put同理)赋个路由对象是不行的，
其实，可以将app.get()看作app.use的特定请求(get)的简要写法

var express = require('express');
var app = express();
app.get('/hello',function(req,res,next){
    res.send('hello test2');

})

等同于：

var express = require('express');
var app = express();
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('hello world!');
});
app.use('/hello',router);

什么时用app.use，什么时用app.get呢？

路由规则是app.use(path,router)定义的，
router代表一个由express.Router()创建的对象，
在router对象中可定义多个路由规则。

当一个路径有多个匹配规则时，使用app.use，
否则使用相应的app.method(get、post)比较好

*/



// 定义一级路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;