<template>
    <el-form :label-position="labelPosition" label-width="80px" v-show="showLogin">
        <div class="close">
            <span class="close_btn" @click='closeLogin'>X</span>
        </div>
        <div class="title">
            <h1>华为商城</h1>
            <p>因为专注&nbsp;&nbsp;&nbsp;所以专业</p>
        </div>
        <p class="error_tip" v-show="errorTip">用户名或者密码不能为空</p>
        <p class="error_tip" v-show="userErrorTip">用户名不存在</p>
        <el-form-item label="用户名">
            <el-input v-model="userInputName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="password"></el-input>
        </el-form-item>
        <div class="submit">
            <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
    </el-form>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex';
    import axios from 'axios'
    export default {
        computed: {
            ...mapGetters([
                'showLogin',
                'username',
                'showModel'
            ])
        },
        data() {
            return {
                labelPosition: 'right',
                userInputName: '',
                password: '',
                errorTip: false,
                userErrorTip: false
            };
        },
        methods: {
            closeLogin() {
                // 如果登录成功隐藏输入框
                this.showLoginBox(false);
            },
            submitForm() {
                // 如果用户没有输入用户名或者密码，给出提示
                if (!this.userInputName || !this.password) {
                    this.errorTip = true;
                    return;
                }
                // 发送网络请求，验证用户名和密码
                this.$axios.post('/users/login', {
                    params: {
                        username: this.userInputName,
                        password: this.password
                    }
                }).then((res) => {
                    console.log(res);
                    if (res.data.status == '1') {
                        // 用户名不存在
                        this.userErrorTip = true;
                    } else {
                        this.userErrorTip = false;
                        // 改变state中user的状态 
                        this.setUserName(res.data.result.userName)
                        // 如果登录成功隐藏输入框
                        this.showLoginBox(false);
                        // 将登录状态改为已登录
                        this.setLoginState(true);

                        // 提示框
                        this.showModel('登录成功');
                    }
                })
            },
            ...mapMutations({
                showLoginBox: 'SET_SHOWLOGIN',
                setLoginState: 'SET_LOGINSTATE',
                setUserName: 'SET_USERNAME'
            })
        }
    }
</script>
<style>
    .el-form {
        width: 400px;
        background-color: #eee;
        border: 1px solid #ddd;
        padding: 30px;
        border-radius: 10px;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -200px;
    }
    .title {
        text-align: center;
        color: #409EFF;
        margin: 20px 0;
    }
    .title h1 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    .title p {
        font-size: 20px;
    }
    .submit {
        text-align: center;
    }
    .error_tip {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: red;
        padding-left: 60px;
    }
    .close{
        height:30px;
    }
    .close .close_btn{
        float:right;
        font-size:20px;
        color:#409EFF;
        cursor: pointer;
    }
</style>