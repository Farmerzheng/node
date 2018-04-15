<template>
	<div style="background-color: #EAEAEA;">
		<div style="width: 100%;height: 2.5rem;background-color: white;border-bottom: solid 1px #EAEAEA;">
			<p style="line-height: 2.5rem;padding-left: 1rem;font-size: 0.75rem;">购物车</p>
		</div>
		<div style="text-align: center;padding-top: 2rem;padding-bottom: 1.5rem;" v-show="$store.state.item.cartList==''">
			<img style="vertical-align: middle;width: 1.5rem;height: 1.5rem;" src="http://127.0.0.1:3333/截图 2018-01-23 16.30.23.png" /><span style="color: #666666;font-size: 0.75rem;"> 购物车中还没有商品，赶紧选购吧！</span>
			<br />
			<router-link style="margin-top: 0.4rem;display: inline-block;padding-bottom: 0.1rem;padding-top: 0.1rem;border-radius: 0.7rem;padding-right: 0.8rem;padding-left: 0.8rem;color: #CA151E;font-size: 0.75rem;border:solid 1px #CA151E;text-decoration: none;" to="/">
				去逛逛
			</router-link>
		</div>
		<div class="clearfix" style="font-size: 0.75rem;width: 100%;height: 5rem;background-color: white;border-bottom: solid 1px #EAEAEA;" v-for="item in $store.state.item.cartList">
			<input style="float: left;margin-left: 1rem;margin-top: 2rem;margin-right: 5px;" type="checkbox" :checked="item.isCheck==0?false:true" @click.prevent="itemcheck({itemid:item._id,links})" />
			<img style="margin-left: 1rem;float: left;margin-top: 0.5rem;height: 80%;width: 20%;" :src="`http://127.0.0.1:3333/${item.itemPic}`" />
			<p style="display: inline-block;text-indent: 1rem;margin-top: 0.35rem;">{{item.itemName}}</p>
			<p><input style="width: 1.38rem;margin-top: 0.45rem;margin-left: 1rem;font-size: 0.8rem;" type="button" name="" id="" value="-" @click.prevent="addandless({type:0,itemid:item._id,links})" /><span style="display: inline-block;text-align: center;width: 1.5rem;font-size: 0.8rem;">{{item.itemNum}}</span><input style="width: 1.38rem;margin-top: 0.45rem;font-size: 0.8rem;" type="button" name="" id="" value="+" @click.prevent="addandless({type:1,itemid:item._id,links})" /></p>
			<span style="display: inline-block;text-indent: 1rem;margin-top: 0.45rem;color: #CA151E;">{{item.itemPrice|currency}}</span>
			<span style="float: right;display: inline-block;margin-right: 1rem;text-indent: 1rem;margin-top: 0.55rem;font-size: 0.6rem;">x{{item.itemNum}}</span>
		</div>
		<p v-show="$store.state.item.cartList==''" style="background-color: white;font-size: 0.7rem;padding-left: 1rem;padding-top: 0.5rem;padding-bottom: 0.5rem;">热销推荐</p>
		<div v-show="$store.state.item.cartList==''" style="margin-top: 2px;display: block;background-color: white;margin-bottom: 5.5rem;" class="widthlists clearfix">
			<div class="listleft" style="float: left;background-color: white;border-right: solid 1px #EAEAEA;border-bottom: solid 1px #EAEAEA;" v-for="item in $store.state.item.phoneitemList">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div v-show="$store.state.item.cartList!=''" style="width: 100%;height: 2.5rem;background-color: white;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;position: fixed;bottom: 4rem;">
			<p style="line-height: 2.5rem;padding-left: 1rem;font-size: 0.75rem;"><input type="checkbox" style="vertical-align: middle;" v-model="$store.getters.itemall.allcheck" @click="allchecks({type:$store.getters.itemall.allcheck?1:0,links})" /> <span style="font-size: 0.65rem;">全选</span>
				<a style="float: right;width: 30%;text-align: center;background-color: #CA151E;color: white;" @click.prevent="subcart(links)">结算({{$store.getters.itemall.allsum}})</a><span style="float: right;padding-right: 1rem;font-size: 0.65rem;">总计:<span style="font-size:0.75rem;color: #CA151E;">{{$store.getters.itemall.allprice|currency}}</span></span>
			</p>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "gouwuche",
		methods: {
			...mapActions(["getcart", "addandless", "getitemlist", "itemcheck",
				"allchecks", "subcart"
			]),
			...{
				links() {
					this.getcart();
				}
			}
		},
		mounted() {
			this.getcart();
			if(this.$store.state.item.cartList == '') {
				this.getitemlist({
					type: 4,
					num: 3
				});
			}

		}
	}
</script>

<style scoped>
	input {
		cursor: pointer;
		background-color: transparent;
		border: solid 1px #EAEAEA;
	}
</style>