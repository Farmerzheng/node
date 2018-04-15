// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/vuex'
import filter from '@/lib/filter'

Vue.config.productionTip = false

router.beforeEach(function(to, from, next) {
	if(to.meta.flag && !sessionStorage.adminId) {
		next({
			path: "/",
			query: {
				backpage: to.fullPath
			}
		});
	} else {
		next();
	}
});

axios.defaults.baseURL = "http://127.0.0.1:3333";

axios.interceptors.request.use(function(config) {
	if(sessionStorage.adminToken) {
		config.headers = {
			Authorization: sessionStorage.adminToken
		}
	}
	return config;
});

axios.interceptors.response.use(function(res) {
	if(res.data.token) {
		console.log(res.data.token);
	}
	return res;
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>',
	store
})