let jwt = require("jwt-simple");
let mykey = "QYS3";
exports.setToken = function(data) {
	data.time = Date.now() + 600000;
	return jwt.encode(data, mykey);
}
exports.getToken = function(token) {
	try {
		let tokens = jwt.decode(token, mykey);
		if(tokens.time < Date.now()) {
			return {
				code: -2,
				msg: "授权已过期"
			}
		} else {
			return {
				code: 0,
				msg: "授权正确",
				token: tokens
			}
		}
	} catch(err) {
		return {
			code: -1,
			msg: "未授权用户"
		}
	}
}