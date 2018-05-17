// mutations：提交修改。也就是set、get中的set
// 第一个参数默认是state
// 外部调用方式：store.commit('SET_AGE', 18)

import * as types from './mutation_types.js'

export default {
    [types.SET_SHOWLOGIN](state, boolean) {
        state.showLogin = boolean;
    },
    [types.SET_LOGINSTATE](state, boolean) {
        state.loginState = boolean;
    },
    [types.SET_USERNAME](state, name) {
        state.username = name;
    }
}