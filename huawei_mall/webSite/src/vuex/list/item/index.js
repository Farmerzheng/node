import axios from "axios"
import dialog from 'art-dialog';
let typetemp = {
	"0": "homepushList",
	"1": "homeitemList",
	"2": "coolitemList",
	"3": "coolphoneList",
	"4": "phoneitemList",
	"5": "notebookList",
	"6": "coolbanList",
	"7": "banitemList",
	"8": "smartcoverList",
	"9": "coveritemList",
	"10": "smarthomeList",
	"11": "homeitemList",
	"12": "hotitemList",
	"13": "itemhostList",
	"14": "ltditemList",
	"15": "ltdsitemList"
}
export default {
	state: {
		cartList: [],
		singleitemList: [],
		typeList: [],
		homepushList: [],
		homeitemList: [],
		coolitemList: [],
		coolphoneList: [],
		phoneitemList: [],
		notebookList: [],
		coolbanList: [],
		banitemList: [],
		smartcoverList: [],
		coveritemList: [],
		smarthomeList: [],
		homeitemList: [],
		hotitemList: [],
		itemhostList: [],
		ltditemList: [],
		ltdsitemList: []
	},
	actions: {
		getitemlist({
			commit
		}, iteminfo) {
			axios.get("/getitems", {
				params: {
					type: iteminfo.type,
					num: iteminfo.num
				}
			}).then(function(data) {
				console.log(data.data);
				commit("SET_ITEMS", data.data);
			});
		},
		gettypelist({
			commit
		}, type) {
			axios.get("/getitems", {
				params: {
					type: type,
					num: 6
				}
			}).then(function(data) {
				console.log(data.data);
				commit("SET_TYPE", data.data);
			});
		},
		getsingleitem({
			commit
		}, itemid) {
			axios.get("/getsingleitem", {
				params: {
					itemid: itemid
				}
			}).then(function(data) {
				console.log(data.data);
				commit("SET_SINGLEITEM", data.data);
			});
		},
		addcart({
			commit
		}, iteminfo) {
			axios.post("/setcart", {
				itemid: iteminfo.itemid,
				userid: sessionStorage.userId,
				username: sessionStorage.userName
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					var d = dialog({
						content: '已加入购物车'
					});
					d.show();
					setTimeout(function() {
						d.close().remove();
					}, 2000);
					
				}
			});
		},
		getcart({
			commit
		}) {
			axios.get("/getcart", {
				params: {
					userid: sessionStorage.userId
				}
			}).then(function(data) {
				console.log(data.data);
				commit("SET_CARTLIST", data.data);
			});
		},
		addandless({
			commit
		}, iteminfo) {
			axios.get("/addandless", {
				params: {
					type: iteminfo.type,
					itemid: iteminfo.itemid
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					iteminfo.links();
				}
			});
		},
		itemcheck({
			commit
		}, iteminfo) {
			axios.get("/itemcheck", {
				params: {
					itemid: iteminfo.itemid
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				}
				iteminfo.links();
			});
		},
		allchecks({
			commit
		}, iteminfo) {
			console.log(iteminfo);
			axios.get("/allcheck", {
				params: {
					userid: sessionStorage.userId,
					type: iteminfo.type
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				}
				iteminfo.links();
			});
		},
		subcart({
			commit
		}, links) {
			axios("/subcart", {
				params: {
					userid: sessionStorage.userId,
					username: sessionStorage.userName
				}
			}).then(function(data) {
				console.log(data.data);
				if(data.data.code != 0) {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				} else {
					dialog({
						title: '提示',
						content: data.data.msg
					}).show()
				}
				links();

			})
		}
	},
	mutations: {
		SET_ITEMS(state, itemlist) {
			state[typetemp[itemlist.type]] = itemlist.itemlist;
		},
		SET_TYPE(state, typelist) {
			state.typeList = typelist.itemlist;
		},
		SET_SINGLEITEM(state, singleitemlist) {
			state.singleitemList = singleitemlist.singleitemlist
		},
		SET_CARTLIST(state, cartlist) {
			state.cartList = cartlist.cartlist;
		}
	},
	getters: {
		itemall(state) {
			let allprice = 0;
			let allsum = 0;
			let allcheck = true;
			for(let i = 0; i < state.cartList.length; i++) {
				if(state.cartList[i].isCheck == 1) {
					allprice += state.cartList[i].itemPrice / 1 * state.cartList[i].itemNum / 1;
					allsum += state.cartList[i].itemNum;
				} else if(state.cartList[i].isCheck == 0) {
					allcheck = false;
				}
			}
			return {
				allprice,
				allsum,
				allcheck
			}
		}
	}
}