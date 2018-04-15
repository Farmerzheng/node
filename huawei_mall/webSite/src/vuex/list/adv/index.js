import axios from "axios"
let typetemp = {
	"0": "advList",
	"1": "menuList",
}
export default {
	state: {
		advList: [],
		menuList: []
	},
	actions: {
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
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					commit("SET_ADVLIST", data.data);
				}
			});
		}
	},
	mutations: {
		SET_ADVLIST(state, advlist) {
			state[typetemp[advlist.types]] = advlist.advlist;
		},
	}
}