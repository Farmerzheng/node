<template>
	<div>
		<table>
			<tr>
				<td>用户名</td>
				<td>手机号</td>
				<td>余额</td>
				<td>总金币</td>
				<td>注册时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in $store.state.user.userList">
				<td>{{item.userName}}</td>
				<td>{{item.phone}}</td>
				<td>{{item.goldNum|currency}}</td>
				<td>{{item.goldSum|currency}}</td>
				<td style="width: 12%;">{{item.regTime|formattime}}</td>
				<td>
					<a style="color: red;" @click.prevent="deluser({userid:item._id,links})">删除</a>
					<br />
					<router-link style="color: red;" :to="{path:'/changeGold',query:{userid:item._id,username:item.userName}}">充值</router-link>
				</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: "userManager",
		methods: {
			...mapActions(["getuserlist", "deluser"]),
			...{
				links() {
					this.getuserlist();
				}
			}
		},
		computed: {
			...mapState(["userList"])
		},
		mounted() {
			this.getuserlist();
		}
	}
</script>

<style>

</style>