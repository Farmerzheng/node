// 也就是set、get中的get，
// 有一个参数state。
// 外部调用方式：store.getters.name()

export const showLogin = (state) => {
    return state.showLogin
}
export const loginState = (state) => {
    return state.loginState
}
export const username = (state) => {
    return state.username
}
export const showModel = (state) => {
    return state.showModel
}

export const showMessageBox = (state) => {
    return state.showMessageBox
}