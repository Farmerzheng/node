import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import fenlei from '@/components/fenlei'
import gouwuche from '@/components/gouwuche'
import wode from '@/components/wode'
import iteminfo from '@/components/iteminfo'
import login from '@/components/login'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index,
			alias: "/index"
		}, {
			path: '/fenlei',
			name: 'fenlei',
			component: fenlei
		}, {
			path: '/gouwuche',
			name: 'gouwuche',
			component: gouwuche,
		}, {
			path: '/wode',
			name: 'wode',
			component: wode,
		},
		{
			path: '/iteminfo',
			name: 'iteminfo',
			component: iteminfo,
			meta: {
				flag: -1
			}
		},
		{
			path: '/login',
			name: 'login',
			component: login,
			meta: {
				flag: -1
			}
		}, {
			path: '/register',
			name: 'register',
			component: register,
			meta: {
				flag: -1
			}
		}

	]
})