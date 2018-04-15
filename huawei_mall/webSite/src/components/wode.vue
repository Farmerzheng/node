<template>
	<div style="padding-bottom: 55.5rem;">
		<div style="width: 100%;background-image: url(http://127.0.0.1:3333/memberInfoBG.jpg);background-repeat: no-repeat;height: 2.8rem;background-size: cover;">
			<span v-show="!$store.state.user.userId" style="padding-left: 1rem;color: white;font-size: 0.7rem;display:inline-block;margin-top: 0.8rem;"><router-link to="/login" style="color: white;text-decoration: none;">登录&gt;</router-link></span>
			<div v-show="$store.state.user.userId" style="float: left;margin-top: 0.3rem;padding-top: 3px;width:2rem;height:2rem;background-image: url(http://127.0.0.1:3333/53512105_p0.jpg);background-size: cover;border-radius: 50%;"></div>
			<span style="padding-left: 0.5rem;display: inline-block;padding-top: 0.6rem;color: white;">{{$store.state.user.userName}}</span>
			<span v-show="!$store.state.user.userId" style="color: #EDC0C0;font-size: 0.6rem;padding-left: 1rem;">享受更多会员权益</span>
			<img style="width:7%;height:1.5rem;margin-top: 0.65rem;margin-right: 0.65rem;float: right;" src="http://127.0.0.1:3333/截图 2018-01-24 17.12.23.png" />
			<div v-show="$store.state.user.userId" style="padding-top: 2rem;margin-left: 43%;width:3rem;height: 3rem;background-image: url(http://127.0.0.1:3333/53512105_p0.jpg);background-size: cover;border-radius: 50%;">
			</div>
			<div v-show="!$store.state.user.userId" style="padding-top: 2rem;margin-left: 43%;width:3rem;height: 3rem;background-image: url(http://127.0.0.1:3333/defaultface_user_after.png);background-size: cover;border-radius: 50%;">
			</div>
			<div style="padding-bottom: 0.5rem;border-bottom: solid 5px #EAEAEA;display: flex;width: 100%;justify-content: space-around;">
				<div v-show="!$store.state.user.userId" style=""><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 积分</span>
					<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;--分</p>
				</div>
				<div v-show="$store.state.user.userId" style="">
					<router-link style="color: #888888;text-decoration: none;" to="/"><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 积分</span>
						<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;0分</p>
					</router-link>
				</div>
				<div v-show="!$store.state.user.userId" style=""><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 优惠券</span>
					<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--张</p>
				</div>
				<div v-show="$store.state.user.userId" style="">
					<router-link style="color: #888888;text-decoration: none;" to="/"><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 优惠券</span>
						<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0张</p>
					</router-link>
				</div>
				<div v-show="!$store.state.user.userId" style=""><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 代金券</span>
					<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--元</p>
				</div>
				<div v-show="$store.state.user.userId" style="">
					<router-link style="color: #888888;text-decoration: none;" to="/"><img style="width: 1.3rem;vertical-align: middle;" src="http://127.0.0.1:3333/icon_integral.png" /><span style="font-size: 0.6rem;color: #888888;"> 代金券</span>
						<p style="font-size: 0.65rem;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0元</p>
					</router-link>
				</div>
			</div>
			<p style="border-bottom: solid 1px #EAEAEA;padding-top: 0.5rem;padding-bottom: 0.5rem;padding-left: 1rem;font-size: 0.75rem;">我的订单</p>
			<div style="display: flex;justify-content: space-around;border-bottom: solid 5px #EAEAEA;padding-bottom: 0.5rem;padding-top: 0.5rem;">
				<div style="text-align: center;">
					<router-link to="/gouwuche"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_unpaid.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">待付款</p>
				</div>
				<div style="text-align: center;">
					<router-link to="/gouwuche"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_receipt.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">待收货</p>
				</div>
				<div style="text-align: center;">
					<router-link to="/gouwuche"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_estimate.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">待评价</p>
				</div>
				<div style="text-align: center;">
					<router-link to="/gouwuche"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_returned.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">退换货</p>
				</div>
				<div style="text-align: center;">
					<router-link to="/gouwuche"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_callback.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">回收单</p>
				</div>
			</div>
			<p style="border-bottom: solid 1px #EAEAEA;padding-top: 0.5rem;padding-bottom: 0.5rem;padding-left: 1rem;font-size: 0.75rem;">我的Vmall</p>
			<div style="border-bottom: solid 5px #EAEAEA;" class="clearfix">
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_vip.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">会员频道</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_authentication.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">实名认证</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_address.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">收货地址</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_easyBuy.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">优享购</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_optimal.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">优购码</p>
				</div>
				<img style="width: 100%;" src="http://127.0.0.1:3333/20180113000743883.jpg" />
			</div>
			<p style="border-bottom: solid 1px #EAEAEA;padding-top: 0.5rem;padding-bottom: 0.5rem;padding-left: 1rem;font-size: 0.75rem;">我的服务</p>
			<div style="border-bottom: solid 5px #EAEAEA;" class="clearfix">
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_exchange.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">以旧换新</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_prepaid.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">手机充值</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_network.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">服务网点</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_store.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">线下门店</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_FAQ.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">常见问题</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_feedback.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">意见反馈</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_agreement.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">服务协议</p>
				</div>
				<div style="float:left;padding-top: 1rem;padding-bottom: 1rem;border-bottom:solid 1px #EAEAEA;text-align: center;width: 25%;">
					<router-link to="/"><img style="width: 1.3rem;height: auto;" src="http://127.0.0.1:3333/icon_m_service.png" /></router-link>
					<p style="color: #333333;font-size: 0.6rem;">客服中心</p>
				</div>
			</div>
			<div>
				<router-link style="color: #333333;text-decoration: none;" to="/login">
					<router-link style="text-decoration: none;" to="/login"><p v-show="!$store.state.user.userId" style="padding: 0.5rem;border-top: solid 5px #EAEAEA; text-align: center;color: #333333;font-weight: 900;">登录</p></router-link>
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
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "wode",
		data() {
			return {
				userName: sessionStorage.userName,
				userId: sessionStorage.userId,
				token: sessionStorage.token
			}
		},
		methods: {
			...mapActions(["userlogout"]),
			...{
				check() {
					if(!sessionStorage.userId) {
						this.$router.push("/login");
					}
				},
				links(){
					this.$router.push("/login");
				}
			}
		}
	}
</script>

<style>

</style>