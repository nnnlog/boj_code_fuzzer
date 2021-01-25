const {mt_rand, shuffle} = require("./utils");
module.exports = () => {
	let n = mt_rand(1, 200000);
	let limit = 10 ** 9;
	let ret = `${n}\n`;
	for (let i = 0; i < n; i++) ret += `${mt_rand(0, limit)} `;
	ret += "\n";
	for (let i = 1; i < n; i++) ret += `${mt_rand(1, limit)} `;

	return ret;


	let a = mt_rand(1, 100000), b = mt_rand(1, 100000), c = mt_rand(1, 100000);
	if (b > a) [a, b] = [b, a];
	return `${a} ${b} ${c}`;
};
