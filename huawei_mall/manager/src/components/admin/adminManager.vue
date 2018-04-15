<template>
	<div>
		<table>
			<tr>
				<td>管理员</td>
				<td>添加时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in $store.state.admin.adminList">
				<td>{{item.adminName}}</td>
				<td>{{item.addTime|formattime}}</td>
				<td>
					<a style="color: red;" @click.prevent="deladmin({adminid:item._id,links})">删除</a>
				</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex"
	export default {
		name: "adminManager",
		methods: {
			...mapActions(["getadminlist", "deladmin"]),
			...{
				links() {
					this.getadminlist();
				}
			}
		},
		computed: {
			...mapState(["adminList"])
		},
		mounted() {
			this.getadminlist();
		}
	}
</script>

<style scoped>

</style>