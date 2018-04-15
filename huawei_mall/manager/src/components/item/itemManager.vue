<template>
	<div>
		<select>
			<option value="-1" @click.prevent="getitemlist({pageindex: pageindex,type: -1})">全部</option>
			<option v-for="(value,index) in itemType" :value="index" @click.prevent="getitemlist({pageindex:pageindex,type:index,keyword:''})">{{value}}</option>
		</select>
		<input style="width: 5.5rem;height: 0.8rem;" v-model="keyword" type="text" placeholder="请输入名称查找商品" @keyup="getitemlist({pageindex: pageindex,type: -1,keyword:keyword})" />
		<br /><br />
		<table>
			<tr>
				<td>商品名字</td>
				<td>商品价格</td>
				<td>商品类别</td>
				<td>商品图片</td>
				<td>添加时间</td>
				<td>操作</td>
			</tr>
			<tr v-for="item in $store.state.item.itemList">
				<td style="width: 28%">{{item.itemName}}</td>
				<td style="width: 11%">{{item.itemPrice|currency}}</td>
				<td style="width: 15%">{{$store.state.item.itemType[item.itemType]}}</td>
				<td style="width: 11%"><img style="padding-top: 0.5rem;width: 2rem;height: 2rem;" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></td>
				<td>{{item.addTime|formattime}}</td>
				<td style="width: 15%;">
					<a style="width: 12%;color: red;" @click.prevent="delitem({itemid:item._id,links})">删除</a>
				</td>
			</tr>
		</table>
		<br /><br />
		<div style="text-align: center;">
			<input v-show="$store.state.item.pageIndex>1" style="width: 15%;" type="button" value="上一页" @click.prevent="getitemlist({pageindex:($store.state.item.pageIndex/1)-1,type:$store.state.item.itemTypes,keyword:''})" />{{$store.state.item.pageIndex}}/{{$store.state.item.pageSum}}<input v-show="$store.state.item.pageIndex<$store.state.item.pageSum" style="width: 15%;" type="button" value="下一页" @click.prevent="getitemlist({pageindex:($store.state.item.pageIndex/1)+1,type:$store.state.item.itemTypes,keyword:''})" />
		</div>

	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "itemManager",
		data() {
			return {
				itemType: {
					"0": "首页推荐",
					"1": "推荐列表",
					"2": "超值精选",
					"3": "精选手机",
					"4": "手机列表",
					"5": "笔记本",
					"6": "精品平板",
					"7": "平板列表",
					"8": "智能穿戴",
					"9": "穿戴列表",
					"10": "智能家居",
					"11": "家居列表",
					"12": "热销配件",
					"13": "配件列表",
					"14": "品牌配件",
					"15": "品牌列表"
				},
				pageindex: 1,
				pageSum: 1,
				keyword: ""
			}
		},
		methods: {
			...mapActions(["getitemlist", "delitem"]),
			...{
				links() {
					this.getitemlist({
						pageindex: this.pageindex,
						type: -1,
						keyword: ''

					});
				}
			}
		},
		mounted() {
			this.getitemlist({
				pageindex: this.pageindex,
				type: -1,
				keyword: ''

			});
		}

	}
</script>

<style>

</style>