<template>
	<div>
		<table>
			<tr>
				<td>用户名</td>
				<td>操作时间</td>
				<td>执行操作</td>
			</tr>
			<tr v-for="item in $store.state.admin.adminLog">
				<td style="width: 15%;">{{item.adminName}}</td>
				<td>{{item.addTime|formattime}}</td>
				<td>{{item.loginfo}}</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapState, mapActions } from "vuex";
	export default {
		name: "adminLog",
		methods: {
			...mapActions(["getadminlog"])
		},
		computed: {
			...mapState(["adminLog"])
		},
		mounted() {
			this.getadminlog();
		}
	}
</script>

<style>

</style>