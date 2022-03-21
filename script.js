const raidersList = document.getElementById(`raiders`);
const consoleBox = document.querySelector(`.console`);
const sacrificeButton = document.getElementById(`sacrifice`);

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

let data = ["Ram", "Shyam", "Sita", "Gita"];

let list = document.getElementById("myList");

raiders.forEach(item => {
	let li = document.createElement("li");
	li.innerText = item;
	list.appendChild(li);
});

/*
for (let i = 0; i < raiders.length; i++) {
	let choice = Math.floor(Math.random() * raiders.length);
	consoleBox.textContent = `You sacrifice ${raiders[choice]} to Zodiark`;
	raiders.splice(choice, 1);
}
*/
function sacrifice() {
	let choice = Math.floor(Math.random() * raiders.length);
	consoleBox.textContent = `You sacrifice ${raiders[choice]} to Zodiark`;
	// raiders.splice(choice, 1);
}

sacrificeButton.addEventListener(`click`, sacrifice);
