import vue from "vue"
import vuex from "vuex"
import admin from "@/vuex/list/admin"
import user from "@/vuex/list/user"
import adv from "@/vuex/list/adv"
import item from "@/vuex/list/item"

vue.use(vuex);

export default new vuex.Store({
	modules: {
		admin,
		user,
		adv,
		item
	}
});