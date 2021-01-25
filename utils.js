module.exports = {
	mt_rand(min, max) {
		const argc = arguments.length
		if (argc === 0) {
			min = 0
			max = 2147483647
		} else if (argc === 1) {
			throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given')
		} else {
			min = parseInt(min, 10)
			max = parseInt(max, 10)
		}
		return Math.floor(Math.random() * (max - min + 1)) + min
	},
	shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;
		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		return array;
	}
};
