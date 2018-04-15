<template>
	<div>
		<header style="background-color: #333333;width: 100%;padding-top: 0.5rem;height: 3rem;">
			<div id="logo">
				<router-link to="/"><img src="../assets/image/head-top.png"></router-link>
			</div>
			<span class="shuxian">|</span>
			<span style="font-size: 1.1rem;">注册账号</span>
		</header>
		<p style="color: #B40726;margin-top: 4rem;width: 100%;text-align: center;font-size: 1.5rem;">注册华为账号</p>
		<div style="margin-top: 4rem;width: 95%;padding-left: 1rem;">
			<div style="border: solid 1px #D9D9D9;background-color: #F7F7F7;height:2.5rem;border-radius: 1.5rem;line-height: 2.5rem;">
				<span style="padding-left: 1rem;">手机号：</span><input v-model="phone" style="font-size:1rem;border: none;background-color: transparent;width: 8rem;" type="text" placeholder=" 请输入手机号" />
				<a style="font-size: 0.85rem;margin-left: 1.5rem;border: none;color: #007DFF;" @click.prevent="sendphone(phone)">发送</a>
			</div>
			<br /><br />
			<div style="border: solid 1px #D9D9D9;background-color: #F7F7F7;height:2.5rem;border-radius: 1.5rem;line-height: 2.5rem;">
				<span style="padding-left: 1rem;">验证码：</span><input v-model="vnum" style="font-size:1rem;border: none;background-color: transparent;width: 8rem;" type="text" placeholder=" 请输入验证码" />
				<br /><br /><br />
				<input style="width: 100%;border: none;cursor: pointer;height: 3rem;background-color: #C70000;font-size: 1rem;color: white;font-weight: 900;border-radius: 3rem 3rem 3rem 3rem;" type="button" name="" id="" value="注册" @click.prevent="subregnum({phone,vnum,links})" />
				<br /><br />
			</div>
		</div>
		<div style="width: 100%;text-align: center;margin-top: 1rem;">
			<span style="text-align: center;font-size: 0.8rem;color: #007DFF;"><router-link to="/" style="text-decoration: none;color: #007DFF;">返回首页</router-link></span>
			<span class="shuxian" style="color: #CCCCCC;">|</span>
			<span style="text-align: center;font-size: 0.8rem;color: #007DFF;"><router-link to="/login" style="text-decoration: none;color: #007DFF;">用户登录</router-link></span>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex"
	export default {
		name: "register",
		data() {
			return {
				phone: "",
				vnum: ""
			}
		},
		methods: {
			...mapActions(["sendphone", "subregnum"]),
			...{
				links() {
					this.$router.push("/login");
				}
			}
		}
	}
</script>

<style>

</style>