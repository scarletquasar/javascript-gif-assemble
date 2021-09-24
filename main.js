var images = [
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image(),
	new Image()
];

images.forEach((x, i) => {
	x.src = "load" + i + ".gif";
});


var index = 0;
async function Animate() {
	document.querySelector("#loader").src = images[index].src;
	if (index < 10) {
		index++;
	}
	else {
		index = 0;
	}
	await new Promise(resolve => setTimeout(resolve, 50));
	Animate();
}