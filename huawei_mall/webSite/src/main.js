// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/vuex'
import filter from '@/lib/filter'
import Swiper from "./assets/js/swiper.min.js";
import $ from 'jquery'

Vue.config.productionTip = false

axios.defaults.baseURL = "http://127.0.0.1:3333";

axios.interceptors.request.use(function(config) {
	if(sessionStorage.token) {
		config.headers = {
			Authorization: sessionStorage.token
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
  components: { App },
  template: '<App/>',
  store
})
