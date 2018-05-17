<template>
    <div class="address">
        <mall-header></mall-header>
        <router>
            <span class="secondary_routing" slot='secondary_routing'>地址列表
                        </span>
        </router>
        <process>
            <div slot='process_list'>
                <li class="process_item active">地址列表</li>
                <li class="process_item">订单确认</li>
                <li class="process_item">支付</li>
                <li class="process_item">查看订单</li>
            </div>
        </process>
        <div class="address_list clearfix">
            <div class="address_item" v-for='(item,index) in addressListFilter' :class="{'active':item.isDefault==true}" @click='setDefaultAddress(index,item)'>
                <div class="address_item_wrap">
                    <p class="userName">{{item.userName}}</p>
                    <p class="streetName">{{item.streetName}}</p>
                    <p class="postCode">{{item.postCode}}</p>
                    <p class="tel">{{item.tel}}</p>
                </div>
            </div>
            <div class="addAddress address_item">
                <div class="address_item_wrap">
                    <span>添加地址</span>
                </div>
            </div>
            <div class="more" @click='showMoreAddress' :class="{'open':limit>3}">
                more
                <span class="up">&and;</span>
                <span class="down">&or;</span>
            </div>
        </div>
        <div class="submit_order clearfix">
            <span class="submit_btn" @click='submitOrder'> 提交订单</span>
        </div>
        <foot></foot>
    </div>
</template>

<script>
    import MallHeader from "./base_component/mallheader";
    import Router from "./base_component/router";
    import Process from './base_component/process.vue';
    import Foot from "./base_component/footer";
    import {
        mapGetters
    } from "vuex";
    import {
        ERR_OK
    } from "../api/api.config";
    export default {
        computed: {
            addressListFilter() {
                // 计算出默认显示的地址数(slice不会改变原数组)
                return this.addressList.slice(0, this.limit);
            },
            ...mapGetters(["showModel"])
        },
        data() {
            return {
                limit: 3, //默认显示三条地址
                addressList: []
            };
        },
        mounted() {
            this.getAddressList();
        },
        methods: {
            setDefaultAddress(index, item) {
                let self = this;
                this.$axios
                    .post("/users/setDefaultAddress", {
                        params: {
                            addressId: item.addressId
                        }
                    })
                    .then(function(res) {
                        // 数据库当中的默认地址设置成功
                        if (res.data.status == ERR_OK) {
                            // 清空页面显示的默认地址
                            self.addressList.forEach(function(item) {
                                item.isDefault = false;
                            })
                            // 将用户选中的地址设置为默认地址
                            item.isDefault = true;
                        }
                    });
            },
            getAddressList() {
                this.$axios.get("/users/address").then(res => {
                    if (res.data.status == ERR_OK) {
                        // console.log(res);
                        this.addressList = res.data.result;
                    }
                });
            },
            showMoreAddress() {
                // 隐藏展开地址
                // limit 改变，会改变计算属性 addressListFilter
                if (this.limit == 3) {
                    this.limit = this.addressList.length;
                } else {
                    this.limit = 3;
                }
            },
            submitOrder() {
                this.$router.push({
                    path: "/orderConfirm"
                });
            }
        },
        components: {
            MallHeader,
            Router,
            Process,
            Foot
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .secondary_routing {
        color: #ca141d;
    }
    .address_list {
        width: 1200px;
        margin: 20px auto;
    }
    .address_item {
        float: left;
        width: 300px;
        height: 161px;
    }
    .address_item_wrap {
        width: 250px;
        height: 141px;
        border: 1px solid #eee;
        box-sizing: border-box;
        margin: 10px auto;
        padding: 20px;
        background-size: 100% 100%;
        background-image: url("../assets/images/address_bg.png");
    }
    .active .address_item_wrap {
        background-image: url("../assets/images/address_bg_active.png");
    }
    .address_item_wrap p {
        margin: 5px 10px;
        width: 240px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .addAddress .address_item_wrap {
        font-size: 20px;
        text-align: center;
        line-height: 141px;
        cursor: pointer;
    }
    .more {
        width: 100%;
        text-align: center;
        color: #ca141d;
        cursor: pointer;
        float: left;
        font-size: 20px;
    }
    .more .up {
        display: none;
    }
    .open .up {
        display: inline;
    }
    .open .down {
        display: none;
    }
    .submit_order {
        width: 1200px;
        margin: 0 auto;
        padding-bottom: 20px;
    }
    .submit_btn {
        display: inline-block;
        width: 300px;
        padding: 10px 0;
        box-sizing: border-box;
        background-color: #ca141d;
        color: #fff;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
        float: right;
    }
</style>
