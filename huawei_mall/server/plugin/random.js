function getRandomSums(min, max) {
	return parseInt(Math.random() * (max - min) + min);
}
exports.getRandomSum = function() {
	return getRandomSums(100000, 999999);
}