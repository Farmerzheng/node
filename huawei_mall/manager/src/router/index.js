import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import { admins } from '@/router/admin'
import { advs } from '@/router/adv'
import { items } from '@/router/item'
import { users } from '@/router/user'

Vue.use(Router)

let routers = [{
	path: '/',
	name: 'login',
	component: login,
	alias: "/login"
}]
routers = routers.concat(admins, advs, items, users);
export default new Router({
	routes: routers
})