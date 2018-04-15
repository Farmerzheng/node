import addItem from "@/components/item/addItem"
import itemManager from "@/components/item/itemManager"
import itemLog from "@/components/item/itemLog"

export let items = [{
		path: "/itemManager",
		name: "itemManager",
		component: itemManager,
		meta: {
			flag: true,
			type: 4,
			child: 1
		}
	},
	{
		path: "/addItem",
		name: "addItem",
		component: addItem,
		meta: {
			flag: true,
			type: 4,
			child: 2
		}
	},
	{
		path: "/itemLog",
		name: "itemLog",
		component: itemLog,
		meta: {
			flag: true,
			type: 4,
			child: 3
		}
	}
]