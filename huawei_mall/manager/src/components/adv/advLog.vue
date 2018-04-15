<template>
	<div>
		<table>
			<tr>
				<td>操作者</td>
				<td>执行操作</td>
				<td>操作时间</td>
			</tr>
			<tr v-for="item in $store.state.adv.advLog">
				<td style="width: 15%;">{{item.adminName}}</td>
				<td>{{item.loginfo}}</td>
				<td>{{item.addTime|formattime}}</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "advlog",
		methods: {
			...mapActions(["getadvlog"]),
		},
		mounted() {
			this.getadvlog();
		}
	}
</script>

<style>

</style>