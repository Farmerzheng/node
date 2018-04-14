// 引入之前使用npm install下载的包，并创建express对象
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

// 引入routes文件夹里面的文件，这些文件主要处理URL路由。
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



//设置模板，views 设置了模板的位置；view engine设置了要使用的模板引擎。
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// 使用上面引入的包：
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 4.关联路由路径与引入的文件
app.use('/', indexRouter);
app.use('/users', usersRouter);

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