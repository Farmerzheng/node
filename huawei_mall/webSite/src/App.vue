<template>
	<div>
		<router-view/>
		<footer v-show="!$route.meta.flag>0">
			<router-link style="width: 25%;" to="/index"><img style="width: 100%;height: 100%;" src="./assets/image/shouye.png" /></router-link>
			<router-link style="width: 25%;" to="/fenlei"><img style="width: 100%;height: 100%;" src="./assets/image/fenlei.png" /></router-link>
			<router-link style="width: 25%;" to="/gouwuche"><img style="width: 100%;height: 100%;" src="./assets/image/gouwuche.png" /></router-link>
			<router-link style="width: 25%;" to="/wode"><img style="width: 100%;height: 100%;" src="./assets/image/wode.png" /></router-link>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'App'
	}
</script>

<style>
	@import "./assets/css/index.css";
	@import "./assets/css/swiper.min.css";
	a{
		cursor: pointer;
	}
</style>