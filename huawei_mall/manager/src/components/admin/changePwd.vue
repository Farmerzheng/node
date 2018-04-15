<template>
	<div>
		用户名：<span style="color: red;">{{$store.state.admin.adminName}}</span>
		<br /><br /> 新密码：<input type="password" v-model="password1" placeholder=" 请输入新密码" />
		<br /><br /> 请确认：<input type="password" v-model="password2" placeholder=" 请确认新密码" />
		<br /><br />
		<input type="button" name="" id="" value="修改" @click.prevent="changepwd({password1:password1,password2:password2,links})" />
		<br /><br />
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "changePwd",
		data() {
			return {
				password1: "",
				password2: ""
			}
		},
		methods: {
			...mapActions(["changepwd"]),
			...{
				links() {
					this.$router.push("/");
				}
			}
		},
		computed: {
			...mapState(["adminName"])
		}
	}
</script>

<style>

</style>