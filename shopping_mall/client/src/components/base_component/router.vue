<template>
    <div class="router_wrap">
        <div class="router">
            <span class="home">首页</span>/
            <span class="my_cart">我的购物车</span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {}
        },
        created() {},
        methods: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .router_wrap {
        height: 50px;
        background-color: #eee;
        color: #999;
        line-height: 50px;
    }
    .router {
        width: 1200px;
        margin: 0 auto;
    }
    .router span{
        cursor:pointer;
    }
</style>
