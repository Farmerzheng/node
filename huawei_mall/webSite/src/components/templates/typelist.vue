<template>
	<div class="clearfix" style="color: #333333;">
		<p style="text-align: center;padding-top: 1rem;padding-bottom: 1rem;font-weight: 900;font-size: 0.85rem;">{{typetemp[type]}}</p>
		<div v-for="item in $store.state.item.typeList">
			<div style="float: left;width: 28%;height: 5.5rem;margin-left: 0.6rem;">
				<router-link :to="{path:'/iteminfo',query:{itemid:item._id}}"><img style="width: 100%;" :src="`http://127.0.0.1:3333/${item.itemPic}`" /></router-link>
				<p style="font-size: 0.65rem;">{{item.itemName}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "typelist",
		props: ["type"],
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
			}
		}
	}
</script>

<style>

</style>