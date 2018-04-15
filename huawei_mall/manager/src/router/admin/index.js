import addAdmin from "@/components/admin/addAdmin"
import adminLog from "@/components/admin/adminLog"
import adminManager from "@/components/admin/adminManager"
import changePwd from "@/components/admin/changePwd"

export let admins = [{
		path: '/addAdmin',
		name: 'addAdmin',
		component: addAdmin,
		meta: {
			flag: true,
			type: 1,
			child: 2
		}
	},
	{
		path: '/adminLog',
		name: 'adminLog',
		component: adminLog,
		meta: {
			flag: true,
			type: 1,
			child: 3
		}
	},
	{
		path: '/adminManager',
		name: 'adminManager',
		component: adminManager,
		meta: {
			flag: true,
			type: 1,
			child: 1
		}
	},
	{
		path: '/changePwd',
		name: 'changePwd',
		component: changePwd,
		meta: {
			flag: true,
			type: 1,
			child: 4
		}
	}

]