const {exec, execSync} = require("child_process");
const fs = require("fs");
const gen = require("./creater");

execSync("g++-11 ./code/ac.cpp -o ./code/ac -O2 -Wall -lm -static -std=gnu++20 -DONLINE_JUDGE -DBOJ");
execSync("g++-11 ./code/victim.cpp -o ./code/victim -O2 -Wall -lm -static -std=gnu++20 -DONLINE_JUDGE -DBOJ");

while (1) {
	let input = gen();
	fs.writeFileSync("./code/input", input);
	//console.log("input ", input);
	console.log("start");
	let ac = execSync("./code/ac < ./code/input", {maxBuffer: 10000000000}).toString('utf8');
	console.log("ac ok");
	let vic = execSync("./code/victim < ./code/input", {maxBuffer: 10000000000}).toString('utf8');
	if (ac.trim() === "" || vic.trim() === "") continue;
	if (ac.trim() !== vic.trim()) {
		console.log("WA ", ac, vic);
		break;
	}
	console.log("vic ok");
}
