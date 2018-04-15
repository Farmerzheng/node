import axios from "axios";

export default {
	state: {
		adminId: sessionStorage.adminId,
		adminToken: sessionStorage.adminToken,
		adminName: sessionStorage.adminName,
		adminList: [],
		adminLog: []
	},
	actions: {
		addadmin({
			commit
		}, admininfo) {
			axios.post("/addadmin", {
				adminname: admininfo.adminname,
				password1: admininfo.password1,
				password2: admininfo.password2
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					admininfo.links();
				}
			});
		},
		adminlogin({
			commit
		}, logininfo) {
			axios.get("/adminlogin", {
				params: {
					adminname: logininfo.adminname,
					password: logininfo.password
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					commit("SET_ADMININFO", data.data);
					logininfo.links();
				}

			});
		},
		getadminlist({
			commit
		}) {
			axios.get("/adminlist").then(function(data) {
				console.log(data.data);
				commit("SET_ANMINLIST", data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
			});
		},
		getadminlog({
			commit
		}) {
			axios.get("/adminLog").then(function(data) {
				console.log(data.data);
				commit("SET_ADMINLOG", data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
			});

		},
		changepwd({
			commit
		}, admininfo) {
			axios.post("/changePwd", {
				adminId: sessionStorage.adminId,
				password1: admininfo.password1,
				password2: admininfo.password2,
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code < 0) {
					alert(data.data.msg);
				} else {
					sessionStorage.removeItem("adminId");
					sessionStorage.removeItem("adminToken");
					sessionStorage.removeItem("adminName");
					commit("SET_LOGINOUT");
					admininfo.links();
				}

			});
		},
		loginout({
			commit
		}, links) {
			sessionStorage.removeItem("adminId");
			sessionStorage.removeItem("adminToken");
			sessionStorage.removeItem("adminName");
			commit("SET_LOGINOUT");
			links();
		},
		deladmin({
			commit
		}, admininfo) {
			axios.get("/deladmin", {
				params: {
					adminid: admininfo.adminid
				}
			}).then(function(data) {
				console.log(data.data)
				admininfo.links();
			});
		}
	},
	mutations: {
		SET_ADMININFO(state, admininfo) {
			state.adminId = sessionStorage.adminId = admininfo.adminId;
			state.adminToken = sessionStorage.adminToken = admininfo.token;
			state.adminName = sessionStorage.adminName = admininfo.adminName;
		},
		SET_ANMINLIST(state, admininfo) {
			state.adminList = admininfo.adminList;
		},
		SET_ADMINLOG(state, adminlog) {
			state.adminLog = adminlog.adminLog
		},
		SET_LOGINOUT(state) {
			state.adminId = sessionStorage.adminId;
			state.adminToken = sessionStorage.token;
			state.adminName = sessionStorage.adminName;
		}
	}
}