// 路由，顾名思义，是指我们要针对不同的URL有不同的处理方式。
// 例如处理"/start"的业务逻辑就应该和处理"/upload"的不同。
function route(handle, pathname, response) {
  console.log("a request for route " + pathname + " received");
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
// 当然可以通过硬编码的方式将路由依赖项绑定到服务器上，但是其它语言的编程经验告诉我们这会是一件非常痛苦的事，因此我们将使用依赖注入的方式较松散地添加路由模块