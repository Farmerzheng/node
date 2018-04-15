import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/goods',
        name: 'HelloWorld',
        component: Index
    }]
})