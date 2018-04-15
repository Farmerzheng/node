<template>
  <div class="header">
    <div class="navbar clearfix">
      <h1 class="logo pull_left">
        <img src="../assets/logo.png" alt="华为商城">
      </h1>
      <ul class="user_wrap pull_right">
        <li class="username">王争</li>
        <li class="logout">注销</li>
        <li class="login">登录</li>
        <li class="cart">购物车</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    url
  } from '../api/api.config'
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    created() {
      this.getGoodsList();
    },
    methods: {
      getGoodsList() {
        axios.get('/goods').then((res) => {
          console.log(res);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .navbar {
    width: 1200px;
    margin: 0 auto;
  }
</style>
