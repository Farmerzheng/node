import changeGold from "@/components/user/changeGold"
import userLog from "@/components/user/userLog"
import userManager from "@/components/user/userManager"
import userReg from "@/components/user/userReg"

export let users = [{
		path: "/changeGold",
		name: "changeGold",
		component: changeGold,
		meta: {
			flag: true,
			type: 2,
			child: 3
		}
	},
	{
		path: "/userLog",
		name: "userLog",
		component: userLog,
		meta: {
			flag: true,
			type: 2,
			child: 4
		}
	},
	{
		path: "/userManager",
		name: "userManager",
		component: userManager,
		meta: {
			flag: true,
			type: 2,
			child: 1
		}
	},
	{
		path: "/userReg",
		name: "userReg",
		component: userReg,
		meta: {
			flag: true,
			type: 2,
			child: 2
		}
	}

]