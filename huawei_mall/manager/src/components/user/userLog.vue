<template>
	<div>
		<table>
			<tr>
				<td>用户名</td>
				<td>执行操作</td>
				<td>操作时间</td>
			</tr>
			<tr v-for="item in $store.state.user.userLog">
				<td>{{item.userName}}</td>
				<td>{{item.loginfo}}</td>
				<td>{{item.addTime|formattime}}</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "userLog",
		methods: {
			...mapActions(["getlog"])
		},
		mounted() {
			this.getlog();
		}
	}
</script>

<style>

</style>