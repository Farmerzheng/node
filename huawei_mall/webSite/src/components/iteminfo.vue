<template>
	<div style="overflow-x: hidden;overflow-y:scroll;width: 100%;height: 29rem;">
		<div style="padding-top: 0.35rem;">
			<router-link style="text-decoration: none;color: black;" to="/fenlei"><img style="vertical-align: middle;width: 1.5rem;height: 1.5rem;" src="http://127.0.0.1:3333/截图 2018-01-23 19.09.33.png" /></router-link><span style="padding-left: 32%;color: #ca141d;font-weight: 900;"><span style="padding-top: 0.35rem;padding-bottom: 0.35rem;border-bottom: solid 3px #ca141d;padding-left: 1rem;padding-right: 1rem;"> 商品 </span></span>
		</div>
		<div>
			<img style="width:100%;height: 16rem;padding-top: 1rem;" :src="`http://127.0.0.1:3333/${$store.state.item.singleitemList.itemPic}`" />
			<p style="margin-left: 0.8rem;font-weight: 900;padding-top: 0.25rem;">{{$store.state.item.singleitemList.itemName}}</p>
			<p style="margin-left: 0.8rem;color: #E01D20;padding-top: 0.25rem;">{{$store.state.item.singleitemList.itemPrice|currency}}</p>
			<p style="margin-left: 0.8rem;color: #E01D20;padding-top: 0.25rem;font-size: 0.7rem;">【{{$store.state.item.singleitemList.itemInfo}}】</p>
			<div style="background-color: #EAEAEA;width: 100%;height: 2rem;margin-top: 1rem;">
				<span style="color:#888888;font-size: 0.75rem;"><img style="margin-left: 0.8rem;margin-top: 0.5rem;width: 0.85rem;" src="http://127.0.0.1:3333/icon_discount.png"/>支持分期</span>
				<span style="color:#888888;font-size: 0.75rem;"><img style="margin-left: 0.8rem;margin-top: 0.5rem;width: 0.85rem;" src="http://127.0.0.1:3333/icon_discount.png"/>赠送积分</span>
			</div>
		</div>
		<div style="width:100%;position: fixed;bottom:0;display: flex;justify-content: space-around;height: 2.5rem;">
			<router-link style="width: 20%;" to="/index"><img style="width: 100%;height: 100%;" src="../assets/image/shouye.png" /></router-link>
			<router-link style="width: 20%;" to="/gouwuche"><img style="width: 100%;height: 100%;" src="../assets/image/gouwuche.png" /></router-link>
			<a style="width: 60%;font-size:0.85rem;line-height:2.5rem;text-align: center;color: white;background-color: #F17F00;" @click.prevent="checkcart()">加入购物车</a>
			<!--<a style="width: 30%;font-size:0.85rem;line-height:2.5rem;text-align: center;color: white;background-color: #CA151E;" @click.prevent="checkcart()"><router-link style="color: white;text-decoration: none;" to="/gouwuche">立即购买</router-link></a>-->
		</div>
	</div>
</template>
<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "iteminfo",
		methods: {
			...mapActions(["getsingleitem","addcart"]),
			checkcart(){
				if(sessionStorage.userId){
					this.addcart({itemid:this.$store.state.item.singleitemList._id,links:this.links});
				}else{
					this.$router.push("/login");
				}
			},
			links(){
				this.$router.push("/gouwuche");
			}
		},
		mounted() {
			this.getsingleitem(this.$route.query.itemid);
		}
	}
</script>

<style>
	a{
		cursor: pointer;
	}
</style>