import Vue from 'vue'
import Router from 'vue-router'
import Header from '../components/header.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/goods',
        name: 'HelloWorld',
        component: Header
    }]
})