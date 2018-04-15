import axios from "axios";
import dialog from 'art-dialog';
export default {
	state: {
		userId: sessionStorage.userId,
		userName: sessionStorage.userName,
		token: sessionStorage.token
	},
	actions: {
		sendphone({
			commit
		}, phone) {
			axios.get("/sendphone", {
				params: {
					phone: phone
				}
			}).then(function(data) {
				console.log(data.data);
				dialog({
					title: '提示',
					content: data.data.msg
				}).show()
				dialog({
					title: '提示',
					content: data.data.msg
				}).show()
			})
		},
		subregnum({
			commit
		}, {
			phone,
			vnum,
			links
		}) {
			axios.get("/subregnum", {
				params: {
					phone: phone,
					regnum: vnum
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					links();
				}
			});
		},
		userlogin({
			commit
		}, userinfo) {
			axios.get("/userlogin", {
				params: {
					username: userinfo.username,
					password: userinfo.password
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					commit("SET_USERINFO", data.data);
					userinfo.links();
				}
			});
		},
		userlogout({
			commit
		}, links) {
			sessionStorage.removeItem("userId")
			sessionStorage.removeItem("userName")
			sessionStorage.removeItem("token")
			commit("SET_LOGINOUT");
			links()
		}
	},
	mutations: {
		SET_USERINFO(state, userinfo) {
			state.userId = sessionStorage.userId = userinfo.userId;
			state.userName = sessionStorage.userName = userinfo.userName;
			state.token = sessionStorage.token = userinfo.token;
		},
		SET_LOGINOUT(state) {
			state.userId = sessionStorage.userId;
			state.userName = sessionStorage.userName;
			state.token = sessionStorage.token;
		}
	}
}