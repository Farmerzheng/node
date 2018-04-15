<template>
	<div>
		<table>
			<tr>
				<td>管理员名称</td>
				<td>执行操作</td>
				<td>操作时间</td>
			</tr>
			<tr v-for="item in $store.state.item.itemLog">
				<td style="width: 25%;">{{item.adminName}}</td>
				<td>{{item.loginfo}}</td>
				<td>{{item.addTime|formattime}}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "itemLog",
		methods: {
			...mapActions(["getitemlog"])
		},
		mounted() {
			this.getitemlog();
		}
	}
</script>

<style>

</style>