import axios from "axios"

export default {
	state: {
		advList: [],
		advType: [],
		advLog: []
	},
	actions: {
		addadv({
			commit
		}, advinfo) {
			axios.post("/addadv", advinfo.formdata).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
				advinfo.links()
			});
		},
		getadvlist({
				commit
			},
			advinfo
		) {
			axios.get("/getadvtype", {
				params: {
					type: advinfo.type,
					num: advinfo.num
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					commit("SET_ADVLIST", data.data);
				}
			});
		},
		getadvlog({
			commit
		}) {
			axios.get("/getadvlog").then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				}
				commit("SET_ADVLOG", data.data);
			});
		},
		deladv({
			commit
		}, advinfo) {
			console.log(advinfo);
			axios.get("/deladv", {
				params: {
					advid: advinfo.advid,
					adminid: sessionStorage.adminId,
					adminname: sessionStorage.adminName
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					advinfo.links();
				}
			});
		}

	},
	mutations: {
		SET_ADVLIST(state, advlist) {
			state.advList = advlist.advlist
			state.advType = advlist.advtype
		},
		SET_ADVLOG(state, advlog) {
			state.advLog = advlog.advlog
		}
	}
}