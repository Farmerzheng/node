import axios from "axios";

export default {
	state: {
		itemList: [],
		itemType: [],
		itemLog: [],
		pageSum: 1,
		pageIndex: 1,
		itemTypes:-1,
	},
	actions: {
		additem({
			commit
		}, iteminfo) {
			axios.post("/additem", iteminfo.formdata).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.code)
				}
				iteminfo.links();
			});
		},
		getitemlist({
			commit
		}, iteminfo) {
			console.log(iteminfo)
			axios.get("/getitem", {
				params: {
					keyword:iteminfo.keyword,
					pageindex: iteminfo.pageindex,
					type: iteminfo.type
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.code)
				}
				commit("SET_ITEMLIST", data.data);
			});
		},
		delitem({
			commit
		}, iteminfo) {
			axios.get("/delitem", {
				params: {
					adminname: sessionStorage.adminName,
					adminid: sessionStorage.adminId,
					itemid: iteminfo.itemid
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					iteminfo.links();
				}
			});
		},
		getitemlog({
			commit
		}) {
			axios.get("/itemlog").then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					alert(data.data.msg);
				} else {
					commit("SET_ITEMLOG", data.data);
				}
			});
		}
	},
	mutations: {
		SET_ITEMLIST(state, itemlist) {
			state.itemList = itemlist.itemlist;
			state.itemType = itemlist.typelist;
			state.pageSum = itemlist.pagesum;
			state.pageIndex = itemlist.pageindex;
			state.itemTypes = itemlist.itemtype;
		},
		SET_ITEMLOG(state, itemlog) {
			state.itemLog = itemlog.itemlog;
		}
	}
}