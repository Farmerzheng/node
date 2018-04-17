<template>
    <div class="good_list">
        <div class="sort_buy clearfix">
            <div class="pull_right">
                <span>排序：</span>
                <span>默认</span>
                <span>价格升序</span>
            </div>
        </div>
        <div class="goods">
            <div class="price">
                <span>价格</span>
            </div>
            <div class="list">
                <ul class="list_wrap">
                    <li class="good_item" v-for="item in good_list">
                        <a href="">
                            <image class="product_image" :src=item.productImage />
                            <h3 class="product_name">{{item.productName}}</h3>
                            <p class="product_price">{{item.salePrice}}</p>
                            <p class="add_cart">加入购物车</p>
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
        name: 'HelloWorld',
        data() {
            return {
                good_list: null
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                axios.get('/goods').then((res) => {
                    if (res.data.status == ERR_OK) {
                        this.good_list = res.data.result.list;  
                        console.log(this.good_list)                   
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
        line-height: 50px;
    }
    .sort_buy span {
        cursor: pointer;
    }
</style>
