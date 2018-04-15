<template>
	<div>
		管理员账号：<input type="text" v-model="adminname" placeholder=" 请输入管理员账号" />
		<br /><br /> 管理员密码：<input type="text" v-model="password1" placeholder=" 请输入管理员密码" />
		<br /><br /> 请确认密码：<input type="text" v-model="password2" placeholder=" 请确认管理员密码" />
		<br /><br />
		<input type="button" value="添加" @click.prevent="addadmin({adminname:adminname,password1:password1,password2:password2,links})" />
	<br /><br />
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex"
	export default {
		name: "addAdmin",
		data() {
			return {
				adminname: "",
				password1: "",
				password2: ""
			}
		},
		methods: {
			...mapActions(["addadmin"]),
			...{
				links(){
					this.$router.push("adminManager");
				}
			}
		},
		computed: {
			//			...mapState([""])
		}
	}
</script>

<style scoped>

</style>