<template>
	<div>
		手机号：<input v-model="phone" type="text" name="" id="" value="" placeholder=" 请输入手机号" />
		<a style="font-size: 0.65rem;margin-left: 0.25rem;border: solid 1px #333333;" @click.prevent="sendphone(phone)">发送</a>
		<br /><br /> 验证码：<input v-model="vnum" type="text" name="" id="" value="" placeholder=" 请输入验证码" />
		<br /><br />
		<input type="button" name="" id="" value="注册" @click.prevent="subregnum({phone,vnum})" />
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex"
	export default {
		name: "userReg",
		data() {
			return {
				phone: "",
				vnum: ""
			}
		},
		methods: {
			...mapActions(["sendphone", "subregnum"])
		}
	}
</script>

<style>

</style>