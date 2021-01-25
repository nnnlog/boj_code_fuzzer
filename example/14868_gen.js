const {mt_rand, shuffle} = require("./utils");
module.exports = () => {
	let n = mt_rand(2, 2000), k = mt_rand(1, 100000);
	let obj = [];
	for (let i = 1; i <= n; i++)
		for (let j = 1; j <= n; j++)
			obj.push([i, j]);
	obj = shuffle(obj);
	obj = obj.slice(0, k);
	return `${n} ${k}\n${obj.map(a => a.join(" ")).join("\n")}`;
};
