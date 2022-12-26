var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");

// body.style.background ="yellow"; to change the style of the body.

function gradientChange(){
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";   ///kya h ye aur upar wala bhi 
}

color1.addEventListener("input", gradientChange);

color2.addEventListener("input", gradientChange);