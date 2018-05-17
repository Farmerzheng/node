<template>
    <div class="good_list">
        <div class="sort_buy clearfix">
            <div class="pull_right">
                <span>排序：</span>
                <span class="sort" @click='defaultDoods'>升序</span>
                <span class="sort" @click="sortGoods">降序</span>
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
                        <a href="javascript:void(0)">
                            <div class="item_img">
                                <img class="product_image" v-bind:src='"/images/"+item.productImage' />
                            </div>
                            <div class="item_des">
                                <p class="product_name">{{item.productName}}</p>
                                <p class="product_price">{{item.salePrice|currency('￥')}}</p>
                                <p class="add_cart" @click="addToCart(item.productId)">加入购物车</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="load-container load1" v-show="moreBoolean">
                    <div class="loader">Loading...</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import scroll_bottom from '../common/js/scroll_bottom'
    import {
        ERR_OK
    } from '../api/api.config'
    import {
        mapGetters,
        mapMutations
    } from 'vuex';
    export default {
        data() {
            return {
                goodList: [],
                sort: 1,
                page: 1,
                perPage: 6,
                moreBoolean: false,
                level: 0
            }
        },
        computed: {
            ...mapGetters([
                'showModel'
            ])
        },
        mounted() {
            // 获取商品列表
            this.getGoodsList();
            // 监听滚动条是否滚动到底部
            scroll_bottom.test(this.scroll_to_bottom);
        },
        methods: {
            // 加载首页数据
            getGoodsList(flag) {
                // debugger;
                let param = {
                    page: this.page,
                    perPage: this.perPage,
                    sort: this.sort,
                    level: this.level
                };
                this.$axios.get('/goods', {
                    params: param
                }).then((res) => {
                    if (res.data.status == ERR_OK) {
                        // 没有数据，什么事情都不做
                        if (res.data.result.list.length === 0) {
                            // 隐藏加载提示
                            this.moreBoolean = false;
                            return;
                        };
                        setTimeout(() => {
                            this.moreBoolean = false;
                            this.goodList = this.goodList.concat(res.data.result.list);
                        }, 1000);
                        // 滚动到底部加载数据
                    }
                })
            },
            defaultDoods() {
                //默认排序
                this.sort = 1;
                this.page = 1;
                // 清空列表
                this.goodList = [];
                this.getGoodsList();
            },
            // 降序
            sortGoods() {
                this.sort = -1;
                this.page = 1;
                // 清空列表
                this.goodList = [];
                this.getGoodsList();
            },
            scroll_to_bottom() {
                // console.log('滚动到底部了');
                this.page++;
                this.moreBoolean = true;
                this.getGoodsList();
            },
            setPriceLevel(level) {
                console.log(level);
                // 如果点击不同的价格区间，先清空数组
                if (this.level != level) {
                    // 从第一页开始请求
                    this.page = 1;
                    // 置空数组
                    this.goodList = [];
                    // 对level重新赋值
                    this.level = level;
                }
                // 请求数据
                this.getGoodsList();
            },
            addToCart(id) {
                this.$axios.post('/goods/addCart', {
                    params: {
                        userId: '222',
                        productId: id
                    }
                }).then((res) => {
                    if (res.data.status == '10001') {
                        // 当前未登录
                        // console.log('当前未登录')
                        this.showModel('当前未登录', 'warning')
                    } else {
                        // 加入购物车成功
                        // console.log('加入购物车成功')
                        this.showModel('加入购物车成功')
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
        text-align: left;
    }
    .list_wrap {
        width: 100%;
        margin-bottom: 50px;
    }
    .good_item {
        display: inline-block;
        margin: 10px 10px;
        border: 1px solid #eee;
        width: 300px;
        height: 428px;
    }
    .good_item:hover {
        background-color: #e73b3b;
    }
    .good_item a {
        display: block;
        width: 296px;
        height: 424px;
        margin: 2px 2px;
        background-color: #fff;
    }
    .pull_right .sort {
        padding: 5px 10px;
    }
    .pull_right .sort:hover {
        background-color: #409EFF;
        color: #fff;
    }
    .product_image {
        width: 300px;
    }
    .item_img {
        width: 100%;
    }
    .item_img img {
        width: 100%;
    }
    .item_des {
        width: 100%;
        text-align: left;
    }
    .item_des .product_name {
        padding: 10px 0 10px 30px;
        font-size: 20px;
        font-weight: bold;
    }
    .add_cart {
        width: 200px;
        height: 30px;
        line-height: 30px;
        border: 1px solid #d1434a;
        color: #d1434a;
        text-align: center;
        margin: 10px auto;
    }
    .add_cart:hover {
        color: #fff;
        background-color: #d1434a
    }
    .more {
        text-align: center;
        line-height: 60px;
        background-color: #eee;
        margin-bottom: 60px;
    }
    .product_price {
        padding-left: 27px;
        font-size: 19px;
        color: #CA141D;
    }
</style>
