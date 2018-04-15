<template>
	<div>
		<div id="mains">
			<div id="heads" style="background-color: #333333;width: 100%;padding-top: 0.5rem;height: 3rem;">
				<div id="logo" style="background-color: #333333;">
					<router-link to="/"><img style="margin-left: 0;display: inline-block;margin-top: -1rem;" src="../assets/image/head-top.png"></router-link>
				</div>
				<span class="shuxian">|</span>
				<span style="font-size: 1.1rem;">用户登录</span>
			</div>
			<div style="padding-bottom: 3rem;margin-top: 4rem;">
				<br/>
				<p>用户登录</p>
				<br/>
				<div>
					<input type="text" style="font-size: 1rem;" v-model="username" placeholder="请输入账号">
					<br />
					<br />
					<input type="password" style="font-size: 1rem;" v-model="password" placeholder="请输入密码">
				</div>
				<br/>
				<br/>
				<input type="button" value="登录" @click.prevent="userlogin({username:username,password:password,links})">
				<br/>
				<br/>
				<router-link to="/register" style="text-decoration: none;"><span style="font-size: 0.8rem;color: #007DFF;">注册账号</span></router-link>
				<span class="shuxian">|</span>
				<router-link to="/" style="text-decoration: none;"><span style="font-size: 0.8rem;color: #007DFF;">返回首页</span></router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "login",
		data() {
			return {
				username: "",
				password: ""
			}
		},
		methods: {
			...mapActions(["userlogin"]),
			...{
				links() {
					this.$router.push("/");
				}
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	#mains {
		width: 100%;
		background-color: #EBEBEB;
	}
	
	#mains div {
		text-align: center;
		padding: 0.5rem;
		background-color: white;
	}
	
	#mains div p {
		text-align: center;
		font-size: 1.2rem;
		color: #B40726;
	}
	
	#mains div span {
		color: #CCCCCC;
	}
	
	#mains div input[type=text] {
		width: 100%;
		border: none;
		height: 3rem;
		border-bottom: solid 1px #CCCCCC;
	}
	#mains div input[type=password] {
		width: 100%;
		border: none;
		height: 3rem;
		border-bottom: solid 1px #CCCCCC;
	}
	
	#mains div input[type=button] {
		width: 100%;
		border: none;
		cursor: pointer;
		height: 3rem;
		background-color: #C70000;
		font-size: 1rem;
		color: white;
		font-weight: 900;
		border-radius: 3rem 3rem 3rem 3rem;
	}
	
	#mains div a {
		padding-left: 0.35rem;
		padding-right: 0.35rem;
		color: #007DFF;
		font-size: 0.8rem;
	}
	
	#mains img {
		margin-left: 0.65rem;
		margin-right: 0.65rem;
	}
</style>