<template>
	<div>
		<nav>
			<div>
				<br/>
				<p>管理员登录</p>
				<br/>
				<div>
					<input type="text" v-model="adminname" placeholder="请输入账号">
					<br />
					<br />
					<input type="password" v-model="password" placeholder="请输入密码">
				</div>
				<br/>
				<br/>
				<br />
				<input type="button" value="登录" @click.prevent="adminlogin({adminname:adminname,password:password,links})">
				<br/>
				<br/>
			</div>
		</nav>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex"
	export default {
		name: "login",
		data() {
			return {
				adminname: "",
				password: ""
			}
		},
		methods: {
			...mapActions(["adminlogin"]),
			...{
				links() {
					if(this.$route.query.backpage) {
						this.$router.push(this.$route.query.backpage);
					} else {
						this.$router.push("/adminManager");
					}
				}
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	nav {
		width: 100%;
		background-color: #EBEBEB;
	}
	
	nav div {
		text-align: center;
		padding: 0.5rem;
		background-color: white;
	}
	
	nav div p {
		text-align: center;
		font-size: 1.2rem;
		color: #B40726;
	}
	
	nav div span {
		color: #CCCCCC;
	}
	
	nav div input[type=text] {
		width: 100%;
		border: none;
		height: 3rem;
		border-bottom: solid 1px #CCCCCC;
		outline: none;
	}
	nav div input[type=password] {
		width: 100%;
		border: none;
		height: 3rem;
		border-bottom: solid 1px #CCCCCC;
		outline: none;
	}
	
	nav div input[type=button] {
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
	
	nav div a {
		padding-left: 0.35rem;
		padding-right: 0.35rem;
		color: #007DFF;
		font-size: 0.8rem;
	}
	
	nav img {
		margin-left: 0.65rem;
		margin-right: 0.65rem;
	}
</style>