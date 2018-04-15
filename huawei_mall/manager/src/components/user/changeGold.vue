<template>
	<div>
		用户名：<input type="text" v-model="username" placeholder=" 请输出用户名" />
		<br /><br /> 充值类型：
		<select v-model="goldtype">
			<option value="0">减少</option>
			<option value="1">增加</option>
		</select>
		<br /><br /> 调整量：<input type="text" v-model="setnum" placeholder=" 请输入调整的量" />
		<br /><br />
		<input type="button" value="调整" @click.prevent="setgold({userid:$route.query.userid,type:goldtype,num:setnum,links})" />
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "changegold",
		data() {
			return {
				username: this.$route.query.username,
				goldtype: 0,
				setnum: ""
			}
		},
		methods: {
			...mapActions(["setgold"]),
			...{
				links(){
					this.$router.push("/userManager");
				}
			}
		}
	}
</script>

<style>

</style>