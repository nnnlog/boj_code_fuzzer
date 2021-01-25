const {mt_rand, shuffle} = require("./utils");
module.exports = () => {
	let n = mt_rand(1, 2000000);
	let x0 = mt_rand(0, 1000000006), a = mt_rand(0, 1000000006), b = mt_rand(0, 1000000006);
	let q = Math.min(n, mt_rand(1, 1000));
	let l = [];
	for (let i = 0; i < n; i++) l.push(i);
	l = shuffle(l);
	l = l.slice(0, q);
	return `${n} ${x0} ${a} ${b}\n${q}\n${l.join(" ")}`;
};
