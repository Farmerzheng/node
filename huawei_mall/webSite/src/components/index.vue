<template>
	<div id="main">
		<header style="position: fixed;height: 2.5rem;">
			<input style="margin-top: 0.5rem;height: 1.5rem;" type="text" placeholder="HUAWEI Mate 10 荣耀V10" />
			<!--<span v-show="$store.state.user.userId" style="color: white;">{{$store.state.user.userName}}</span>-->
			<router-link style="text-decoration: none;" to="/login"><span v-show="!$store.state.user.userId" style="color: white;">登录</span></router-link>
		</header>
		<div id="adv">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide" v-for="item in $store.state.adv.advList">
						<router-link to="/fenlei"><img :src="`http://127.0.0.1:3333/${item.advPic}`" /></router-link>
					</div>
				</div>
				<div class="swiper-pagination"></div>
			</div>
		</div>
		<div id="menu">
			<ul>
				<li v-for="item in $store.state.adv.menuList">
					<router-link to="/fenlei"><img :src="`http://127.0.0.1:3333/${item.advPic}`" /></router-link><br/><span>{{item.advName}}</span></li>
			</ul>
		</div>
		<div class="itemlist clearfix">
			<div style="width: 50%;height:7rem;float: left;padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[0]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" height="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;" v-for="item in $store.state.item[typetemp[1]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">超值精选</p>
		<div style="background-color: white;" class="widthlist clearfix">
			<div class="listleft" style="border-right: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[2]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">手机</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[3]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[4]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">笔记本</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[5]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">精品平板</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[6]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[7]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">智能穿戴</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[8]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[9]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">智能家居</p>
		<div>
			<img width="100%" src="../assets/image/20180122110528845.jpg" />
		</div>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[10]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[11]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">热销配件</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:10rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[12]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" style="height: 6rem;" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[13]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<p style="padding-left: 1rem;padding-top: 0.35rem;padding-bottom: 0.35rem;font-size: 0.8rem;border-bottom: solid 1px #EAEAEA;border-top: solid 1px #EAEAEA;">品牌配件</p>
		<div class="itemlist clearfix">
			<div class="clearfix" style="width: 50%;height:12rem;float: left;padding-top: 5rem; padding-right: 2px;padding-top: 2px;background-color: white;" v-for="item in $store.state.item[typetemp[14]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img width="100%" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="text-align: center;font-size: 0.75rem;padding-top: 0px;height: 1.2rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad" style="text-align: center;">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice" style="text-align: center;">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div style="margin-top: 2px;" class="widthlist clearfix">
			<div class="listleft" style="background-color: white;border-top: solid 1px #EAEAEA;" v-for="item in $store.state.item[typetemp[15]]">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p class="itemtitle" style="font-size: 0.75rem;">&nbsp;{{item.itemName}}</p>
				<p class="itemad">&nbsp;{{item.itemInfo}}</p>
				<p class="itemprice">&nbsp;￥ {{item.itemPrice}}</p>
			</div>
		</div>
		<div>
			<router-link style="color: #333333;text-decoration: none;" to="/login">
				<router-link style="text-decoration: none;" to="/login">
					<p v-show="!$store.state.user.userId" style="padding: 0.5rem;border-top: solid 5px #EAEAEA; text-align: center;color: #333333;font-weight: 900;">登录</p>
				</router-link>
				<p v-show="$store.state.user.userId" style="padding: 0.5rem;border-top: solid 5px #EAEAEA; text-align: center;color: #333333;font-weight: 900;" @click.prevent="userlogout(links)">登出</p>
			</router-link>
		</div>
		<div style="display: flex;justify-content: space-around;width: 80%;margin: 0 auto;border-top:solid 1px #EAEAEA;border-bottom:solid 1px #EAEAEA;padding-top: 1rem;padding-bottom: 1rem;">
			<div style="font-size: 0.7rem;color: #888888;text-align: center;">
				<div style="width: 2.5rem;height:2.5rem;background: url('http://127.0.0.1:3333/bg-bottom.png')  no-repeat left top;background-size: auto 100%;margin-bottom: 0.3rem;"></div>
				客户端
			</div>
			<div style="font-size: 0.7rem;color: #333333;text-align: center;">
				<div style="width: 2.5rem;height:2.5rem;background: url('http://127.0.0.1:3333/bg-bottom.png')  no-repeat center top;background-size: auto 100%;margin-bottom: 0.3rem;"></div>
				触屏版
			</div>
			<div style="font-size: 0.7rem;color: #888888;text-align: center;">
				<div style="width: 2.5rem;height:2.5rem;background: url('http://127.0.0.1:3333/bg-bottom.png')  no-repeat right top;background-size: auto 100%;margin-bottom: 0.3rem;"></div>
				电脑版
			</div>
		</div>
		<div>
			<p style="color: #333333;font-size: 0.6rem;text-align: center;padding-top: 0.5rem;">隐私政策 用户协议 苏ICP备17040376号-6</p>
			<p style="color: #333333;font-size: 0.6rem;text-align: center;padding-top: 0.5rem;">苏公网安备32011402010009号 Copyright © 2012-2017</p>
			<p style="color: #333333;font-size: 0.6rem;text-align: center;padding-top: 0.5rem;padding-bottom: 2.3rem;">VMALL.COM 版权所有</p>
		</div>
		<br />
	</div>
</template>
<script>
	import { mapActions } from "vuex";
	import $ from 'jquery';
	$(window).on("scroll", function() {
		console.log($(window).scrollTop())
		if($(window).scrollTop() >= $(document).height()) {
			$("header").css("background-color", "rgba(255,255,255,1)");
		} 
		var temp = $(window).scrollTop() / ($(document).height());
		$("header").css("background-color", "rgba(219,21,70," + temp);
	})
	console.log($(document).height());
	export default {
		name: "index",
		data() {
			return {
				typetemp: {
					"0": "homepushList",
					"1": "homeitemList",
					"2": "coolitemList",
					"3": "coolphoneList",
					"4": "phoneitemList",
					"5": "notebookList",
					"6": "coolbanList",
					"7": "banitemList",
					"8": "smartcoverList",
					"9": "coveritemList",
					"10": "smarthomeList",
					"11": "homeitemList",
					"12": "hotitemList",
					"13": "itemhostList",
					"14": "ltditemList",
					"15": "ltdsitemList"
				}
			}
		},
		methods: {
			...mapActions(["getitemlist", "getadvlist", "userlogout"]),
			...{
				links() {
					this.$router.push("/login");
				}
			}
		},
		mounted() {
			this.getitemlist({
				type: 0,
				num: 8
			});
			this.getitemlist({
				type: 1,
				num: 3
			});
			this.getitemlist({
				type: 2,
				num: 3
			});
			this.getitemlist({
				type: 3,
				num: 4
			});
			this.getitemlist({
				type: 4,
				num: 3
			});
			this.getitemlist({
				type: 5,
				num: 4
			});
			this.getitemlist({
				type: 6,
				num: 4
			});
			this.getitemlist({
				type: 7,
				num: 3
			});
			this.getitemlist({
				type: 8,
				num: 4
			});
			this.getitemlist({
				type: 9,
				num: 3
			});
			this.getitemlist({
				type: 10,
				num: 4
			});
			this.getitemlist({
				type: 11,
				num: 3
			});
			this.getitemlist({
				type: 12,
				num: 4
			});
			this.getitemlist({
				type: 13,
				num: 3
			});
			this.getitemlist({
				type: 14,
				num: 4
			});
			this.getitemlist({
				type: 15,
				num: 3
			});
			this.getadvlist({
				type: 0,
				num: 7
			});
			this.getadvlist({
				type: 1,
				num: 5
			});
			new Swiper('.swiper-container', {
				effect: 'slide',
				autoplay: 3000,
				loop: true,
				speed: 300,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				autoplayDisableOnInteraction: false,
				observer: true
			})
		}
	}
</script>

<style>

</style>