import axios from "axios"

export default {
	state: {
		userList: [],
		userLog: []
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
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
			})
		},
		subregnum({
			commit
		}, {
			phone,
			vnum
		}) {
			axios.get("/subregnum", {
				params: {
					phone: phone,
					regnum: vnum
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
			});
		},
		getuserlist({
			commit
		}) {
			axios.get("/userlist").then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					commit("SET_USERLIST", data.data);
				}
			});
		},
		deluser({
			commit
		}, {
			userid,
			links
		}) {
			axios.get("/deluser", {
				params: {
					adminid: sessionStorage.adminId,
					userid: userid
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					links();
				}
			});
		},
		setgold({
				commit
			},
			goldinfo
		) {
			console.log(goldinfo)
			axios.post("/setgold", {
				userid: goldinfo.userid,
				goldtype: goldinfo.type,
				num: goldinfo.num
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					goldinfo.links();
				}
			});
		},
		getlog({
			commit
		}) {
			axios.get("/userlog").then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					commit("SET_USERLOG", data.data);
				}
			});
		}
	},
	mutations: {
		SET_USERLIST(state, userlist) {
			state.userList = userlist.userlist;
		},
		SET_USERLOG(state, userlog) {
			state.userLog = userlog.userlog;
		}
	}
}