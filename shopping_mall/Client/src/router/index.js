import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import Cart from '../components/cart'
import Address from '../components/address'
import OrderConfirm from '../components/orderConfirm'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/address',
            name: 'address',
            component: Address
        },
        {
            path: '/orderConfirm',
            name: 'orderconfirm',
            component: OrderConfirm
        }
    ]
})