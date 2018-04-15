Vue.filter("currency", function(v) {
	return "￥" + (v/1).toFixed(2);
})
//Vue.filter("setstr", function(v) {
//	return v[0].toUpperCase() + v.slice(1);
//})
import Vue from 'vue'
Vue.filter("formattime", function(v) {
	let temp = new Date(v);
	return temp.getFullYear() +
		"-" + format(temp.getMonth() + 1) +
		"-" + format(temp.getDate()) +
		" " + format(temp.getHours()) +
		":" + format(temp.getMinutes()) +
		":" + format(temp.getSeconds());
});

function format(num) {
	if(num < 10) {
		return "0" + num;
	}
	return num
}