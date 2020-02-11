// 1. Write code so that the colour inputs match the 
// background generated on the first page load. 

// 2. Display the initial CSS linear gradient property 
// on page load.

// 3. BONUS: Add a random button which generates two 
// random numbers for the colour inputs.


var css = document.querySelector("h3");
var input1 = document.getElementById("color1");
var input2 = document.getElementById("color2");
var body = document.getElementById("gradient");
var boton = document.querySelector('button');

css.textContent = "linear-gradient(to right, " 
		+ input1.value 
		+ " , " 
		+ input2.value 
		+ ")";


function chooseColor() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ input1.value 
		+ " , " 
		+ input2.value 
		+ ")";
		console.log(body.style.background);
		css.textContent = body.style.background + ";";
}

function rndInteger(min, max) {
	return Math.floor((Math.random() * (max - min + 1)) + min);
}

function rndColor() {
	return "rgb(" 
	+ rndInteger(0, 255) 
	+ "," 
	+ rndInteger(0, 255) 
	+ ","
	+ rndInteger(0, 255) 
	+ ")"
}

function chooseColorRnd() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ rndColor()
		+ " , " 
		+ rndColor()
		+ ")";
		//console.log(body.style.background);
		css.textContent = body.style.background + ";";
}

input1.addEventListener("input", chooseColor);
input2.addEventListener("input", chooseColor);
boton.addEventListener("click", chooseColorRnd);




