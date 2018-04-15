<template>
	<div>
		<form>
			商品名称： <input type="text" name="itemName" placeholder=" 请输入商品名称" />
			<br /><br /> 商品备注：
			<input type="text" name="itemInfo" placeholder=" 请输入商品备注" />
			<br /><br />商品价格：
			<input type="text" name="itemPrice" placeholder=" 请输入商品价格" />
			<br /><br /> 商品类型：
			<select name="itemType">
				<option value="0">首页推荐</option>
				<option value="1">推荐列表</option>
				<option value="2">超值精选</option>
				<option value="3">精选手机</option>
				<option value="4">手机列表</option>
				<option value="5">笔记本</option>
				<option value="6">精品平板</option>
				<option value="7">平板列表</option>
				<option value="8">智能穿戴</option>
				<option value="9">穿戴列表</option>
				<option value="10">智能家居</option>
				<option value="11">家居列表</option>
				<option value="12">热销配件</option>
				<option value="13">配件列表</option>
				<option value="14">品牌配件</option>
				<option value="15">品牌列表</option>
			</select>
			<br /><br /> 商品图片：
			<input type="file" name="itemPic" style="width: 50%;" placeholder=" 请输入商品名称" />
			<br /><br />
			<input type="button" name="" id="" value="添加" @click.prevent="additems" />
		</form>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "additem",
		methods: {
			...mapActions(["additem"]),
			...{
				additems() {
					let formdata = new FormData(document.querySelector("form"));
					let links = this.link;
					this.additem({
						formdata,
						links
					});
				},
				link() {
					this.$router.push("/itemManager");
				}
			}
		}
	}
</script>

<style>

</style>