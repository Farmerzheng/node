import vue from "vue"
import vuex from "vuex"
import item from "@/vuex/list/item"
import user from "@/vuex/list/user"
import adv from "@/vuex/list/adv"

vue.use(vuex);

export default new vuex.Store({
	modules: {
		item,
		user,
		adv
	}
});