import { showMessage, showMessageBox } from '../common/js/showMessage'

const state = {
    showLogin: false,
    loginState: false,
    username: '',
    showModel: showMessage, // 展示消息提示框的全局方法
    showMessageBox: showMessageBox
};

export default state;