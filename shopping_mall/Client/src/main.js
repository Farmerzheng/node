// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// 移入全局css样式
import './common/css/common.css'
import './common/css/load.css'

// 导入全局过滤器函数
import { currency } from './common/js/currency'
// 注册全局过滤器函数
Vue.filter('currency', currency)


// 引入element-ui
import {
    Button,
    Input,
    Col,
    Row,
    MessageBox,
    Message,
    Form,
    FormItem
} from 'element-ui';

//vuex
import store from './store/index';



Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

Vue.use(Button)
Vue.use(Input)
Vue.use(Col)
Vue.use(Row)
Vue.use(Form)
Vue.use(FormItem)


Vue.config.productionTip = false
Vue.prototype.$axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})