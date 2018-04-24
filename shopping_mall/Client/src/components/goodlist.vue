<template>
    <div class="good_list">
        <div class="sort_buy clearfix">
            <div class="pull_right">
                <span>排序：</span>
                <span>默认</span>
                <span>价格升序</span>
            </div>
        </div>
        <div class="goods clearfix">
            <div class="price pull_left">
                <ul>
                    <li class="price_item">全部</li>
                    <li class="price_item">0~100</li>
                    <li class="price_item">100~500</li>
                    <li class="price_item">500~1000</li>
                    <li class="price_item">1000~2000</li>
                </ul>
            </div>
            <div class="list pull_right">
                <ul class="list_wrap">
                    <li class="good_item" v-for="item in goodList">
                        <a href="">
                            <div class="item_img">
                                <img class="product_image" v-bind:src='"/images/"+item.productImage' />
                            </div>
                            <div class="item_des">
                                <p class="product_name">{{item.productName}}</p>
                                <p class="product_price">￥{{item.salePrice}}</p>
                                <p class="add_cart">加入购物车</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {
        ERR_OK
    } from '../api/api.config'
    export default {
        data() {
            return {
                goodList: null
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                let data = {page:2,perPage:6,sort:1};
                this.$axios.get('/goods',{params:data}).then((res) => {
                    if (res.data.status == ERR_OK) {
                        this.goodList = res.data.result.list;
                        console.log(this.goodList)
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .good_list {
        background-color: #f5f7fc;
    }
    .sort_buy {
        width: 1200px;
        height: 50px;
        margin: 0 auto;
        line-height: 50px;
    }
    .goods {
        width: 1200px;
        margin: 0 auto;
    }
    .sort_buy span {
        cursor: pointer;
    }
    .price {
        width: 200px;
    }
    .price_item {
        padding: 20px 20px;
        cursor: pointer;
        transition: .5s;
        transform: translate(0, 0);
    }
    .price_item:hover {
        transform: translate(10px, 0);
        color: orange;
        border-left: 2px solid orange;
    }
    .list {
        width: 1000px;
        text-align: center;
    }
    .list_wrap {
        width: 100%;
    }
    .good_item {
        background-color: #fff;
        display: inline-block;
        margin: 10px 10px;
        border: 1px solid #eee;
    }
    .product_image {
        width: 300px;
    }
    .item_des {
        width: 100%;
        text-align: left;
    }
    .item_des p{
        margin:10px 10px;
    }
    .add_cart {
        width: 200px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        border: 1px solid #d1434a;
        color: #d1434a;
        text-align: center;
    }
</style>
