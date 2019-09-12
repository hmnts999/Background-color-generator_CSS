let color1 = document.getElementById("grad1").value;
let color2 = document.getElementById("grad2").value;

function ammendcol(color1, color2) {
	const z = document.getElementById("grad");
	z.style.background =
		"linear-gradient(to right, " + color1 + "," + color2 + ")";
}

function changeColor(e) {
	if (e.name === "color1") {
		color1 = e.value;
		ammendcol(color1, color2);
	} else {
		color2 = e.value;
		ammendcol(color1, color2);
	}
}
