<template>
	<div class="clearfix" style="color: #333333;">
		<header>
			<input type="text" placeholder="   搜索商品" style="text-align: left;background-color: #EEEEEE;text-align: center;" />
			<img style="margin-top: 0.5rem;width: 1.35rem;height: 1.35rem;" src="http://127.0.0.1:3333/截图 2018-01-23 13.44.34.png" />
		</header>
		<div style="height:24.5rem;overflow-y:hidden;overflow-x:hidden;width: 26%;float: left;">
			<ul>
				<li :class="flag==index?'active':''" style="border-bottom: solid 1px #eeeeee;text-indent: 0.35rem;padding-left: 0.55rem;font-size: 0.75rem;height: 2.5rem;" v-for="(item,index) in typetemp" @click="searchlist(index)">{{item}}</li>
			</ul>
		</div>
		<div style="width: 74%;height:24.5rem;overflow-y:scroll;overflow-x:hidden;float: left;">
			<typelist :type="type"></typelist>
		</div>
	</div>
</template>

<script>
	import typelist from '@/components/templates/typelist';
	import { mapActions } from "vuex";
	export default {
		name: "fenlei",
		data() {
			return {
				typetemp: {
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
				type: 0,
				flag: 0
			}
		},
		components: {
			typelist
		},
		methods: {
			...mapActions(["gettypelist"]),
			searchlist(index) {
				this.type = index;
				this.flag = index;
				this.gettypelist(index);
			}
		},
		mounted() {
			this.searchlist(0);
		}
	}
</script>

<style>
	li {
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
		font-size: 0.8rem;
		font-weight: 900;
		cursor: pointer;
	}
	
	header {
		position: static;
	}
	
	.active {
		border-left: solid 3px #e01d20;
		background-color: #eaeaea;
		color: #e01d20;
	}
</style>