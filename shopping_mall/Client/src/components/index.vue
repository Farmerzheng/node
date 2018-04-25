<template>
  <div class="box">
    <mall-header></mall-header>
    <router></router>
    <good-list></good-list>
    <foot></foot>
  </div>
</template>

<script>
  import MallHeader from './base_component/mallheader' 
  import Router from './base_component/router'
  import GoodList from './goodlist'
  import Foot from './base_component/footer.vue'
  
  export default {
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
      GoodList,
      Foot
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
