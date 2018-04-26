<template>
    <div class="good_list">
        <div class="sort_buy clearfix">
            <div class="pull_right">
                <span>排序：</span>
                <span>默认</span>
                <span @click="sortGoods">降序</span>
            </div>
        </div>
        <div class="goods clearfix">
            <div class="price pull_left">
                <ul>
                    <li class="price_item" @click="setPriceLevel(0)">全部</li>
                    <li class="price_item" @click="setPriceLevel(1)">0~100</li>
                    <li class="price_item" @click="setPriceLevel(2)">100~500</li>
                    <li class="price_item" @click="setPriceLevel(3)">500~1000</li>
                    <li class="price_item" @click="setPriceLevel(4)">1000~5000</li>
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
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="more" v-show="moreBoolean">
                    加载中……^
                </div>
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
                goodList: [],
                sort: 1,
                page: 1,
                perPage: 3,
                busy: true,
                moreBoolean: true,
                level:0
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            // 加载首页数据
            getGoodsList(flag) {
                // debugger;
                let param = {
                    page: this.page,
                    perPage: this.perPage,
                    sort: this.sort,
                    level:this.level
                };
                this.$axios.get('/goods', {
                    params: param
                }).then((res) => {
                         debugger;
                    if (res.data.status == ERR_OK) {  
                     
                        if (flag) {
                            //滚动到底部加载数据
                            this.goodList = this.goodList.concat(res.data.result.list);
                            //加载完数据，启动滚动监听
                            this.busy = false;
                        } else {
                            // 第一次进入页面
                            this.goodList = res.data.result.list;
                            this.busy = false;
                        }

                             //  如果请求不到数据了
                        if(res.data.result.list.length ===0){
                            // 隐藏加载提示
                          this.moreBoolean = false;
                         //   禁用滚动监听
                          this.busy = true;
                        }
                    }
                })
            },
            // 降序
            sortGoods() {
                this.sort = -1;
                this.page = 1;
                //   console.log(this.sort)
                this.getGoodsList();
            },
            loadMore() {
                console.log(1);
                // 停止滚动监听
                this.busy = true;
                
                //官方示例中延迟了1秒，防止滚动条滚动时的频繁请求数据
                setTimeout(() => {
                    this.page++;
                    //     // 这里请求接口去拿数据，实际应该是调用一个请求数据的方法
                    this.getGoodsList(true);
                }, 1000);
            },
            setPriceLevel(level){
            //    console.log(level);
               this.level = level;
               this.getGoodsList();
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
        text-align: left;
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
    .item_des p {
        margin: 10px 10px;
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
    .more {
        text-align: center;
        line-height: 60px;
        background-color: #eee;
        margin-bottom: 60px;
    }
</style>
