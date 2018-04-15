<template>
	<div id="main">
		<header>
			<div id="logo">
				<img src="./assets/image/head-top.png">
			</div>
			<span class="shuxian">|</span>
			<span>后台管理系统</span>
		</header>
		<p v-show="$store.state.admin.adminId" style="font-size: 0.85rem;padding-left: 0.3rem;padding-top:0.2rem;">欢迎管理员 [<span style="color: red;">{{$store.state.admin.adminName}}</span>]
			<a @click.prevent="loginout(links)">登出</a>
		</p>
		<div v-show="$store.state.admin.adminId" style="margin-top: 0.5rem;display: flex;justify-content: flex-start;">
			<router-link to="/adminManager" :class="{active:$route.meta.type==1}">管理员管理</router-link>
			<router-link to="/userManager" :class="{active:$route.meta.type==2}">用户管理</router-link>
			<router-link to="/advManager" :class="{active:$route.meta.type==3}">广告管理</router-link>
			<router-link to="/itemManager" :class="{active:$route.meta.type==4}">商品管理</router-link>
		</div>
		<div v-show="$route.meta.type==1" style="margin-top: 0.5rem;display: flex;justify-content: flex-start;">
			<router-link to="/adminManager" :class="{active:$route.meta.child==1}">管理员列表</router-link>
			<router-link to="/addAdmin" :class="{active:$route.meta.child==2}">添加管理员</router-link>
			<router-link to="/adminLog" :class="{active:$route.meta.child==3}">管理员日志</router-link>
			<router-link to="/changePwd" :class="{active:$route.meta.child==4}">修改密码</router-link>
		</div>
		<div v-show="$route.meta.type==2" style="margin-top: 0.5rem;display: flex;justify-content: flex-start;">
			<router-link to="/userManager" :class="{active:$route.meta.child==1}">查看用户</router-link>
			<router-link to="/userReg" :class="{active:$route.meta.child==2}">短信注册</router-link>
			<router-link to="/changeGold" :class="{active:$route.meta.child==3}">金额管理</router-link>
			<router-link to="/userLog" :class="{active:$route.meta.child==4}">流水管理</router-link>
		</div>
		<div v-show="$route.meta.type==3" style="margin-top: 0.5rem;display: flex;justify-content: flex-start;">
			<router-link to="/advManager" :class="{active:$route.meta.child==1}">广告列表</router-link>
			<router-link to="/addAdv" :class="{active:$route.meta.child==2}">添加广告</router-link>
			<router-link to="/advLog" :class="{active:$route.meta.child==3}">广告日志</router-link>
		</div>
		<div v-show="$route.meta.type==4" style="margin-top: 0.5rem;display: flex;justify-content: flex-start;">
			<router-link to="/itemManager" :class="{active:$route.meta.child==1}">商品列表</router-link>
			<router-link to="/addItem" :class="{active:$route.meta.child==2}">添加商品</router-link>
			<router-link to="/itemLog" :class="{active:$route.meta.child==3}">商品日志</router-link>
		</div>
		<router-view style="margin: 0.5rem;" />
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"
	export default {
		name: 'App',
		methods: {},
		computed: {
			...mapState(["adminId", "adminName"])
		},
		methods: {
			...mapActions(["loginout"]),
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
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
	}
	
	html {
		background-color: #EAEAEA;
	}
	
	table {
		width: 100%;
		border-collapse: collapse;
		text-align: center;
		font-size: 0.75rem;
	}
	
	td {
		border: solid 1px #333333;
	}
	
	input[type=button] {
		font-size: 0.8rem;
		color: white;
		background-color: #333333;
		height: 1.5rem;
		border: solid 1px #333333;
		width: 16rem;
		cursor: pointer;
	}
	
	input[type=text] {
		height: 1.3rem;
		border: solid 1px #333333;
		width: 8.5rem;
	}
	
	header {
		width: 100%;
		background-color: #333333;
		color: white;
		height: 4rem;
	}
	
	header div {
		float: left;
	}
	
	header img {
		margin-top: 1rem;
		display: inline-block;
	}
	
	header span {
		margin-top: 1.4rem;
		font-size: 1.1rem;
		display: inline-block;
	}
	
	.shuxian {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		color: #D6CECC;
		font-size: 1.1rem;
	}
	
	#main {
		min-width: 320px;
		max-width: 720px;
		margin: 0 auto;
		background-color: white;
	}
	
	#main div {
		padding-left: 0.2rem;
		padding-right: 0.2rem;
	}
	
	a {
		font-size: 0.8rem;
		padding-left: 0.2rem;
		padding-right: 0.2rem;
		cursor: pointer;
		color: #333333;
	}
	
	img {
		cursor: pointer;
	}
	
	.active {
		color: white;
		font-size: 0.75rem;
		background-color: #333333;
		border: solid 1px #333333;
	}
	
	@media only screen and (min-width: 100px) and (max-width: 640px) {
		html {
			font-size: 18px;
		}
		#logo {
			padding-left: 6%;
		}
	}
	
	@media only screen and (min-width: 640px) and (max-width: 2000px) {
		html {
			font-size: 24px;
		}
		#main {
			border: solid 1px black;
		}
		#logo {
			padding-left: 35%;
		}
		#logo img {
			width: 8rem;
		}
	}
</style>