<template>
  <div class="header">
    <div class="navbar clearfix">
      <h1 class="logo pull_left" @click='toHome'>
        <img src="../../assets/images/logo.png" alt="华为商城">
      </h1>
      <ul class="user pull_right">
        <li class="username" v-show="loginState">{{username}}</li>
        <li>
          <span v-show="loginState" @click='logout'>退出</span>
          <span class="login" @click="show" v-show="!loginState">登录</span>
        </li>
        <li class="cart" @click='skipToCartList'>购物车</li>
      </ul>
    </div>
    <login :show='showLogin'></login>
  </div>
</template>

<script>
  import Login from './login.vue'
  import axios from 'axios'
  import {
    ERR_OK
  } from '../../api/api.config'
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'showLogin',
        'loginState',
        'username',
        'showModel'
      ])
    },
    mounted() {
      // 校验用户是否登录
      this.checkLogin();
    },
    methods: {
      toHome() {
        // 返回首页
      },
      // 检查用户是否登录
      checkLogin() {
        this.$axios.post('/users/checkLogin')
          .then((res) => {
            if (res.data.status == ERR_OK) {
              // 用户已经登录
              this.setLoginState(true);
              this.setUserName(res.data.result.userName)
            } else {
              // 用户未登录
            }
          })
      },
      show() {
        this.showBox(true);
      },
      logout() {
        // 发送网络请求，退出登录
        this.$axios.post('/users/logout').then((res) => {
          console.log(res);
          if (res.data.status == ERR_OK) {
            // 退出成功,改变登录状态
            this.setLoginState(false);
            // 消息提示
            this.showModel('退出成功');
          }
        })
      },
      skipToCartList() {
        // 判断用户是否登录
        console.log(this.loginState)
        if (this.loginState == true) {
          this.$router.push({
            path: '/cart'
          })
        } else {
            this.showModel('用户未登录');
        }
      },
      ...mapMutations({
        showBox: 'SET_SHOWLOGIN',
        setLoginState: 'SET_LOGINSTATE',
        setUserName: 'SET_USERNAME'
      })
    },
    components: {
      Login
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
  }
  .logo {
    height: 80px;
  }
  .logo img {
    margin-top: 15px;
  }
  .user {
    line-height: 80px;
  }
  .user li {
    cursor: pointer;
    display: inline-block;
    margin: 0 10px;
  }
</style>
