<template>
	<div>
		<select>
			<option value="-1">全部</option>
			<option v-for="(value,index) in typelist" :value="index" @click.prevent="getadvlist({type:index})">{{value}}</option>
		</select>
		<br /><br />
		<table>
			<tr>
				<td>广告名字</td>
				<td>广告链接</td>
				<td>广告类型</td>
				<td>广告图片</td>
				<td>添加时间</td>
				<td>广告操作</td>
			</tr>
			<tr v-for="item in $store.state.adv.advList">
				<td>{{item.advName}}</td>
				<td>{{item.advLink}}</td>
				<td>{{$store.state.adv.advType[item.advType]}}</td>
				<td><img style="padding-top: 0.2rem;" width="35rem" height="35rem" :src="`http://127.0.0.1:3333/${item.advPic}`" /></td>
				<td>{{item.addTime|formattime}}</td>
				<td>
					<a style="color: red;" @click.prevent="deladv({advid:item._id,links})">删除</a>
				</td>
			</tr>
		</table>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "advManager",
		data() {
			return {
				typelist: {
					"0": "轮播图",
					"1": "头部广告"
				}
			}
		},
		methods: {
			...mapActions(["getadvlist", "deladv"]),
			...{
				links() {
					this.getadvlist({type:-1});
				}
			}
		},
		mounted() {
			this.getadvlist({type:-1})
		}
	}
</script>

<style>

</style>