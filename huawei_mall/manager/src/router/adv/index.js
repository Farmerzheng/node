import addAdv from "@/components/adv/addAdv"
import advLog from "@/components/adv/advLog"
import advManager from "@/components/adv/advManager"

export let advs = [{
		path: "/addAdv",
		name: "addAdv",
		component: addAdv,
		meta: {
			flag: true,
			type: 3,
			child: 2
		}
	}, {
		path: "/advLog",
		name: "advLog",
		component: advLog,
		meta: {
			flag: true,
			type: 3,
			child: 3
		}
	},
	{
		path: "/advManager",
		name: "advManager",
		component: advManager,
		meta: {
			flag: true,
			type: 3,
			child: 1
		}
	}

]