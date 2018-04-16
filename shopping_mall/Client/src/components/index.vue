<template>
  <div class="box">
    <mall-header></mall-header>
    <router></router>
    <good-list></good-list>
  </div>
</template>

<script>
  import MallHeader from './base_component/mall_header' 
  import Router from './base_component/router'
  import GoodList from './good_list'
  
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    },
    created() {
    },
    methods: {
    
    },
    components: {
      MallHeader,
      Router,
      GoodList
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
</style>
