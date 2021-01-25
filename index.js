const {exec, execSync} = require("child_process");
const fs = require("fs");
const gen = require("./creater");

execSync("g++ ./code/ac.cpp -o ./code/ac");
execSync("g++ ./code/victim.cpp -o ./code/victim");

while (1) {
	let input = gen();
	fs.writeFileSync("./code/input", input);
	//console.log("input ", input);
	console.log("start");
	let ac = execSync("./code/ac < ./code/input").toString('utf8');
	console.log("ac ok");
	let vic = execSync("./code/victim < ./code/input").toString('utf8');
	if (ac.trim() === "" || vic.trim() === "") continue;
	if (ac.trim() !== vic.trim()) {
		console.log("WA ", ac, vic);
		break;
	}
	console.log("vic ok");
}
