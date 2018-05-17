<template>
  <div class="page">
    <mall-header></mall-header>
    <router>
      <span class="secondary_routing" slot='secondary_routing'>地址列表
                              </span>
    </router>
    <process>
      <div slot='process_list'>
        <li class="process_item">地址列表</li>
        <li class="process_item active">订单确认</li>
        <li class="process_item">支付</li>
        <li class="process_item">查看订单</li>
      </div>
    </process>
    <div class="order_list">
      <ul class="order_wrap">
        <li class="clearfix title">
          <div class="good_des good_content">订单内容</div>
          <div class="good_des good_price">单价</div>
          <div class="good_des good_num">数量</div>
          <div class="good_des good_total">总价</div>
        </li>
        <li class="order_item clearfix" v-for='item in selectedCartList'>
          <div class="good_des good_content">
            <a href="">
              <img class="good_image" v-bind:src='"/images/"+item.productImage' />
              <span class="good_name">{{item.productName}}</span>
            </a>
          </div>
          <div class="good_des good_price">{{item.salePrice|currency('￥')}}</div>
          <div class="good_des good_num">{{item.productNum}}</div>
          <div class="good_des good_total">{{item.productNum*item.salePrice|currency('￥')}}</div>
        </li>
      </ul>
      <div class="total_price clearfix">
        <span class="total_wrap">
              <span  class="des">总价</span>
        <span class="num">
              {{totalPrice|currency('￥')}}
           </span>
        </span>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script type="text/ecmascript-6">
  import MallHeader from "./base_component/mallheader";
  import Router from "./base_component/router";
  import Process from './base_component/process.vue';
  import Foot from "./base_component/footer";
  export default {
    data() {
      return {
        cartList: []
      }
    },
    computed: {
      selectedCartList() {
        let arr = [];
        this.cartList.forEach(function(item) {
          if (item.checked == '1') {
            arr.push(item)
          }
        })
        return arr;
      },
      totalPrice() {
        let total = 0;
        this.selectedCartList.forEach(function(item) {
          total += item.productNum * item.salePrice;
        })
        return total
      }
    },
    mounted() {
      // 获得购物车中的商品数据
      this.getCartList();
    },
    methods: {
      getCartList() {
        this.$axios.get("/users/cart").then(res => {
          // console.log(res.data)
          this.cartList = res.data.result;
        });
      }
    },
    components: {
      MallHeader,
      Router,
      Process,
      Foot
    }
  }
</script>

<style scoped>
  .secondary_routing {
    color: #ca141d;
  }
  .order_list {
    width: 1200px;
    margin: 0 auto;
    font-size: 18px;
  }
  .order_item {
    border-bottom: 1px solid #aaa;
    text-align: center;
    line-height: 150px;
    padding: 10px 0;
  }
  .title .good_des {
    line-height: 40px;
    background: #eee;
    color: #000;
  }
  .good_content {
    width: 40%;
  }
  .order_item .good_content a {
    float: left;
    margin-left: 1px;
  }
  .good_price {
    width: 20%;
  }
  .good_num {
    width: 20%;
  }
  .good_total {
    width: 20%;
    color: #ca141d;
    font-weight: bold;
  }
  .good_des {
    float: left;
  }
  .good_image {
    width: 150px;
    height: 150px;
    vertical-align: middle;
    border: 1px solid #eee;
  }
  .good_name {
    vertical-align: middle;
  }
  .total_price .total_wrap {
    float: right;
    width: 200px;  
    padding: 10px 0;
  }
  .total_price span {
    line-height: 50px;  
    font-weight: bold;
  
  }
  .total_price .num{
      color: #ca141d;
  }
</style>
