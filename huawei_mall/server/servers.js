let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let admin = require("./list/admin");
let adv = require("./list/adv");
let item = require("./list/item");
let user = require("./list/user");

app.use(bodyparser.json());
app.use(express.static("./upload/"));

app.all("*", function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", ["GET", "POST", "PUT", "DELETE"]);
	res.header("Access-Control-Allow-Headers", ["Content-type", "Authorization"]);
	next();
})

app.post("/addadmin", admin.addAdmin);
app.get("/adminlogin", admin.adminlogin);
app.get("/adminlist", admin.adminList);
app.get("/adminlog", admin.adminLog);
app.post("/changePwd", admin.changePwd);
app.get("/deladmin", admin.deladmin);

app.get("/sendphone", user.sendphone);
app.get("/subregnum", user.subregnum);
app.get("/userlist", user.getUserList);
app.get("/deluser", user.deluser);
app.post("/setgold", user.setgold);
app.get("/userlog", user.userlog);

app.get("/userlogin", user.userlogin);

app.post("/addadv", adv.addadv);
app.get("/getadv", adv.getadv);
app.get("/getadvlog", adv.getadvlog);
app.get("/deladv", adv.deladv);
app.get("/getadvtype", adv.getadvtype);

app.post("/additem", item.additem);
app.get("/getitem", item.getitem);
app.get("/delitem", item.delitem);
app.get("/itemlog", item.itemlog);
app.get("/getitems", item.getitems);
app.get("/getsingleitem", item.getsingleitem);
app.post("/setcart", item.setcart);
app.get("/getcart", item.getcart);
app.get("/addandless", item.addandless);
app.get("/itemcheck", item.itemcheck);
app.get("/allcheck", item.allcheck);
app.get("/subcart", item.subcart);

app.listen(3333, function() {
	console.log("服务器开启中,端口号3333...")
});