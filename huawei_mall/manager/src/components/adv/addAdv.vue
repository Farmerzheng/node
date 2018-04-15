<template>
	<div>
		<form>
			广告名称： <input type="text" name="advName" placeholder=" 请输入广告名称" />
			<br /><br /> 广告链接：
			<input type="text" name="advLink" value="" placeholder=" 请输入广告链接" />
			<br /><br /> 广告类别：
			<select name="advType">
				<option value="0">轮播图</option>
				<option value="1">头部菜单</option>
				<!--<option value="1">超值精选</option>
				<option value="2">笔记本</option>
				<option value="3">精品平板</option>
				<option value="4">智能穿戴</option>
				<option value="5">智能家居</option>
				<option value="6">热销配件</option>
				<option value="7">品牌配件</option>-->
			</select>
			<br /><br /> 广告图片：
			<input type="file" name="advPic" style="width: 50%;" />
			<br /><br />
			<input type="text" name="adminName" v-model="adminName" hidden="hidden" />
			<input type="text" name="adminId" v-model="adminId" hidden="hidden" />
			<input type="button" value="提交" @click.prevent="addadvs()" />
		</form>
		<br /><br />
	</div>
</template>

<script>
	import { mapActions } from "vuex";
	export default {
		name: "addadv",
		data() {
			return {
				adminName: sessionStorage.adminName,
				adminId: sessionStorage.adminId
			}
		},
		methods: {
			...mapActions(["addadv"]),
			...{
				addadvs() {
					let formdata = new FormData(document.querySelector("form"));
					let links = this.link;
					this.addadv({
						formdata,
						links
					})
				},
				link() {
					this.$router.push("/advManager");
				}
			}
		}
	}
</script>

<style>

</style>