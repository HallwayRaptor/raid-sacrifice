let raiders = [
	`Rob`,
	`Kevin`,
	`Ashe`,
	`Blue`,
	`Lewis`,
	`Kira`,
	`Mike`,
	`Scarlett`,
];
for (let i = 0; i < raiders.length; i++) {
	let choice = Math.floor(Math.random() * raiders.length);
	console.log(`You sacrifice ${raiders[choice]} to Zodiark`);
	raiders.splice(choice, 1);
}
